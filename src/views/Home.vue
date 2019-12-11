<template>
<div class="home">
  <v-img dark src="@/assets/table-in-vintage-restaurant-6267.jpg" min-height="650" max-height="700">
    <v-layout fill-height align-center pa-3>
      <v-flex class="d-flex flex-column align-center">
        <h1 class="dudukin-logo display-4 my-12">Duduk.in</h1>
        <p class="display-2 font-weight-light deep-orange--text text-center">Why you should use this site</p>
        <v-btn x-large color="deep-orange my-12" @click="overlayLogin = !overlayLogin">
          <v-icon left>mdi-silverware-fork-knife</v-icon>Book Now
        </v-btn>
      </v-flex>
    </v-layout>
  </v-img>
  <v-overlay :absolute="absolute" :value="overlayLogin">
    <v-card class="mx-5" outlined light>
      <v-toolbar dense flat>
        <v-toolbar-title>Sign up or login to Duduk.in</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="overlayLogin = !overlayLogin" :ripple="false">
          <v-icon right>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pb-0">
        <v-form ref="form_login" id="login_form" v-model="valid" @submit.prevent="checkLogin" lazy-validation>
          <v-alert dense :type="loginMsg.success ? 'info' : 'error'" :value="true" v-if="showAlert">{{loginMsg.message}}</v-alert>
          <v-text-field label="Email" autofocus clearable error-message :rules="rules.emailRules" v-model="model.email" type="email" outlined required>
          </v-text-field>
          <v-text-field label="Password" clearable hint="At least 6 characters"
            counter :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" error-message :rules="rules.pwdRules" v-model.lazy="model.password" :type="show ? 'text' : 'password'" outlined required @click:append="show = !show">
          </v-text-field>
          <v-btn type="submit" :disabled="!valid" form="login_form" color="blue" block depressed>Login</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <!-- <v-btn block depressed href="/dashboard" @click="btnLogin">Login</v-btn> -->
      </v-card-actions>
      <h4 class="text-center pt-2 pb-0 mb-1">Create an account</h4>
      <v-card-actions>
        <v-btn block depressed @click="overlayLogin = !overlayLogin; overlayRegister = !overlayRegister">Sign up</v-btn>
      </v-card-actions>
      <v-card-text class="pb-0">
        <p class="text-center">By logging in, you agree to Duduk.in's Terms of Service</p>
      </v-card-text>
    </v-card>
  </v-overlay>
  <v-overlay :value="overlayRegister">
    <v-card class="mx-5" outlined light>
      <v-toolbar dense flat>
        <v-toolbar-title>Create an account</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="overlayRegister = !overlayRegister; overlayLogin = !overlayLogin" :ripple="false">
          <v-icon right>mdi-chevron-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pb-0">
        <v-form>
          <v-text-field label="Email" name="regist_email" type="email" outlined>
          </v-text-field>
          <v-text-field label="Password" name="regist_password" type="password" outlined>
          </v-text-field>
          <v-text-field label="Confirm Password" name="regist_confirm-password" type="password" outlined>
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn block depressed>Register</v-btn>
      </v-card-actions>
      <v-card-text class="pb-0">
        <p class="text-center">By creating an account, you agree to Duduk.in's Terms of Service</p>
      </v-card-text>
    </v-card>
  </v-overlay>
</div>
</template>

<script>
// @ is an alias to /src
// import UserService from '@/services/UserService'
import axios from 'axios'
export default {
  name: 'home',
  data: () => ({
    model: {
      email: '',
      password: ''
    },
    rules: {
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      pwdRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Min 6 Characters'
      ]
    },
    loginMsg: {
      success: false,
      message: ''
    },
    showAlert: false,
    show: false,
    valid: false,
    lazy: false,
    absolute: false,
    opacity: 0.46,
    overlayLogin: false,
    overlayRegister: false
  }),
  methods: {
    checkLogin () {
      if (this.$refs.form_login.validate()) {
        var data = {
          email: this.model.email,
          password: this.model.password
        }
        axios.post('http://localhost:8081/api/login', data).then((res) => {
          if (res.data.success) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', res.data.user)

            this.$router.push({
              name: 'katalog'
            })
          } else {
            // console.log(res.data)
            this.loginMsg.message = res.data.message
            this.showAlert = true
          }
        })
      }
    }
  }
}
</script>
