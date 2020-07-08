<template>
  <v-app>
  <div>
    <Navbar />
    <section class="page-intro py-7 secondary ">
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <h1 class="white--text display-1">
            <v-icon color="white" size="50">mdi-comment-quote-outline</v-icon>
            Feed
          </h1>
          <v-breadcrumbs dark :items="breadCrumbLinks" large> </v-breadcrumbs>
        </div>
      </v-container>
    </section>
    <!-- Feeds section start -->
    <section class="py-4">
      <v-container>
        <div>
          <PostCard />
        </div>
      </v-container>
    </section>
    <!-- Feeds section end -->
    <AppFooter />
  </div>
 </v-app>
</template>

<script>
//GLOBALS
import Navbar from "../components/globals/Navbar";
import AppFooter from "../components/globals/AppFooter";
import PostCard from "../components/Postcard";
export default {
  props:['posts'],
  components: {
    Navbar,
    AppFooter,
    PostCard
  }
};
</script>

<style></style>