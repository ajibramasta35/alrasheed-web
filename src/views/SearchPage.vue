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
                        <div class="title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                            <h2>Hasil Pencarian untuk : {{ searchTerm }}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End breadcrumb area-->


    <!--Start Blog Page Three-->
    <section class="blog-page-three">
        <div class="container">

            <div class="row">
                <div class="col-xl-12">
                    <div v-if="searchResults.length > 0">
                        <div v-for="p in searchResults" :key="p.id" class="blog-content-box">
                            <!--Start Single Blog Style3-->
                            <div class="single-blog-style1 single-blog-style1--instyle3">
                                <div class="single-blog-style1__inner">
                                    <div class="text-holder">
                                        <div class="text-inner">
                                            <h3 class="blog-title">
                                                <a :href="'/blog/' + p.slug">{{ p.title.rendered }}</a>
                                            </h3>
                                        </div>
                                        <div class="text">
                                            <p v-html="p.excerpt.rendered"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--End Single Blog Style3-->

                        </div>
                    </div>
                    <section class="error-page-area" style="margin-top: -6rem;" v-else>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="error-content text-center">
                                        <div class="title wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1500ms">
                                            <h2>Maaf, yang anda cari tidak ada..</h2>
                                        </div>
                                        <div class="text">
                                            <p>Mungkin halaman yang anda cari masih belum ada<br> atau tidak pernah dibuat.
                                            </p>
                                        </div>

                                        <div class="btns-box wow slideInUp" data-wow-delay="200ms"
                                            data-wow-duration="1500ms">
                                            <a class="btn-one" href="/">
                                                <span class="txt">Kembali ke Home<i class="icon-refresh arrow"></i></span>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>






            </div>

        </div>
    </section>
    <!--End Blog Page Three-->
</template>

<script>
import HeaderUtama from '../components/HeaderUtama.vue';

export default {
    components: {
        HeaderUtama,
    },
    data() {
        return {
            searchTerm: '',
            searchResults: [],
            _embedded: true,
            refreshDone: false
        };
    },
    created() {
        this.searchTerm = this.$route.params.searchTerm;
        this.fetchSearchResults();
        // this.refreshPage;

    },
    methods: {
        fetchSearchResults() {
            const apiUrl = `https://dapur.ptalrasheed.com/wp-json/wp/v2/posts?search=${this.searchTerm}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    this.searchResults = data;
                    // console.log(data)
                })
                .catch(error => {
                    console.error('Error fetching search results:', error);
                });
        },
        // refreshPage() {
        //     location.reload();
        // },
    },
    mounted() {
        if (localStorage.getItem('reloaded')) {
            // The page was just reloaded. Clear the value from local storage
            // so that it will reload the next time this page is visited.
            localStorage.removeItem('reloaded');
        } else {
            // Set a flag so that we know not to reload the page twice.
            localStorage.setItem('reloaded', '1');
            location.reload();
        }
    },
}
</script>

<style></style>