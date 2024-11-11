<script setup>
import { useJobsStore } from '@/stores/jobsStore';
import JobComponent from '@/components/JobComponent.vue';

const jobsStore = useJobsStore();
const { jobs } = jobsStore;
</script>

<template>
    <section class="str-feature-section str-feature-section-page">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <span class="str-title-tag"></span>
            </div>
            <div class="str-feature-content">
                <div class="row">
                    <JobComponent v-for="job in jobs" :key="job.id" :title="job.title" :description="job.description"
                        :link="'/jobs/' + job.id" />
                </div>
            </div>
        </div>
    </section>
</template>
