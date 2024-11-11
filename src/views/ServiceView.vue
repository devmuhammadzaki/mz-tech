<script setup>
import servicesData from '@/assets/services.json';
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
    id: String
})

const route = useRoute();

const services = ref([]);
const service = ref({});

onMounted(() => {
    services.value = servicesData;
    const serviceId = parseInt(route.params.id);
    service.value = services.value.find(s => s.id === serviceId) || {};
});
</script>


<template>

    <BreadcrumbComponent title="خدماتنا" link="services" />

    <section class="str-feature-section str-feature-section-page str-single-service">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <h2>{{ service.title }}</h2>
            </div>
            <div class="str-feature-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="str-feature-box wow fadeFromUp">
                            <div class="str-feature-icon-text text-center">
                                <div class="str-feature-icon">
                                    <img :src="service.imageSrc" :alt="service.altText" />
                                </div>
                                <div class="str-feature-text str-headline">
                                    <h3>{{ service.title }}</h3>
                                    <div class="str-feature-list ul-li-block">
                                        <p>
                                            <span dir="RTL">{{ service.description }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>