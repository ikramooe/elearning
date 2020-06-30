<template>
  <div outlined max-width="700" class="mx-auto">
    <v-card class="text-left  ">
      <v-list-item>
        <v-list-item-avatar size="65" color="grey">
          <img :src="'images/yassine.jpg'" alt="" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subheading">Yassine</v-list-item-title>
          <v-list-item-subtitle>2 min ago</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        Visit ten places on our planet that are undergoing the biggest changes
        today.
      </v-card-text>

      <v-card-actions>
        <v-btn text>
          <v-icon left color="red">mdi-heart</v-icon>
          <span>21</span>
        </v-btn>
        <v-btn text>
          <v-icon left color="grey">mdi-comment</v-icon>
          <span>7</span>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="text-left mx-auto pa-6">
      <v-list-item>
        <v-list-item-avatar
          size="50"
          class="d-flex justify-center align-center align-self-start"
          color="red lighten-2"
        >
          <span class="white--text caption">AL</span>
        </v-list-item-avatar>
        <v-list-item-content class="grey lighten-3 pa-3 rounded">
          <div class="subheading primary--text text-capitalize">john doe</div>
          <p class="subtitle-2  gray--text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            numquam molestias odio laborum, itaque distinctio quisquam excepturi
            eligendi voluptas eius?
          </p>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <v-card class="text-left mx-auto pa-6">
      <v-list-item>
        <v-list-item-avatar
          size="50"
          class="d-flex justify-center align-center"
          color="primary"
        >
          <span class="white--text caption">CJ</span>
        </v-list-item-avatar>
        <v-list-item-content class=" pa-3 rounded">
          <v-text-field
            placeholder="érire un commentaire"
            hide-details
            outlined
            filled
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "PostCard",
};
</script>

<style>
.border-left {
  border-left: 4px solid var(--v-primary-base) !important;
}
</style>
