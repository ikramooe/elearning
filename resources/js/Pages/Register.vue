<template>
  <v-app>
  <div class="login full-height">
    <v-row class="full-height" no-gutters>
      <v-col cols="12" md="5">
        <div class="login__img full-height"></div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="pa-5">
          <div class="text-center">
            <img :src="'images/logo.png'" height="40" alt="" />
            <h1 class="font-weight-bold primary--text">Inscription</h1>
            <div class="subheading">
              Vous avez déjà un compte?
              <span class="secondary--text font-weight-bold">se connecter</span>
            </div>
          </div>
          <v-form class="w-75 mx-auto mt-10" method="POST" @submit.prevent="CreateUser">
            <v-input type="hidden" name="_token" :value="csrf"></v-input>
            <v-row dense>
              <v-col cols="12">
                <v-row dense class="align-center">
                  <v-col cols="12" md="6">
                    <div>Vous êtes ?</div>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-radio-group v-model="form.type" row>
                      <v-radio label="Personne" value="personne"></v-radio>
                      <v-radio label="Entreprise" value="entreprise"></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="[rules.required]"
                  v-model="form.nom"
                  outlined
                  label="Nom"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="[rules.required]"
                  v-model="form.prenom"
                  outlined
                  label="Prénom"
                ></v-text-field>
              </v-col>
              <v-col v-if="form.type === 'entreprise'" cols="12">
                <v-text-field
                  :rules="[rules.required]"
                  v-model="form.entrep"
                  outlined
                  label="Nom de votre entreprise"
                ></v-text-field>
              </v-col>
              <v-col cols="12" v-if="form.type === 'personne'">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="form.datenaiss"
                      label="Date de naissance"
                      outlined
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="form.datenaiss"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  ></v-date-picker>
                </v-menu>
              </v-col>
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
                  v-model="form.phone"
                  outlined
                  label="Numéro de téléphone"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  :rules="[rules.counter]"
                  v-model="form.password"
                  outlined
                  label="Mot de passe"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  :rules="[rules.same]"
                  outlined
                  v-model="form.passwordConfirm"
                  label="Confirmer le Mot de passe"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn type="submit"  color="secondary" block
              >Enregister <v-icon right="">mdi-login-variant</v-icon></v-btn
            >
          </v-form>
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
      nom: "",
      prenom: "",
      email: "",
      entrep:"",
      phone: "",
      password: "",
      passwordConfirm: "",
      type: "personne",
      datenaiss: null,
      },
      menu: false,
    
      rules: {
        required: (value) => !!value ||  "Champ pbligatoire.",
        same: (value) =>
          value == this.form.password || "les mots de passe ne sont pas les mêmes",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    CreateUser(){
      
      this.$inertia.post(route('user.create',this.form));
    }
  },
};
</script>

<style lang="scss">
@import "../../sass/helpers.scss";
.login {
  &__img {
    background-image: url("/elearning/public/images/slide2.jpg");
    background-attachment: fixed;
    height: 100%;
    background-size: cover;
  }
}
</style>
