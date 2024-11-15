<script setup>
import { onMounted, ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
});

const formErrors = ref({});
const successMessage = ref('');
const errorMessage = ref('');
const captchaToken = ref('');
const recaptcha = ref(null);

function validateForm() {
    formErrors.value = {};
    if (!formData.value.name) formErrors.value.name = 'الإسم مطلوب.';
    if (!formData.value.email) formErrors.value.email = 'البريد الإلكتروني مطلوب.';
    if (!formData.value.phone) formErrors.value.phone = 'رقم الهاتف مطلوب.';
    if (!formData.value.subject) formErrors.value.subject = 'العنوان مطلوب.';
    if (!formData.value.message) formErrors.value.message = 'المحتوى مطلوب.';
    if (!captchaToken.value) formErrors.value.captcha = 'فشل التحقق من كابتشا.';
    return Object.keys(formErrors.value).length === 0;
}

function handleSubmit() {
    if (validateForm()) {
        localStorage.setItem('contactForm', JSON.stringify({
            name: formData.value.name,
            email: formData.value.email,
            phone: formData.value.phone,
            subject: formData.value.subject,
            message: formData.value.message
        }));

        successMessage.value = 'تم إرسال رسالتك بنجاح!';
        errorMessage.value = '';
        clearForm();
        resetCaptcha();
    } else {
        successMessage.value = '';
        errorMessage.value = 'برجاء إكمال الحقول المطلوبة قبل الإرسال.';
    }
}

function clearForm() {
    formData.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    };
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

function resetCaptcha() {
    if (window.grecaptcha && captchaToken.value) {
        window.grecaptcha.reset();
        captchaToken.value = '';
    }
}

onMounted(() => {
    renderRecaptcha();
});
</script>

<template>
    <section class="str-contact-section relative-position">
        <div class="container">
            <div class="str-section-title text-center str-title-center str-headline">
                <h2>تواصل معنا</h2>
            </div>
            <div class="row">
                <div class="col-md-6 col-sm-6 order-sm-2">
                    <div class="contact-info px-2">
                        <div class="heading-title">
                            <h3>المعلومات الرسمية:</h3>
                            <p>
                                <i class="fas fa-map-marker-alt"></i>شارع مسجد الفتح يجوار كوبري المرور - قفط - قنا
                            </p>
                            <p>
                                <i class="fas fa-phone"></i><a href="tel:012845543133"> 012845543133 </a>
                            </p>
                            <p>
                                <i class="fas fa-envelope"></i><a href="mailto:devmuhammadzaki@gmail.com"> devmuhammadzaki@gmail.com </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div v-if="successMessage" class="success text-light my-3 p-2 text-center"
                        :style="{ backgroundColor: 'rgb(38, 129, 219)' }">
                        {{ successMessage }}
                    </div>
                    <div class="getin_form">
                        <form @submit.prevent="handleSubmit">
                            <div class="row">
                                <div class="col-md-12 col-sm-12" v-if="errorMessage">
                                    <p class="text-danger text-center">{{ errorMessage }}</p>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="الإسم"
                                            v-model="formData.name" />
                                        <div v-if="formErrors.name" class="err">{{ formErrors.name }}</div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control" type="email" placeholder="البريد الإلكتروني"
                                            v-model="formData.email" />
                                        <div v-if="formErrors.email" class="err">{{ formErrors.email }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="الهاتف المحمول"
                                            v-model="formData.phone" />
                                        <div v-if="formErrors.phone" class="err">{{ formErrors.phone }}</div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="العنوان"
                                            v-model="formData.subject" />
                                        <div v-if="formErrors.subject" class="err">{{ formErrors.subject }}</div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="المحتوى" rows="5"
                                            v-model="formData.message"></textarea>
                                        <div v-if="formErrors.message" class="err">{{ formErrors.message }}</div>
                                    </div>
                                </div>

                                <div class="col-md-12 col-sm-12">
                                    <div class="form-group">
                                        <div ref="recaptcha" class="g-recaptcha"
                                            :class="{ 'is-invalid': formErrors.captcha }"></div>
                                        <div v-if="formErrors.captcha" class="err">{{ formErrors.captcha }}</div>
                                    </div>
                                </div>

                                <div class="col-md-12 col-sm-12">
                                    <button class="contact_btn gradient-btn w-100" type="submit">
                                        إرسال
                                    </button>
                                </div>
                            </div>
                        </form>
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
