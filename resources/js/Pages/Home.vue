<template>
  <v-app>
  <div>
    <div v-if="$page.auth.user==null">
    <Navbarnonauth />
    </div>
    <div v-else>
      <Navbar />
    </div>
  
    
    <!-- Hero section start -->
    <section class="hero">
      <v-container class="h-100">
        <v-row class="align-end h-100">
          <v-col cols="12" md="6"></v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-title>
                <h3>HOLA como estas </h3>
              </v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing laborum
                nesciunt vitae autem dolorum neque?. Lorem.
                <v-text-field
                  dense
                  class="mt-5"
                  placeholder="Rechercher"
                  hide-details
                  outlined
                  filled
                  append-icon="mdi-magnify"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Hero section end -->
    <!-- Recent courses section start -->
    <section class="py-4">
      <v-container>
        <h2 class="text-uppercase display-1 font-weight-bold ">
          LES COURS RÉCENTS
        </h2>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide><Rcc /></swiper-slide>
          <swiper-slide><Rcc /></swiper-slide>
          <swiper-slide><Rcc /></swiper-slide>
          <v-btn
            class="mx-2 swiper-button-prev"
            slot="button-prev"
            fab
            color="white"
          >
            <v-icon dark>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            class="mx-2 swiper-button-next"
            slot="button-next"
            fab
            color="white"
          >
            <v-icon dark>mdi-chevron-right</v-icon>
          </v-btn>
        </swiper>
      </v-container>
    </section>
    <!-- Recent courses section end -->


    <!-- Our courses  section start -->
    <section class="py-4">
      <v-container>
        <h2 class="text-uppercase display-1 font-weight-bold">
          NOS FORMATIONS
        </h2>
        <p class="grey--text mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          quidem!
        </p>

        <div>
          <h3 class="mb-3">Nos Formation online</h3>
          <swiper ref="mySwiperCourse" :options="swiperOptionsCourse">
            <swiper-slide v-for="formation in enligne" :key="formation.id_formation"> 
              <CourseCard v-bind="{titre:formation.nomF,type:formation.type , id:formation.id_formation,thumbnail:formation.thumbnail}" />
            </swiper-slide>    

            <v-btn
              class="mx-2 swiper-button-prev"
              slot="button-prev"
              fab
              color="white"
            >
              <v-icon dark>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              class="mx-2 swiper-button-next"
              slot="button-next"
              fab
              color="white"
            >
              <v-icon dark>mdi-chevron-right</v-icon>
            </v-btn>
          </swiper>
        </div>

        <div class="mt-8">
          <h3 class="mb-3">Nos Formation Présentiels</h3>
          <swiper ref="mySwiperCourse" :options="swiperOptionsCourse">
            <swiper-slide v-for="formation in press" :key="formation.id_formation"> 
              <CourseCard  v-bind="{titre:formation.nomF,type:formation.type , id:formation.id_formation,thumbnail:formation.thumbnail}"/>
            </swiper-slide>            
            <v-btn
              class="mx-2 swiper-button-prev"
              slot="button-prev"
              fab
              color="white"
            >
              <v-icon dark>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              class="mx-2 swiper-button-next"
              slot="button-next"
              fab
              color="white"
            >
              <v-icon dark>mdi-chevron-right</v-icon>
            </v-btn>
          </swiper>
        </div>
      </v-container>
    </section>
    <!-- Our courses  section end -->

    <!-- Our courses  section start -->
    <section class="py-4">
      <v-container>
        <h2 class="text-uppercase display-1 font-weight-bold">LES PÔLES</h2>
        <p class="subheading">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
          quidem!
        </p>
        <v-row>
          <v-col cols="12" xl="3" lg="4" v-for="i in 10" :key="i">
            <CategoryCard
          /></v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Our courses  section end -->
    <app-footer />
  </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
//GLOBALS
import Navbar from "../components/globals/Navbar";
import Navbarnonauth from "../components/globals/Navbarnonauth";
import AppFooter from "../components/globals/AppFooter";
//
import Rcc from "../components/rcc";

import CourseCard from "../components/CourseCard";
import CategoryCard from "../components/CategoryCard";

export default {
  name: "Home",
  props:['press','enligne'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,

        spaceBetween: 20,

        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      swiperOptionsCourse: {
        slidesPerView: 3,

        spaceBetween: 20,

        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },

  components: {
    Navbar,
    AppFooter,
    Rcc,
    CourseCard,
    CategoryCard,
    Swiper,
    SwiperSlide,
    Navbarnonauth
  },
  directives: {
    swiper: directive
  }
};
</script>

<style lang="scss">
.hero {
  height: 400px;
  background-image: url("/elearnfinal/public/images/slide1.jpg");
  background-size: cover;
}
.h-100 {
  height: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  &::after {
    content: "";
    display: none;
  }
}
</style>