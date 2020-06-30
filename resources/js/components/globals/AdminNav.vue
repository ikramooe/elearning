<template>
  <nav>
    <v-toolbar flat>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text">Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>

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
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list width="300" class="py-0">
          <v-list-item class="grey lighten-3 py-5">
            <v-row no-gutters>
              <v-col cols="4">
                <v-avatar size="70">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="8">
                <div class="subheading" ></div>
                <div class="subtitle-2">john-doe-1554@yahoo.fr</div>
              </v-col>
            </v-row>
          </v-list-item>
          <v-list-item router to="/profile">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >prodfdfdfdfdfdfdfdfle</v-list-item-title
            >
          </v-list-item>
          <v-list-item router to="#">
            <v-list-item-icon>
              <v-icon>mdi-cart</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >panier</v-list-item-title
            >
          </v-list-item>
          <v-list-item router to="/profile/courses">
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted-square</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text-capitalize"
              >mes foramtions</v-list-item-title
            >
          </v-list-item>

          <v-list-item router to="#">
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
      <v-list-item two-line dark class="secondary py-7">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/men/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Doe</v-list-item-title>
          <v-list-item-subtitle>Admin</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :v-model="item"
          link
          router
          exact
          :to="`/dashboard/${item.path}`"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="secondary" block
            >Logout <v-icon right>mdi-logout</v-icon></v-btn
          >
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props:{
      auth:Object
  },
  data() {
    return {
      drawer: true,
      activatedTab: null,
      item: 0,
      items: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          path: ""
        },
        {
          text: "Mes Formations",
          icon: "mdi-format-list-bulleted-square",
          path: "courses"
        },
        { text: "Mes Statistiques", icon: "mdi-chart-arc", path: "stats" }
      ],
      right: null
    };
  }
};
</script>
