<template>
  <v-app>
  <div class="checkout-page">
    <Navbar  ref="Navbar" />
    <section class="page-intro py-7 secondary ">
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <h1 class="white--text display-1">Shopping cart</h1>
          
        </div>
      </v-container>
    </section>
    <section class="py-7">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-card
              flat
              outlined
              class="mx-auto mb-7 pa-2"
              tile
              v-for="formation in formations"
              :key="formation.cours" 
            >
              <v-row>
                <v-col cols="2">
                  <v-img
                    :src='`/formations/${formation.thumbnail}`'
                    aspect-ratio="1.4"
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <h4 class="font-weight-medium">
                    {{formation.nomF}}.
                  </h4>
                  <span class="caption">par {{formation.nom}} {{formation.prenom}}.</span>
                </v-col>
                <v-col cols="2" class="" >
                  <v-btn text small class="text-capitalize" color="error" @click="remove(formation.id_formation)" >
                    annuler
                  </v-btn>
                </v-col>
                <v-col cols="2">
                  <h4
                    class="secondary rounded   text-center white--text  font-weight-medium"
                  >
                    <v-icon size="20" color="white" 
                      >mdi-tag-multiple-outline</v-icon
                    >
                    {{formation.prix}} DZD
                  </h4>
                  <!--<div v-if="$page.auth.user.type=='entreprise'"> -->
                    <div class="grey lighten-2 rounded text-center">
                      <v-btn small fad icon @click="formation.nbr_stagiaires--" :disabled="formation.nbr_stagiaires <= 1"><v-icon>mdi-minus</v-icon></v-btn>
                      <span class="mx-4">{{formation.nbr_stagiaires}}</span>
                      <v-btn small fad icon  @click="formation.nbr_stagiaires++" ><v-icon>mdi-plus</v-icon></v-btn>
                    <!-- </div> -->
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card class="pa-7" outlined>
              <h3 class="grey--text lighten-2">Total :</h3>
              <h2 class="display-1 font-weight-bold my-5" >{{totalAmount}} DZD</h2>
              
              <v-btn block color="secondary" v-on:click="checkout">checkout</v-btn>
            
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
  props:['formations','total'],
  computed: {
        totalAmount: function () {
            var sum = 0;
            if(this.formations != null) {
            this.formations.forEach(e => {
                        sum += e.prix*e.nbr_stagiaires;
                    });
            }
                    this.form.total = sum;
                    return sum
                
      }
  },
  mounted(){
    this.totale = this.totalAmount;
  },
  methods:{
    checkout(){
      this.$inertia.post(route('user.checkout',this.form))
    },
    prix(){
    var sum = 0;
    if(this.formations === null) this.total=0
    else {
    this.formations.forEach(e => {
          sum += e.prix;
          });
        this.totale = sum
  }
  },
  
  remove(id){
      this.prix();
      this.$inertia.post(route('panier.remove',id));
      this.$refs.Navbar.change();
      
    },
  
  
},
data() {
    return {
      nbr_stagiaires:1,
      totale:0,
      val:0,
      form:{
        formations:this.formations,
        total:0
      },
      breadCrumbLinks: [
        {
          text: "Accueil",
          disabled: false,
          to: "home",
        },

        {
          text: "Shopping cart",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
    };
  },
  components: {
    Navbar,
    AppFooter,
  },
  }
</script>

<style lang="scss">
@import "../../sass/globals";
</style>
