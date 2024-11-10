<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <!--preloader - start-->
  <div class="str-preloader" id="preloader">
    <div class="up">
      <a class="str-scrollup text-center" id="scrollup" href="#"><i class="fas fa-angle-up"></i></a>
    </div>
  </div>
  <header class="saas_two_main_header" id="header_main">
    <div class="container">
      <div class="s_main_menu">
        <div class="row g-4 align-items-center">
          <div class="col-6 col-md-1 px-0">
            <div class="brand_logo">
              <a class="d-block" href="index.html">
                <img class="img-fluid w-100" src="../src/assets/storage/Settings/settings_152-1639569616.png"
                  alt="شركة محمد زكي لتقنية المعلومات" />
              </a>
            </div>
          </div>

          <div class="col-md d-flex justify-content-end navbar-items">
            <div class="main_menu_list" style="width: fit-content">
              <nav class="s2-main-navigation clearfix ul-li">
                <ul class="navbar-nav text-capitalize clearfix d-flex flex-row flex-nowrap text-nowrap" id="main-nav">
                  <li class="active"><a href="index.html">الرئيسية</a></li>
                  <li class=""><a href="ar/aboutus.html">عن الشركة</a></li>
                  <li class=""><a href="ar/works.html">أعمالنا</a></li>
                  <li class=""><a href="ar/services.html">الخدمات</a></li>
                  <li class=""><a href="ar/jobs.html">التوظيف</a></li>
                  <li class=""><a href="ar/customers.html">عملائنا</a></li>
                  <li class=""><a href="ar/blogs.html">المقالات</a></li>
                  <li class="">
                    <a href="ar/plans.html">الخطط والأسعار</a>
                  </li>
                  <li class="">
                    <a href="ar/technical_support.html">الدعم الفني</a>
                  </li>
                  <li class="dropdown">
                    <a class="nav-link dropdown-toggle pt-0" href="#" role="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      طلبات
                    </a>
                    <ul class="dropdown-menu my-0 d-flex flex-column">
                      <li class="dropdown-item">
                        <a href="ar/service-request.html">طلب خدمة</a>
                      </li>
                      <li class="dropdown-item">
                        <a href="ar/quote-request.html">طلب عرض أسعار</a>
                      </li>
                    </ul>
                  </li>
                  <li class="mx-0">
                    <a href="ar/contactus.html">تواصل معنا</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- //desktop menu-->

      <div class="s2-mobile_menu">
        <div class="s2-mobile_menu_button s2-open_mobile_menu">
          <i class="fas fa-bars"></i>
        </div>
        <div class="s2-mobile_menu_wrap">
          <div class="mobile_menu_overlay s2-open_mobile_menu"></div>
          <div class="s2-mobile_menu_content">
            <div class="s2-mobile_menu_close s2-open_mobile_menu">
              <i class="far fa-times-circle"></i>
            </div>
            <div class="m-brand-logo text-center">
              <RouterLink to="/"><img src="../src/assets/storage/Settings/settings_152-1639569616.png"
                  alt="شركة محمد زكي لتقنية المعلومات" /></RouterLink>
            </div>
            <nav class="s2-mobile-main-navigation clearfix ul-li">
              <ul class="navbar-nav text-capitalize clearfix" id="m-main-nav">
                <li class="active">
                  <RouterLink to="/" exact>الرئيسية</RouterLink>
                </li>
                <li>
                  <RouterLink to="/about">عن الشركة</RouterLink>
                </li>
                <li>
                  <RouterLink to="/works">أعمالنا</RouterLink>
                </li>
                <li>
                  <RouterLink to="/services">الخدمات</RouterLink>
                </li>
                <li>
                  <RouterLink to="/jobs">التوظيف</RouterLink>
                </li>
                <li>
                  <RouterLink to="/customers">عملائنا</RouterLink>
                </li>
                <li>
                  <RouterLink to="/blogs">المقالات</RouterLink>
                </li>
                <li>
                  <RouterLink to="/support">الدعم الفني</RouterLink>
                </li>
                <li>
                  <RouterLink to="/service-request">طلب خدمة</RouterLink>
                </li>
                <li>
                  <RouterLink to="/quote-request">طلب عرض أسعار</RouterLink>
                </li>
                <li>
                  <RouterLink to="/contactus">تواصل معنا</RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>

  <RouterView />

  <footer class="str-footer-area" id="str-footer">
    <div class="container">
      <div class="footer-content">
        <div class="row">
          <div class="col-lg-4">
            <div class="str-footer-widget str-headline pera-content">
              <div class="str-ft-about-widget">
                <a href="index.html" aria-label="Muhammad Zaki"><img class="footer-logo"
                    src="../src/assets/storage/Settings/settings_152-1639569616.png" alt="Our Logo" /></a>
                <p>
                  محمد زكي لتقنية المعلومات نسعى جاهدين لتقديم أفضل الخدمات
                  لعملائنا ونيل ثقتهم.
                </p>
                <div class="ft-about-btn">
                  <a href="ar/aboutus.html">عن الشركة</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="str-footer-widget str-headline pera-content">
              <div class="str-newslatter-widget">
                <h3 class="str-widget-title">النشرة الإخبارية</h3>
                <p>اشترك معنا لتحصل علي احدث الأخبار والتحديثات</p>
                <form action="#">
                  <input class="email" name="email" type="email" placeholder="البريد الالكتروني" />
                  <button class="hover-btn" type="submit" value="Submit" aria-label="submit">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
                <div class="str-social-footer">
                  <a href="#" title="facebook" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://www.linkedin.com/in/devmuhammadzaki/" title="linkedin" target="_blank"
                    rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                  <a href="#" title="twitter" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                  <a href="#" title="instagram" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="str-footer-widget str-headline pera-content">
              <div class="str-office-widget">
                <h3 class="str-widget-title">المعلومات الرسمية:</h3>
                <div class="str-office-icon-text">
                  <div class="str-office-icon float-left">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <p>شارع مسجد الفتح يجوار كوبري المرور - قفط - قنا</p>
                </div>
                <div class="str-office-icon-text">
                  <div class="str-office-icon float-left">
                    <i class="fas fa-phone"></i>
                  </div>
                  <p>012845543133</p>
                </div>
                <div class="str-open-hour">
                  <span>ساعات العمل:</span>
                  <p>من 8:30 صباحاً الي 5:30 مساءاً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="str-copywright-text text-center">
      جميع الحقوق محفوظة ©<a href="index.html">محمد زكي لتقنية المعلومات</a>
    </div>
  </footer>
</template>
