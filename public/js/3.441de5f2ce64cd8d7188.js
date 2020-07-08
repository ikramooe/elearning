(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_dashboard_AdminStats_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dashboard/AdminStats.vue */ "./resources/js/components/dashboard/AdminStats.vue");
/* harmony import */ var _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard/Stats.vue */ "./resources/js/components/dashboard/Stats.vue");
/* harmony import */ var _components_dashboard_AdminCourses_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/AdminCourses.vue */ "./resources/js/components/dashboard/AdminCourses.vue");
/* harmony import */ var _components_dashboard_Students_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/Students.vue */ "./resources/js/components/dashboard/Students.vue");
/* harmony import */ var _components_dashboard_AddCourse_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashboard/AddCourse.vue */ "./resources/js/components/dashboard/AddCourse.vue");
/* harmony import */ var _components_dashboard_AdminCourse_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/AdminCourse.vue */ "./resources/js/components/dashboard/AdminCourse.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Dashboard sub components






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['formations'],
  data: function data() {
    return {
      window: 2,
      drawer: true,
      activatedTab: null,
      item: 0,
      items: [{
        text: "Dashboard",
        icon: "mdi-view-dashboard-outline",
        components: _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
        path: "ede"
      }, {
        text: "Ajouter une formation",
        icon: "mdi-format-list-bulleted-square",
        path: "courses"
      }, {
        text: "Mes formations",
        icon: "mdi-format-list-bulleted-square",
        path: "couffffrses"
      }, {
        text: "Les élèves",
        icon: "mdi-account-details-outline",
        path: "students"
      }, {
        text: "Mes Statistiques",
        icon: "mdi-chart-arc",
        path: "stats"
      }],
      right: null
    };
  },
  components: {
    AdminStats: _components_dashboard_AdminStats_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Stats: _components_dashboard_Stats_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AdminCourses: _components_dashboard_AdminCourses_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Students: _components_dashboard_Students_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    AddCourse: _components_dashboard_AddCourse_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/charts/Bar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/charts/Bar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  data: function data() {
    return {
      chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3]
        }]
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartData);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/charts/Pie.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/charts/Pie.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Pie"],
  data: function data() {
    return {
      chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']
        }]
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.chartData);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_0__["VueEditor"]
  },
  data: function data() {
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
    getParentModule: function getParentModule(myArray, prop, val, sectionTitle) {
      for (var i = 0, length = myArray.length; i < length; i++) {
        if (myArray[i][prop] == val) {
          myArray[i].sections.push({
            sectionTitle: sectionTitle,
            sectionContent: [],
            createContentDialog: false,
            createPdfDialog: false,
            createVideoDialog: false,
            createHTMLDialog: false
          });
        }
      }
    },
    getParentSection: function getParentSection(myArray, prop, val, contentTitle, type, id, url) {
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
    addModule: function addModule() {
      this.content.push({
        moduleTitle: this.moduleTitle,
        createSectionDialog: false,
        sections: []
      });
      this.createModuleDialog = false;
      this.moduleTitle = "";
    },
    //replace the title with the ID
    addSection: function addSection(title) {
      this.getParentModule(this.content, "moduleTitle", title, this.sectionTitle);
      this.sectionTitle = "";
    },
    addContent: function addContent(title) {
      this.getParentSection(this.content, "sectionTitle", title, this.contentTitle, this.contentType, this.id, this.url);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['frome'],
  data: function data() {
    return {
      search: "",
      courses: [{
        ref: 1,
        courseName: "Footloose",
        categroy: "Accounting",
        img: "http://dummyimage.com/184x179.jpg/cc0000/ffffff",
        price: 297,
        contrat: "http://virginia.edu/ipsum/praesent/blandit/lacinia.html?sapien=donec&in=ut&sapien=dolor&iaculis=morbi&congue=vel&vivamus=lectus&metus=in&arcu=quam&adipiscing=fringilla&molestie=rhoncus&hendrerit=mauris&at=enim&vulputate=leo&vitae=rhoncus&nisl=sed&aenean=vestibulum&lectus=sit&pellentesque=amet&eget=cursus&nunc=id&donec=turpis&quis=integer&orci=aliquet&eget=massa&orci=id&vehicula=lobortis&condimentum=convallis&curabitur=tortor&in=risus&libero=dapibus&ut=augue&massa=vel&volutpat=accumsan&convallis=tellus&morbi=nisi&odio=eu&odio=orci&elementum=mauris&eu=lacinia&interdum=sapien&eu=quis&tincidunt=libero&in=nullam&leo=sit&maecenas=amet&pulvinar=turpis&lobortis=elementum&est=ligula&phasellus=vehicula&sit=consequat&amet=morbi&erat=a&nulla=ipsum&tempus=integer&vivamus=a&in=nibh&felis=in&eu=quis&sapien=justo&cursus=maecenas&vestibulum=rhoncus&proin=aliquam&eu=lacus&mi=morbi&nulla=quis&ac=tortor&enim=id&in=nulla&tempor=ultrices&turpis=aliquet&nec=maecenas&euismod=leo&scelerisque=odio&quam=condimentum&turpis=id&adipiscing=luctus&lorem=nec&vitae=molestie&mattis=sed&nibh=justo&ligula=pellentesque&nec=viverra&sem=pede&duis=ac&aliquam=diam&convallis=cras&nunc=pellentesque&proin=volutpat&at=dui&turpis=maecenas"
      }, {
        ref: 2,
        courseName: "Mozart's Sister (Nannerl, la soeur de Mozart)",
        categroy: "Sales",
        img: "http://dummyimage.com/123x230.png/dddddd/000000",
        price: 137,
        contrat: "http://edublogs.org/sed/vestibulum/sit.xml?ac=lacus&diam=at&cras=turpis&pellentesque=donec&volutpat=posuere&dui=metus&maecenas=vitae&tristique=ipsum&est=aliquam&et=non&tempus=mauris&semper=morbi&est=non&quam=lectus&pharetra=aliquam&magna=sit&ac=amet&consequat=diam&metus=in&sapien=magna&ut=bibendum&nunc=imperdiet&vestibulum=nullam&ante=orci&ipsum=pede&primis=venenatis&in=non&faucibus=sodales&orci=sed&luctus=tincidunt&et=eu&ultrices=felis&posuere=fusce&cubilia=posuere&curae=felis&mauris=sed&viverra=lacus&diam=morbi&vitae=sem&quam=mauris&suspendisse=laoreet&potenti=ut&nullam=rhoncus&porttitor=aliquet&lacus=pulvinar&at=sed&turpis=nisl&donec=nunc&posuere=rhoncus&metus=dui&vitae=vel&ipsum=sem&aliquam=sed&non=sagittis&mauris=nam&morbi=congue&non=risus&lectus=semper&aliquam=porta&sit=volutpat&amet=quam&diam=pede"
      }, {
        ref: 3,
        courseName: "Pig Hunt ",
        categroy: "Engineering",
        img: "http://dummyimage.com/150x175.jpg/ff4444/ffffff",
        price: 238,
        contrat: "http://skype.com/nulla/integer/pede/justo/lacinia/eget/tincidunt.jsp?vel=diam&accumsan=vitae&tellus=quam&nisi=suspendisse&eu=potenti&orci=nullam&mauris=porttitor&lacinia=lacus&sapien=at&quis=turpis&libero=donec&nullam=posuere&sit=metus&amet=vitae&turpis=ipsum&elementum=aliquam&ligula=non&vehicula=mauris&consequat=morbi&morbi=non&a=lectus&ipsum=aliquam&integer=sit&a=amet&nibh=diam&in=in&quis=magna&justo=bibendum&maecenas=imperdiet&rhoncus=nullam&aliquam=orci&lacus=pede&morbi=venenatis&quis=non&tortor=sodales&id=sed&nulla=tincidunt&ultrices=eu&aliquet=felis&maecenas=fusce&leo=posuere&odio=felis&condimentum=sed&id=lacus&luctus=morbi&nec=sem&molestie=mauris&sed=laoreet&justo=ut&pellentesque=rhoncus&viverra=aliquet&pede=pulvinar&ac=sed&diam=nisl&cras=nunc&pellentesque=rhoncus&volutpat=dui&dui=vel&maecenas=sem&tristique=sed&est=sagittis&et=nam&tempus=congue&semper=risus&est=semper&quam=porta&pharetra=volutpat&magna=quam&ac=pede&consequat=lobortis&metus=ligula&sapien=sit&ut=amet&nunc=eleifend&vestibulum=pede&ante=libero&ipsum=quis&primis=orci&in=nullam&faucibus=molestie&orci=nibh&luctus=in&et=lectus&ultrices=pellentesque&posuere=at&cubilia=nulla&curae=suspendisse&mauris=potenti&viverra=cras&diam=in&vitae=purus&quam=eu&suspendisse=magna&potenti=vulputate&nullam=luctus&porttitor=cum&lacus=sociis&at=natoque&turpis=penatibus"
      }, {
        ref: 4,
        courseName: "Green Dolphin Street",
        categroy: "Research and Development",
        img: "http://dummyimage.com/163x145.bmp/cc0000/ffffff",
        price: 221,
        contrat: "https://techcrunch.com/lectus/suspendisse.jpg?parturient=ut&montes=erat&nascetur=id&ridiculus=mauris&mus=vulputate&vivamus=elementum&vestibulum=nullam&sagittis=varius&sapien=nulla&cum=facilisi&sociis=cras&natoque=non&penatibus=velit&et=nec&magnis=nisi&dis=vulputate&parturient=nonummy&montes=maecenas&nascetur=tincidunt&ridiculus=lacus&mus=at&etiam=velit&vel=vivamus&augue=vel&vestibulum=nulla&rutrum=eget&rutrum=eros&neque=elementum&aenean=pellentesque&auctor=quisque&gravida=porta&sem=volutpat&praesent=erat&id=quisque&massa=erat&id=eros&nisl=viverra&venenatis=eget&lacinia=congue&aenean=eget&sit=semper&amet=rutrum&justo=nulla&morbi=nunc&ut=purus&odio=phasellus&cras=in&mi=felis&pede=donec&malesuada=semper&in=sapien&imperdiet=a&et=libero&commodo=nam&vulputate=dui"
      }, {
        ref: 5,
        courseName: "Trembling Before G-d",
        categroy: "Training",
        img: "http://dummyimage.com/215x250.png/cc0000/ffffff",
        price: 127,
        contrat: "http://vk.com/sollicitudin/vitae/consectetuer/eget/rutrum.jpg?sit=orci&amet=pede&diam=venenatis&in=non&magna=sodales&bibendum=sed&imperdiet=tincidunt&nullam=eu&orci=felis&pede=fusce&venenatis=posuere&non=felis&sodales=sed&sed=lacus&tincidunt=morbi&eu=sem&felis=mauris&fusce=laoreet&posuere=ut&felis=rhoncus&sed=aliquet&lacus=pulvinar&morbi=sed&sem=nisl&mauris=nunc&laoreet=rhoncus&ut=dui&rhoncus=vel&aliquet=sem&pulvinar=sed&sed=sagittis&nisl=nam&nunc=congue&rhoncus=risus"
      }, {
        ref: 6,
        courseName: "Felicia's Journey",
        categroy: "Human Resources",
        img: "http://dummyimage.com/205x153.jpg/5fa2dd/ffffff",
        price: 178,
        contrat: "https://fema.gov/eget/tempus/vel.jpg?rhoncus=vestibulum&sed=rutrum&vestibulum=rutrum&sit=neque&amet=aenean&cursus=auctor&id=gravida&turpis=sem&integer=praesent&aliquet=id&massa=massa&id=id&lobortis=nisl&convallis=venenatis&tortor=lacinia&risus=aenean&dapibus=sit&augue=amet&vel=justo&accumsan=morbi&tellus=ut&nisi=odio&eu=cras&orci=mi&mauris=pede&lacinia=malesuada&sapien=in&quis=imperdiet&libero=et&nullam=commodo&sit=vulputate&amet=justo&turpis=in&elementum=blandit&ligula=ultrices&vehicula=enim&consequat=lorem&morbi=ipsum&a=dolor&ipsum=sit"
      }, {
        ref: 7,
        courseName: "Zulu",
        categroy: "Accounting",
        img: "http://dummyimage.com/203x212.bmp/5fa2dd/ffffff",
        price: 123,
        contrat: "http://cloudflare.com/auctor/gravida.png?tempor=adipiscing&convallis=elit&nulla=proin&neque=interdum&libero=mauris&convallis=non&eget=ligula&eleifend=pellentesque&luctus=ultrices&ultricies=phasellus&eu=id&nibh=sapien&quisque=in&id=sapien&justo=iaculis&sit=congue&amet=vivamus&sapien=metus&dignissim=arcu&vestibulum=adipiscing&vestibulum=molestie&ante=hendrerit&ipsum=at&primis=vulputate&in=vitae&faucibus=nisl&orci=aenean&luctus=lectus&et=pellentesque&ultrices=eget&posuere=nunc&cubilia=donec"
      }, {
        ref: 8,
        courseName: "The White Haired Witch of Lunar Kingdom",
        categroy: "Legal",
        img: "http://dummyimage.com/144x249.bmp/cc0000/ffffff",
        price: 80,
        contrat: "https://yale.edu/dolor.aspx?erat=lobortis&nulla=est&tempus=phasellus&vivamus=sit&in=amet&felis=erat&eu=nulla&sapien=tempus&cursus=vivamus&vestibulum=in&proin=felis&eu=eu&mi=sapien&nulla=cursus&ac=vestibulum&enim=proin&in=eu&tempor=mi&turpis=nulla&nec=ac&euismod=enim&scelerisque=in&quam=tempor&turpis=turpis&adipiscing=nec&lorem=euismod&vitae=scelerisque&mattis=quam&nibh=turpis&ligula=adipiscing"
      }, {
        ref: 9,
        courseName: "Whole Night, A (Toute une nuit)",
        categroy: "Support",
        img: "http://dummyimage.com/246x101.bmp/dddddd/000000",
        price: 217,
        contrat: "https://a8.net/ut/volutpat/sapien/arcu/sed/augue/aliquam.aspx?lorem=est&id=et&ligula=tempus&suspendisse=semper&ornare=est&consequat=quam&lectus=pharetra&in=magna&est=ac&risus=consequat&auctor=metus&sed=sapien&tristique=ut&in=nunc&tempus=vestibulum&sit=ante&amet=ipsum&sem=primis&fusce=in&consequat=faucibus"
      }, {
        ref: 10,
        courseName: "Green Dragon",
        categroy: "Accounting",
        img: "http://dummyimage.com/134x152.png/cc0000/ffffff",
        price: 263,
        contrat: "https://studiopress.com/volutpat/quam.jsp?donec=mattis&ut=egestas&dolor=metus&morbi=aenean&vel=fermentum&lectus=donec&in=ut&quam=mauris&fringilla=eget&rhoncus=massa&mauris=tempor&enim=convallis&leo=nulla&rhoncus=neque&sed=libero&vestibulum=convallis&sit=eget&amet=eleifend&cursus=luctus&id=ultricies&turpis=eu&integer=nibh&aliquet=quisque&massa=id&id=justo&lobortis=sit&convallis=amet&tortor=sapien&risus=dignissim&dapibus=vestibulum&augue=vestibulum&vel=ante&accumsan=ipsum&tellus=primis&nisi=in&eu=faucibus&orci=orci&mauris=luctus&lacinia=et&sapien=ultrices&quis=posuere&libero=cubilia&nullam=curae"
      }, {
        ref: 11,
        courseName: "Keeping Up with the Steins",
        categroy: "Marketing",
        img: "http://dummyimage.com/150x185.jpg/ff4444/ffffff",
        price: 76,
        contrat: "http://sfgate.com/varius/integer/ac/leo/pellentesque.png?vestibulum=risus&ante=auctor&ipsum=sed&primis=tristique&in=in&faucibus=tempus&orci=sit&luctus=amet&et=sem&ultrices=fusce&posuere=consequat&cubilia=nulla&curae=nisl&donec=nunc&pharetra=nisl&magna=duis&vestibulum=bibendum&aliquet=felis&ultrices=sed&erat=interdum&tortor=venenatis&sollicitudin=turpis&mi=enim&sit=blandit&amet=mi&lobortis=in&sapien=porttitor&sapien=pede&non=justo&mi=eu&integer=massa&ac=donec&neque=dapibus&duis=duis&bibendum=at&morbi=velit&non=eu&quam=est&nec=congue&dui=elementum&luctus=in&rutrum=hac&nulla=habitasse&tellus=platea&in=dictumst&sagittis=morbi&dui=vestibulum&vel=velit&nisl=id&duis=pretium&ac=iaculis&nibh=diam&fusce=erat"
      }, {
        ref: 12,
        courseName: "Double Play: James Benning and Richard Linklater",
        categroy: "Human Resources",
        img: "http://dummyimage.com/107x242.bmp/ff4444/ffffff",
        price: 140,
        contrat: "https://cnn.com/egestas/metus/aenean/fermentum/donec/ut/mauris.xml?neque=luctus&libero=nec&convallis=molestie&eget=sed&eleifend=justo&luctus=pellentesque&ultricies=viverra&eu=pede&nibh=ac&quisque=diam&id=cras&justo=pellentesque&sit=volutpat&amet=dui&sapien=maecenas&dignissim=tristique&vestibulum=est&vestibulum=et&ante=tempus&ipsum=semper&primis=est&in=quam&faucibus=pharetra&orci=magna&luctus=ac&et=consequat&ultrices=metus&posuere=sapien&cubilia=ut&curae=nunc&nulla=vestibulum&dapibus=ante&dolor=ipsum&vel=primis&est=in&donec=faucibus&odio=orci&justo=luctus&sollicitudin=et&ut=ultrices&suscipit=posuere&a=cubilia&feugiat=curae&et=mauris&eros=viverra&vestibulum=diam&ac=vitae&est=quam&lacinia=suspendisse&nisi=potenti&venenatis=nullam&tristique=porttitor&fusce=lacus&congue=at&diam=turpis&id=donec&ornare=posuere&imperdiet=metus&sapien=vitae"
      }, {
        ref: 13,
        courseName: "Shorts",
        categroy: "Support",
        img: "http://dummyimage.com/168x149.bmp/ff4444/ffffff",
        price: 192,
        contrat: "https://un.org/vitae/quam/suspendisse/potenti.xml?consectetuer=est&adipiscing=lacinia&elit=nisi&proin=venenatis&interdum=tristique&mauris=fusce&non=congue&ligula=diam&pellentesque=id&ultrices=ornare&phasellus=imperdiet&id=sapien&sapien=urna&in=pretium&sapien=nisl&iaculis=ut&congue=volutpat&vivamus=sapien&metus=arcu&arcu=sed&adipiscing=augue&molestie=aliquam&hendrerit=erat&at=volutpat"
      }, {
        ref: 14,
        courseName: "Hans Christian Andersen",
        categroy: "Business Development",
        img: "http://dummyimage.com/100x167.bmp/cc0000/ffffff",
        price: 299,
        contrat: "https://t.co/venenatis/turpis/enim/blandit.js?sapien=turpis&urna=eget&pretium=elit&nisl=sodales&ut=scelerisque&volutpat=mauris&sapien=sit&arcu=amet&sed=eros&augue=suspendisse&aliquam=accumsan&erat=tortor&volutpat=quis&in=turpis&congue=sed&etiam=ante&justo=vivamus&etiam=tortor&pretium=duis&iaculis=mattis&justo=egestas"
      }, {
        ref: 15,
        courseName: "Portraits Chinois",
        categroy: "Product Management",
        img: "http://dummyimage.com/143x133.png/5fa2dd/ffffff",
        price: 253,
        contrat: "https://gravatar.com/amet.jpg?odio=aenean&cras=fermentum&mi=donec&pede=ut&malesuada=mauris&in=eget&imperdiet=massa&et=tempor&commodo=convallis&vulputate=nulla&justo=neque&in=libero&blandit=convallis&ultrices=eget&enim=eleifend&lorem=luctus&ipsum=ultricies&dolor=eu&sit=nibh&amet=quisque&consectetuer=id&adipiscing=justo&elit=sit&proin=amet&interdum=sapien&mauris=dignissim&non=vestibulum&ligula=vestibulum&pellentesque=ante&ultrices=ipsum&phasellus=primis&id=in&sapien=faucibus&in=orci&sapien=luctus&iaculis=et&congue=ultrices&vivamus=posuere&metus=cubilia&arcu=curae&adipiscing=nulla&molestie=dapibus&hendrerit=dolor&at=vel&vulputate=est&vitae=donec&nisl=odio&aenean=justo&lectus=sollicitudin&pellentesque=ut&eget=suscipit&nunc=a&donec=feugiat&quis=et&orci=eros&eget=vestibulum&orci=ac&vehicula=est&condimentum=lacinia&curabitur=nisi&in=venenatis&libero=tristique&ut=fusce&massa=congue&volutpat=diam&convallis=id&morbi=ornare&odio=imperdiet&odio=sapien&elementum=urna&eu=pretium&interdum=nisl&eu=ut&tincidunt=volutpat&in=sapien&leo=arcu&maecenas=sed&pulvinar=augue&lobortis=aliquam&est=erat&phasellus=volutpat&sit=in&amet=congue&erat=etiam&nulla=justo&tempus=etiam&vivamus=pretium&in=iaculis&felis=justo&eu=in&sapien=hac&cursus=habitasse&vestibulum=platea&proin=dictumst&eu=etiam&mi=faucibus"
      }]
    };
  },
  computed: {
    filteredCourses: function filteredCourses() {
      var _this = this;

      return this.courses.filter(function (course) {
        return course.courseName.match(_this.search);
      });
    }
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_Bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/Bar */ "./resources/js/components/charts/Bar.vue");
/* harmony import */ var _charts_Pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/Pie */ "./resources/js/components/charts/Pie.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dense: false,
      fixedHeader: true,
      height: 300,
      accounts: [{
        first_name: "Dolly",
        last_name: "Roome",
        contract: "http://dummyimage.com/135x100.png/ff4444/ffffff"
      }, {
        first_name: "Cozmo",
        last_name: "Novotna",
        contract: "http://dummyimage.com/242x212.png/5fa2dd/ffffff"
      }, {
        first_name: "Zabrina",
        last_name: "Blowfield",
        contract: "http://dummyimage.com/166x141.png/ff4444/ffffff"
      }, {
        first_name: "Shirleen",
        last_name: "Allcott",
        contract: "http://dummyimage.com/108x129.png/cc0000/ffffff"
      }, {
        first_name: "Alphonse",
        last_name: "Yewen",
        contract: "http://dummyimage.com/132x171.png/ff4444/ffffff"
      }, {
        first_name: "Devondra",
        last_name: "Kleinhaut",
        contract: "http://dummyimage.com/162x236.png/dddddd/000000"
      }, {
        first_name: "Jodee",
        last_name: "Coolbear",
        contract: "http://dummyimage.com/211x119.png/cc0000/ffffff"
      }, {
        first_name: "Fiorenze",
        last_name: "Sylett",
        contract: "http://dummyimage.com/153x139.png/dddddd/000000"
      }, {
        first_name: "Maudie",
        last_name: "Kenright",
        contract: "http://dummyimage.com/223x102.png/5fa2dd/ffffff"
      }, {
        first_name: "Chucho",
        last_name: "Bullon",
        contract: "http://dummyimage.com/107x230.png/ff4444/ffffff"
      }]
    };
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_Bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/Bar */ "./resources/js/components/charts/Bar.vue");
/* harmony import */ var _charts_Pie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/Pie */ "./resources/js/components/charts/Pie.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Bar: _charts_Bar__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pie: _charts_Pie__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: "",
      students: [{
        id: 1,
        first_name: "Kaitlynn",
        last_name: "Siddell",
        email: "ksiddell0@behance.net",
        phone: "325-714-6685",
        img: "https://robohash.org/exutenim.png?size=50x50&set=set1"
      }, {
        id: 2,
        first_name: "Woodie",
        last_name: "McGrane",
        email: "wmcgrane1@hud.gov",
        phone: "679-225-8012",
        img: "https://robohash.org/inquimaiores.bmp?size=50x50&set=set1"
      }, {
        id: 3,
        first_name: "Dorothee",
        last_name: "Tippin",
        email: "dtippin2@miitbeian.gov.cn",
        phone: "562-599-3944",
        img: "https://robohash.org/etnisiut.jpg?size=50x50&set=set1"
      }, {
        id: 4,
        first_name: "Tedmund",
        last_name: "Briskey",
        email: "tbriskey3@cbsnews.com",
        phone: "260-655-5976",
        img: "https://robohash.org/etdolorqui.jpg?size=50x50&set=set1"
      }, {
        id: 5,
        first_name: "Candis",
        last_name: "Allkins",
        email: "callkins4@miibeian.gov.cn",
        phone: "420-941-2883",
        img: "https://robohash.org/aliasasperioresenim.png?size=50x50&set=set1"
      }, {
        id: 6,
        first_name: "Gothart",
        last_name: "Larkin",
        email: "glarkin5@alexa.com",
        phone: "356-813-5135",
        img: "https://robohash.org/evenietoccaecatiharum.bmp?size=50x50&set=set1"
      }, {
        id: 7,
        first_name: "Annissa",
        last_name: "Wedderburn",
        email: "awedderburn6@symantec.com",
        phone: "547-250-9397",
        img: "https://robohash.org/dignissimosrepellendusnesciunt.jpg?size=50x50&set=set1"
      }, {
        id: 8,
        first_name: "Willdon",
        last_name: "Tott",
        email: "wtott7@rakuten.co.jp",
        phone: "918-731-8838",
        img: "https://robohash.org/nonquaerattotam.bmp?size=50x50&set=set1"
      }, {
        id: 9,
        first_name: "Jackelyn",
        last_name: "Van Castele",
        email: "jvancastele8@dedecms.com",
        phone: "520-474-5033",
        img: "https://robohash.org/dolorumarchitectominus.bmp?size=50x50&set=set1"
      }, {
        id: 10,
        first_name: "Robers",
        last_name: "Maine",
        email: "rmaine9@sohu.com",
        phone: "719-779-8006",
        img: "https://robohash.org/utrerumpariatur.bmp?size=50x50&set=set1"
      }, {
        id: 11,
        first_name: "Cedric",
        last_name: "Jahnke",
        email: "cjahnkea@bing.com",
        phone: "876-582-3494",
        img: "https://robohash.org/sedaccusamusconsequatur.bmp?size=50x50&set=set1"
      }, {
        id: 12,
        first_name: "Melisent",
        last_name: "Mazin",
        email: "mmazinb@360.cn",
        phone: "624-607-5940",
        img: "https://robohash.org/etnumquamut.jpg?size=50x50&set=set1"
      }, {
        id: 13,
        first_name: "Riccardo",
        last_name: "Lundy",
        email: "rlundyc@tinyurl.com",
        phone: "774-450-5594",
        img: "https://robohash.org/quoexpeditapraesentium.bmp?size=50x50&set=set1"
      }, {
        id: 14,
        first_name: "Rubia",
        last_name: "Heinle",
        email: "rheinled@phoca.cz",
        phone: "527-101-2902",
        img: "https://robohash.org/consequaturrepellatsapiente.jpg?size=50x50&set=set1"
      }, {
        id: 15,
        first_name: "Gnni",
        last_name: "Billson",
        email: "gbillsone@dropbox.com",
        phone: "315-210-4759",
        img: "https://robohash.org/repellatnequevitae.png?size=50x50&set=set1"
      }, {
        id: 16,
        first_name: "Anthea",
        last_name: "Dickey",
        email: "adickeyf@meetup.com",
        phone: "868-198-8586",
        img: "https://robohash.org/velitautodio.jpg?size=50x50&set=set1"
      }, {
        id: 17,
        first_name: "Jim",
        last_name: "Krauss",
        email: "jkraussg@jalbum.net",
        phone: "659-202-8594",
        img: "https://robohash.org/reiciendisrationequi.bmp?size=50x50&set=set1"
      }, {
        id: 18,
        first_name: "Ainslie",
        last_name: "Waggitt",
        email: "awaggitth@google.de",
        phone: "814-527-7083",
        img: "https://robohash.org/quisdoloresmolestiae.bmp?size=50x50&set=set1"
      }, {
        id: 19,
        first_name: "Gustave",
        last_name: "Adlington",
        email: "gadlingtoni@goo.gl",
        phone: "470-230-3589",
        img: "https://robohash.org/voluptatesdoloresmolestiae.jpg?size=50x50&set=set1"
      }, {
        id: 20,
        first_name: "Berty",
        last_name: "Gotch",
        email: "bgotchj@netlog.com",
        phone: "872-415-9901",
        img: "https://robohash.org/blanditiiscummaiores.bmp?size=50x50&set=set1"
      }, {
        id: 21,
        first_name: "Trumaine",
        last_name: "O'Hare",
        email: "toharek@mtv.com",
        phone: "929-928-6710",
        img: "https://robohash.org/consequatursequiomnis.bmp?size=50x50&set=set1"
      }, {
        id: 22,
        first_name: "Sydney",
        last_name: "Hughill",
        email: "shughilll@goo.ne.jp",
        phone: "183-563-7923",
        img: "https://robohash.org/essemolestiasanimi.bmp?size=50x50&set=set1"
      }, {
        id: 23,
        first_name: "Boothe",
        last_name: "Wortman",
        email: "bwortmanm@xrea.com",
        phone: "919-817-4162",
        img: "https://robohash.org/consequaturautnam.jpg?size=50x50&set=set1"
      }, {
        id: 24,
        first_name: "Ferrell",
        last_name: "Rearie",
        email: "frearien@unesco.org",
        phone: "433-627-9296",
        img: "https://robohash.org/quirerumfugit.jpg?size=50x50&set=set1"
      }, {
        id: 25,
        first_name: "Adoree",
        last_name: "Knobell",
        email: "aknobello@hhs.gov",
        phone: "615-678-6172",
        img: "https://robohash.org/doloremvoluptatemnam.jpg?size=50x50&set=set1"
      }, {
        id: 26,
        first_name: "Ned",
        last_name: "Bootman",
        email: "nbootmanp@facebook.com",
        phone: "700-405-3480",
        img: "https://robohash.org/officiaasperioressaepe.jpg?size=50x50&set=set1"
      }, {
        id: 27,
        first_name: "Tyler",
        last_name: "Vagges",
        email: "tvaggesq@123-reg.co.uk",
        phone: "968-795-2174",
        img: "https://robohash.org/repellatperferendisvel.png?size=50x50&set=set1"
      }, {
        id: 28,
        first_name: "Maurits",
        last_name: "Olenichev",
        email: "molenichevr@webnode.com",
        phone: "518-433-8548",
        img: "https://robohash.org/abrerumaut.bmp?size=50x50&set=set1"
      }, {
        id: 29,
        first_name: "Gabriele",
        last_name: "Emmerson",
        email: "gemmersons@illinois.edu",
        phone: "824-839-0213",
        img: "https://robohash.org/veroautemodio.jpg?size=50x50&set=set1"
      }, {
        id: 30,
        first_name: "Fransisco",
        last_name: "Abbis",
        email: "fabbist@mayoclinic.com",
        phone: "606-407-2076",
        img: "https://robohash.org/veniamestnobis.png?size=50x50&set=set1"
      }]
    };
  },
  computed: {
    filteredStudents: function filteredStudents() {
      var _this = this;

      return this.students.filter(function (student) {
        var studentName = student.first_name + " " + student.last_name;
        return studentName.match(_this.search);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c(
      "div",
      [
        _c(
          "nav",
          [
            _c(
              "v-toolbar",
              { attrs: { flat: "" } },
              [
                _c("v-app-bar-nav-icon", {
                  staticClass: "grey--text",
                  on: {
                    click: function($event) {
                      _vm.drawer = !_vm.drawer
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-toolbar-title", { staticClass: "grey--text" }, [
                  _vm._v("Dashboard")
                ]),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-btn",
                  { attrs: { icon: "" } },
                  [
                    _c("v-icon", { attrs: { color: "black", size: "30" } }, [
                      _vm._v("mdi-bell-outline")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-menu",
                  {
                    attrs: { "offset-y": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "activator",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  {
                                    staticClass: "hidden-md-and-down",
                                    attrs: { color: "grey", icon: "", text: "" }
                                  },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [
                                _c("v-avatar", { attrs: { size: "35" } }, [
                                  _c("img", {
                                    attrs: {
                                      src:
                                        "/upload/" + _vm.$page.auth.user.image,
                                      alt: "John"
                                    }
                                  })
                                ])
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "v-list",
                      { staticClass: "py-0", attrs: { width: "300" } },
                      [
                        _c(
                          "v-list-item",
                          { staticClass: "grey lighten-3 py-5" },
                          [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "4" } },
                                  [
                                    _c("v-avatar", { attrs: { size: "70" } }, [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "/upload/" +
                                            _vm.$page.auth.user.image,
                                          alt: "John"
                                        }
                                      })
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-col", { attrs: { cols: "8" } }, [
                                  _c("div", { staticClass: "subheading" }, [
                                    _vm._v(
                                      _vm._s(_vm.$page.auth.user.nom) +
                                        " " +
                                        _vm._s(_vm.$page.auth.user.prenom)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "subtitle-2" }, [
                                    _vm._v(_vm._s(_vm.$page.auth.user.email))
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          { attrs: { router: "", to: "/profile" } },
                          [
                            _c(
                              "v-list-item-icon",
                              [_c("v-icon", [_vm._v("mdi-account")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-title",
                              { staticClass: "text-capitalize" },
                              [_vm._v("profile")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          { attrs: { router: "", to: "#" } },
                          [
                            _c(
                              "v-list-item-icon",
                              [_c("v-icon", [_vm._v("mdi-cart")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-title",
                              { staticClass: "text-capitalize" },
                              [_vm._v("panierrrrrrrrrrrrrrrrrrrrrrrrrrr")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          { attrs: { router: "", to: "/profile/courses" } },
                          [
                            _c(
                              "v-list-item-icon",
                              [
                                _c("v-icon", [
                                  _vm._v("mdi-format-list-bulleted-square")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-title",
                              { staticClass: "text-capitalize" },
                              [_vm._v("mes foramtions")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-list-item",
                          { attrs: { router: "", to: "#" } },
                          [
                            _c(
                              "v-list-item-icon",
                              [_c("v-icon", [_vm._v("mdi-logout")])],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-list-item-title",
                              { staticClass: "text-capitalize" },
                              [_vm._v("déconnecter")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "v-navigation-drawer",
              {
                attrs: { right: "", app: "" },
                scopedSlots: _vm._u([
                  {
                    key: "append",
                    fn: function() {
                      return [
                        _c(
                          "div",
                          { staticClass: "pa-2" },
                          [
                            _c(
                              "v-btn",
                              { attrs: { color: "secondary", block: "" } },
                              [
                                _vm._v("Logout "),
                                _c("v-icon", { attrs: { right: "" } }, [
                                  _vm._v("mdi-logout")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    },
                    proxy: true
                  }
                ]),
                model: {
                  value: _vm.drawer,
                  callback: function($$v) {
                    _vm.drawer = $$v
                  },
                  expression: "drawer"
                }
              },
              [
                _c(
                  "v-list-item",
                  {
                    staticClass: "secondary py-7",
                    attrs: { "two-line": "", dark: "" }
                  },
                  [
                    _c("v-list-item-avatar", [
                      _c("img", {
                        attrs: {
                          src: "https://randomuser.me/api/portraits/men/81.jpg"
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      [
                        _c("v-list-item-title", [
                          _vm._v(
                            _vm._s(_vm.$page.auth.user.nom) +
                              " " +
                              _vm._s(_vm.$page.auth.user.prenom)
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-list-item-subtitle", [_vm._v("Admin")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c("v-divider"),
                _vm._v(" "),
                _c(
                  "v-tabs",
                  {
                    staticClass: "pl-0 text-left",
                    attrs: { vertical: "" },
                    model: {
                      value: _vm.window,
                      callback: function($$v) {
                        _vm.window = $$v
                      },
                      expression: "window"
                    }
                  },
                  _vm._l(_vm.items, function(item, i) {
                    return _c(
                      "v-tab",
                      {
                        key: i,
                        staticClass:
                          "pl-5  justify-start text-body-2 text-capitalize"
                      },
                      [
                        _c(
                          "v-icon",
                          { staticClass: "mr-4", attrs: { left: "" } },
                          [_vm._v(_vm._s(item.icon))]
                        ),
                        _vm._v(
                          "\n            " + _vm._s(item.text) + "\n          "
                        )
                      ],
                      1
                    )
                  }),
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-tabs-items",
          {
            model: {
              value: _vm.window,
              callback: function($$v) {
                _vm.window = $$v
              },
              expression: "window"
            }
          },
          [
            _c("v-tab-item", [_c("admin-stats")], 1),
            _vm._v(" "),
            _c("v-tab-item", [_c("AddCourse")], 1),
            _vm._v(" "),
            _c(
              "v-tab-item",
              [_c("admin-courses", { attrs: { frome: _vm.formations } })],
              1
            ),
            _vm._v(" "),
            _c("v-tab-item", [_c("students")], 1),
            _vm._v(" "),
            _c("v-tab-item", [_c("stats")], 1)
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600" },
          model: {
            value: _vm.createModuleDialog,
            callback: function($$v) {
              _vm.createModuleDialog = $$v
            },
            expression: "createModuleDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline" }, [
                _vm._v("Ajouter un module")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-text-field", {
                    attrs: { outlined: "", label: "Le titre de module" },
                    model: {
                      value: _vm.moduleTitle,
                      callback: function($$v) {
                        _vm.moduleTitle = $$v
                      },
                      expression: "moduleTitle"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.createModuleDialog = false
                        }
                      }
                    },
                    [_vm._v("Annuler")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: { click: _vm.addModule }
                    },
                    [_vm._v("Ajouter")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "py-7 primary" },
        [
          _c("v-container", [
            _c(
              "div",
              { staticClass: "d-flex align-center justify-space-between" },
              [
                _c("div", [
                  _c(
                    "h2",
                    { staticClass: " font-weight-medium white--text mb-5" },
                    [_vm._v("\n            Titre de formation\n          ")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "subheading grey--text" }, [
                    _vm._v("Catégorie de formation")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "subheading grey--text" }, [
                    _vm._v(
                      "\n            Public visé : Lorem ipsum dolor sit\n          "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mr-4",
                        attrs: { text: "", dark: "" },
                        on: {
                          click: function($event) {
                            _vm.createModuleDialog = true
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { left: "" } }, [
                          _vm._v("mdi-pencil")
                        ]),
                        _vm._v("\n            Modifier\n          ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { color: "success", dark: "" },
                        on: {
                          click: function($event) {
                            _vm.createModuleDialog = true
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { left: "" } }, [
                          _vm._v("mdi-plus")
                        ]),
                        _vm._v("\n            module\n          ")
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        [
          _c(
            "v-container",
            [
              _c(
                "v-list",
                { staticClass: "py-0" },
                _vm._l(_vm.content, function(modul) {
                  return _c(
                    "v-list-group",
                    {
                      key: modul.moduleTitle,
                      attrs: { value: "true" },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "activator",
                            fn: function() {
                              return [
                                _c(
                                  "v-list-item-title",
                                  {
                                    staticClass:
                                      "subheading primary--text font-weight-bold text-capitalize"
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-center justify-space-between"
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(modul.moduleTitle) +
                                            "\n                "
                                        ),
                                        _c(
                                          "div",
                                          [
                                            _c(
                                              "v-dialog",
                                              {
                                                attrs: { "max-width": "600" },
                                                scopedSlots: _vm._u(
                                                  [
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        var attrs = ref.attrs
                                                        return [
                                                          _c(
                                                            "v-btn",
                                                            _vm._g(
                                                              _vm._b(
                                                                {
                                                                  staticClass:
                                                                    "mx-4",
                                                                  attrs: {
                                                                    icon: ""
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      $event.stopPropagation()
                                                                      modul.createSectionDialog = true
                                                                    }
                                                                  }
                                                                },
                                                                "v-btn",
                                                                attrs,
                                                                false
                                                              ),
                                                              on
                                                            ),
                                                            [
                                                              _c("v-icon", [
                                                                _vm._v(
                                                                  "mdi-plus"
                                                                )
                                                              ])
                                                            ],
                                                            1
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ],
                                                  null,
                                                  true
                                                ),
                                                model: {
                                                  value:
                                                    modul.createSectionDialog,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      modul,
                                                      "createSectionDialog",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "modul.createSectionDialog"
                                                }
                                              },
                                              [
                                                _vm._v(" "),
                                                _c(
                                                  "h2",
                                                  {
                                                    staticClass:
                                                      "white--text text-right"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                      " +
                                                        _vm._s(
                                                          modul.moduleTitle
                                                        ) +
                                                        "\n                    "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-card",
                                                  [
                                                    _c(
                                                      "v-card-title",
                                                      {
                                                        staticClass: "headline"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Ajouter un section au\n                        " +
                                                            _vm._s(
                                                              modul.moduleTitle
                                                            )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-card-text",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            outlined: "",
                                                            label:
                                                              "Le titre de section"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.sectionTitle,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.sectionTitle = $$v
                                                            },
                                                            expression:
                                                              "sectionTitle"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-card-actions",
                                                      [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color:
                                                                "error darken-1",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.stopPropagation()
                                                                modul.createSectionDialog = false
                                                              }
                                                            }
                                                          },
                                                          [_vm._v("Annuler")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              color:
                                                                "green darken-1",
                                                              text: ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.addSection(
                                                                  modul.moduleTitle
                                                                )
                                                                modul.createSectionDialog = false
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Ajouter au " +
                                                                _vm._s(
                                                                  modul.moduleTitle
                                                                )
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mx-4",
                                                attrs: { icon: "", small: "" }
                                              },
                                              [
                                                _c("v-icon", [
                                                  _vm._v("mdi-pencil-outline")
                                                ])
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "mx-4",
                                                attrs: { icon: "", small: "" }
                                              },
                                              [
                                                _c(
                                                  "v-icon",
                                                  { attrs: { color: "error" } },
                                                  [
                                                    _vm._v(
                                                      "mdi-trash-can-outline"
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _vm._l(modul.sections, function(section, i) {
                        return _c(
                          "v-list-group",
                          {
                            key: i,
                            attrs: {
                              "no-action": "",
                              "sub-group": "",
                              value: "true"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function() {
                                    return [
                                      _c(
                                        "v-list-item-content",
                                        [
                                          _c("v-list-item-title", [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex align-center justify-space-between"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                    " +
                                                    _vm._s(
                                                      section.sectionTitle
                                                    ) +
                                                    "\n\n                    "
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-dialog",
                                                  {
                                                    attrs: { width: "800" },
                                                    scopedSlots: _vm._u(
                                                      [
                                                        {
                                                          key: "activator",
                                                          fn: function(ref) {
                                                            var on = ref.on
                                                            var attrs =
                                                              ref.attrs
                                                            return [
                                                              _c(
                                                                "v-btn",
                                                                _vm._g(
                                                                  _vm._b(
                                                                    {
                                                                      attrs: {
                                                                        color:
                                                                          "primary lighten-2",
                                                                        dark:
                                                                          "",
                                                                        small:
                                                                          ""
                                                                      }
                                                                    },
                                                                    "v-btn",
                                                                    attrs,
                                                                    false
                                                                  ),
                                                                  on
                                                                ),
                                                                [
                                                                  _c(
                                                                    "v-icon",
                                                                    {
                                                                      attrs: {
                                                                        left: ""
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "mdi-plus"
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(
                                                                    "\n                          Ajouter contenu\n                        "
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          }
                                                        }
                                                      ],
                                                      null,
                                                      true
                                                    ),
                                                    model: {
                                                      value:
                                                        section.createContentDialog,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          section,
                                                          "createContentDialog",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "section.createContentDialog"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-card",
                                                      [
                                                        _c(
                                                          "v-card-title",
                                                          {
                                                            staticClass:
                                                              "headline  mb-4 ",
                                                            attrs: {
                                                              "primary-title":
                                                                ""
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          Ajouter contenu au section\n                          " +
                                                                _vm._s(
                                                                  section.sectionTitle
                                                                ) +
                                                                "\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c("v-card-text", [
                                                          _c(
                                                            "div",
                                                            [
                                                              _c(
                                                                "v-dialog",
                                                                {
                                                                  attrs: {
                                                                    width: "800"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "activator",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var on =
                                                                            ref.on
                                                                          var attrs =
                                                                            ref.attrs
                                                                          return [
                                                                            _c(
                                                                              "v-btn",
                                                                              _vm._g(
                                                                                _vm._b(
                                                                                  {
                                                                                    staticClass:
                                                                                      "mx-3",
                                                                                    attrs: {
                                                                                      "x-large":
                                                                                        "",
                                                                                      color:
                                                                                        "primary",
                                                                                      icon:
                                                                                        ""
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        _vm.contentType =
                                                                                          "PDF"
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "v-btn",
                                                                                  attrs,
                                                                                  false
                                                                                ),
                                                                                on
                                                                              ),
                                                                              [
                                                                                _c(
                                                                                  "v-icon",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "mdi-file-pdf-outline"
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  ),
                                                                  model: {
                                                                    value:
                                                                      section.createPdfDialog,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        section,
                                                                        "createPdfDialog",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "section.createPdfDialog"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-card",
                                                                    [
                                                                      _c(
                                                                        "v-card-title",
                                                                        {
                                                                          staticClass:
                                                                            "mb-7",
                                                                          attrs: {
                                                                            "primary-title":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              staticClass:
                                                                                "mr-4"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-file-pdf-outline"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            "\n\n                                  Féchier PDF\n                                "
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-text",
                                                                        [
                                                                          _c(
                                                                            "v-text-field",
                                                                            {
                                                                              attrs: {
                                                                                label:
                                                                                  "Titre de contenu"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm.contentTitle,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.contentTitle = $$v
                                                                                },
                                                                                expression:
                                                                                  "contentTitle"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-file-input",
                                                                            {
                                                                              attrs: {
                                                                                label:
                                                                                  "Uploader fichier PDF"
                                                                              }
                                                                            }
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-divider"
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-actions",
                                                                        [
                                                                          _c(
                                                                            "v-spacer"
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary",
                                                                                text:
                                                                                  ""
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  section.createPdfDialog = false
                                                                                  _vm.addContent(
                                                                                    section.sectionTitle
                                                                                  )

                                                                                  _vm.url =
                                                                                    "/pdf.pdf"
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    Uploader\n                                  "
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-dialog",
                                                                {
                                                                  attrs: {
                                                                    width: "800"
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "activator",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var on =
                                                                            ref.on
                                                                          var attrs =
                                                                            ref.attrs
                                                                          return [
                                                                            _c(
                                                                              "v-btn",
                                                                              _vm._g(
                                                                                _vm._b(
                                                                                  {
                                                                                    staticClass:
                                                                                      "mx-3",
                                                                                    attrs: {
                                                                                      "x-large":
                                                                                        "",
                                                                                      color:
                                                                                        "primary",
                                                                                      icon:
                                                                                        ""
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        _vm.contentType =
                                                                                          "video"
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "v-btn",
                                                                                  attrs,
                                                                                  false
                                                                                ),
                                                                                on
                                                                              ),
                                                                              [
                                                                                _c(
                                                                                  "v-icon",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "mdi-file-video-outline"
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  ),
                                                                  model: {
                                                                    value:
                                                                      section.createVideoDialog,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        section,
                                                                        "createVideoDialog",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "section.createVideoDialog"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-card",
                                                                    [
                                                                      _c(
                                                                        "v-card-title",
                                                                        {
                                                                          staticClass:
                                                                            "mb-7",
                                                                          attrs: {
                                                                            "primary-title":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              staticClass:
                                                                                "mr-4"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-file-video-outline"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            "\n                                  Vidéo\n                                "
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-text",
                                                                        [
                                                                          _c(
                                                                            "v-text-field",
                                                                            {
                                                                              attrs: {
                                                                                label:
                                                                                  "Titre de Vidéo"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm.contentTitle,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.contentTitle = $$v
                                                                                },
                                                                                expression:
                                                                                  "contentTitle"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-file-input",
                                                                            {
                                                                              attrs: {
                                                                                label:
                                                                                  "Uploader fichier MP4"
                                                                              }
                                                                            }
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-divider"
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-actions",
                                                                        [
                                                                          _c(
                                                                            "v-spacer"
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary",
                                                                                text:
                                                                                  ""
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  section.createVideoDialog = false
                                                                                  _vm.addContent(
                                                                                    section.sectionTitle
                                                                                  )

                                                                                  _vm.url =
                                                                                    "/pdf.pdf"
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    Uploader\n                                  "
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-dialog",
                                                                {
                                                                  attrs: {
                                                                    fullscreen:
                                                                      ""
                                                                  },
                                                                  scopedSlots: _vm._u(
                                                                    [
                                                                      {
                                                                        key:
                                                                          "activator",
                                                                        fn: function(
                                                                          ref
                                                                        ) {
                                                                          var on =
                                                                            ref.on
                                                                          var attrs =
                                                                            ref.attrs
                                                                          return [
                                                                            _c(
                                                                              "v-btn",
                                                                              _vm._g(
                                                                                _vm._b(
                                                                                  {
                                                                                    staticClass:
                                                                                      "mx-3",
                                                                                    attrs: {
                                                                                      "x-large":
                                                                                        "",
                                                                                      color:
                                                                                        "primary",
                                                                                      icon:
                                                                                        ""
                                                                                    },
                                                                                    on: {
                                                                                      click: function(
                                                                                        $event
                                                                                      ) {
                                                                                        _vm.contentType =
                                                                                          "html"
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  "v-btn",
                                                                                  attrs,
                                                                                  false
                                                                                ),
                                                                                on
                                                                              ),
                                                                              [
                                                                                _c(
                                                                                  "v-icon",
                                                                                  [
                                                                                    _vm._v(
                                                                                      "mdi-code-tags"
                                                                                    )
                                                                                  ]
                                                                                )
                                                                              ],
                                                                              1
                                                                            )
                                                                          ]
                                                                        }
                                                                      }
                                                                    ],
                                                                    null,
                                                                    true
                                                                  ),
                                                                  model: {
                                                                    value:
                                                                      section.createHTMLDialog,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        section,
                                                                        "createHTMLDialog",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "section.createHTMLDialog"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "v-card",
                                                                    [
                                                                      _c(
                                                                        "v-card-title",
                                                                        {
                                                                          staticClass:
                                                                            "mb-7",
                                                                          attrs: {
                                                                            "primary-title":
                                                                              ""
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            {
                                                                              staticClass:
                                                                                "mr-4"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-code-tags"
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            "\n                                  Contenu HTML\n                                  "
                                                                          ),
                                                                          _c(
                                                                            "v-spacer"
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              staticClass:
                                                                                "mr-5",
                                                                              attrs: {
                                                                                color:
                                                                                  "error"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  section.createHTMLDialog = false
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    Annuler\n                                    "
                                                                              ),
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    right:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "mdi-close"
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "v-btn",
                                                                            {
                                                                              attrs: {
                                                                                color:
                                                                                  "primary"
                                                                              },
                                                                              on: {
                                                                                click: function(
                                                                                  $event
                                                                                ) {
                                                                                  section.createHTMLDialog = false
                                                                                  _vm.addContent(
                                                                                    section.sectionTitle
                                                                                  )
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                    Enregister\n                                    "
                                                                              ),
                                                                              _c(
                                                                                "v-icon",
                                                                                {
                                                                                  attrs: {
                                                                                    right:
                                                                                      ""
                                                                                  }
                                                                                },
                                                                                [
                                                                                  _vm._v(
                                                                                    "mdi-content-save"
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ],
                                                                            1
                                                                          )
                                                                        ],
                                                                        1
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "v-card-text",
                                                                        [
                                                                          _c(
                                                                            "vue-editor",
                                                                            {
                                                                              staticStyle: {},
                                                                              model: {
                                                                                value:
                                                                                  _vm.contentHTML,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.contentHTML = $$v
                                                                                },
                                                                                expression:
                                                                                  "contentHTML"
                                                                              }
                                                                            }
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-btn",
                                                                {
                                                                  staticClass:
                                                                    "mx-3",
                                                                  attrs: {
                                                                    "x-large":
                                                                      "",
                                                                    color:
                                                                      "primary",
                                                                    icon: ""
                                                                  }
                                                                },
                                                                [
                                                                  _c("v-icon", [
                                                                    _vm._v(
                                                                      "mdi-head-question-outline"
                                                                    )
                                                                  ])
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  },
                                  proxy: true
                                }
                              ],
                              null,
                              true
                            )
                          },
                          [
                            _vm._v(" "),
                            _vm._l(section.sectionContent, function(
                              itemContent,
                              i
                            ) {
                              return [
                                itemContent.type === "video"
                                  ? _c(
                                      "v-list-item",
                                      {
                                        key: i,
                                        attrs: { link: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.videoId = itemContent.id
                                            _vm.contentType = "video"
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-play-outline")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-item-title", {
                                          staticClass: "pl-0",
                                          domProps: {
                                            textContent: _vm._s(
                                              itemContent.title
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                itemContent.type === "QCM"
                                  ? _c(
                                      "v-list-item",
                                      {
                                        key: i,
                                        attrs: { link: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.videoId = itemContent.id
                                            _vm.contentType = "QCM"
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c("v-icon", [
                                              _vm._v(
                                                "mdi-head-question-outline"
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-item-title", {
                                          staticClass: "pl-0",
                                          domProps: {
                                            textContent: _vm._s(
                                              itemContent.title
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                itemContent.type === "PDF"
                                  ? _c(
                                      "v-list-item",
                                      {
                                        key: i,
                                        attrs: { link: "" },
                                        on: {
                                          click: function($event) {
                                            _vm.videoId = itemContent.url
                                            _vm.contentType = "PDF"
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c("v-icon", [
                                              _vm._v("mdi-file-pdf-outline")
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("v-list-item-title", {
                                          staticClass: "pl-0",
                                          domProps: {
                                            textContent: _vm._s(
                                              itemContent.title
                                            )
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ]
                            })
                          ],
                          2
                        )
                      })
                    ],
                    2
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      [
        _c(
          "v-container",
          [
            _c(
              "v-btn",
              {
                staticClass: "mb-10",
                attrs: { router: "", to: "/course", color: "secondary" }
              },
              [
                _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-plus")]),
                _vm._v(
                  "\n        ajouter une formationeeeeeeeeeeeeeeeeeeeeeeeeee"
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-text-field", {
              attrs: { label: "Rechercher", "append-icon": "mdi-magnify" },
              model: {
                value: _vm.search,
                callback: function($$v) {
                  _vm.search = $$v
                },
                expression: "search"
              }
            }),
            _vm._v(" "),
            _c("v-simple-table", {
              attrs: { "fixed-header": "", height: "500px" },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function() {
                    return [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Ref")
                          ]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Thumbnail")]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Titre de formation")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Catégorie")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("Prix")
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-left" }, [
                            _vm._v("formateur")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.frome, function(fr) {
                          return _c("tr", { key: fr.id_formation }, [
                            _c("td", [_vm._v(_vm._s(fr.reference))]),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-responsive",
                                  [
                                    _c("v-img", {
                                      attrs: { "aspect-ratio": "1.9" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(fr.nomF))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(fr.type))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(fr.prix) + " €")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.$page.auth.user.nom) +
                                  " {{}}\n              "
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            })
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-app", [
    _c(
      "div",
      { attrs: { id: "app" } },
      [
        _c(
          "v-container",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12", md: "4" } },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "pa-3",
                        attrs: {
                          flat: "",
                          outlined: "",
                          color: "yellow lighten-5"
                        }
                      },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c("v-icon", { attrs: { size: "80" } }, [
                                  _vm._v("mdi-account-multiple-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-col", { attrs: { cols: "8" } }, [
                              _c("h3", { staticClass: " font-weight-medium" }, [
                                _vm._v("Utulisateurs")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: " font-weight-medium" }, [
                                _vm._v("400")
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", md: "4" } },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "pa-3",
                        attrs: {
                          flat: "",
                          outlined: "",
                          color: "orange lighten-5"
                        }
                      },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c("v-icon", { attrs: { size: "80" } }, [
                                  _vm._v("mdi-account-multiple-plus-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-col", { attrs: { cols: "8" } }, [
                              _c("h3", { staticClass: " font-weight-medium" }, [
                                _vm._v("Demandes")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: " font-weight-medium" }, [
                                _vm._v("15")
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", md: "4" } },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "pa-3",
                        attrs: {
                          flat: "",
                          outlined: "",
                          color: "purple lighten-5"
                        }
                      },
                      [
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "4" } },
                              [
                                _c("v-icon", { attrs: { size: "80" } }, [
                                  _vm._v("mdi-account-star-outline")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-col", { attrs: { cols: "8" } }, [
                              _c("h3", { staticClass: " font-weight-medium" }, [
                                _vm._v("Admins")
                              ]),
                              _vm._v(" "),
                              _c("h2", { staticClass: " font-weight-medium" }, [
                                _vm._v("4")
                              ])
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "actions-section" },
          [
            _c(
              "v-container",
              [
                _c(
                  "v-row",
                  [
                    _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                      _c(
                        "div",
                        { staticClass: "action-card" },
                        [
                          _c("h2", { staticClass: "font-weight-medium" }, [
                            _vm._v("Ajouter une formation")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "caption" }, [
                            _vm._v(
                              "\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam\n                consequatur voluptas, illo vel culpa accusamus?\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "secondary",
                                "router-link": "",
                                to: "/add"
                              }
                            },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-plus")
                              ]),
                              _vm._v(" Ajouter\n              ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                      _c(
                        "div",
                        { staticClass: "action-card" },
                        [
                          _c("h2", { staticClass: "font-weight-medium" }, [
                            _vm._v("Ajouter un message")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "caption" }, [
                            _vm._v(
                              "\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam\n                consequatur voluptas, illo vel culpa accusamus? Lorem ipsum\n                dolor sit amet consectetur.\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "secondary" } },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-plus")
                              ]),
                              _vm._v(" Ajouter\n              ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-col", { attrs: { cols: "12", md: "4" } }, [
                      _c(
                        "div",
                        { staticClass: "action-card" },
                        [
                          _c("h2", { staticClass: "font-weight-medium" }, [
                            _vm._v("Ajouter un Admin")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "caption" }, [
                            _vm._v(
                              "\n                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam\n                consequatur voluptas, ?\n              "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "secondary" } },
                            [
                              _c("v-icon", { attrs: { left: "" } }, [
                                _vm._v("mdi-plus")
                              ]),
                              _vm._v(" Ajouter\n              ")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "requestes-section" },
          [
            _c(
              "v-container",
              [
                _c("h2", { staticClass: "mb-3" }, [_vm._v("Les Demandes")]),
                _vm._v(" "),
                _c("v-simple-table", {
                  attrs: {
                    "fixed-header": _vm.fixedHeader,
                    height: _vm.height
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function() {
                        return [
                          _c("thead", [
                            _c("tr", [
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("Nom et Prénom")
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "text-left" }, [
                                _vm._v("Contrat")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "tbody",
                            _vm._l(_vm.accounts, function(account) {
                              return _c("tr", { key: account.name }, [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      account.first_name +
                                        " " +
                                        account.last_name
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "pl-0",
                                        attrs: {
                                          small: "",
                                          text: "",
                                          color: "success"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    Télécharger le contrat\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { small: "", color: "success" }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    accepter\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          fab: "",
                                          dark: "",
                                          depressed: "",
                                          "x-small": "",
                                          color: "error"
                                        }
                                      },
                                      [
                                        _c("v-icon", { attrs: { dark: "" } }, [
                                          _vm._v("mdi-minus")
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            }),
                            0
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                })
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("h1", { staticClass: "display-1 grey--text" }, [
        _vm._v("Les statistique")
      ]),
      _vm._v(" "),
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { staticClass: "text-center" },
                [
                  _c("Bar"),
                  _vm._v(" "),
                  _c("v-card-text", { staticClass: "grey lighten-3 py-7" }, [
                    _vm._v("Lorem ipsum dolor sit amet consectetur.")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12", md: "4" } },
            [
              _c(
                "v-card",
                { staticClass: " text-center" },
                [
                  _c("Pie"),
                  _vm._v(" "),
                  _c("v-card-text", { staticClass: "grey lighten-3 py-7" }, [
                    _vm._v("Lorem ipsum dolor sit amet consectetur.")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c("v-text-field", {
        attrs: { label: "Rechercher", "append-icon": "mdi-magnify" },
        model: {
          value: _vm.search,
          callback: function($$v) {
            _vm.search = $$v
          },
          expression: "search"
        }
      }),
      _vm._v(" "),
      _c("v-simple-table", {
        attrs: { "fixed-header": "", height: "500px" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function() {
              return [
                _c("thead", [
                  _c("tr", [
                    _c("th"),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [
                      _vm._v("Nom complét")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("th", { staticClass: "text-left" }, [_vm._v("phone")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.filteredStudents, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c(
                        "td",
                        [
                          _c(
                            "v-responsive",
                            [
                              _c("v-avatar", { attrs: { size: "40" } }, [
                                _c("img", { attrs: { src: item.img, alt: "" } })
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(item.first_name + " " + item.last_name))
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.email))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.phone))])
                    ])
                  }),
                  0
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=097ba13b& */ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_6__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_12__["VMenu"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_13__["VNavigationDrawer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_14__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_14__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_14__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_14__["VTabsItems"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=097ba13b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Dashboard.vue?vue&type=template&id=097ba13b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_097ba13b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/charts/Bar.vue":
/*!************************************************!*\
  !*** ./resources/js/components/charts/Bar.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bar.vue?vue&type=script&lang=js& */ "./resources/js/components/charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/charts/Bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/charts/Bar.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/charts/Bar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/charts/Bar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/charts/Pie.vue":
/*!************************************************!*\
  !*** ./resources/js/components/charts/Pie.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pie.vue?vue&type=script&lang=js& */ "./resources/js/components/charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/charts/Pie.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/charts/Pie.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/charts/Pie.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Pie.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/charts/Pie.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pie_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourse.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourse.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminCourse.vue?vue&type=template&id=ac968f18& */ "./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18&");
/* harmony import */ var _AdminCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCourse.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_9__["VFileInput"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListGroup"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemIcon"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AdminCourse.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCourse.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourse.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCourse.vue?vue&type=template&id=ac968f18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourse.vue?vue&type=template&id=ac968f18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourse_vue_vue_type_template_id_ac968f18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourses.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourses.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminCourses.vue?vue&type=template&id=dee411a2& */ "./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2&");
/* harmony import */ var _AdminCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminCourses.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_8__["VResponsive"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AdminCourses.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCourses.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourses.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourses_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminCourses.vue?vue&type=template&id=dee411a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminCourses.vue?vue&type=template&id=dee411a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminCourses_vue_vue_type_template_id_dee411a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/AdminStats.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/dashboard/AdminStats.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminStats.vue?vue&type=template&id=82430f54& */ "./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54&");
/* harmony import */ var _AdminStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminStats.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/AdminStats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminStats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminStats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminStats.vue?vue&type=template&id=82430f54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/AdminStats.vue?vue&type=template&id=82430f54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminStats_vue_vue_type_template_id_82430f54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/Stats.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/dashboard/Stats.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats.vue?vue&type=template&id=36c547c9& */ "./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9&");
/* harmony import */ var _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stats.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Stats.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Stats.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Stats.vue?vue&type=template&id=36c547c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Stats.vue?vue&type=template&id=36c547c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_template_id_36c547c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/Students.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/dashboard/Students.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Students.vue?vue&type=template&id=10d3e2de& */ "./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de&");
/* harmony import */ var _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Students.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VResponsive */ "./node_modules/vuetify/lib/components/VResponsive/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__["VAvatar"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VResponsive: vuetify_lib_components_VResponsive__WEBPACK_IMPORTED_MODULE_6__["VResponsive"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VSimpleTable"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/Students.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Students.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Students.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Students.vue?vue&type=template&id=10d3e2de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/Students.vue?vue&type=template&id=10d3e2de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Students_vue_vue_type_template_id_10d3e2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);