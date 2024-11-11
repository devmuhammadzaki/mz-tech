<script setup>
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue'

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    id: String
})

const route = useRoute();

const jobId = route.params.id;

const name = ref('');
const phone = ref('');
const email = ref('');
const cv = ref(null);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('phone', phone.value);
    formData.append('email', email.value);
    formData.append('cv', cv.value);

    console.log('Form Submitted:', {
        jobId,
        name: name.value,
        phone: phone.value,
        email: email.value,
        cv: cv.value ? cv.value.name : null,
    });

    localStorage.setItem('jobApplication', JSON.stringify({
        jobId,
        name: name.value,
        phone: phone.value,
        email: email.value,
        cv: cv.value ? cv.value.name : null,
    }));

    alert('Your application has been submitted!');
};
</script>

<template>
    <BreadcrumbComponent title="نموذج التقديم" link="jobs" />

    <section class="str-feature-section str-feature-section-page">
        <div class="container">
            <div class="str-feature-content">
                <div class="container">
                    <div class="content">
                        <div class="checkout-form">
                            <div class="title">
                                <h4>معلومات المتقدم </h4>
                            </div>
                            <form @submit="handleSubmit" enctype="multipart/form-data">
                                <input type="hidden" :value="props.id">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="name">الإسم</label>
                                            <input id="name" v-model="name" class="form-control" type="text" name="name"
                                                required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="phone">الهاتف</label>
                                            <input id="phone" v-model="phone" class="form-control" type="text"
                                                name="phone" required>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="email">البريد الإلكتروني</label>
                                            <input id="email" v-model="email" class="form-control" type="email"
                                                name="email" required>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="cv">السيرة الذاتية</label>
                                            <input id="cv" type="file" class="form-control" name="cv"
                                                accept="application/pdf" @change="e => cv = e.target.files[0]" required>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 text-center">
                                        <button class="btn btn-primary" type="submit">إرسال</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
