<template>
  <!--recent course card -->
  <v-card class="my-7">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar style="position:relative" size="120" tile>
        <div class="overlay">
          <v-icon color="white" size="50" >mdi-play-circle</v-icon>
        </div>
        <v-img :src="'images/slide2.jpg'"></v-img>
      </v-avatar>
      <div>
        <v-card-title class="headline"
          >Lorem ipsum dolor sit amet consectetur.</v-card-title
        >

        <v-card-subtitle>Lorem, ipsum dolor.</v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "rcc",
};
</script>

<style lang="scss">
.overlay {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.288);
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
