<template>
<v-app>
  <div id="inspire">
    <v-navigation-drawer width="400" v-model="drawerRight" app clipped right>
      <v-list class="py-0">
        <v-list-item class="py-2 primary  lighten-2" dark>
          <v-list-item-title class="">Contentu</v-list-item-title>
        </v-list-item>
        <!--Loop Through modules-->
        <v-list-group
          value="true"
          v-for="modul in content"
          :key="modul.moduleTitle"
        >
          <template v-slot:activator>
            <v-list-item-title
              v-text="modul.moduleTitle"
              class="subheading primary--text font-weight-bold text-capitalize"
            ></v-list-item-title>
          </template>
          <!--Loop through sections-->
          <v-list-group
            v-for="(section, i) in modul.sections"
            :key="i"
            no-action
            sub-group
            value="true"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  v-text="section.sectionTitle"
                ></v-list-item-title>
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
    </v-navigation-drawer>

    <v-app-bar dense app clipped-right color="primary" dark>
      <v-toolbar-title>Titre de formation</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-progress-linear
        background-color="success lighten-5"
        color="success"
        class="mr-3"
        :value="50"
        rounded
        height="10"
      ></v-progress-linear>
      <v-icon class="mr-9">mdi-trophy-variant-outline</v-icon>

      <v-app-bar-nav-icon
        @click.stop="drawerRight = !drawerRight"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <div class="embed">
      <vimeo-player
        v-if="contentType === 'video'"
        :video-id="videoId"
        :options="videoPlayerOptions"
      />
      <div v-else-if="contentType === 'QCM'">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1"
              >Name of step 1</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2"
              >Name of step 2</v-stepper-step
            >

            <v-divider></v-divider>

            <v-stepper-step step="3">Name of step 3</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn color="primary" @click="e1 = 2">
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card flat class="mb-12">
                <h2>Question</h2>
                <p class="mb-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  esse illo molestias iure aliquid doloribus.
                </p>

                <v-checkbox
                  v-model="selected"
                  label="John"
                  value="John"
                ></v-checkbox>
                <v-checkbox
                  v-model="selected"
                  label="Jacob"
                  value="Jacob"
                ></v-checkbox>
              </v-card>

              <v-btn color="primary" @click="e1 = 3">
                Continuer
              </v-btn>

              <v-btn text>Annuler</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="grey lighten-1"
                height="200px"
              ></v-card>

              <v-btn color="primary" @click="e1 = 1">
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
      <div v-else-if="contentType === 'PDF'">
        <embed
          :src="videoId"
          type="application/pdf"
          width="100%"
          height="1000px"
        />
      </div>
    </div>
  </div>
</v-app>
</template>

<script>
//GLOBALS
import Navbar from "../components/globals/Navbar";
import AppFooter from "../components/globals/AppFooter";
export default {
  components: {},

  data: () => ({
    selected: [],
    e1: 1,
    videoId: 59777392,
    contentType: null,
    drawer: null,
    drawerRight: null,
    right: false,
    left: false,
    videoPlayerOptions: {
      responsive: true
    },
    content: [
      //modules
      {
        moduleTitle: "module title 1",
        //sections
        sections: [
          {
            sectionTitle: "section title 1",
            sectionContent: [
              {
                title: "Soolking feat Ouled El Bahdja Liberté",
                type: "video",
                id: 324158031
              },
              { title: "Soolking Rockstar", type: "video", id: 320477018 },
              {
                title: "PDF FILE",
                type: "PDF",
                url: "/pdf.pdf"
              },
              { title: "Quizz title", type: "QCM", qcm: {} }
            ]
          }
        ]
      }
    ]
  })
};
</script>

<style scoped>
.v-application--is-ltr
  .v-list-group--no-action.v-list-group--sub-group
  > .v-list-group__items
  > .v-list-item {
  padding-left: 20px;
}
.v-progress-linear {
  width: 150px;
}
</style>
