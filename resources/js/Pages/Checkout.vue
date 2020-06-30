<template>
<v-app>
  <div class="checkout-page">
    <Navbar />
    <section class="page-intro py-7 secondary ">
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <h1 class="white--text display-1">Checkout</h1>
          <v-breadcrumbs dark :items="breadCrumbLinks" large></v-breadcrumbs>
        </div>
      </v-container>
    </section>
    <section class="py-7">
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <h2>Checkout</h2>
            <v-form>
              <v-radio-group v-model="paymentMethod" row>
                <v-radio value="paypal">
                  <template v-slot:label>
                    Par
                    <v-img
                      class="ml-2"
                      width="100"
                      :src="'images/paypal.png'"
                    ></v-img>
                  </template>
                </v-radio>

                <v-radio label="Preuve de payement" value="pay-proof"></v-radio>
              </v-radio-group>
            </v-form>

            <v-card
              v-if="paymentMethod === 'paypal'"
              class="grey lighten-3 pa-5"
              flat
              outlined
              rounded
            >
              <v-card-title
                ><v-icon left>mdi-lock</v-icon> Connexion
                sécurisée</v-card-title
              >
              <v-card-text>
                {{total}}Afin de finaliser votre transaction, nous vous transférerons
                vers Serveurs sécurisés de PayPal.</v-card-text
              >
            </v-card>

            <v-form v-if="paymentMethod === 'pay-proof'">
              <v-file-input
                prepend-icon="mdi-file"
                show-size
                label="Uploader le preuve de payment"
              ></v-file-input>
            </v-form>
          </v-col>
          <v-col cols="12" md="5">
            <v-card class="grey lighten-3 pa-5" flat outlined rounded>
              <v-card-title
                ><v-icon left>mdi-information-outline</v-icon>
                Informations</v-card-title
              >
              <v-list color="grey lighten-3" v-for="i in 3" :key="i">
                <v-list-item>
                  <v-list-item-icon
                    ><v-icon color="secondary"
                      >mdi-check</v-icon
                    ></v-list-item-icon
                  >
                  <v-list-item-content
                    >Lorem ilorem Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit..</v-list-item-content
                  >
                </v-list-item>
              </v-list>
              <v-btn class="mt-7" block color="secondary" v-on:click="payment">continuer</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <AppFooter />
    
  </div>
   </v-app>
</template>

<script>
//GLOBALS
import Navbar from "../components/globals/Navbar";
import AppFooter from "../components/globals/AppFooter";

export default {
  methods:{
    payment(){
      this.$inertia.visit(route('user.pay'));
    }
  },
  props:['total'],
  data() {
    return {
      info :{
          total : this.total 
      },
      paymentMethod: "paypal",
      breadCrumbLinks: [
        {
          text: "Accueil",
          disabled: false,
          to: "/"
        },

        {
          text: "Checkout",
          disabled: true
        }
      ]
    };
  },
  components: {
    Navbar,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "../../sass/globals";
</style>
