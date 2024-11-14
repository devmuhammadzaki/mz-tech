<script setup>
import { ref } from 'vue';

const currentSection = ref('register');

const loginForm = ref({ email: '', password: '' });
const loginErrors = ref({ email: '', password: '' });

const handleLogin = () => {
    loginErrors.value = {};
    if (!loginForm.value.email) loginErrors.value.email = 'البريد الإلكتروني مطلوب.';
    if (!loginForm.value.password) loginErrors.value.password = 'الرقم السري مطلوب.';

    if (!loginErrors.value.email && !loginErrors.value.password) {
        currentSection.value = 'ticket';
    }
};

const registerForm = ref({ name: '', email: '', password: '' });
const registerErrors = ref({ name: '', email: '', password: '' });

const handleRegister = () => {
    registerErrors.value = {};
    if (!registerForm.value.name) registerErrors.value.name = 'الإسم مطلوب.';
    if (!registerForm.value.email) registerErrors.value.email = 'البريد الإلكتروني مطلوب.';
    if (!registerForm.value.password) registerErrors.value.password = 'الرقم السري مطلوب.';

    if (!registerErrors.value.name && !registerErrors.value.email && !registerErrors.value.password) {
        currentSection.value = 'login';
    }
};

const ticketForm = ref({ title: '', issue: '' });
const ticketErrors = ref({ title: '', issue: '' });
const ticketSuccessMessage = ref('');

const handleTicket = () => {
    ticketErrors.value = {};
    ticketSuccessMessage.value = '';

    if (!ticketForm.value.title) ticketErrors.value.title = 'العنوان مطلوب.';
    if (!ticketForm.value.issue) ticketErrors.value.issue = 'وصف المشكلة مطلوب.';

    if (!ticketErrors.value.title && !ticketErrors.value.issue) {
        ticketSuccessMessage.value = 'تم إرسال تذكرتك بنجاح!';
        ticketForm.value = { title: '', issue: '' };
    }
};

const handleLogout = () => {
    ticketForm.value = { title: '', issue: '' };
    ticketSuccessMessage.value = '';
    currentSection.value = 'register';
};
</script>

<template>
    <!-- Login Form -->
    <section v-if="currentSection === 'login'" class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                    <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
                        افتح تذكرة <br />
                        <span class="awesome" style="color: hsl(218, 81%, 75%)">و دعنا نناقش مشكلتك</span>
                    </h1>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div class="card bg-glass">
                        <div class="card-body px-4 py-5 px-md-5">
                            <form @submit.prevent="handleLogin">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="email" placeholder="البريد الإلكتروني"
                                        v-model="loginForm.email" />
                                    <label for="email">البريد الإلكتروني</label>
                                    <p v-if="loginErrors.email" class="text-danger text-center">{{ loginErrors.email }}
                                    </p>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="password" placeholder="الرقم السري"
                                        v-model="loginForm.password" />
                                    <label for="password">الرقم السري</label>
                                    <p v-if="loginErrors.password" class="text-danger text-center">{{
                                        loginErrors.password }}</p>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mb-4">تسجيل الدخول</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Register Form -->
    <section v-if="currentSection === 'register'" class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                    <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
                        افتح تذكرة <br />
                        <span class="awesome" style="color: hsl(218, 81%, 75%)">و دعنا نناقش مشكلتك</span>
                    </h1>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div class="card bg-glass">
                        <div class="card-body px-4 py-5 px-md-5">
                            <form @submit.prevent="handleRegister">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="name" placeholder="الإسم"
                                        v-model="registerForm.name" />
                                    <label for="name">الإسم</label>
                                    <p v-if="registerErrors.name" class="text-danger text-center">{{ registerErrors.name
                                        }}</p>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="register-email"
                                        placeholder="البريد الإلكتروني" v-model="registerForm.email" />
                                    <label for="register-email">البريد الإلكتروني</label>
                                    <p v-if="registerErrors.email" class="text-danger text-center">{{
                                        registerErrors.email }}</p>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="register-password"
                                        placeholder="الرقم السري" v-model="registerForm.password" />
                                    <label for="register-password">الرقم السري</label>
                                    <p v-if="registerErrors.password" class="text-danger text-center">{{
                                        registerErrors.password }}</p>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mb-4">تسجيل</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Ticket Form -->
    <section v-if="currentSection === 'ticket'" class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div class="row gx-lg-5 align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
                    <h1 class="my-5 display-5 fw-bold ls-tight text-capitalize" style="color: hsl(218, 81%, 95%)">
                        أهلا <span class="awesome" style="color: hsl(218, 81%, 75%)">{{ registerForm.name }}</span>
                    </h1>
                    <button class="btn btn-lg" @click.prevent="handleLogout">تسجيل الخروج</button>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
                    <div class="card bg-glass">
                        <div class="card-body px-4 py-5 px-md-5">
                            <div v-if="ticketSuccessMessage" class="success text-light my-3 p-2 text-center"
                                :style="{ backgroundColor: 'rgb(38, 129, 219)' }">
                                {{ ticketSuccessMessage }}
                            </div>
                            <form @submit.prevent="handleTicket">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="title" placeholder="عنوان التذكرة"
                                        v-model="ticketForm.title" />
                                    <label for="title">عنوان التذكرة</label>
                                    <p v-if="ticketErrors.title" class="text-danger text-center">{{ ticketErrors.title
                                        }}</p>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" id="issue" placeholder="المشكلة"
                                        v-model="ticketForm.issue"></textarea>
                                    <label for="issue">المشكلة</label>
                                    <p v-if="ticketErrors.issue" class="text-danger text-center">{{ ticketErrors.issue
                                        }}</p>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block mt-4">إرسال</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
h1,
h2 {
    font-size: 35px !important;
}

.background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%);
}

#radius-shape-1 {
    height: 220px;
    width: 220px;
    top: -60px;
    left: -130px;
    background: radial-gradient(#5f6ae6, #8890ec);
    overflow: hidden;
}

#radius-shape-2 {
    border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
    bottom: -60px;
    right: -110px;
    width: 300px;
    height: 300px;
    background: radial-gradient(#5f6ae6, #8890ec);
    overflow: hidden;
}

.bg-glass {
    background-color: hsla(0, 0%, 100%, 0.9) !important;
    backdrop-filter: saturate(200%) blur(25px);
}

.btn {
    color: #fff !important;
    background: linear-gradient(135deg, #852d91, #312a6c);
    font-size: 22px;
    font-weight: 700;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.btn:hover {
    color: #fff;
    border: none;
    box-shadow: 0 0 10px rgba(126, 2, 228, 0.3);
    animation: rotate 0.7s ease-in-out both;
}

.btn:before,
.btn:after {
    content: '';
    background: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    opacity: 0;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    transition: all 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.btn:hover:before,
.btn:hover:after {
    opacity: 0.15;
}

.btn:hover:before {
    transform: translate3d(50%, 0, 0) scale(0.9);
}

.btn:hover:after {
    transform: translate(50%, 0) scale(1.1);
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(3deg);
    }

    50% {
        transform: rotate(-3deg);
    }

    75% {
        transform: rotate(1deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@media only screen and (max-width: 767px) {
    .btn {
        margin-bottom: 20px;
    }
}
</style>