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

const selectedCategory = ref('all');

const changeCategory = (category) => {
    selectedCategory.value = category;
    currentPage.value = 1;
};
</script>

<template>
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
                            <a @click="changeCategory('all')" :class="{ 'active show': selectedCategory === 'all' }"
                                class="nav-link text-capitalize" href="#tabs">
                                الكل
                            </a>
                        </li>
                        <li class="nav-item">
                            <a @click="changeCategory('web-design')"
                                :class="{ 'active show': selectedCategory === 'web-design' }"
                                class="nav-link text-capitalize" href="#tabs">
                                تصميم مواقع
                            </a>
                        </li>
                        <li class="nav-item">
                            <a @click="changeCategory('social-media')"
                                :class="{ 'active show': selectedCategory === 'social-media' }"
                                class="nav-link text-capitalize" href="#tabs">
                                سوشيال ميديا
                            </a>
                        </li>
                    </ul>
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