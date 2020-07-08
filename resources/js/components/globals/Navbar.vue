<template>
  <nav>
    <v-toolbar>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <inertia-link href="/home">
      <v-toolbar-title>AQAD</v-toolbar-title>
      </inertia-link>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div
            class="mx-5 text-capitalize hidden-md-and-down"
            text
            v-bind="attrs"
            v-on="on"
          >
            Les poles

            <v-icon>mdi-chevron-down</v-icon>
          </div>
        </template>
        <v-list>
          <v-list-item router to="/home">
            <v-list-item-title class="text-capitalize"
              >Lorem ipsum dolor sit amet.</v-list-item-title
            >
          </v-list-item>
          <v-list-item router to="#">
            <v-list-item-title class="text-capitalize"
              >Lorem, ipsum dolor.</v-list-item-title
            >
          </v-list-item>
          <v-list-item router to="#">
            <v-list-item-title class="text-capitalize">Lorem</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <inertia-link href="/feed">
      <v-btn class="text-capitalize hidden-md-and-down" text>
        feed
        <v-icon right>mdi-comment-quote-outline</v-icon>
      </v-btn>
      </inertia-link>
      <v-text-field
        dense
        class="ml-10"
        placeholder="Rechercher"
        hide-details
        outlined
        filled
      >
        <v-icon slot="append" color="secondary">
          mdi-magnify
        </v-icon>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            class="hidden-md-and-down"
            icon
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-btn icon color="black">
              <v-icon size="30">mdi-cart-outline</v-icon>
            </v-btn>
          </v-btn>
        </template>
        <div>
          <v-card class="mx-auto" max-width="400" tile v-for="formation in this.formations" :key="formation.cours">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{formation.nomF}}</v-list-item-title>
                <v-list-item-subtitle class="caption"
                  >Greyhound divisely hello coldly
                  fonwderfully</v-list-item-subtitle
                >
                <span class="secondary--text font-weight-bold text-right"
                  >{{formation.prix}}</span
                >
              </v-list-item-content>

              <v-list-item-avatar tile size="70" color="grey" class="rounded">
                <v-img aspect-ratio="1.1" :src="'images/slide2.jpg'" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
          <v-card color="grey lighten-4" class="pa-4 py-7">
            <div class="d-flex align-center ">
              <span class="mr-4">Total : </span>
              <h2 class="font-weight-regular">{{this.total}}</h2>
            </div>
            <v-card-actions>
              <v-btn color="secondary" block="" v-on:click="panier"
                >Aller au Panier

                <v-icon right="">mdi-cart</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-menu>

      <v-btn icon>
        <v-icon color="black" size="30">mdi-bell-outline</v-icon>
      </v-btn>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            class="hidden-md-and-down"
            icon
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar size="35">
              <img :src='`/upload/${$page.auth.user.image}`' alt="John" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list width="300" class="py-0">
          <v-list-item class="grey lighten-3 py-5">
            <v-row no-gutters>
              <v-col cols="4">
                <v-avatar size="70">
                  <img
                    :src='`/upload/${$page.auth.user.image}`'
                    
                  />
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <div class="subheading" >{{$page.auth.user.nom}} {{$page.auth.user.prenom}}</div>

                <div class="subtitle-2">{{$page.auth.user.email}}</div>
              </v-col>
            </v-row>
          </v-list-item>
          <inertia-link href="/profile">
          <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >profile</v-list-item-title
            >
          </v-list-item>
          </inertia-link>
          <inertia-link href="/panier">
          <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >panier</v-list-item-title
            >
          </v-list-item>
          </inertia-link>
          
          <v-list-item router to="profile/cours">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >mes foramtions</v-list-item-title
            >
          </v-list-item>
          

          <v-list-item v-on:click="Logout()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >déconnecter</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <inertia-link href="/home">
          <v-list-item-title class="title">
            AQAD
          </v-list-item-title>
          </inertia-link>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
  //  updated(){
  //    axios.get('/ss')
  //        .then((response)=>{
  //          this.formations = response.data.formations
  //          this.total=response.data.total
  //    })
  //},
  mounted(){
      axios.get('/ss')
          .then((response)=>{
            this.formations = response.data.formations
            this.total=response.data.total
      })
  },
  props :{
    auth:Object,
    
    
        },
  
  data(){
    return {
      formations:{},
      total:0,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
        { title: "cours", icon: "mdi-help-box", path:"/profile/cours" },
      ],
      right: null,
      drawer: false,
    };
  },
  methods:{
    Logout(){
      this.$inertia.post(route('logout'));
    },
    panier(){
      this.$inertia.visit(route('panier'))
    },
    change(){
      axios.get('/ss')
          .then((response)=>{
            this.formations = response.data.formations
            this.total=response.data.total
      })


    }
  }
};
</script>
