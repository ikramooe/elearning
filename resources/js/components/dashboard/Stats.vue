<template>
  <v-container>
    <h1 class="display-1 grey--text">Les statistique</h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="text-center">
          <Bar />
          <v-card-text class="grey lighten-3 py-7"
            >Lorem ipsum dolor sit amet consectetur.</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class=" text-center">
          <Pie />
          <v-card-text class="grey lighten-3 py-7"
            >Lorem ipsum dolor sit amet consectetur.</v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bar from "../charts/Bar";
import Pie from "../charts/Pie";
export default {
  components: {
    Bar,
    Pie
  }
};
</script>

<style></style>
