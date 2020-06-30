<template>
  <v-app>
  <div class="profile">
    <Navbar />
    <div v-if="$page.Message.success" class="alert alert-success mt-4">
             {{$page.Message.success}}
    </div>
    <section class="py-7">
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-list>
              <v-list-item>
                <v-list-item-avatar size="100">
                  <v-img :src='`/upload/${$page.auth.user.image}`'></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="title"
                    >{{$page.auth.user.nom}} {{$page.auth.user.prenom}} </v-list-item-title
                  >
                  <v-list-item-subtitle
                    >{{$page.auth.user.image}}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-col>
            <v-tabs vertical
                
            >
                          <v-tab >
              Option
              </v-tab>
              <v-tab>
              Another Selection
              </v-tab>
              <v-tab>
              Items
              </v-tab>
              <v-tab>
              Another Screen
              </v-tab>
           <v-tab-item>
             <div>
    <v-card class="pa-10 text-center mb-7">
      <h2>Profile d'utilisateur</h2>
      <p class="subheding mb-0">Ajoutez des informations vous concernant</p>
    </v-card>
    <v-card class="pa-10">
      <v-form enctype="multipart/form-data">
        
        <v-row dense>
          
          <v-col cols="12">
            <v-text-field 
              
              outlined
              label="Nom Entreprise"
            ></v-text-field>

            <v-text-field
              
              outlined
              label="Nom"
            ></v-text-field>
            <v-text-field
              
              
              outlined
              label="Prénom"
            ></v-text-field>
            <v-text-field
              
              
              outlined
              label="Téléphone"
            ></v-text-field>
            <v-text-field
              
              
              outlined
              label="Email"
            ></v-text-field>
            <v-text-field
              
        
              outlined
              label="Date Naissance"
            ></v-text-field>

          </v-col>
          <v-col cols="12">
            <v-file-input
              
              outlined
              
              accept="image/*"
              placeholder="Changer la photo de profile"
              prepend-icon="mdi-camera"
              
              id="loadpicture"
              type="file"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-btn type="submit" color="secondary" 
          >enregister <v-icon right>mdi-content-save-outline</v-icon></v-btn
        >
      </v-form>
    </v-card>
  </div>
 
           </v-tab-item>    
            </v-tabs>
        </v-row>
      </v-container>
    </section>
    <AppFooter />
  </div>
  </v-app>
</template>

<script>
import Navbar from "../components/globals/Navbar";
import AppFooter from "../components/globals/AppFooter";

export default {

mounted(){
      axios.get('/forma')
          .then((response)=>{
            this.formations = response.data.formations
            
      })
},  
data: () => ({
    formations:{},
    activatedTab: null,
    item: 0,
    
    
    items: [
      { text: "Profile",
       icon: "mdi-account-outline", 
       path: "details" },
      {
        text: "Mes Formations",
        icon: "mdi-format-list-bulleted-square",
        path: "cours"
      },
      {
        text: "Mes Certaficats",
        icon: "mdi-certificate-outline",
        path: "history"
      },
      { text: "Historique d'achat", icon: "mdi-history", path: "history" },
      {
        text: "Mes Réalisations",
        icon: "mdi-check-circle",
        path: "history"
      },

      {
        text: "Paramètres du Compte",
        icon: "mdi-cog-outline",
        path: "parametres"
      }
    ]
  }),
  components: {
    Navbar,
    AppFooter
  }, 
  updated() {
  if (this.$page.Message.success) {
    this.$toast.open({
        message: "updated successfully",
        type: "success",
        duration: 9000,
        dismissible: true,
        position:"top"
      })
  }
},
  methods: {
        EditUser(){
          return this.$inertia.post(route("user.edit",this.form))
        }
      },

  
};
</script>

<style>
</style>
