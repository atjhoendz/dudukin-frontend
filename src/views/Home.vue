<template>
  <div class="home">
    <v-img dark src="@/assets/table-in-vintage-restaurant-6267.jpg" min-height="650" max-height="700">
      <v-layout fill-height align-center pa-3>
        <v-flex class="d-flex flex-column align-center">
          <h1 class="dudukin-logo display-4 my-12">Duduk.in</h1>
          <p class="display-2 font-weight-light deep-orange--text text-center">Why you should use this site</p>
          <v-btn x-large color="deep-orange my-12" @click="overlayLogin = !overlayLogin">
            <v-icon left>mdi-silverware-fork-knife</v-icon>Restaurants Near You
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
          <v-form>
            <v-text-field label="Email" name="email" type="email" outlined>
            </v-text-field>
            <v-text-field label="Password" name="password" type="password" outlined>
            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn block depressed>Login</v-btn>
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
            <v-text-field label="Email" name="email" type="email" outlined>
            </v-text-field>
            <v-text-field label="Password" name="password" type="password" outlined>
            </v-text-field>
            <v-text-field label="Confirm Password" name="confirm-password" type="password" outlined>
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
export default {
  name: 'home',
  data: () => ({
    absolute: false,
    opacity: 0.46,
    overlayLogin: false,
    overlayRegister: false
  })
}
</script>
