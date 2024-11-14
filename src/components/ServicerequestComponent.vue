<script setup>
import { onMounted, ref } from 'vue';

const formData = ref({
    name: '',
    phone: '',
    email: '',
    message: ''
});

const formErrors = ref({});
const successMessage = ref('');
const errorMessage = ref('');
const captchaToken = ref('');
const recaptcha = ref(null);

function validateForm() {
    formErrors.value = {};
    if (!formData.value.name) formErrors.value.name = 'الاسم مطلوب.';
    if (!formData.value.phone) formErrors.value.phone = 'رثم الهاتف مطلوب.';
    if (!formData.value.email) formErrors.value.email = 'البريد الإلكتروني مطلوب.';
    if (!formData.value.message) formErrors.value.message = 'محتوى الخدمة مطلوب.';
    if (!captchaToken.value) formErrors.value.captcha = 'فشل التحقق من كابتشا.';
    return Object.keys(formErrors.value).length === 0;
}

function handleSubmit() {
    if (validateForm()) {
        successMessage.value = 'تم إرسال طلب الخدمة بنجاح!';
        errorMessage.value = '';
        clearForm();
    } else {
        successMessage.value = '';
        errorMessage.value = 'برجاء إكمال الحقول المطلوبة قبل الإرسال.';
    }
}

function clearForm() {
    formData.value = {
        name: '',
        phone: '',
        email: '',
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

onMounted(() => {
    renderRecaptcha();
});
</script>

<template>
    <section class="str-feature-section str-feature-section-page">
        <div class="container">
            <div class="str-feature-content">
                <div class="container">
                    <div class="content">
                        <div class="checkout-form">
                            <div class="title">
                                <h4>يرجى ملئ النموذج أدناه لطلبك. <span class="text-danger">*</span></h4>
                            </div>

                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div v-if="successMessage" class="alert alert-success mt-3 text-center">
                                        {{ successMessage }}
                                    </div>
                                    <div v-if="errorMessage" class="alert alert-danger mt-3 text-center">
                                        {{ errorMessage }}
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="name">الاسم</label>
                                            <input class="form-control" type="text" v-model="formData.name" id="name" />
                                            <div v-if="formErrors.name" class="err">{{ formErrors.name }}</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="phone">رقم الهاتف</label>
                                            <input class="form-control" type="text" v-model="formData.phone"
                                                id="phone" />
                                            <div v-if="formErrors.phone" class="err">{{ formErrors.phone }}</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="email">البريد الإلكتروني</label>
                                            <input class="form-control" type="email" v-model="formData.email"
                                                id="email" />
                                            <div v-if="formErrors.email" class="err">{{ formErrors.email }}</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <label for="message">نوع الخدمة المطلوبة</label>
                                            <textarea class="form-control" v-model="formData.message" id="message"
                                                rows="5" placeholder="محتوى الخدمة المطلوبة"></textarea>
                                            <div v-if="formErrors.message" class="err">{{ formErrors.message }}</div>
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
.err {
    color: red;
    font-size: 0.9em;
}

.alert {
    font-size: 1em;
    margin-top: 10px;
}

.g-recaptcha {
    margin-top: 10px;
}
</style>
