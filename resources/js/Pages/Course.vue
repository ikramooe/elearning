<template>
  <v-app>
  <div class="course-page">
    <Navbar  ref="Navbar" />
    <!-- Intro section start -->
    <section class="course-overview py-5 primary white--text">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <h1 class="display-1 mb-5">
              {{details[0].nomF}}
            </h1>
            <p class="grey--text text--lighten-1">
              {{details[0].lieuF}}
            </p>
            <div class="grey--text text--lighten-1">
              <span class="font-weight-bold   mr-4">Public visé :</span>
              <span>{{details[0].publicvise}}</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <v-img
              height="150"
              aspect-ratio="1.1"
              :src="'images/slide3.jpg'"
            ></v-img>
          </v-col>
        </v-row>

        <div class="d-flex align-center justify-space-between flex-wrap mt-5">
          <div class="">
            
            <v-btn class="mr-5" color="secondary" outlined>
              contrat <v-icon right>mdi-download</v-icon></v-btn
            >
            
            <v-btn color="secondary" v-on:click="addpanier" v-bind:disabled="added">
              ajouter au panier <v-icon right>mdi-cart-outline</v-icon></v-btn
            >
          </div>
          <div class="display-1 font-weight-bold  ">{{details[0].prix}} DZD</div>
        </div>
      </v-container>
    </section>
    <!-- Intro section end-->

    <!-- Info section start-->
    <section class="py-7">
      <v-container>
        <v-row>
          <v-col cols="12" md="8">
            <v-card flat outlined>
              <v-card-title class="font-weight-bold   display-1 "
                >Description</v-card-title
                >
              <v-card-text class="body-1 black--text">
                <p> 
                {{details[0].descriptionF}}
                </p>
              </v-card-text>
            </v-card>
            <v-card flat outlined class="mt-7">
              <v-card-title class="font-weight-bold   display-1 ">
                Pré requis</v-card-title
              >
              <v-list dense v-for="i in 3" :key="i">
                <v-list-item>
                  <v-list-item-icon
                    ><v-icon color="secondary"
                      >mdi-check</v-icon
                    ></v-list-item-icon
                  >
                  <v-list-item-content
                    >{{details[0].prerequis}}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
          <v-col cols="12" md="4"></v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Info section end-->
    <AppFooter />
  </div>
  </v-app>
</template>

<script>
//GLOBALS
import Navbar from "../components/globals/Navbar";
import AppFooter from "../components/globals/AppFooter";
export default {
  data(){
    return {
      parentmessage:false,
      added:false,
      info :{
          user:this.$page.auth.user.id,
          cours:this.details[0].id_formation,
          prix:this.details[0].prix
    }
    }
  
  //updated() {
  //if (this.$page.Message.success) {
  //  this.$toast.open({
  //      message: this.$page.Message.success,
  //      type: "success",
  //      duration: 9000,
  //      disissible: true,
  //      position:"top"
  //    })
  //}
},
  methods:{
    addpanier(){
    
      this.$inertia.post(route('paniertest',this.info));
      this.$toast.open({
        message: "added successfully",
        type: "success",
        duration: 9000,
        dismissible: true,
        position:"top"
      })

      this.$refs.Navbar.change();

    }  
    },
  props:['details','formations'],
  components: {
    Navbar,
    AppFooter,
  },
};
</script>

<style></style>
