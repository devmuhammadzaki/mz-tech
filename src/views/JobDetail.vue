<script setup>
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'
import { ref, watch } from 'vue';
import { useJobsStore } from '@/stores/jobsStore';

const props = defineProps({
    id: String
});

const jobsStore = useJobsStore();
const job = ref({});

function fetchJob() {
    const jobId = parseInt(props.id);
    job.value = jobsStore.jobs.find(j => j.id === jobId) || {};
}

fetchJob();
watch(() => props.id, fetchJob);
</script>

<template>
    <BreadcrumbComponent title="وظائفنا" link="jobs" />

    <section class="str-feature-section str-feature-section-page str-single-job">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <h2>{{ job.title }}</h2>
            </div>
            <div class="str-feature-content">
                <div class="row">
                    <div class="col-lg-12 col-md-12">
                        <div class="str-feature-box wow fadeFromUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                            <div class="str-feature-icon-text text-center">
                                <div class="str-feature-text str-headline">
                                    <div class="str-feature-list ul-li-block">
                                        <p>{{ job.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                        <RouterLink :to="'/job-application/' + job.id">
                            <button class="btn btn-success">إملأ الإستمارة</button>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
