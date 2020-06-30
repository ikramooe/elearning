<template>
  <v-app>
  <div class="login full-height">
    <v-row class="full-height" no-gutters>
      <v-col cols="12" lg="7" md="6">
        <div class="login__img full-height"></div>
      </v-col>
      <v-col cols="12" lg="5" md="6">
        <div class="full-height d-flex align-center justify-center">
          <div>
            <div class="text-center">
              <img :src="'images/logo.png'" height="40" alt="" />
              <h1 class="font-weight-bold primary--text">Se connecter</h1>
              <div class="subheading">
                Vous n'avez pas de compte?
                <span class="secondary--text font-weight-bold">s'inscrire</span>
              </div>
            </div>
            <v-form class="w-75 mx-auto mt-10" @submit.prevent="LogUser">
              <v-input type="hidden" name="_token" :value="csrf"></v-input>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    :rules="[rules.required, rules.email]"
                    v-model="form.email"
                    outlined
                    label="Email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="[rules.counter]"
                    v-model="form.password"
                    outlined
                    label="Mot de passe"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-switch
                    v-model="remember"
                    label="Se souvenir de moi"
                  ></v-switch>
                </v-col>
              </v-row>
              <v-btn type="submit" color="success" block
                >Se connecter <v-icon right="">mdi-login-variant</v-icon></v-btn
              >
            </v-form>
          </div>
        </div>
        <v-footer padless>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>AQAD</strong>
          </v-col>
        </v-footer>
      </v-col>
    </v-row>
  </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      form:{
      email: "",
      password: "",
      },
      
      remember: false,
      
  
      rules: {
        required: (value) => !!value || "Champ pbligatoire.",
        same: (value) =>
          value == this.password || "les mots de passe ne sont pas les mêmes",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      }
    }
  },
  methods:{
        LogUser(){
          
          this.$inertia.post(route('login.a',this.form));
        }
      }
    };

</script>

<style lang="scss">
@import "../../sass/helpers.scss";
.login {
  &__img {
    background-image: url("/elearning/public/images/slide1.jpg");
    background-attachment: fixed;
    height: 100%;
    background-size: cover;
    background-position: left;
  }
}
</style>
