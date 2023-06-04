<template>
    <HeaderUtama />


    <!--Start Blog Page Three-->
    <section class="blog-details-page">
        <div class="container">

            <div class="row">

                <div class="col-xl-8 col-lg-12">
                    <div class="blog-details-content">


                        <div class="single-blog-style1 single-blog-style1--instyle3">
                            <div class="text-inner mb-4">
                                <h1 class="blog-title" v-html="post.title.rendered"></h1>
                            </div>
                            <div class="single-blog-style1__inner">
                                <div class="img-holder">
                                    <div class="inner">
                                        <img v-if="post._embedded['wp:featuredmedia']"
                                            :src="post._embedded['wp:featuredmedia'][0].source_url" alt="">
                                    </div>
                                    <div class="date-box" style="padding:3rem;">
                                        <h6 style="font-size: 1.2rem;">{{ getFormattedDate(post.date_gmt) }}</h6>
                                    </div>
                                </div>
                                <div class="text-holder">
                                    <ul class="meta-info">
                                        <li>
                                            <i class="fa fa-user" aria-hidden="true"></i>
                                            <a href="#">{{ post._embedded.author[0].name }}</a>
                                        </li>
                                    </ul>
                                    <div class="text">
                                        <p style="font-size: larger;" v-html="post.content.rendered"></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="tag-social-share-box">
                            <div class="tag-box mb-4">
                                <div class="title">
                                    <h3>Tags:</h3>
                                </div>
                                <ul class="tag-list">
                                    <li v-for="tag in post._embedded['wp:term'][1]" :key="tag"><a style="cursor:default">{{
                                        tag.name }}</a></li>
                                </ul>
                            </div>
                            <div class="post-social-share">
                                <div class="post-social-share-links clearfix">
                                    <ul class="clearfix">
                                        <li>
                                            <a style="color:white;" @click="shareFacebook"><i class="fa fa-facebook"
                                                    aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <!--Start Thm Sidebar Box-->
                <div class="col-xl-4 col-lg-12" style="margin-top: -2rem;">
                    <div class="thm-sidebar-box">
                        <div class="single-sidebar-box">
                            <div class="sidebar-title">
                                <h3>Artikel Lainnya</h3>
                            </div>
                            <div v-for="rp in postlainnya" :key="rp.id" class="sidebar-blog-post">
                                <ul class="blog-post">
                                    <li>
                                        <div class="inner">
                                            <div class="img-box"><a :href="'/blog/' + rp.slug">
                                                    <img v-if="rp._embedded['wp:featuredmedia']"
                                                        :src="rp._embedded['wp:featuredmedia'][0].source_url"
                                                        alt="Awesome Image">
                                                </a>
                                                <div class="overlay-content">
                                                    <a :href="'/blog/' + rp.slug"><i class="fa fa-link"
                                                            aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                            <div class="title-box mt-4">
                                                <h4><a :href="'/blog/' + rp.slug" v-html="rp.title.rendered" style="
                                          overflow: hidden;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 2;
                                            -webkit-box-orient: vertical;"></a></h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <!--End Thm Sidebar Box-->

            </div>
        </div>
    </section>
    <!--End Blog Page Three-->
</template>

<script>
import HeaderUtama from '../components/HeaderUtama.vue'
import axios from 'axios';

export default {
    components: {
        HeaderUtama,
    },
    data() {
        return {
            post: [],
            postlainnya: [],
            tags: [],
            isLoading: false,
            page: null,
        };
    },

    created() {
        const slug = this.$route.params.slug;
        this.getPostBySlug(slug)
            .then((post) => {
                this.post = post;
                // console.log(post)
            })
            .catch((error) => {
                console.error(error);
            });
    },
    methods: {
        async getPostBySlug(slug) {
            try {
                const response = await axios.get(`https://dapur.ptalrasheed.com/wp-json/wp/v2/posts?_embed`, {
                    params: {
                        slug: slug
                    }
                });

                // Mengembalikan data postingan
                return response.data[0];
            } catch (error) {
                console.error(error);
            }
        },
        // async getPosts() {
        //     this.isLoading = true;
        //     fetch("https://dapur.ptalrasheed.com/wp-json/wp/v2/posts?_embed")
        //         .then((response) => response.json())
        //         .then((data) => {
        //             // console.log('Data sudah Masuk');
        //             this.post = data;
        //             this.tags = this.post;
        //             this.page = this.$route.params.slug;
        //             this.isLoading = false;
        //             // console.log(data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // },
        async getPostLainnya() {
            this.isLoading = true;
            fetch("https://dapur.ptalrasheed.com/wp-json/wp/v2/posts?_embed")
                .then((response) => response.json())
                .then((data) => {
                    // console.log('Data sudah Masuk');
                    this.postlainnya = data;
                    // console.log(data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getFormattedDate(dateGMT) {
            const date = new Date(dateGMT);
            const options = { day: "numeric", month: "long" };
            const formattedDate = date.toLocaleDateString("id-ID", options);
            return formattedDate;
        },
        shareFacebook() {
            const slug = this.$route.params.slug;
            const url = `https://dapur.ptalrasheed.com/${slug}`; // Ganti dengan URL sesuai dengan struktur rute Anda
            const title = document.title;
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
            window.open(shareUrl, '_blank');
        }
    },
    mounted() {
        this.getPostLainnya();
    },

}
</script>

<style></style>