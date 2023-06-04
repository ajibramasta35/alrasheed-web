<template>
    <HeaderUtama />
    <!--Start breadcrumb area paroller-->
    <section class="breadcrumb-area">
        <div class="breadcrumb-area-bg" style="background-image: url(/src/assets/images/parallax-background/assw1.png);">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="inner-content">
                        <div class="breadcrumb-menu" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a>Blog</a></li>
                            </ul>
                        </div>

                        <div class="title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                            <h2>Artikel Pilihan</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End breadcrumb area-->


    <!--Start Blog Page Two-->

    <section class="blog-page-two">
        <div class="container">
            <div class="row">
                <!--Start Single Blog Style2-->
                <div v-for="p in posts" :key="p.id" :id="'page-' + p.id" class="col-xl-4">
                    <div class="single-blog-style1 single-blog-style1--instyle2">
                        <div class="single-blog-style1__inner">
                            <div class="img-holder">
                                <div class="inner">
                                    <a :href="'/blog/' + p.slug"><img style="object-fit:cover; aspect-ratio:3/2;"
                                            v-if="p._embedded['wp:featuredmedia']"
                                            :src="p._embedded['wp:featuredmedia'][0].source_url" alt=""></a>
                                </div>
                                <div class="date-box" style="padding:3rem;">
                                    <h6 style="font-size: 1.2rem;">{{ getFormattedDate(p.date_gmt) }}</h6>
                                </div>
                            </div>
                            <div class="text-holder">
                                <ul class="meta-info">
                                    <li>
                                        <i class="fa fa-user" aria-hidden="true"></i> <span style="cursor: default;">{{
                                            p._embedded.author[0].name }}</span>
                                    </li>
                                </ul>
                                <div class="text-inner" style="
                                          overflow: hidden;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3;
                                            -webkit-box-orient: vertical;">
                                    <h3 class="blog-title" style="cursor:pointer">
                                        <a v-html="p.title.rendered" :href="'/blog/' + p.slug"></a>
                                    </h3>
                                </div>
                                <div class="text" style="
                                          overflow: hidden;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 3;
                                            -webkit-box-orient: vertical;">
                                    <p v-html="p.excerpt.rendered"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--End Single Blog Style2-->

            </div>

            <div class="row">
                <div class="col-xl-12">
                    <ul v-if="totalPages > 1" class="styled-pagination text-center clearfix pagination">
                        <li class="arrow prev">
                            <a @click="prevPage" :disabled="currentPage === 1">
                                <span class="icon-left-arrow"></span>
                            </a>
                        </li>
                        <li v-for="page in visiblePages" :key="page" :class="{ active: currentPage === page }">
                            <a style="cursor:pointer" @click="goToPage(page)" :href="'#page-' + page">{{ page }}</a>
                        </li>
                        <li v-if="showDotsAfter" class="dots">
                            <span>...</span>
                        </li>
                        <li class="arrow next">
                            <a @click="nextPage" :disabled="currentPage === totalPages">
                                <span class="icon-right-arrow"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    <!--End Blog Page Two-->
</template>

<script>
import HeaderUtama from '../components/HeaderUtama.vue';
import axios from 'axios';

export default {
    components: {
        HeaderUtama,
    },
    data() {
        return {
            postsUrl: 'https://dapur.ptalrasheed.com/wp-json/wp/v2/posts?_embed',
            posts: [],
            currentPage: 1,
            totalPages: 0,
            postsPerPage: 9, // Jumlah posting per halaman
        };
    },
    computed: {
        visiblePages() {
            let startPage = 1;
            let endPage = this.totalPages;
            const maxVisiblePages = 5; // Jumlah maksimum halaman yang ditampilkan

            // Membatasi jumlah halaman yang ditampilkan
            if (this.totalPages > maxVisiblePages) {
                const halfMaxVisiblePages = Math.floor(maxVisiblePages / 2);
                const isStartPageNearEnd = this.currentPage <= halfMaxVisiblePages + 1;
                const isEndPageNearStart = this.currentPage >= this.totalPages - halfMaxVisiblePages;

                if (isStartPageNearEnd) {
                    endPage = maxVisiblePages;
                } else if (isEndPageNearStart) {
                    startPage = this.totalPages - maxVisiblePages + 1;
                } else {
                    startPage = this.currentPage - halfMaxVisiblePages;
                    endPage = this.currentPage + halfMaxVisiblePages;
                }
            }

            const visiblePages = [];
            for (let page = startPage; page <= endPage; page++) {
                visiblePages.push(page);
            }

            return visiblePages;
        },
        showDotsAfter() {
            return this.totalPages > 5 && this.currentPage < this.totalPages - 2;
        }
    },
    methods: {
        async getPosts() {
            try {
                const response = await axios.get(this.postsUrl, {
                    params: {
                        _embed: true,
                        per_page: this.postsPerPage,
                        page: this.currentPage,
                    },
                });

                this.posts = response.data; // Set data posting

                // Dapatkan total halaman dari header respons
                const totalPagesHeader = response.headers['x-wp-totalpages'];
                this.totalPages = parseInt(totalPagesHeader); // Set total halaman

            } catch (error) {
                console.error(error);
            }
        },
        goToPage(page) {
            this.currentPage = page; // Set halaman saat ini
            this.getPosts(); // Ambil data posting untuk halaman yang dipilih
            window.scrollTo({
                top: 500,
                behavior: 'smooth'
            });
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--; // Pindah ke halaman sebelumnya
                this.getPosts(); // Ambil data posting untuk halaman sebelumnya
            }

        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++; // Pindah ke halaman berikutnya
                this.getPosts(); // Ambil data posting untuk halaman berikutnya
            }
            window.scrollTo({
                top: 500,
                behavior: 'smooth'
            });
        },
        setCurrentPage(page) {
            this.currentPage = page;
            this.paginate();
        },
        reloadPage() {
            window.location.reload();
        },
        getFormattedDate(dateGMT) {
            const date = new Date(dateGMT);
            const options = { day: "numeric", month: "long" };
            const formattedDate = date.toLocaleDateString("id-ID", options);
            return formattedDate;
        },
    },
    created() {
        this.getPosts(); // Panggil metode untuk memuat data posting
    },

}
</script>

<style></style>