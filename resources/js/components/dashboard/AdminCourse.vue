<template>
<v-app>
  <div>
    <!--Adding module popup-->
    <v-dialog v-model="createModuleDialog" max-width="600">
      <v-card>
        <v-card-title class="headline">Ajouter un module</v-card-title>
        <v-card-text>
          <v-text-field
            outlined
            v-model="moduleTitle"
            label="Le titre de module"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="createModuleDialog = false"
            >Annuler</v-btn
          >
          <v-btn color="green darken-1" text @click="addModule">Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <section class="py-7 primary">
      <v-container>
        <v-btn color="white" class="pl-0" text router to="/dashboard"
          ><v-icon left>mdi-chevron-left</v-icon>
          retour au tableau de bord
        </v-btn>
        <div class="d-flex align-center justify-space-between">
          <div>
            <h2 class=" font-weight-medium white--text mb-5">
              Titre de formation
            </h2>
            <div class="subheading grey--text">Catégorie de formation</div>
            <div class="subheading grey--text">
              Public visé : Lorem ipsum dolor sit
            </div>
          </div>

          <div>
            <v-btn class="mr-4" text dark @click="createModuleDialog = true">
              <v-icon left>mdi-pencil</v-icon>
              Modifier
            </v-btn>
            <v-btn color="success" dark @click="createModuleDialog = true">
              <v-icon left>mdi-plus</v-icon>
              module
            </v-btn>
          </div>
        </div>
      </v-container>
    </section>
    <!--Course builder-->
    <section>
      <v-container>
        <v-list class="py-0">
          <!--Loop Through modules-->
          <v-list-group
            v-for="modul in content"
            :key="modul.moduleTitle"
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-title
                class="subheading primary--text font-weight-bold text-capitalize"
                ><div class="d-flex align-center justify-space-between">
                  {{ modul.moduleTitle }}
                  <div>
                    <!--Adding section popup-->
                    <v-dialog
                      v-model="modul.createSectionDialog"
                      max-width="600"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          @click.stop="modul.createSectionDialog = true"
                          v-bind="attrs"
                          v-on="on"
                          class="mx-4"
                          icon
                          ><v-icon>mdi-plus</v-icon></v-btn
                        >
                      </template>

                      <h2 class="white--text text-right">
                        {{ modul.moduleTitle }}
                      </h2>
                      <v-card>
                        <v-card-title class="headline"
                          >Ajouter un section au
                          {{ modul.moduleTitle }}</v-card-title
                        >
                        <v-card-text>
                          <v-text-field
                            outlined
                            v-model="sectionTitle"
                            label="Le titre de section"
                          ></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="error darken-1"
                            text
                            @click.stop="modul.createSectionDialog = false"
                            >Annuler</v-btn
                          >
                          <v-btn
                            color="green darken-1"
                            text
                            @click="
                              addSection(modul.moduleTitle);
                              modul.createSectionDialog = false;
                            "
                            >Ajouter au {{ modul.moduleTitle }}</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                    <v-btn class="mx-4" icon small
                      ><v-icon>mdi-pencil-outline</v-icon></v-btn
                    >
                    <v-btn class="mx-4" icon small
                      ><v-icon color="error"
                        >mdi-trash-can-outline</v-icon
                      ></v-btn
                    >
                  </div>
                </div></v-list-item-title
              >
            </template>

            <v-list-group
              v-for="(section, i) in modul.sections"
              :key="i"
              no-action
              sub-group
              value="true"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <div class="d-flex align-center justify-space-between">
                      {{ section.sectionTitle }}

                      <!--Create content Dialog-->
                      <v-dialog
                        v-model="section.createContentDialog"
                        width="800"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="primary lighten-2"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            small
                          >
                            <v-icon left>mdi-plus</v-icon>
                            Ajouter contenu
                          </v-btn>
                        </template>

                        <v-card>
                          <v-card-title class="headline  mb-4 " primary-title>
                            Ajouter contenu au section
                            {{ section.sectionTitle }}
                          </v-card-title>

                          <v-card-text>
                            <div>
                              <!--PDF DIALOG-->
                              <v-dialog
                                v-model="section.createPdfDialog"
                                width="800"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    v-bind="attrs"
                                    v-on="on"
                                    x-large
                                    color="primary"
                                    class="mx-3"
                                    icon
                                    @click="contentType = 'PDF'"
                                  >
                                    <v-icon>mdi-file-pdf-outline</v-icon>
                                  </v-btn>
                                </template>

                                <v-card>
                                  <v-card-title class="mb-7" primary-title>
                                    <v-icon class="mr-4"
                                      >mdi-file-pdf-outline</v-icon
                                    >

                                    Féchier PDF
                                  </v-card-title>

                                  <v-card-text>
                                    <v-text-field
                                      v-model="contentTitle"
                                      label="Titre de contenu"
                                    ></v-text-field>
                                    <v-file-input
                                      label="Uploader fichier PDF"
                                    ></v-file-input>
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="
                                        section.createPdfDialog = false;
                                        addContent(section.sectionTitle);
                                        url = '/pdf.pdf';
                                      "
                                    >
                                      Uploader
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                              <!--VIDEO DIALOG-->
                              <v-dialog
                                v-model="section.createVideoDialog"
                                width="800"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    v-bind="attrs"
                                    v-on="on"
                                    x-large
                                    color="primary"
                                    class="mx-3"
                                    icon
                                    @click="contentType = 'video'"
                                  >
                                    <v-icon>mdi-file-video-outline</v-icon>
                                  </v-btn>
                                </template>

                                <v-card>
                                  <v-card-title class="mb-7" primary-title>
                                    <v-icon class="mr-4"
                                      >mdi-file-video-outline</v-icon
                                    >
                                    Vidéo
                                  </v-card-title>

                                  <v-card-text>
                                    <v-text-field
                                      v-model="contentTitle"
                                      label="Titre de Vidéo"
                                    ></v-text-field>
                                    <v-file-input
                                      label="Uploader fichier MP4"
                                    ></v-file-input>
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="
                                        section.createVideoDialog = false;
                                        addContent(section.sectionTitle);
                                        url = '/pdf.pdf';
                                      "
                                    >
                                      Uploader
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                              <!--HTML DIALOG-->
                              <v-dialog
                                v-model="section.createHTMLDialog"
                                fullscreen
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    v-bind="attrs"
                                    v-on="on"
                                    x-large
                                    color="primary"
                                    class="mx-3"
                                    icon
                                    @click="contentType = 'html'"
                                  >
                                    <v-icon>mdi-code-tags</v-icon>
                                  </v-btn>
                                </template>

                                <v-card>
                                  <v-card-title class="mb-7" primary-title>
                                    <v-icon class="mr-4">mdi-code-tags</v-icon>
                                    Contenu HTML
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      class="mr-5"
                                      color="error"
                                      @click="section.createHTMLDialog = false"
                                    >
                                      Annuler
                                      <v-icon right>mdi-close</v-icon>
                                    </v-btn>
                                    <v-btn
                                      color="primary"
                                      @click="
                                        section.createHTMLDialog = false;
                                        addContent(section.sectionTitle);
                                      "
                                    >
                                      Enregister
                                      <v-icon right>mdi-content-save</v-icon>
                                    </v-btn>
                                  </v-card-title>

                                  <v-card-text>
                                    <!--Vue editor-->
                                    <vue-editor
                                      style="height=80%"
                                      v-model="contentHTML"
                                    ></vue-editor>
                                  </v-card-text>
                                </v-card>
                              </v-dialog>

                              <v-btn x-large color="primary" class="mx-3" icon>
                                <v-icon>mdi-head-question-outline</v-icon>
                              </v-btn>
                            </div>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <!--Loop Through  one section -->
              <template v-for="(itemContent, i) in section.sectionContent">
                <v-list-item
                  v-if="itemContent.type === 'video'"
                  :key="i"
                  link
                  @click="
                    videoId = itemContent.id;
                    contentType = 'video';
                  "
                >
                  <v-list-item-icon>
                    <v-icon>mdi-play-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    class="pl-0"
                    v-text="itemContent.title"
                  ></v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="itemContent.type === 'QCM'"
                  :key="i"
                  link
                  @click="
                    videoId = itemContent.id;
                    contentType = 'QCM';
                  "
                >
                  <v-list-item-icon>
                    <v-icon>mdi-head-question-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    class="pl-0"
                    v-text="itemContent.title"
                  ></v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="itemContent.type === 'PDF'"
                  :key="i"
                  link
                  @click="
                    videoId = itemContent.url;
                    contentType = 'PDF';
                  "
                >
                  <v-list-item-icon>
                    <v-icon>mdi-file-pdf-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title
                    class="pl-0"
                    v-text="itemContent.title"
                  ></v-list-item-title>
                </v-list-item>
              </template>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-container>
    </section>
  </div>
</v-app>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      content: [],
      createModuleDialog: false,
      moduleTitle: "",
      sectionTitle: "",
      contentValue: "",
      contentTitle: "",
      contentType: "",
      id: null,
      url: null,
      contentHTML: ""
    };
  },
  methods: {
    //Helper Function
    getParentModule: function(myArray, prop, val, sectionTitle) {
      for (var i = 0, length = myArray.length; i < length; i++) {
        if (myArray[i][prop] == val) {
          myArray[i].sections.push({
            sectionTitle,
            sectionContent: [],
            createContentDialog: false,
            createPdfDialog: false,
            createVideoDialog: false,
            createHTMLDialog: false
          });
        }
      }
    },
    getParentSection: function(
      myArray,
      prop,
      val,
      contentTitle,
      type,
      id,
      url
    ) {
      for (var i = 0; i < myArray.length; i++) {
        for (var j = 0; j < myArray[i].sections.length; j++) {
          if (myArray[i].sections[j]["sectionTitle"] == val) {
            console.log(myArray[i].sections[j]["sectionTitle"]);
            myArray[i].sections[j].sectionContent.push({
              title: contentTitle,
              type: this.contentType,
              id: id || null,
              url: url || null
            });
          }
        }
      }
    },
    addModule: function() {
      this.content.push({
        moduleTitle: this.moduleTitle,
        createSectionDialog: false,
        sections: []
      });
      this.createModuleDialog = false;
      this.moduleTitle = "";
    },
    //replace the title with the ID
    addSection: function(title) {
      this.getParentModule(
        this.content,
        "moduleTitle",
        title,
        this.sectionTitle
      );
      this.sectionTitle = "";
    },
    addContent: function(title) {
      this.getParentSection(
        this.content,
        "sectionTitle",
        title,
        this.contentTitle,
        this.contentType,
        this.id,
        this.url
      );
    }
  }
};
</script>