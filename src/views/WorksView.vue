<script setup>
import { ref, computed } from 'vue';
import { useWorksStore } from '@/stores/worksStore';
import WorkView from '@/views/WorkView.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';

const worksStore = useWorksStore();
const works = computed(() => worksStore.works);

const itemsPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(works.value.length / itemsPerPage));

const filteredWorks = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return works.value.slice(start, end);
});

const setPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>


<template>
    <section class="saasio-breadcurmb-section" id="saasio-breadcurmb">
        <div class="container">
            <div class="breadcurmb-title text-center">
                <h2>أعمالنا</h2>
            </div>
            <div class="breadcurmb-item-list text-center ul-li">
                <ul class="saasio-page-breadcurmb">
                    <li>
                        <RouterLink to="/" exact>الصفحة الرئيسية</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/works" exact>أعمالنا</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="smm-case-study-section" id="smm-case-study">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <h2>أعمالنا الأخيرة &amp; مشاريعنا</h2>
                <div>
                    <p>
                        <span dir="RTL">تقدم شركتنا خدمات مميزة لعملائها...</span>
                    </p>
                </div>
            </div>
            <div class="smm-case-content">
                <div class="row">
                    <WorkView v-for="work in filteredWorks" :key="work.id" :work="work" />
                </div>
            </div>

            <PaginationComponent :currentPage="currentPage" :totalPages="totalPages" @change-page="setPage" />
        </div>
    </section>
</template>
