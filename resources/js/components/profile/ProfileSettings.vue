<template>
  <div>
    <v-card class="pa-10 text-center mb-7">
      <h2>les paramètres de compte</h2>
      <p class="subheding mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </v-card>
    <v-card class="pa-10">
      <v-form class="w-75 mx-auto mt-10">
        <v-row dense>
          <v-col cols="12">
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="email"
              outlined
              label="Email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              type="password"
              :rules="[rules.counter]"
              v-model="password"
              outlined
              label="Mot de passe"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              type="password"
              :rules="[rules.same]"
              outlined
              v-model="passwordConfirm"
              label="Confirmer le Mot de passe"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="secondary"
          >enregister <v-icon right>mdi-content-save-outline</v-icon></v-btn
        >
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: this.$page.auth.user.email,
      
      password: "",
      passwordConfirm :"",
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
      },
    };
  },
};
</script>

<style></style>
