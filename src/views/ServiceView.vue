<script setup>
import { useServicesStore } from '@/stores/servicesStore';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    id: String
})
const route = useRoute();
const servicesStore = useServicesStore();
const { services, fetchServices } = servicesStore;

const service = ref({});

watch(() => route.params.id, (newId) => {
    const serviceId = parseInt(newId);
    service.value = services.find(s => s.id === serviceId) || {};
});

if (services.length === 0) {
    fetchServices();
} else {
    const serviceId = parseInt(route.params.id);
    service.value = services.find(s => s.id === serviceId) || {};
}
</script>


<template>
    <input type="hidden" :value="props.id">
    <section class="saasio-breadcurmb-section" id="saasio-breadcurmb">
        <div class="container">
            <div class="breadcurmb-title text-center">
                <h2>خدماتنا</h2>
            </div>
            <div class="breadcurmb-item-list text-center ul-li">
                <ul class="saasio-page-breadcurmb">
                    <li>
                        <RouterLink to="/" exact>الصفحة الرئيسية</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services" exact>خدماتنا</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>

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