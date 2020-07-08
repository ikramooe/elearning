<template>
<v-app>
  <v-container>
    <h2 class="grey--text font-weight-medium mb-7">Ajouter une formation</h2>
    <v-form>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"
            >Des informations générales</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"
            >les détails</v-stepper-step
          >

          <v-divider></v-divider>

          <v-stepper-step step="3">Média</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-text-field label="Titre de formation" outlined v-model="form.nomF"></v-text-field>
            <v-text-field label="pole" outlined v-model="form.pole"></v-text-field>
            <v-select :items="items" outlined label="Catégorie" v-model="form.type"></v-select>
            <v-text-field label="formateur" outlined :value="this.$page.auth.user.nom +' '+this.$page.auth.user.prenom" disabled></v-text-field>
            <v-text-field label="Ref" outlined v-model="form.reference"></v-text-field>
            

            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>
            

            <v-btn text>annuler</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-text-field label="Description" outlined v-model="form.description"></v-text-field>
            <v-text-field label="public vise" outlined v-model="form.publicvise"></v-text-field>
            <v-text-field label="objectifs pedagogiques" outlined v-model="form.objped"></v-text-field>
            <v-text-field label="Prerequis" outlined v-model="form.prerequis"></v-text-field>
            <v-text-field
              label="Temps de travail estimé"
              outlined
              v-model="form.duree"
            ></v-text-field>
            <div v-if="form.type=='presentielle'">
            <v-text-field label="Lieu" outlined v-model="form.lieu"></v-text-field>
            <v-text-field label="dates" outlined v-model="form.dates"></v-text-field>
            </div>
            <v-text-field label="Prix" outlined v-model="form.prix"></v-text-field>

            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>
            <v-btn color="primary" @click="e1 = 1">
              back
            </v-btn>

            <v-btn text>annuler</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-file-input 
              accept="image/*"
              type="file"
              id="loadpicture"
              @change="newAvatar()"
              label="Thumbnail de formation"
            ></v-file-input>
            <v-btn color="primary" @click="e1 = 2">
              back
            </v-btn>
            <v-btn
              color="primary"
              @click="addformation()"
            >
              Crée
            </v-btn>

            <v-btn text>annuler</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-form>
  </v-container>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      thumbnail:'',
      formData: new FormData(),
      form:{
      idformateur:this.$page.auth.user.id,
      description:"",
      prix:"350",
      reference:"",
      nomF:"",
      type:"",
      publicvise:"",
      objped:"",
      dates:"",
      lieu:"",
      pole:"",
      duree:""
      },
      e1: 1,
      items: ["presentielle", "en ligne"]
    };
  },
  methods:{
    addformation(){
      this.formData.set('form',JSON.stringify(this.form))
      this.formData.append('file', this.file);
      this.$inertia.post(route('formation.add'),this.formData)
    
    },
    newAvatar(event) {
      console.log(document.getElementById('loadpicture').files[0]);        
      this.file = document.getElementById('loadpicture').files[0];      
            
      }
  }
};
</script>

<style></style>
