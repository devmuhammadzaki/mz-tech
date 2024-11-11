<script setup>
import BreadcrumbComponent from '@/components/BreadcrumbComponent.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineProps({
    id: String
});

const route = useRoute();
const jobId = route.params.id;

const formData = ref({
    name: '',
    phone: '',
    email: '',
    cv: null,
});

const successMessage = ref('');
const errorMessage = ref('');
const formErrors = ref({});
const captchaToken = ref('');
const recaptcha = ref(null);

function validateForm() {
    formErrors.value = {};
    if (!formData.value.name) formErrors.value.name = 'الإسم مطلوب.';
    if (!formData.value.phone) formErrors.value.phone = 'رقم الهاتف مطلوب.';
    if (!formData.value.email) formErrors.value.email = 'البريد الإلكتروني مطلوب.';
    if (!formData.value.cv) formErrors.value.cv = 'السيرة الذاتية مطلوبة.';
    if (!captchaToken.value) formErrors.value.captcha = 'فشل التحقق من كابتشا.';
    return Object.keys(formErrors.value).length === 0;
}

function renderRecaptcha() {
    if (window.grecaptcha) {
        window.grecaptcha.render(recaptcha.value, {
            sitekey: '6LcUM3oqAAAAAF9g-QiSSrtlE_juaXyOvX46kvwu',
            callback: (token) => {
                captchaToken.value = token;
                formErrors.value.captcha = '';
            },
            'expired-callback': () => {
                captchaToken.value = '';
                formErrors.value.captcha = 'انتهت صلاحية كابتشا. يُرجى إكمالها مرة أخرى.';
            }
        });
    }
}

function clearForm() {
    formData.value = {
        name: '',
        email: '',
        phone: '',
        cv: null,
    };
}

function resetCaptcha() {
    if (window.grecaptcha && captchaToken.value) {
        window.grecaptcha.reset();
        captchaToken.value = '';
    }
}

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
        formData.value.cv = file;
        formErrors.value.cv = '';
    } else {
        formErrors.value.cv = 'يرجى تحميل ملف PDF صالح.';
        formData.value.cv = null;
    }
};

const handleSubmit = () => {
    if (validateForm()) {
        localStorage.setItem('jobApplication', JSON.stringify({
            jobId,
            name: formData.value.name,
            phone: formData.value.phone,
            email: formData.value.email,
            cv: formData.value.cv ? formData.value.cv.name : null,
        }));

        successMessage.value = 'تم إرسال رسالتك بنجاح!';
        errorMessage.value = '';
        clearForm();
        resetCaptcha();
    } else {

        successMessage.value = '';
        errorMessage.value = 'برجاء إكمال الحقول المطلوبة قبل الإرسال.';

    }
};

onMounted(() => {
    renderRecaptcha();
});
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
                                <h4>معلومات المتقدم</h4>
                            </div>
                            <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
                                <div v-if="successMessage" class="success text-light my-3 p-2 text-center"
                                    :style="{ backgroundColor: 'rgb(38, 129, 219)' }">
                                    {{ successMessage }}
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-sm-12" v-if="errorMessage">
                                        <p class="text-danger text-center">{{ errorMessage }}</p>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="name">الإسم</label>
                                            <input id="name" v-model="formData.name" class="form-control" type="text"
                                                name="name">
                                            <div v-if="formErrors.name" class="err">{{ formErrors.name }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="phone">الهاتف</label>
                                            <input id="phone" v-model="formData.phone" class="form-control" type="text"
                                                name="phone">
                                            <div v-if="formErrors.phone" class="err">{{ formErrors.phone }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="email">البريد الإلكتروني</label>
                                            <input id="email" v-model="formData.email" class="form-control" type="email"
                                                name="email">
                                            <div v-if="formErrors.email" class="err">{{ formErrors.email }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="cv">السيرة الذاتية</label>
                                            <input id="cv" type="file" class="form-control" name="cv"
                                                accept="application/pdf" @change="handleFileChange">
                                            <div v-if="formErrors.cv" class="err">{{ formErrors.cv }}</div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <div ref="recaptcha" class="g-recaptcha"
                                                :class="{ 'is-invalid': formErrors.captcha }"></div>
                                            <div v-if="formErrors.captcha" class="err">{{ formErrors.captcha }}</div>
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

<style scoped>
.success {
    background-color: rgb(38, 129, 219);
}

.err {
    color: red;
    font-size: 0.9em;
}
</style>
