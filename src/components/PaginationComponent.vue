<script setup>
defineProps({
    currentPage: Number,
    totalPages: Number,
});
</script>

<template>
    <nav class="navigation mx-auto" aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <button class="page-link arrow" @click="$emit('change-page', currentPage - 1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                <button class="page-link" @click="$emit('change-page', page)">{{ page }}</button>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                <button class="page-link arrow" @click="$emit('change-page', currentPage + 1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
    </nav>
</template>
