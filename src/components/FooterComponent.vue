<script setup>
</script>

<template>
    <footer class="str-footer-area" id="str-footer">
        <div class="container">
            <div class="footer-content">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="str-footer-widget str-headline pera-content">
                            <div class="str-ft-about-widget">
                                <RouterLink to="/" exact><img class="footer-logo"
                                        src="/storage/Settings/settings_152-1639569616.png" alt="Our Logo" />
                                </RouterLink>
                                <p>
                                    محمد زكي لتقنية المعلومات نسعى جاهدين لتقديم أفضل الخدمات
                                    لعملائنا ونيل ثقتهم.
                                </p>
                                <div class="ft-about-btn">
                                    <RouterLink to="/about">عن الشركة</RouterLink>
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
                                    <a href="#" title="facebook" target="_blank" rel="noreferrer"><i
                                            class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com/in/devmuhammadzaki/" title="linkedin"
                                        target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="#" title="twitter" target="_blank" rel="noreferrer"><i
                                            class="fab fa-twitter"></i></a>
                                    <a href="#" title="instagram" target="_blank" rel="noreferrer"><i
                                            class="fab fa-instagram"></i></a>
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
            جميع الحقوق محفوظة ©<RouterLink to="/" exact>محمد زكي لتقنية المعلومات</RouterLink>
        </div>
    </footer>
</template>