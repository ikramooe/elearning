<template>
  <v-container>
    <h1 class="display-1 grey--text">Les statistique</h1>

    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-7 text-center">
          <Bar />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-7 text-center">
          <Pie />
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
