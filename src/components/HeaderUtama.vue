<template>
    <div>
        <header class="main-header header-style-one">
            <!--Start Header Top-->
            <div class="header-top">
                <div class="auto-container">
                    <div class="outer-box">
                        <div class="header-top__left">
                            <div class="header-contact-info-style1">
                                <ul>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-pin"></span>
                                        </div>
                                        <div class="text">
                                            <p>Manduro MG, Kec. Ngoro, Kabupaten Mojokerto</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-email"></span>
                                        </div>
                                        <div class="text">
                                            <p><a href="mailto:yourmail@email.com">contact@ptalrasheed.com</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon">
                                            <span class="icon-time"></span>
                                        </div>
                                        <div class="text">
                                            <p>Mon - Sat 9:00 am to 6:00 pm</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div class="header-top__right">
                            <div class="header-button-style1">
                                <a class="btn-one" href="contact.html">
                                    <span class="txt">
                                        Jadwalkan Pengambilan<i class="icon-refresh arrow"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--End Header Top-->

            <!--Start Header-->
            <div class="header">
                <div class="auto-container">
                    <div class="outer-box">

                        <!--Start Header Left-->
                        <div class="header-left">
                            <div class="main-logo-box">
                                <a href="/">
                                    <!-- <img src="../assets/images/resources/logo.png" alt="Awesome Logo" title=""> -->
                                    <h3>PT. Alrasheed</h3>
                                </a>
                            </div>
                            <div class="header-social-link">
                                <ul class="clearfix">
                                    <li>
                                        <a href="#"><i class="icon-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icon-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="icon-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!--End Header Left-->

                        <!--Start Header Middle-->
                        <div class="header-middle">
                            <div class="nav-outer style1 clearfix">
                                <!--Mobile Navigation Toggler-->
                                <div class="mobile-nav-toggler">
                                    <div class="inner">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </div>
                                </div>
                                <!-- Main Menu -->
                                <nav class="main-menu style1 navbar-expand-md navbar-light">
                                    <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <ul class="navigation clearfix">
                                            <li :class="{ 'current': currentRoute === '/' }">
                                                <a href="/" exact><span>Home</span></a>
                                            </li>
                                            <li :class="{ 'current': currentRoute === '/about' }">
                                                <a href="/about" exact><span>About Us</span></a>
                                            </li>
                                            <li :class="{ 'current': currentRoute === '/layanan' }">
                                                <a href="/layanan" exact><span>Layanan</span></a>
                                            </li>
                                            <li
                                                :class="{ 'current': currentRoute === '/blog' || currentRoute.includes('/blog/:slug') }">
                                                <a href="/blog" exact><span>Blog</span></a>
                                            </li>
                                            <li :class="{ 'current': currentRoute === '/kontak' }">
                                                <a href="/kontak" exact><span>Kontak</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <!-- Main Menu End-->
                            </div>
                        </div>
                        <!--End Header Middle-->

                        <!--Start Header Right-->
                        <div class="header-right">
                            <div class="phone-number-box1">
                                <div class="icon">
                                    <span class="icon-phone-ringing"></span>
                                </div>
                                <div class="phone">
                                    <p>punya pertanyaan?</p>
                                    <a href="tel:123456789">+082727383992</a>
                                </div>
                            </div>

                            <div class="serach-button-style1">
                                <button type="button" class="search-toggler">
                                    <i class="icon-magnifying-glass"></i>
                                </button>
                            </div>

                        </div>
                        <!--End Header Right-->

                    </div>
                </div>
            </div>
            <!--End header-->

            <!--Sticky Header-->
            <div class="sticky-header">
                <div class="container">
                    <div class="clearfix">
                        <!--Logo-->
                        <div class="logo float-left">
                            <a href="/" class="img-responsive">
                                <!-- <img src="../assets/images/resources/sticky-logo.png" alt="" title=""> -->
                                <h3>PT. Alrasheed</h3>
                            </a>
                        </div>
                        <!--Right Col-->
                        <div class="right-col float-right">
                            <!-- Main Menu -->
                            <nav class="main-menu clearfix">
                                <!--Keep This Empty / Menu will come through Javascript-->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <!--End Sticky Header-->

            <!-- Mobile Menu  -->
            <div class="mobile-menu">
                <div class="menu-backdrop"></div>
                <div class="close-btn"><span class="icon fa fa-times-circle"></span></div>
                <nav class="menu-box">
                    <div class="nav-logo"><a href="/"><img src="/src/assets/images/resources/mobilemenu-logo.png" alt=""
                                title=""></a></div>
                    <div class="menu-outer">
                        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                    </div>
                    <!--Social Links-->
                    <div class="social-links">
                        <ul class="clearfix">
                            <li><a href="#"><span class="fab fa fa-facebook-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-twitter-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-pinterest-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-google-plus-square"></span></a></li>
                            <li><a href="#"><span class="fab fa fa-youtube-square"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- End Mobile Menu -->
        </header>

        <!-- search-popup -->
        <div id="search-popup" class="search-popup">
            <div class="close-search"><i class="icon-close"></i></div>
            <div class="popup-inner">
                <div class="overlay-layer"></div>
                <div class="search-form">
                    <form @submit.prevent="search" method="post" action="/hasil-pencarian">
                        <div class="form-group">
                            <fieldset>
                                <input type="search" v-model="searchTerm" class="form-control" name="searchTerm"
                                    placeholder="Cari dalam Blog.." required>
                                <input type="submit" @click="search" value="Search Now!" class="theme-btn style-four">
                            </fieldset>
                        </div>
                    </form>
                    <h3>Recent Search Keywords</h3>
                    <ul class="recent-searches">
                        <li v-for="(keyword, index) in getFilteredKeywords" :key="index">
                            <a style="cursor:pointer" @click="fillSearchInput(keyword)">{{ keyword }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- search-popup end -->
    </div>
</template>

<script>
import customScript from '../assets/js/custom.js';

export default {
    data() {
        return {
            currentRoute: '', // Menyimpan rute saat ini
            searchTerm: ''
        };
    },
    computed: {
        recentKeywords() {
            const recentKeywords = JSON.parse(localStorage.getItem('recentKeywords'));
            return recentKeywords ? recentKeywords : [];
        },
        getFilteredKeywords() {
            // Mengambil array yang diakhiri dengan indeks yang habis dibagi 2
            return this.recentKeywords.filter((_, index) => (index + 1) % 2 === 0);
        }
    },
    methods: {
        navigate(route) {
            this.currentRoute = route; // Memperbarui nilai rute saat melakukan navigasi
            // Lakukan logika tambahan yang Anda perlukan saat berpindah rute
        },
        search() {
            this.$router.push(`/hasil-pencarian/${this.searchTerm}`);
            this.addRecentKeyword(this.searchTerm);
            window.location.reload();
        },
        addRecentKeyword(keyword) {
            let recentKeywords = JSON.parse(localStorage.getItem('recentKeywords'));
            if (!recentKeywords) {
                recentKeywords = [];
            }

            // Batasi jumlah kata kunci terbaru hingga 5 elemen
            if (recentKeywords.length >= 10) {
                recentKeywords.pop();
            }

            // Tambahkan kata kunci ke daftar recent keywords
            recentKeywords.unshift(keyword);

            // Simpan daftar recent keywords ke localStorage
            localStorage.setItem('recentKeywords', JSON.stringify(recentKeywords));
        },
        fillSearchInput(keyword) {
            this.searchTerm = keyword;
        },
    },
    mounted() {
        customScript();
        this.currentRoute = window.location.pathname;
        // location.reload();
    },
}
</script>

<style></style>