<script setup>

const props = defineProps({
    title: String,
    description: String,
    imageSrc: String,
    altText: String,
    link: String,
});
</script>

<template>
    <div class="str-feature-box wow fadeFromUp">
        <RouterLink :to="props.link" :key="$route.fullPath">
            <div class="str-hover-icon text-center">
                <i class="fas fa-plus"></i>
            </div>
            <div class="str-feature-icon-text text-center">
                <div class="str-feature-icon">
                    <img :src="props.imageSrc" :alt="props.altText" />
                </div>
                <div class="str-feature-text str-headline">
                    <h3>{{ props.title }}</h3>
                    <div class="str-feature-list ul-li-block">
                        <p>
                            <span dir="RTL">{{ props.description }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </RouterLink>
    </div>
</template>
