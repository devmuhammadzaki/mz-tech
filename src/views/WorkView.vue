<script setup>
defineProps({
    work: Object,
});
</script>

<template>
    <div class="col-md-4 mb-2">
        <div class="smm-case-innerbox position-relative">
            <div class="smm-case-img">
                <img :src="work.imageUrl" :alt="work.title" />
            </div>
            <div class="smm-case-text smm-headline pera-content">
                <h3>{{ work.title }}</h3>
                <p>{{ work.description }}</p>
            </div>
            <div class="smm-case-popup">
                <a class="smm-video-box" data-fancybox="gallery" :href="work.imageUrl">
                    <i class="fas fa-plus"></i>
                </a>
            </div>
        </div>
    </div>
</template>
