<template>
  <v-app>
  <div class="text-center pa-10">
    <h2 class="text-center text-uppercase">🔴AQAD E-Learning views 🔴</h2>

    <v-container>
      <v-row>
        <v-col cols="12" md="4" v-for="route in routes" :key="route.name">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <p class="display-1 text--primary">
                {{ route.name }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn router :to="route.path" text color="deep-purple accent-4">
                GO TO
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          path: "/home",
          name: "Home",
        },
        {
          path: "/register",
          name: "Register",
        },
        {
          path: "/login",
          name: "Login",
        },
        {
          path: "/profile",
          name: "Profile",
        },
        {
          path: "/shoppingCart",
          name: "shoppingCart",
        },
        {
          path: "/checkOut",
          name: "checkOut",
        },
        {
          path: "/course",
          name: "Course",
        },
      ],
    };
  },
};
</script>

<style></style>
