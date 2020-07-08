<template>
  <v-app>
  <div>
    <v-card class="pa-10 text-center mb-7">
      <h2>Mes formations</h2>
      <p class="subheding mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </v-card>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead class="">
          <tr>
            <th class="text-left text-uppercase">Nom</th>
            <th class="text-left text-uppercase">état</th>
            <th class="text-left text-uppercase">contrat</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="formation in formations" :key="formation.id_formation">
            <td class="text-capitalize font-weight-bold">{{formation.nomF}}</td>
            <td v-if="formation.accessible==1">
              <Inertia-link :href='`formation/${formation.nomF}/${formation.id_formation}`'>             
              <v-btn
                class="error lighten-5  error--text"
                label
                text-color="white"
                >Voir formation
              </v-btn>
            </Inertia-link>
            </td>
            
            <td v-if="formation.accessible==0">
              <v-chip
                class="error lighten-5  error--text"
                label
                text-color="white"
                >Waiting for approval </v-chip
              >
            </td>
            

            <td>
              <v-btn color="success" small depressed outlined tile
                >télécharger<v-icon right>mdi-download</v-icon></v-btn
              >
            </td>
            <td>
              <v-btn color="primary" small depressed outlined tile
                >uploader<v-icon right>mdi-download</v-icon></v-btn
              >
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
  </v-app>
</template>

<script>
export default {
  props:['formations'],
  methods:{
    
  },
  computed: {
    
  },

  data() {
    return {
    
      courses: [
        {
          name: "titre de formation",
          status: "en cours",
          progress: 50,
          downloadContractUrl: "https://google.com",
        },
        {
          name: "titre de formation",
          status: "pas validé",
          downloadContractUrl: "https://google.com",
        },
        {
          name: "titre de formation",
          status: "validé",
          downloadContractUrl: "https://google.com",
        },
        {
          name: "titre de formation",
          status: "pas validé",
          downloadContractUrl: "https://google.com",
        },
        {
          name: "titre de formation",
          status: "en attente",
          downloadContractUrl: "https://google.com",
        },
      ],
    };
  },
};
</script>

<style>
.v-data-table-header {
  text-transform: uppercase;
  background: var(--v-primary-lighten5);
}
</style>
