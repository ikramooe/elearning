<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-3" flat outlined color="yellow lighten-5">
            <v-row>
              <v-col cols="4">
                <v-icon size="80">mdi-account-multiple-outline</v-icon>
              </v-col>
              <v-col cols="8">
                <h3 class=" font-weight-medium">Utulisateurs</h3>
                <h2 class=" font-weight-medium">400</h2>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card class="pa-3" flat outlined color="orange lighten-5">
            <v-row>
              <v-col cols="4">
                <v-icon size="80">mdi-account-multiple-plus-outline</v-icon>
              </v-col>
              <v-col cols="8">
                <h3 class=" font-weight-medium">Demandes</h3>
                <h2 class=" font-weight-medium">15</h2>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <section class="requestes-section">
      <v-container>
        <h2 class="mb-3">Les Demandes</h2>
        <v-simple-table :fixed-header="fixedHeader" :height="height">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nom et Prénom</th>
                <th class="text-left">Contrat</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="account in accounts" :key="account.name">
                <td>{{ account.first_name + " " + account.last_name }}</td>

                <td>
                  <v-btn small class="pl-0" text color="success">
                    Télécharger le contrat
                  </v-btn>
                </td>

                <td>
                  <v-btn small color="success">
                    accepter
                  </v-btn>
                </td>
                <td>
                  <v-btn fab dark depressed x-small color="error">
                    <v-icon dark>mdi-minus</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </section>
  </div>
</template>
<script>
import Bar from "../charts/Bar";
import Pie from "../charts/Pie";
export default {
  data() {
    return {
      dense: false,
      fixedHeader: true,
      height: 300,
      accounts: [
        {
          first_name: "Dolly",
          last_name: "Roome",
          contract: "http://dummyimage.com/135x100.png/ff4444/ffffff"
        },
        {
          first_name: "Cozmo",
          last_name: "Novotna",
          contract: "http://dummyimage.com/242x212.png/5fa2dd/ffffff"
        },
        {
          first_name: "Zabrina",
          last_name: "Blowfield",
          contract: "http://dummyimage.com/166x141.png/ff4444/ffffff"
        },
        {
          first_name: "Shirleen",
          last_name: "Allcott",
          contract: "http://dummyimage.com/108x129.png/cc0000/ffffff"
        },
        {
          first_name: "Alphonse",
          last_name: "Yewen",
          contract: "http://dummyimage.com/132x171.png/ff4444/ffffff"
        },
        {
          first_name: "Devondra",
          last_name: "Kleinhaut",
          contract: "http://dummyimage.com/162x236.png/dddddd/000000"
        },
        {
          first_name: "Jodee",
          last_name: "Coolbear",
          contract: "http://dummyimage.com/211x119.png/cc0000/ffffff"
        },
        {
          first_name: "Fiorenze",
          last_name: "Sylett",
          contract: "http://dummyimage.com/153x139.png/dddddd/000000"
        },
        {
          first_name: "Maudie",
          last_name: "Kenright",
          contract: "http://dummyimage.com/223x102.png/5fa2dd/ffffff"
        },
        {
          first_name: "Chucho",
          last_name: "Bullon",
          contract: "http://dummyimage.com/107x230.png/ff4444/ffffff"
        }
      ]
    };
  },
  components: {}
};
</script>

<style></style>
