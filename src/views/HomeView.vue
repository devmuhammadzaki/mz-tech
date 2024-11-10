<script setup>
import ServiceComponent from '@/components/ServiceComponent.vue';
import { useServicesStore } from '@/stores/servicesStore';

const store = useServicesStore();

const services = store.services;

if (services.length === 0) {
  store.fetchServices();
}
</script>

<template>
  <main>
    <!--Start of banner section-->
    <section class="saas_two_banner_section relative-position" id="saas_two_banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="s2-banner_area relative-position">
              <div class="s2-banner_content saas2-headline pera-content">
                <span class="s2-tilte_tag">أهلاً</span>
                <h1>شركة محمد زكي لتقنية المعلومات</h1>
                <p>
                  محمد زكي لتقنية المعلومات نسعى جاهدين لتقديم أفضل الخدمات
                  لعملائنا ونيل ثقتهم.
                </p>
                <div class="banner_btn">
                  <RouterLink to="/customers"><i class="fas fa-cloud-download-alt"></i>عملائنا</RouterLink>
                  <RouterLink to="/services"><i class="fas fa-clipboard-list"></i>خدماتنا</RouterLink>
                </div>
              </div>
              <div class="banner_mockup">
                <img src="../assets/storage/Settings/settings_285-1639569616.png"
                  alt="شركة محمد زكي لتقنية المعلومات" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="s2-banner_shape1 position-absolute" data-parallax="{&amp;quot;y&amp;quot; : 100}" style="
          transform: translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg)
            rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
          -webkit-transform: translate3d(0px, 0.029px, 0px) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
        ">
        <img src="../assets/user/img/saas-c/banner/b-shape4.png" alt="" />
      </div>
      <div class="s2-banner_shape2 position-absolute">
        <img src="../assets/user/img/saas-c/banner/b-shape3.png" alt="" />
      </div>
      <div class="s2-banner_shape3 position-absolute">
        <img src="../assets/user/img/saas-c/banner/b-shape2.png" alt="" />
      </div>
    </section>

    <!--Start o f services  section-->
    <section class="str-feature-section" id="str-feature">
      <div class="container">
        <div class="str-section-title text-center str-title-center str-headline">
          <span class="str-title-tag">خدماتنا</span>
          <h2></h2>
        </div>
        <div class="str-feature-content owl-carousel" id="str-slide">
          <ServiceComponent v-for="service in services" :key="service.link" :title="service.title"
            :description="service.description" :imageSrc="service.imageSrc" :altText="service.altText"
            :link="'/services/' + service.id" />
        </div>
      </div>
    </section>

    <!--Start of About Us section-->
    <section class="str-about-section position-relative" id="str-about">
      <div class="str-aboutbg1 position-absolute">
        <img src="../assets/user/img/startup/shape/vs1.png" alt="" />
      </div>
      <div class="str-aboutbg2 position-absolute">
        <img src="../assets/user/img/startup/shape/vs2.png" alt="" />
      </div>
      <div class="str-aboutbg3 position-absolute">
        <img src="../assets/user/img/startup/shape/vs3.png" alt="" />
      </div>
      <div class="container">
        <div class="str-about-content">
          <div class="row">
            <div class="col-lg-5">
              <div class="str-about-text wow fadeFromRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div class="str-section-title text-left str-title-left str-headline">
                  <span class="str-title-tag">عن الشركة</span>
                  <h2>اعمل معنا لتحصل علي أفضل الخدمات</h2>
                </div>
                <div class="str-about-textarea str-about-details">
                  <p dir="RTL">
                    <span dir="RTL">شركة محمد زكي لتقنية المعلومات تُعد شركتنا واحدة من
                      الشركات الرائدة فى مجال البرمجيات لدينا فريق من المحترفين
                      فى مجال البرمجة، كما نمتلك قاعدة كبيرة من العملاء فى مختلف
                      دول العالم الذين استطعنا أن ننال ثقتهم، و نحرص دائمًا علي
                      مواكبة الأفكار والاتجاهات الحديثة فى المجال.</span>
                  </p>
                </div>

                <a class="str-btn d-inline-block" href="ar/customers.html">عملائنا<i
                    class="fas fa-arrow-alt-circle-right"></i></a>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="str-about-img position-relative wow fadeFromLeft" data-wow-delay="300ms"
                data-wow-duration="1500ms">
                <div class="str-about-shape">
                  <img src="../assets/user/img/startup/shape/abs.png" alt="" />
                </div>
                <div class="str-about-logo">
                  <img src="../assets/storage/Settings/settings_152-1639569616.png" class="w-25" />
                </div>
                <div class="str-about-img-field">
                  <div class="str-about-pic">
                    <img src="../assets/storage/Pages/pages_36-1639322829.png" alt="" />
                  </div>
                  <div class="str-progress-area str-headline">
                    <h3>الزيادة في المبيعات</h3>
                    <div class="barfiller" id="progress1">
                      <div class="tipWrap"><span class="tip"></span></div>
                      <span class="fill" data-percentage="25"></span>
                    </div>
                    <h3>معدل التوصية</h3>
                    <div class="barfiller" id="progress2">
                      <div class="tipWrap"><span class="tip"></span></div>
                      <span class="fill" data-percentage="96"></span>
                    </div>
                    <h3>مشاريع جديدة أصبحنا جزءاً منها</h3>
                    <div class="barfiller" id="progress3">
                      <div class="tipWrap"><span class="tip"></span></div>
                      <span class="fill" data-percentage="10"></span>
                    </div>
                  </div>
                </div>
                <div class="str-about-img-field">
                  <div class="str-about-pic">
                    <img src="../assets/storage/Pages/pages_273-1639322829.png" alt="" />
                  </div>
                  <div class="str-about-pic">
                    <img src="../assets/storage/Pages/pages_820-1639322829.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Start of portfolios  section-->
    <section class="smm-case-study-section" id="smm-case-study">
      <div class="container">
        <div class="str-section-title text-center str-title-center str-headline">
          <span class="str-title-tag"> أعمالنا الأخيرة &amp; مشاريعنا</span>
          <h4>
            <p>
              <span dir="RTL">تقدم شركتنا خدمات مميزة لعملائها ، وتتميز الشركة بأن لديها
                شركاء من جميع أنحاء العالم وتعمل على إرضائهم وتلبية متطلباتهم،
                كما أنهم فخورين بالعمل معنا لأمتلاكنا طاقم عمل كامل ومبدع وقادر
                على إنجاز المشاريع بإحترافية فى الوقت المطلوب.</span>
            </p>
          </h4>
        </div>
        <div class="smm-case-study-wrapper">
          <div class="smm-case-tab text-center clearfix ul-li">
            <ul class="nav text-uppercase nav-tabs" id="tabs">
              <li class="nav-item">
                <a class="nav-link text-capitalize active show" href="#" data-target="#all" data-toggle="tab">الكل</a>
              </li>

              <li class="nav-item">
                <a class="nav-link text-capitalize" href="#" data-target="#1" data-toggle="tab">تصميم مواقع</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-capitalize" href="#" data-target="#2" data-toggle="tab">سوشيال ميديا</a>
              </li>
            </ul>
          </div>
          <!-- /tab_button-->
          <div class="smm-case-tab-content">
            <div class="tab-content" id="tabsContent">
              <div class="tab-pane fade active show" id="all">
                <div class="smm-case-content">
                  <div class="row">
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_512-1642408184.png"
                            alt="مجموعة هشام عسكر وشركاه" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">مجموعة هشام عسكر وشركاه</a></h3>
                          <p>مجموعة هشام عسكر وشركاه</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_512-1642408184.png"
                            aria-label="مجموعة هشام عسكر وشركاه Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_943-1642409913.png" alt="الجازع" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الجازع</a></h3>
                          <p>الجازع&nbsp;</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_943-1642409913.png"
                            aria-label="الجازع Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_502-1642409356.png"
                            alt="الحل السريع للسيارات" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الحل السريع للسيارات</a></h3>
                          <p>الحل السريع للسيارات&nbsp;</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_502-1642409356.png"
                            aria-label="الحل السريع للسيارات Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_240-1642409202.png" alt="العائلة اولا" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">العائلة اولا</a></h3>
                          <p>العائلة اولا&nbsp;</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_240-1642409202.png"
                            aria-label="العائلة اولا Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_787-1642409055.png" alt="أرت فيجن" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">أرت فيجن</a></h3>
                          <p>أرت فيجن&nbsp;</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_787-1642409055.png"
                            aria-label="أرت فيجن Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-2">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_863-1642408702.png" alt="الما" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الما</a></h3>
                          <p>الما&nbsp;</p>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_863-1642408702.png" aria-label="الما Image">
                            <i class="fas fa-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="1">
                <div class="smm-case-content">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_688-1639569889.jpg"
                            alt="كوادر مدد الاستقدام" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">كوادر مدد الاستقدام</a></h3>
                          <div>
                            <p>كوادر للاستقدام</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_688-1639569889.jpg"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_512-1642408184.png"
                            alt="مجموعة هشام عسكر وشركاه" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">مجموعة هشام عسكر وشركاه</a></h3>
                          <div>
                            <p>مجموعة هشام عسكر وشركاه</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_512-1642408184.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_805-1642407825.png" alt="ترنسفورمس جيم" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">ترنسفورمس جيم</a></h3>
                          <div>
                            <p>ترنسفورمس جيم&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_805-1642407825.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_314-1642408321.png" alt="دريم 2 للشحن" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">دريم 2 للشحن</a></h3>
                          <div>
                            <p>دريم 2 للشحن&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_314-1642408321.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_407-1642408064.png"
                            alt="كرم الرنيم لخدمات الاعاشة" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">كرم الرنيم لخدمات الاعاشة</a></h3>
                          <div>
                            <p>كرم الرنيم لخدمات الاعاشة&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_407-1642408064.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_192-1642422570.png"
                            alt="مكتب حكم العدالة" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">مكتب حكم العدالة</a></h3>
                          <div>
                            <p>مكتب حكم العدالة&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_192-1642422570.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_863-1642408702.png" alt="الما" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الما</a></h3>
                          <div>
                            <p>الما&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_863-1642408702.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_787-1642409055.png" alt="أرت فيجن" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">أرت فيجن</a></h3>
                          <div>
                            <p>أرت فيجن&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_787-1642409055.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_240-1642409202.png" alt="العائلة اولا" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">العائلة اولا</a></h3>
                          <div>
                            <p>العائلة اولا&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_240-1642409202.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_502-1642409356.png"
                            alt="الحل السريع للسيارات" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الحل السريع للسيارات</a></h3>
                          <div>
                            <p>الحل السريع للسيارات&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_502-1642409356.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_943-1642409913.png" alt="الجازع" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">الجازع</a></h3>
                          <div>
                            <p>الجازع&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_943-1642409913.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="2">
                <div class="smm-case-content">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_398-1642513818.png" alt="قناة الوساطة" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">قناة الوساطة</a></h3>
                          <div>
                            <p>قناة الوساطة&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_398-1642513818.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="smm-case-innerbox position-relative">
                        <div class="smm-case-img">
                          <img src="../assets/storage/Portfolios/_portfolios_82-1642516635.png" alt="قناه الوساطة" />
                        </div>
                        <div class="smm-case-text smm-headline pera-content">
                          <h3><a href="#">قناه الوساطة</a></h3>
                          <div>
                            <p>قناه الوساطة&nbsp;</p>
                          </div>
                        </div>
                        <div class="smm-case-popup">
                          <a class="smm-video-box" data-fancybox="gallery"
                            href="../assets/storage/Portfolios/_portfolios_82-1642516635.png"><i
                              class="fas fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End of str-portfolios section-->

    <!--Start of pricing  plan section-->
    <section class="s2-pricing_section" id="s2-pricing">
      <div class="container-fluid">
        <div class="saas_two_section_title saas2-headline text-center">
          <span class="title_tag">اختر خطتك</span>
          <h4>
            <p>
              اختر باقتك بأقل الاسعار .. لا تترد في طلب الخدمة .. نقدم لك خطط
              مميزة تتكامل مع أنشطتك التجارية
            </p>
          </h4>
        </div>
        <!-- /section title-->

        <div class="s2-pricing_content">
          <div class="row justify-content-md-center">
            <div class="col-lg-3 col-md-6 wow fadeFromLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
              style="
                visibility: visible;
                animation-duration: 1500ms;
                animation-delay: 0ms;
                animation-name: fadeFromLeft;
              ">
              <div class="s2-pricing_item">
                <div class="s2-pricing_price relative-position clearfix">
                  <div class="s2-pricing_text">
                    <span>برونزية</span><strong dir="ltr">200 L.E</strong>
                  </div>
                  <div class="s2-icon_bg">
                    <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m509.472656 259.800781c1.632813-2.449219 2.527344-5.417969 2.527344-8.363281v-236.367188c.003906-8.199218-6.859375-15.070312-15.035156-15.070312h-235.902344c-6.914062 0-13.113281 4.949219-14.65625 11.703125l-69.167969 302.890625c-7.230469 6.433594-13.390625 8.175781-21.199219 10.378906-11.878906 3.347656-26.660156 7.515625-43.347656 27.667969-16.375 19.78125-18.917968 36.898437-21.160156 52.007813-1.980469 13.351562-3.546875 23.898437-14.558594 37.199218-10.640625 12.847656-18.375 14.925782-29.078125 17.800782-12.332031 3.316406-27.683593 7.4375-44.429687 27.667968-5.300782 6.402344-4.417969 15.902344 1.96875 21.214844 2.808594 2.332031 6.210937 3.46875 9.59375 3.46875 4.320312 0 8.605468-1.855469 11.578125-5.445312 10.640625-12.847657 18.371093-14.925782 29.074219-17.800782 12.335937-3.3125 27.6875-7.4375 44.433593-27.667968 16.375-19.777344 18.917969-36.898438 21.160157-52.003907 1.984374-13.355469 3.550781-23.902343 14.5625-37.203125 10.703124-12.929687 18.101562-15.015625 28.347656-17.902344 9.886718-2.789062 21.789062-6.15625 35.121094-18.824218l301.011718-69.023438c3.710938-.851562 7.046875-3.15625 9.15625-6.328125zm-239.816406-214.820312 88.097656 88.273437-140.382812 140.664063zm27.703125-14.847657h163.308594l-81.65625 81.816407zm81.65625 124.425782 88.097656 88.277344-228.476562 52.386718zm21.261719-21.304688 81.652344-81.816406v163.636719zm0 0">
                      </path>
                    </svg>
                  </div>
                </div>
                <div class="plans_checked s2-pricing_list ul-li-block">
                  <p style="font-size: 14px; text-align: center">
                    عدد مواقع غير محدود نقل بسهولة و يسر نظام cPanel 1GB مساحة
                    متوفرة بريد إلكتروني مجاني
                  </p>
                </div>
                <div class="plans_unchecked s2-pricing_list ul-li-block"></div>
                <div class="s2-pricing_btn">
                  <a href="ar/contactus.html"><i class="fas fa-cloud-download-alt"></i>جرب الآن</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeFromLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
              style="
                visibility: visible;
                animation-duration: 1500ms;
                animation-delay: 0ms;
                animation-name: fadeFromLeft;
              ">
              <div class="s2-pricing_item">
                <div class="s2-pricing_price relative-position clearfix">
                  <div class="s2-pricing_text">
                    <span>فضية</span><strong dir="ltr">250 L.E</strong>
                  </div>
                  <div class="s2-icon_bg">
                    <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m509.472656 259.800781c1.632813-2.449219 2.527344-5.417969 2.527344-8.363281v-236.367188c.003906-8.199218-6.859375-15.070312-15.035156-15.070312h-235.902344c-6.914062 0-13.113281 4.949219-14.65625 11.703125l-69.167969 302.890625c-7.230469 6.433594-13.390625 8.175781-21.199219 10.378906-11.878906 3.347656-26.660156 7.515625-43.347656 27.667969-16.375 19.78125-18.917968 36.898437-21.160156 52.007813-1.980469 13.351562-3.546875 23.898437-14.558594 37.199218-10.640625 12.847656-18.375 14.925782-29.078125 17.800782-12.332031 3.316406-27.683593 7.4375-44.429687 27.667968-5.300782 6.402344-4.417969 15.902344 1.96875 21.214844 2.808594 2.332031 6.210937 3.46875 9.59375 3.46875 4.320312 0 8.605468-1.855469 11.578125-5.445312 10.640625-12.847657 18.371093-14.925782 29.074219-17.800782 12.335937-3.3125 27.6875-7.4375 44.433593-27.667968 16.375-19.777344 18.917969-36.898438 21.160157-52.003907 1.984374-13.355469 3.550781-23.902343 14.5625-37.203125 10.703124-12.929687 18.101562-15.015625 28.347656-17.902344 9.886718-2.789062 21.789062-6.15625 35.121094-18.824218l301.011718-69.023438c3.710938-.851562 7.046875-3.15625 9.15625-6.328125zm-239.816406-214.820312 88.097656 88.273437-140.382812 140.664063zm27.703125-14.847657h163.308594l-81.65625 81.816407zm81.65625 124.425782 88.097656 88.277344-228.476562 52.386718zm21.261719-21.304688 81.652344-81.816406v163.636719zm0 0">
                      </path>
                    </svg>
                  </div>
                </div>
                <div class="plans_checked s2-pricing_list ul-li-block">
                  <p style="font-size: 14px; text-align: center">
                    عدد مواقع غير محدود نقل بسهولة و يسر نظام cPanel 3GB مساحة
                    متوفرة بريد إلكتروني مجاني
                  </p>
                </div>
                <div class="plans_unchecked s2-pricing_list ul-li-block"></div>
                <div class="s2-pricing_btn">
                  <a href="ar/contactus.html"><i class="fas fa-cloud-download-alt"></i>جرب الآن</a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeFromLeft animated" data-wow-delay="0ms" data-wow-duration="1500ms"
              style="
                visibility: visible;
                animation-duration: 1500ms;
                animation-delay: 0ms;
                animation-name: fadeFromLeft;
              ">
              <div class="s2-pricing_item">
                <div class="s2-pricing_price relative-position clearfix">
                  <div class="s2-pricing_text">
                    <span>ذهبية</span><strong dir="ltr">350 L.E</strong>
                  </div>
                  <div class="s2-icon_bg">
                    <svg height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="m509.472656 259.800781c1.632813-2.449219 2.527344-5.417969 2.527344-8.363281v-236.367188c.003906-8.199218-6.859375-15.070312-15.035156-15.070312h-235.902344c-6.914062 0-13.113281 4.949219-14.65625 11.703125l-69.167969 302.890625c-7.230469 6.433594-13.390625 8.175781-21.199219 10.378906-11.878906 3.347656-26.660156 7.515625-43.347656 27.667969-16.375 19.78125-18.917968 36.898437-21.160156 52.007813-1.980469 13.351562-3.546875 23.898437-14.558594 37.199218-10.640625 12.847656-18.375 14.925782-29.078125 17.800782-12.332031 3.316406-27.683593 7.4375-44.429687 27.667968-5.300782 6.402344-4.417969 15.902344 1.96875 21.214844 2.808594 2.332031 6.210937 3.46875 9.59375 3.46875 4.320312 0 8.605468-1.855469 11.578125-5.445312 10.640625-12.847657 18.371093-14.925782 29.074219-17.800782 12.335937-3.3125 27.6875-7.4375 44.433593-27.667968 16.375-19.777344 18.917969-36.898438 21.160157-52.003907 1.984374-13.355469 3.550781-23.902343 14.5625-37.203125 10.703124-12.929687 18.101562-15.015625 28.347656-17.902344 9.886718-2.789062 21.789062-6.15625 35.121094-18.824218l301.011718-69.023438c3.710938-.851562 7.046875-3.15625 9.15625-6.328125zm-239.816406-214.820312 88.097656 88.273437-140.382812 140.664063zm27.703125-14.847657h163.308594l-81.65625 81.816407zm81.65625 124.425782 88.097656 88.277344-228.476562 52.386718zm21.261719-21.304688 81.652344-81.816406v163.636719zm0 0">
                      </path>
                    </svg>
                  </div>
                </div>
                <div class="plans_checked s2-pricing_list ul-li-block">
                  <p style="font-size: 14px; text-align: center">
                    عدد مواقع غير محدود نقل بسهولة و يسر نظام cPanel 5GB مساحة
                    متوفرة بريد إلكتروني مجاني
                  </p>
                </div>
                <div class="plans_unchecked s2-pricing_list ul-li-block"></div>
                <div class="s2-pricing_btn">
                  <a href="ar/contactus.html"><i class="fas fa-cloud-download-alt"></i>جرب الآن</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End of pricing section-->

    <!--Start of testimonial section-->
    <section class="crm-testimonial-section position-relative" id="crm-testimonial">
      <span class="crm-testimonial-bg position-absolute text-center"><img src="../assets/user/img/crm/shape/crm-map.png"
          alt="" /></span>
      <div class="container">
        <div class="crm-testimonial-wrapper">
          <div class="crm-testimonial-area owl-carousel" id="crm-testimonial-id">
            <div class="crm-testimonial-content text-center">
              <div class="crm-testimonial-img">
                <img src="../assets/storage/Testmonials/_testmonials_384-1639480507.webp" alt="محمد مدحت" />
              </div>
              <div class="crm-testimonial-text pera-content crm-headline">
                <div>
                  <p>
                    من افضل الشركات في برمجة وتصميم المواقع الالكترونية&nbsp;
                  </p>
                </div>
                <div class="crm-testi-author">
                  <h3>محمد مدحت</h3>
                  <span>محاسب مالي</span>
                </div>
              </div>
            </div>
            <div class="crm-testimonial-content text-center">
              <div class="crm-testimonial-img">
                <img src="../assets/storage/Testmonials/_testmonials_506-1639477965.jpg" alt="عبد الرحمن محمد" />
              </div>
              <div class="crm-testimonial-text pera-content crm-headline">
                <div>
                  <p>
                    أفضل شركة تقنية في المدينة، تشتهر بخدماتها ذات المعايير
                    العالية ..
                  </p>
                </div>
                <div class="crm-testi-author">
                  <h3>عبد الرحمن محمد</h3>
                  <span></span>
                </div>
              </div>
            </div>
            <div class="crm-testimonial-content text-center">
              <div class="crm-testimonial-img">
                <img src="../assets/storage/Testmonials/_testmonials_528-1639475176.jpg" alt="فاطمة فارس" />
              </div>
              <div class="crm-testimonial-text pera-content crm-headline">
                <div>
                  <p>شركة ممتازة فى وتعامل من اول صاحب الشركة للموظفين</p>
                </div>
                <div class="crm-testi-author">
                  <h3>فاطمة فارس</h3>
                  <span>مبرمجة</span>
                </div>
              </div>
            </div>
            <div class="crm-testimonial-content text-center">
              <div class="crm-testimonial-img">
                <img src="../assets/storage/Testmonials/_testmonials_216-1639480640.jpg" alt="رامي جمال محمد" />
              </div>
              <div class="crm-testimonial-text pera-content crm-headline">
                <div>
                  <p>أفضل شركة في برمجة وتصميم الموقع ودقة وسرعة في الأداء</p>
                </div>
                <div class="crm-testi-author">
                  <h3>رامي جمال محمد</h3>
                  <span>مراقب جودة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--End of testimonial section-->

    <!--Start of parteners section-->
    <section class="str-partner-section" id="str-partner">
      <div class="container">
        <div class="str-partner-area owl-carousel" id="str-partner-slide">
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_435-1642604903.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_594-1697521584.jpg" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_823-1642604880.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_860-1642604895.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_72-1642604913.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_225-1642604921.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_511-1642604930.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_567-1642604940.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_189-1642604949.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_390-1642604960.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_108-1642604973.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_635-1642604984.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_970-1642604995.png" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_159-1666179799.jpg" alt="partener" />
          </div>
          <div class="str-partner-img">
            <img src="../assets/storage/Sliders/_sliders_811-1666179811.png" alt="partener" />
          </div>
        </div>
      </div>
    </section>
    <!--End of str-partner section-->

    <!--Start of blog  section-->
    <section class="str-blog-section" id="str-blog">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="str-section-title text-left str-title-left pera-content str-headline">
              <span class="str-title-tag">المقالات</span>
              <h2>الأخبار والمقالات</h2>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="str-team-title-text">
              <p>اخبار ومقالات خاصه بالتكنولوجيا والخدمات التي نقدمها</p>
            </div>
          </div>
        </div>
        <div class="str-blog-area owl-carousel" id="str-blog-slide">
          <div class="str-blog-img-text position-relative">
            <div class="str-blog-thumb">
              <img src="../assets/storage/Blogs/_blogs_521-1640875309.jpg"
                alt="ما مدى تنافسية التسويق الإبداعي الخاص بك؟" />
            </div>
            <div class="str-blog-meta text-center text-uppercase">18 Oct</div>
            <div class="str-blog-text str-headline">
              <h3>
                <a href="ar/blogs/4.html">
                  ما مدى تنافسية التسويق الإبداعي الخاص بك؟
                </a>
              </h3>
              <div class="str-read-more">
                <a href="ar/blogs/4.html">اقرأ المزيد</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--Start of get in touch  section-->
    <section class="str-get-in-touch-section" id="str-get-in-touch">
      <div class="container">
        <div class="str-get-in-touch-content">
          <div class="row">
            <div class="col-lg-4">
              <div class="str-get-touch-icon-text">
                <div class="str-get-touch-icon text-center float-left">
                  <img src="../assets/user/img/startup/icon/gt1.png" alt="" />
                </div>
                <div class="str-get-touch-text str-headline">
                  <h3>عنوان المكتب</h3>
                  <span> شارع مسجد الفتح يجوار كوبري المرور - قفط - قنا </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="str-get-touch-icon-text">
                <div class="str-get-touch-icon text-center float-left">
                  <img src="../assets/user/img/startup/icon/gt2.png" alt="" />
                </div>
                <div class="str-get-touch-text str-headline">
                  <h3>رقم الهاتف</h3>
                  <span> 012845543133 </span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="str-get-touch-icon-text">
                <div class="str-get-touch-icon text-center float-left">
                  <img src="../assets/user/img/startup/icon/gt3.png" alt="" />
                </div>
                <div class="str-get-touch-text str-headline">
                  <h3>عنوان البريد الالكتروني</h3>
                  <span> info@muhammad.zaki </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
