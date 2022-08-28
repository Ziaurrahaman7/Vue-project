<template>
        <main class="main-content">

            <!--== Start Page Header Area Wrapper ==-->
            <section class="page-header-area" data-bg-color="#F1FAEE">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="page-header-content">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Account</li>
                                </ol>
                                <h2 class="page-header-title">My Account</h2>
                            </div>
                        </div>
                        <div class="col-sm-4 d-sm-flex justify-content-end align-items-end">
                            <h5 class="showing-pagination-results">Login / Register</h5>
                        </div>
                    </div>
                </div>
            </section>
            <!--== End Page Header Area Wrapper ==-->

            <!--== Start Login Wrapper ==-->
            <section class="login-register-area section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 login-register-border">
                            <div class="login-register-content">
                                <div class="login-register-title mb-30">
                                    <h2>Login</h2>
                                    <p>Welcome back! Please enter your username and password to login. </p>
                                </div>
                                <div class="login-register-style login-register-pr">
                                    <form action="#" method="post">
                                        <div class="login-register-input">
                                            <input type="text" name="user-name" placeholder="Username or email address">
                                        </div>
                                        <div class="login-register-input">
                                            <input type="password" name="user-password" placeholder="Password">
                                            <div class="forgot">
                                                <a href="#">Forgot?</a>
                                            </div>
                                        </div>
                                        <div class="remember-me-btn">
                                            <input type="checkbox">
                                            <label>Remember me</label>
                                        </div>
                                        <div class="btn-register">
                                            <a class="btn-register-now" href="account.html">Login</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="login-register-content login-register-pl">
                                <div class="login-register-title mb-30">
                                    <h2>Register</h2>
                                    <p>Create new account today to reap the benefits of a personalized shopping experience. </p>
                                </div>
                                <div class="login-register-style">
                                    <form  v-on:submit.prevent="register">
                                        <div class="login-register-input">
                                            <input type="text" v-model="name" name="name" placeholder="Username">
                                        </div>
                                        <div class="login-register-input">
                                            <input type="email" v-model="email" name="email" placeholder="E-mail address">
                                        </div>
                                        <div class="login-register-input">
                                            <input type="password" v-model="password" name="password" placeholder="Password">
                                        </div>
                                        <div class="login-register-paragraph">
                                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy.</a></p>
                                        </div>
                                        <div class="btn-register">
                                            <button>Register</button>
                                        </div>
                                    </form>
                                    <div class="register-benefits">
                                        <h3>Sign up today and you will be able to :</h3>
                                        <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br>or sign in and you will be able to:</p>
                                        <ul>
                                            <li><i class="fa fa-check-circle-o"></i> Speed your way through checkout</li>
                                            <li><i class="fa fa-check-circle-o"></i> Track your orders easily</li>
                                            <li><i class="fa fa-check-circle-o"></i> Keep a record of all your purchases</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--== End Login Wrapper ==-->

            <!--== Start News Letter Area Wrapper ==-->
            <section class="news-letter-area section-bottom-space">
                <div class="container">
                    <div class="newsletter-content-wrap" data-bg-img="assets/images/photos/bg1.jpg">
                        <div class="newsletter-content">
                            <h2 class="title">Connect with us | merier</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="newsletter-form">
                                <form>
                                    <input type="email" class="form-control" placeholder="Email address">
                                    <button class="btn-submit" type="submit"><i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--== End News Letter Area Wrapper ==-->

        </main>
</template>
<script>
    import axios from 'axios'
    import router from '../router'

    export default{
        data(){
            return {
                name: '',
                email: '',
                password: '',
            }
        },

        methods:{
            register() {
                axios.post('http://127.0.0.1:8000/api/register',
                    {
                        name:this.name,
                        email:this.email,
                        password:this.password,
                    })
                    .then((res) => {
                        console.log(res)
                        router.push({name: 'Login'})
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },


        }
    }
</script>