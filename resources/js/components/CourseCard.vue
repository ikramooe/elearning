<template>
  <v-card outlined class="my-7 mx-auto" max-width="374">
    <v-img
      height="300"
      :src='`/formations/${thumbnail}`'
    ></v-img>

    <v-card-title
      >{{titre}}</v-card-title
    >

    <v-card-text>
      <div class="subtitle-2">
        Public visé : {{type}}.
      </div>
    </v-card-text>

    <v-card-actions>
      
      <Inertia-link :href='`/cours/${type}/${id}/overview`'>
      <v-btn color="deep-purple lighten-2" text >
        voir plus
      </v-btn>
      </Inertia-link>
  
    </v-card-actions>
  </v-card>
  
</template>

<script>
export default {
  name: "CourseCard",
  props:['type','id','titre','thumbnail'],
  methods:{
    overview(){
      this.$inertia.post(route('course.details'),this.information)
    }
  }
};
</script>

<style></style>
