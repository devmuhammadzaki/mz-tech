<script setup>
import { ref } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
    <header class="saas_two_main_header" id="header_main">
        <div class="container">
            <div class="s_main_menu">
                <div class="row g-4 align-items-center">
                    <div class="col-6 col-md-1 px-0">
                        <div class="brand_logo">
                            <RouterLink to="/" class="d-block">
                                <img class="img-fluid w-100" src="/storage/Settings/settings_152-1639569616.png"
                                    alt="شركة محمد زكي لتقنية المعلومات" />
                            </RouterLink>
                        </div>
                    </div>

                    <div class="col-md d-flex justify-content-end navbar-items">
                        <div class="main_menu_list" style="width: fit-content">
                            <nav class="s2-main-navigation clearfix ul-li">
                                <ul class="navbar-nav text-capitalize clearfix d-flex flex-row flex-nowrap text-nowrap"
                                    id="main-nav">
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
                                    <!-- Dropdown menu -->
                                    <li class="dropdown">
                                        <button style="border: none; background-color: white;"
                                            class="nav-link dropdown-toggle pt-0" @click="toggleDropdown"
                                            :aria-expanded="isDropdownOpen.toString()">
                                            طلبات
                                        </button>
                                        <ul v-if="isDropdownOpen" class="dropdown-menu my-0 d-flex flex-column">
                                            <li class="dropdown-item">
                                                <RouterLink to="/service-request">طلب خدمة</RouterLink>
                                            </li>
                                            <li class="dropdown-item">
                                                <RouterLink to="/quote-request">طلب عرض أسعار</RouterLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mx-0">
                                        <RouterLink to="/contactus">تواصل معنا</RouterLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

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
                            <RouterLink to="/"><img src="/storage/Settings/settings_152-1639569616.png"
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
                                    <RouterLink to="/services" exact>الخدمات</RouterLink>
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
</template>