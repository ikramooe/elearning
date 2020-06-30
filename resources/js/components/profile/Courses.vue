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
          <tr>
            <td class="text-capitalize font-weight-bold">efeezreztzet</td>
            <td>
              <v-chip
                class="error lighten-5  error--text"
                label
                text-color="white"
                >hhhhhhhhhhhh</v-chip
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
  computed: {
    
  },

  data() {
    return {
      formations:{},
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
