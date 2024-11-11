<script setup>
defineProps({
    title: String,
    description: String,
    link: String
});
</script>

<template>
    <div class="col-lg-4 col-md-6">
        <div class="str-feature-box wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <RouterLink :to="link" :key="$route.fullPath">
                <div class="str-hover-icon text-center">
                    <i class="fas fa-plus"></i>
                </div>
                <div class="str-feature-icon-text text-center">
                    <div class="str-feature-text str-headline">
                        <h3>{{ title }}</h3>
                        <div class="str-feature-list ul-li-block">
                            <p>{{ description }}</p>
                        </div>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>
