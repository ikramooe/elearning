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
                    >{{$page.auth.user.type}}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-tabs v-model="window" vertical class="pl-0 text-left">
              <v-tab
                v-for="(item, i) in items"
                :key="i"
                class="pl-5  justify-start text-body-2 text-capitalize"
              >
                <v-icon left class="mr-4">{{ item.icon }}</v-icon>
                {{ item.text }}
              </v-tab>
            </v-tabs>
            </v-col>
          <v-col cols="12" md="9">
            <v-tabs-items v-model="window">
              <v-tab-item>
                <UserProfile />
              </v-tab-item>
              <v-tab-item>
                <Courses v-bind:formations="formations" />
              </v-tab-item>
              <v-tab-item>
                <PurshaseHistory />
              </v-tab-item>
              <v-tab-item>
                <PurshaseHistory />
              </v-tab-item>
              <v-tab-item>
                <PurshaseHistory />
              </v-tab-item>

              <v-tab-item>
                <ProfileSettings />
              </v-tab-item>
            </v-tabs-items>
          </v-col>

            
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
import UserProfile from "../components/profile/UserProfile";
import Courses from "../components/profile/Courses";
import ProfileSettings from "../components/profile/ProfileSettings";

export default {

mounted(){
      axios.get('/forma')
          .then((response)=>{
            this.formations = response.data.formations
            
      })
},  
data: () => ({
    window: null,
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
    AppFooter,
    UserProfile,
    Courses,
    ProfileSettings
  }, 
  //updated() {
  //if (this.$page.Message.success) {
  //  this.$toast.open({
  //      message: "updated successfully",
  //      type: "success",
  //      duration: 9000,
  //      dismissible: true,
  //      position:"top"
  //    })
  //}
//},
  methods: {
        EditUser(){
          return this.$inertia.post(route("user.edit",this.form))
        }
      },

  
};
</script>

<style>
</style>
