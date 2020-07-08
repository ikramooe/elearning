<template>
<v-app>
  <div>
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
                <img
                  :src='`/upload/${$page.auth.user.image}`'
                  alt="John"
                />
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
                      alt="John"
                    />
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <div class="subheading">{{$page.auth.user.nom}} {{$page.auth.user.prenom}}</div>
                  <div class="subtitle-2">{{$page.auth.user.email}}</div>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item router to="/profile">
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-capitalize"
                >profile</v-list-item-title
              >
            </v-list-item>
            <v-list-item router to="#">
              <v-list-item-icon>
                <v-icon>mdi-cart</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="text-capitalize"
                >panierrrrrrrrrrrrrrrrrrrrrrrrrrr</v-list-item-title
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
      <v-navigation-drawer right app v-model="drawer">
        <v-list-item two-line dark class="secondary py-7">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{$page.auth.user.nom}} {{$page.auth.user.prenom}}</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

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
        <template v-slot:append>
          <div class="pa-2">
            <v-btn color="secondary" block
              >Logout <v-icon right>mdi-logout</v-icon></v-btn
            >
          </div>
        </template>
      </v-navigation-drawer>
    </nav>
    <v-tabs-items v-model="window">
      <v-tab-item >
        <admin-stats :requests="demandes" />
      </v-tab-item >
      <v-tab-item >
        <AddCourse />
      </v-tab-item>
      <v-tab-item >
        <admin-courses :frome="formations"  />
      </v-tab-item  >
      <v-tab-item >
        <students :clients="users" />
      </v-tab-item>
      <v-tab-item>
        <stats />
      </v-tab-item>
    </v-tabs-items>
  </div>
</v-app>
</template>

<script>
//Dashboard sub components
import AdminStats from "../components/dashboard/AdminStats.vue";
import Stats from "../components/dashboard/Stats.vue";
import AdminCourses from "../components/dashboard/AdminCourses.vue";
import Students from "../components/dashboard/Students.vue";
import AddCourse from "../components/dashboard/AddCourse.vue";
import AdminCourse from "../components/dashboard/AdminCourse.vue";
export default {
  props :['formations','users','demandes'],
  data() {
    return {
      window: 2,
      drawer: true,
      activatedTab: null,
      item: 0,
      items: [
        {
          text: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          components:Stats,
          path: "ede",
        },
        {
          text: "Ajouter une formation",
          icon: "mdi-format-list-bulleted-square",
          path: "courses",
        },
        {
          text: "Mes formations",
          icon: "mdi-format-list-bulleted-square",
          path: "couffffrses",
        },

        {
          text: "Les élèves",
          icon: "mdi-account-details-outline",
          path: "students",
        },
        { text: "Mes Statistiques", icon: "mdi-chart-arc", path: "stats" },
      ],
      right: null,
    };
  },

  components: {
    AdminStats,
    Stats,
    AdminCourses,
    Students,
    AddCourse
  },
};
</script>

<style></style>
