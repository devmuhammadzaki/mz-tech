<script setup>
defineProps({
    title: String,
    link: String
})
</script>


<template>
    <section class="saasio-breadcurmb-section" id="saasio-breadcurmb">
        <div class="container">
            <div class="breadcurmb-title text-center">
                <h2> {{ title }}</h2>
            </div>
            <div class="breadcurmb-item-list text-center ul-li">
                <ul class="saasio-page-breadcurmb">
                    <li>
                        <RouterLink to="/">الصفحة الرئيسية</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="'/' + link"> {{ title }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>