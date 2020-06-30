<template>
  <v-app>
  <div>
    <AdminNav />
    <router-view></router-view>
  </div>
  </v-app>
</template>

<script>
//GLOBALS
import AdminNav from "../components/globals/AdminNav";
export default {
  components: {
    AdminNav
  }
};
</script>

<style></style>
