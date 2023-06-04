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
                                <li><a href="/layanan">layanan</a></li>
                            </ul>
                        </div>

                        <div class="title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                            <h2>Layanan Berkualitas kami</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--End breadcrumb area-->

    

    <!--Start Service Details area -->
    <section class="service-details-area">
        <div class="container">
            <div class="row">
                <!--Start Service Details Sidebar -->
                <div class="col-xl-4 col-lg-5 order-box-2">
                    <div class="service-details__sidebar">
                        <div class="view-all-service">
                            <ul class="service-pages">
                                <li v-for="tab in tabs" :key="tab.id" :class="{ 'active': activeTab === tab.id }"
                                    @click="changeTab(tab.id)">
                                    <a style="cursor: pointer;">
                                        {{ tab.title }} <span class="icon-right-arrow"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="service-details-contact-info text-center">
                            <div class="top-box">
                                <div class="icon">
                                    <span class="icon-phone-ringing"></span>
                                </div>
                                <h2>Layanan<br> Seluruh Wilayah<br>di Indonesia</h2>
                            </div>

                            <div class="bottom-box">
                                <p>Butuh bantuan? <br>atau mau konsultasi?</p>
                                <h2><a href="#">+ 1- (246) 333-0089</a></h2>
                            </div>
                        </div>

                    </div>
                </div>
                <!--End Service Details Sidebar -->


                <!--Start Service Details Content -->
                <template v-if="activeTab === 'tab1'">
                    <div class="col-xl-8 col-lg-7 order-box-1">
                        <div class="service-details__content">
                            <div class="img-box1">
                                <img src="/src/assets/images/services/tw1.png" alt="" />
                            </div>

                            <div class="text-box1">
                                <h2>Pengelolaan Limbah B3 dan Non-B3</h2>
                                <p>Pengelolaan limbah B3 adalah salah satu spesialisasi kami. Kami memahami kompleksitas dan
                                    risiko yang terkait dengan limbah berbahaya dan beracun. Tim ahli kami akan membantu
                                    Anda mengidentifikasi, mengumpulkan, dan mengelola limbah B3 dengan profesionalisme dan
                                    kehati-hatian yang tinggi. Kami menjalankan proses pengolahan dan pembuangan yang sesuai
                                    dengan peraturan dan standar yang berlaku, serta mengutamakan keamanan lingkungan dan
                                    kesehatan manusia
                                </p>
                            </div>

                            <div class="text-box2">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="text-box2-single">
                                            <h4>
                                                <span class="icon-check-mark-button"></span>Aman dan Profesional
                                            </h4>
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="text-box2-single">
                                            <h4><span class="icon-check-mark-button"></span> Berstandarisasi Industri
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-box3">
                                <p>Selain itu, kami juga menyediakan layanan pengelolaan limbah Non-B3 dengan kualitas
                                    terbaik. Limbah Non-B3 dari berbagai sektor industri dapat kami tangani dengan efisiensi
                                    dan keandalan. Dalam proses pengelolaan limbah Non-B3, kami memastikan adanya pemisahan,
                                    pengurangan, dan daur ulang yang tepat, sesuai dengan prinsip-prinsip keberlanjutan.</p>
                            </div>

                        </div>
                    </div>
                </template>
                <!--End Service Details Content -->
                <!--Start Service Details Content -->
                <template v-if="activeTab === 'tab2'">
                    <div class="col-xl-8 col-lg-7 order-box-1">
                        <div class="service-details__content">
                            <div class="img-box1">
                                <img src="/src/assets/images/services/tw2.png" alt="" />
                            </div>

                            <div class="text-box1">
                                <h2>Industrial & Medical Recycling</h2>
                                <p>PT Alrasheed menyediakan layanan pengolahan limbah industri dan medis yang efisien dan
                                    ramah lingkungan. Kami memiliki fasilitas pengolahan khusus yang dilengkapi dengan
                                    teknologi terbaru untuk memproses limbah industri seperti limbah elektronik, limbah
                                    kimia, limbah logam, dan limbah lainnya. Selain itu, kami juga memiliki sistem
                                    pengolahan limbah medis yang memenuhi standar keamanan dan kebersihan. Melalui proses
                                    recycling yang inovatif, kami berusaha untuk mengurangi dampak lingkungan dan
                                    meminimalkan penggunaan sumber daya.
                                </p>
                            </div>

                            <div class="text-box4">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="img-box">
                                            <img src="/src/assets/images/services/enry.gif" alt="" />
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="content-box">
                                            <h2>Benefitnya Apa?</h2>

                                            <ul>
                                                <li>
                                                    <h4><span class="icon-arrow-right"></span> Mengurangi Dampak Lingkungan
                                                    </h4>
                                                </li>

                                                <li>
                                                    <h4><span class="icon-arrow-right"></span> Kepatuhan Regulasi</h4>
                                                </li>

                                                <li>
                                                    <h4><span class="icon-arrow-right"></span> Efisiensi Operasional</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </template>
                <!--End Service Details Content -->
                <!--Start Service Details Content -->
                <template v-if="activeTab === 'tab3'">
                    <div class="col-xl-8 col-lg-7 order-box-1">
                        <div class="service-details__content">
                            <div class="img-box1">
                                <img src="/src/assets/images/services/tw3.png" />
                            </div>

                            <div class="text-box1">
                                <h2>Pengambilan Limbah</h2>
                                <p>Layanan Pengambilan Limbah PT Alrasheed adalah solusi yang tepat untuk mengelola limbah
                                    perusahaan Anda dengan mudah dan efisien. Kami menyediakan layanan pengambilan limbah
                                    yang responsif dan tepat waktu, sehingga Anda dapat fokus pada kegiatan inti bisnis
                                    Anda.
                                </p>
                            </div>

                            <div class="text-box3 mt-4">
                                <p>Kami memiliki jaringan yang luas di seluruh Indonesia, termasuk di kota-kota besar maupun
                                    daerah terpencil. Dengan demikian, perusahaan Anda dapat mempercayakan pengelolaan
                                    limbah kepada kami, tanpa memandang lokasi geografisnya.</p>
                            </div>

                            <div class="text-box4">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="content-box">
                                            <h2>Benefitnya Apa?</h2>
                                            <p>Beberapa benefit dari layanan pengambilan limbah PT Alrasheed</p>
                                            <ul>
                                                <li>
                                                    <h4><span class="icon-arrow-right"></span>Pengambilan di Seluruh Indonesia</h4>
                                                </li>

                                                <li>
                                                    <h4><span class="icon-arrow-right"></span>Armada yang Modern dan memdadai</h4>
                                                </li>

                                                <li>
                                                    <h4><span class="icon-arrow-right"></span>Pelaporan dan Dokumentasi yang Akurat</h4>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="img-box">
                                            <img src="/src/assets/images/services/tw4.gif" alt="" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <!--End Service Details Content -->

                <div class="faq-style1__content">
                    <ul class="accordion-box">
                        <li class="accordion block active-block">
                            <div class="acc-btn active">
                                <div class="icon-outer">
                                    <i class="icon-arrow-down"></i>
                                </div>
                                <h3>Konsultasi Ahli</h3>
                            </div>
                            <div class="acc-content current">
                                <p>PT Alrasheed menawarkan layanan konsultasi ahli kepada pelanggan. Tim ahli
                                    kami akan memberikan penilaian menyeluruh terhadap situasi dan kebutuhan
                                    pengelolaan limbah perusahaan Anda. Kami akan bekerja sama dengan Anda untuk
                                    mengidentifikasi solusi terbaik yang sesuai dengan regulasi lingkungan yang
                                    berlaku. </p>
                            </div>
                        </li>
                        <li class="accordion block">
                            <div class="acc-btn">
                                <div class="icon-outer">
                                    <i class="icon-arrow-down"></i>
                                </div>
                                <h3>Solusi Berkelanjutan</h3>
                            </div>
                            <div class="acc-content">
                                <p>Kami bekerja sama dengan perusahaan Anda untuk mengembangkan strategi
                                    pengelolaan limbah yang efisien dan ramah lingkungan. Tim ahli kami akan
                                    melakukan audit lengkap terhadap proses pengelolaan limbah Anda,
                                    mengidentifikasi area-area di mana efisiensi dan keberlanjutan dapat
                                    ditingkatkan.</p>
                            </div>
                        </li>
                        <li class="accordion block">
                            <div class="acc-btn">
                                <div class="icon-outer">
                                    <i class="icon-arrow-down"></i>
                                </div>
                                <h3>Daur Ulang & Rekayasa Lingkungan</h3>
                            </div>
                            <div class="acc-content">
                                <p> Kami menyediakan solusi inovatif dan berkelanjutan untuk mengelola limbah
                                    dengan cara yang bertanggung jawab terhadap lingkungan. Kami mendorong
                                    penerapan prinsip daur ulang yang efektif, dengan memanfaatkan teknologi
                                    terkini untuk memproses limbah menjadi bahan baku yang dapat digunakan
                                    kembali. </p>
                            </div>
                        </li>
                    </ul>
                </div>

                <!--Start Working process area -->
        <section class="working-process-area pdtop120">
            <div class="container">
                <div class="sec-title text-center">
                    <div class="sub-title">
                        <h3>Simple Steps</h3>
                    </div>
                    <h2>Alur Kerja Kami</h2>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="working-process__inner">
                            <div class="horizontal-line"></div>
                            <ul class="working-process-box">

                                <!--Start Working process Single-->
                                <li class="single-working-process">
                                    <div class="icon-holder">

                                        <span class="icon-trash-truck"></span>
                                        <div class="counting-box"></div>
                                    </div>
                                    <div class="text-holder">
                                        <h3>Pengambilan Limbah</h3>
                                        <p>Dapatkan solusi yang tepat dengan layanan pengambilan limbah kami! 
                                        </p>
                                    </div>
                                </li>
                                <!--End Working process Single-->

                                <!--Start Working process Single-->
                                <li class="single-working-process">
                                    <div class="icon-holder">
                                        <span class="icon-toxic-waste"></span>
                                        <div class="counting-box top"></div>
                                    </div>
                                    <div class="text-holder">
                                        <h3>Pensortiran Limbah</h3>
                                        <p>Kami menyediakan solusi efisien dan bertanggung jawab untuk mengelola limbah Anda
                                        </p>
                                    </div>
                                </li>
                                <!--End Working process Single-->

                                <!--Start Working process Single-->
                                <li class="single-working-process">
                                    <div class="icon-holder">
                                        <span class="icon-waste"></span>
                                        <div class="counting-box"></div>
                                    </div>
                                    <div class="text-holder">
                                        <h3>Pemrosesan Limbah</h3>
                                        <p>solusi inovatif untuk mengubah limbah menjadi sumber daya yang bernilai
                                        </p>
                                    </div>
                                </li>
                                <!--End Working process Single-->

                                <!--Start Working process Single-->
                                <li class="single-working-process">
                                    <div class="icon-holder">
                                        <span class="icon-recycling"></span>
                                        <div class="counting-box top"></div>
                                    </div>
                                    <div class="text-holder">
                                        <h3>Recycling</h3>
                                        <p>Anda secara langsung telah ikut berkontribusi pada pelestarian lingkungan.
                                        </p>
                                    </div>
                                </li>
                                <!--End Working process Single-->

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!--End Working process area -->

            </div>
        </div>
    </section>

    
    <!--End Service Details area -->
</template>

<script>
import HeaderUtama from '../components/HeaderUtama.vue'

export default {
    components: {
        HeaderUtama,
    },
    data() {
        return {
            activeTab: 'tab1',
            tabs: [
                { id: 'tab1', title: 'Pengelolaan Limbah B3 dan Non-B3' },
                { id: 'tab2', title: 'Industrial & Medical Recycling' },
                { id: 'tab3', title: 'Pengambilan Limbah' }
            ]
        };
    },
    methods: {
        changeTab(tabId) {
            this.activeTab = tabId;
        }
    }
};
</script>

<style></style>