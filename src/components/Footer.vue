<template>
  
            <!--Start footer area -->
            <footer class="footer-area">
                <div class="footer-area-bg" style="background-image: url(/src/assets/images/resources/ssds.png);">
                </div>
                <!--Start Footer-->
                <div class="footer">
                    <div class="container">
                        <div class="row text-right-rtl">

                            <!--Start single footer widget-->
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="single-footer-widget marbtm50">
                                    <div class="title">
                                        <h3>PT. Alrasheed</h3>
                                    </div>
                                    <div class="our-company-info">
                                        <div class="text-box">
                                            <p>solusi pengelolaan limbah profesional, aman, dan ramah lingkungan dengan pengalaman lebih dari 20 tahun.</p>
                                        </div>
                                        <div class="footer-social-link">
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
                                </div>
                            </div>
                            <!--End single footer widget-->

                            <!--Start single footer widget-->
                            <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                <div class="single-footer-widget marbtm50">
                                    <div class="title">
                                        <h3>Links</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About Us</a></li>
                                            <li><a href="layanan">Layanan</a></li>
                                            <li><a href="/blog">Blog</a></li>
                                            <li><a href="/kontak">Kontak</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--End single footer widget-->

                            <!--Start single footer widget-->
                            <div class="col-xl-2 col-lg-6 col-md-6 col-sm-12">
                                <div class="single-footer-widget margin-left40">
                                    <div class="title">
                                        <h3>Services</h3>
                                    </div>
                                    <div class="footer-widget-links">
                                        <ul>
                                            <li><a href="/layanan">Pengelolaan Limbah B3 dan Non-B3</a></li>
                                            <li><a href="/layanan">Industrial & Medical Recycling</a></li>
                                            <li><a href="/layanan">Pengambilan Limbah</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--End single footer widget-->

                            <!--Start single footer widget-->
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div class="single-footer-widget single-footer-widget--contact-info-box pdtop50">
                                    <div class="title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div class="footer-widget-contact-info">
                                        <ul>
                                            <li>
                                                <div class="inner">
                                                    <div class="icon phone">
                                                        <span class="icon-telephone"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p>
                                                            <a href="tel:123456789">+1-(246) 333-0089</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="inner">
                                                    <div class="icon">
                                                        <span class="icon-email-1"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p>
                                                            <a href="mailto:yourmail@email.com">needhelp@company.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="inner">
                                                    <div class="icon mapmarker">
                                                        <span class="icon-pin-1"></span>
                                                    </div>
                                                    <div class="text">
                                                        <p>88 broklyn golden street line<br> New York, USA</p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!--End single footer widget-->

                        </div>
                    </div>
                </div>
                <!--End Footer-->
                <div class="footer-bottom">
                    <div class="container">
                        <div class="bottom-inner">
                            <div class="copyright">
                                <p>Copyright &copy; 2021-{{ currYear }} <a href="/">PT. Alrasheed</a> All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <!--End footer area-->


        <button class="scroll-top scroll-to-target" data-target="html">
            <span class="flaticon-up-arrow"></span>
        </button>

        <button class="scroll-top scroll-to-target" data-target="html" style="bottom: 100px; background-color: #25D366; color: white;">
            <span class="icon-telephone"></span>
        </button>
</template>

<script>
export default {
    data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
}
</script>

<style>

</style>