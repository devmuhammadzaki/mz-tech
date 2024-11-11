<script setup>
import ServiceComponent from '@/components/ServiceComponent.vue';
import { useServicesStore } from '@/stores/servicesStore';

const servicesStore = useServicesStore();
const { services } = servicesStore;
</script>

<template>
    <section class="str-feature-section" id="str-feature">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <span class="str-title-tag">خدماتنا</span>
            </div>
            <div class="str-feature-content owl-carousel" id="str-slide">
                <ServiceComponent v-for="service in services" :key="service.id" :title="service.title"
                    :description="service.description" :imageSrc="service.imageSrc" :altText="service.altText"
                    :link="'/services/' + service.id" />
            </div>
        </div>
    </section>
</template>