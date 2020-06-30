<template>
  <v-app>
  <div>
    <v-card class="pa-10 text-center mb-7">
      <h2>Profile d'utilisateur</h2>
      <p class="subheding mb-0">Ajoutez des informations vous concernant</p>
    </v-card>
    <v-card class="pa-10">
      <v-form  @submit.prevent="EditUser" enctype="multipart/form-data">
        <v-input name="_token" :value="this.csrf">{{user_type}}</v-input>
        <v-row dense>
          
          <v-col cols="12">
            <v-text-field v-if="user_type==='entreprise'"
              :rules="[rules.required]"
              v-model="form.nomENT"
              outlined
              label="Nom Entreprise"
            ></v-text-field>

            <v-text-field
              :rules="[rules.required]"
              v-model="form.nom"
              outlined
              label="Nom"
            ></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              v-model="form.prenom"
              outlined
              label="Prénom"
            ></v-text-field>
            <v-text-field
              :rules="[rules.required]"
              v-model="form.tel"
              outlined
              label="Téléphone"
            ></v-text-field>
            <v-text-field
              :rules="[rules.required, rules.email]"
              v-model="form.email"
              outlined
              label="Email"
            ></v-text-field>
            <v-text-field v-if="user_type=='personne'"
              :rules="[rules.required]"
              v-model="form.datenaiss"
              outlined
              label="Date Naissance"
            ></v-text-field>

          </v-col>
          <v-col cols="12">
            <v-file-input
              :rules="[rules.img]"
              outlined
              v-model="form.image"
              accept="image/*"
              placeholder="Changer la photo de profile"
              prepend-icon="mdi-camera"
              @change="newAvatar()"
              id="loadpicture"
              type="file"
            ></v-file-input>
          </v-col>
        </v-row>
        <v-btn type="submit" color="secondary" 
          >enregister <v-icon right>mdi-content-save-outline</v-icon></v-btn
        >
      </v-form>
    </v-card>
  </div>
  </v-app>
</template>

<script>
export default {
  props:{
    
  },
  data() {
    return {
      
      file:'',
      formData: new FormData(),
      user_type:this.$page.auth.user.type,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      form :{
          nom : this.$page.auth.user.nom ,
          prenom: this.$page.auth.user.prenom,
          tel: this.$page.auth.user.phone,
          email:this.$page.auth.user.email,
          formData:this.formData,
          datenaiss: this.$page.auth.user.datenaiss,
          nomENT:this.$page.auth.user.nomENT,
          
          image:this.xx
          
      },
      rules: {
        img: (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
        required: (value) => !!value || "Champ pbligatoire.",
        same: (value) =>
          value == this.password || "les mots de passe ne sont pas les mêmes",
        counter: (value) =>
          value.length >= 8 || "longueur minimum 8 caractères",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    }
  },
  methods: { 
    EditUser(){  
      //console.log(this.form.image)
      //this.$inertia.post(route("user.edit",[this.form]))
      
      //const formData = new FormData()
      this.formData.set('form',JSON.stringify(this.form))
      this.formData.append('file', this.file);

      this.$inertia.post(route('user.edit'), this.formData)
        .then(()=> {
          
        })
        .catch(error => {
          Logger.log(error);
        })
      
      
      
      
      /*
        const config = {
          headers: { 'content-type': 'multipart/form-data' }
        }
        this.formData.set('form',JSON.stringify(this.form))
        this.formData.append('file', this.file);
        
        axios.post('/profile',this.formData, config)
                .then(function (response) {
                  location.reload()
                  
                }) 
                .catch(function (error) {
                    
                });
      */         
        },
      
        
    newAvatar(event) {
            console.log(document.getElementById('loadpicture').files[0]);
            this.form.image =document.getElementById('loadpicture').files[0];  
            this.file = document.getElementById('loadpicture').files[0];      
            
                }
               
        },
      
      
    
    };
  

</script>

<style></style>
