<template>
  <div>
    <section>
      <v-container>
        <v-btn router to="/course" color="secondary" class="mb-10">
          <v-icon left>mdi-plus</v-icon>
          ajouter une formationeeeeeeeeeeeeeeeeeeeeeeeeee</v-btn
        >
        <v-text-field
          v-model="search"
          label="Rechercher"
          append-icon="mdi-magnify"
        ></v-text-field>
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Ref</th>
                <th>Thumbnail</th>
                <th class="text-left">Titre de formation</th>
                <th class="text-left">Catégorie</th>
                <th class="text-left">Prix</th>
                <th class="text-left">formateur</th>
                <th class="text-left">nombre d'inscriptions</th>
                <th class="text-left"></th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fr in frome" :key="fr.id_formation">
                <td>{{ fr.reference }}</td>
                <td>
                  <v-responsive>
                    <v-img aspect-ratio="1.9"
                     :src='`/formations/${fr.thumbnail}`'
                    ></v-img>
                  </v-responsive>
                </td>
                <td>{{ fr.nomF }}</td>
                <td>{{ fr.type }}</td>
                <td>{{ fr.prix }} €</td>
                <td>
                  {{$page.auth.user.nom}} {{$page.auth.user.prenom}}
                </td>
                <td>0</td>
                <td>
                  <v-btn primary>
                    voir 
                  </v-btn>
                </td>
                <td>
                  <Inertia-link :href='`/formation/${fr.nomF}/${fr.id_formation}/edit`'>
                    Modifier
                  </Inertia-link>           
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
import Stats from "./Stats.vue";
export default {

  props:['frome'],
  methods:{
   
  },
  data() {
    return {
      search: "",
      courses: [
        {
          ref: 1,
          courseName: "Footloose",
          categroy: "Accounting",
          img: "http://dummyimage.com/184x179.jpg/cc0000/ffffff",
          price: 297,
          contrat:
            "http://virginia.edu/ipsum/praesent/blandit/lacinia.html?sapien=donec&in=ut&sapien=dolor&iaculis=morbi&congue=vel&vivamus=lectus&metus=in&arcu=quam&adipiscing=fringilla&molestie=rhoncus&hendrerit=mauris&at=enim&vulputate=leo&vitae=rhoncus&nisl=sed&aenean=vestibulum&lectus=sit&pellentesque=amet&eget=cursus&nunc=id&donec=turpis&quis=integer&orci=aliquet&eget=massa&orci=id&vehicula=lobortis&condimentum=convallis&curabitur=tortor&in=risus&libero=dapibus&ut=augue&massa=vel&volutpat=accumsan&convallis=tellus&morbi=nisi&odio=eu&odio=orci&elementum=mauris&eu=lacinia&interdum=sapien&eu=quis&tincidunt=libero&in=nullam&leo=sit&maecenas=amet&pulvinar=turpis&lobortis=elementum&est=ligula&phasellus=vehicula&sit=consequat&amet=morbi&erat=a&nulla=ipsum&tempus=integer&vivamus=a&in=nibh&felis=in&eu=quis&sapien=justo&cursus=maecenas&vestibulum=rhoncus&proin=aliquam&eu=lacus&mi=morbi&nulla=quis&ac=tortor&enim=id&in=nulla&tempor=ultrices&turpis=aliquet&nec=maecenas&euismod=leo&scelerisque=odio&quam=condimentum&turpis=id&adipiscing=luctus&lorem=nec&vitae=molestie&mattis=sed&nibh=justo&ligula=pellentesque&nec=viverra&sem=pede&duis=ac&aliquam=diam&convallis=cras&nunc=pellentesque&proin=volutpat&at=dui&turpis=maecenas"
        },
        {
          ref: 2,
          courseName: "Mozart's Sister (Nannerl, la soeur de Mozart)",
          categroy: "Sales",
          img: "http://dummyimage.com/123x230.png/dddddd/000000",
          price: 137,
          contrat:
            "http://edublogs.org/sed/vestibulum/sit.xml?ac=lacus&diam=at&cras=turpis&pellentesque=donec&volutpat=posuere&dui=metus&maecenas=vitae&tristique=ipsum&est=aliquam&et=non&tempus=mauris&semper=morbi&est=non&quam=lectus&pharetra=aliquam&magna=sit&ac=amet&consequat=diam&metus=in&sapien=magna&ut=bibendum&nunc=imperdiet&vestibulum=nullam&ante=orci&ipsum=pede&primis=venenatis&in=non&faucibus=sodales&orci=sed&luctus=tincidunt&et=eu&ultrices=felis&posuere=fusce&cubilia=posuere&curae=felis&mauris=sed&viverra=lacus&diam=morbi&vitae=sem&quam=mauris&suspendisse=laoreet&potenti=ut&nullam=rhoncus&porttitor=aliquet&lacus=pulvinar&at=sed&turpis=nisl&donec=nunc&posuere=rhoncus&metus=dui&vitae=vel&ipsum=sem&aliquam=sed&non=sagittis&mauris=nam&morbi=congue&non=risus&lectus=semper&aliquam=porta&sit=volutpat&amet=quam&diam=pede"
        },
        {
          ref: 3,
          courseName: "Pig Hunt ",
          categroy: "Engineering",
          img: "http://dummyimage.com/150x175.jpg/ff4444/ffffff",
          price: 238,
          contrat:
            "http://skype.com/nulla/integer/pede/justo/lacinia/eget/tincidunt.jsp?vel=diam&accumsan=vitae&tellus=quam&nisi=suspendisse&eu=potenti&orci=nullam&mauris=porttitor&lacinia=lacus&sapien=at&quis=turpis&libero=donec&nullam=posuere&sit=metus&amet=vitae&turpis=ipsum&elementum=aliquam&ligula=non&vehicula=mauris&consequat=morbi&morbi=non&a=lectus&ipsum=aliquam&integer=sit&a=amet&nibh=diam&in=in&quis=magna&justo=bibendum&maecenas=imperdiet&rhoncus=nullam&aliquam=orci&lacus=pede&morbi=venenatis&quis=non&tortor=sodales&id=sed&nulla=tincidunt&ultrices=eu&aliquet=felis&maecenas=fusce&leo=posuere&odio=felis&condimentum=sed&id=lacus&luctus=morbi&nec=sem&molestie=mauris&sed=laoreet&justo=ut&pellentesque=rhoncus&viverra=aliquet&pede=pulvinar&ac=sed&diam=nisl&cras=nunc&pellentesque=rhoncus&volutpat=dui&dui=vel&maecenas=sem&tristique=sed&est=sagittis&et=nam&tempus=congue&semper=risus&est=semper&quam=porta&pharetra=volutpat&magna=quam&ac=pede&consequat=lobortis&metus=ligula&sapien=sit&ut=amet&nunc=eleifend&vestibulum=pede&ante=libero&ipsum=quis&primis=orci&in=nullam&faucibus=molestie&orci=nibh&luctus=in&et=lectus&ultrices=pellentesque&posuere=at&cubilia=nulla&curae=suspendisse&mauris=potenti&viverra=cras&diam=in&vitae=purus&quam=eu&suspendisse=magna&potenti=vulputate&nullam=luctus&porttitor=cum&lacus=sociis&at=natoque&turpis=penatibus"
        },
        {
          ref: 4,
          courseName: "Green Dolphin Street",
          categroy: "Research and Development",
          img: "http://dummyimage.com/163x145.bmp/cc0000/ffffff",
          price: 221,
          contrat:
            "https://techcrunch.com/lectus/suspendisse.jpg?parturient=ut&montes=erat&nascetur=id&ridiculus=mauris&mus=vulputate&vivamus=elementum&vestibulum=nullam&sagittis=varius&sapien=nulla&cum=facilisi&sociis=cras&natoque=non&penatibus=velit&et=nec&magnis=nisi&dis=vulputate&parturient=nonummy&montes=maecenas&nascetur=tincidunt&ridiculus=lacus&mus=at&etiam=velit&vel=vivamus&augue=vel&vestibulum=nulla&rutrum=eget&rutrum=eros&neque=elementum&aenean=pellentesque&auctor=quisque&gravida=porta&sem=volutpat&praesent=erat&id=quisque&massa=erat&id=eros&nisl=viverra&venenatis=eget&lacinia=congue&aenean=eget&sit=semper&amet=rutrum&justo=nulla&morbi=nunc&ut=purus&odio=phasellus&cras=in&mi=felis&pede=donec&malesuada=semper&in=sapien&imperdiet=a&et=libero&commodo=nam&vulputate=dui"
        },
        {
          ref: 5,
          courseName: "Trembling Before G-d",
          categroy: "Training",
          img: "http://dummyimage.com/215x250.png/cc0000/ffffff",
          price: 127,
          contrat:
            "http://vk.com/sollicitudin/vitae/consectetuer/eget/rutrum.jpg?sit=orci&amet=pede&diam=venenatis&in=non&magna=sodales&bibendum=sed&imperdiet=tincidunt&nullam=eu&orci=felis&pede=fusce&venenatis=posuere&non=felis&sodales=sed&sed=lacus&tincidunt=morbi&eu=sem&felis=mauris&fusce=laoreet&posuere=ut&felis=rhoncus&sed=aliquet&lacus=pulvinar&morbi=sed&sem=nisl&mauris=nunc&laoreet=rhoncus&ut=dui&rhoncus=vel&aliquet=sem&pulvinar=sed&sed=sagittis&nisl=nam&nunc=congue&rhoncus=risus"
        },
        {
          ref: 6,
          courseName: "Felicia's Journey",
          categroy: "Human Resources",
          img: "http://dummyimage.com/205x153.jpg/5fa2dd/ffffff",
          price: 178,
          contrat:
            "https://fema.gov/eget/tempus/vel.jpg?rhoncus=vestibulum&sed=rutrum&vestibulum=rutrum&sit=neque&amet=aenean&cursus=auctor&id=gravida&turpis=sem&integer=praesent&aliquet=id&massa=massa&id=id&lobortis=nisl&convallis=venenatis&tortor=lacinia&risus=aenean&dapibus=sit&augue=amet&vel=justo&accumsan=morbi&tellus=ut&nisi=odio&eu=cras&orci=mi&mauris=pede&lacinia=malesuada&sapien=in&quis=imperdiet&libero=et&nullam=commodo&sit=vulputate&amet=justo&turpis=in&elementum=blandit&ligula=ultrices&vehicula=enim&consequat=lorem&morbi=ipsum&a=dolor&ipsum=sit"
        },
        {
          ref: 7,
          courseName: "Zulu",
          categroy: "Accounting",
          img: "http://dummyimage.com/203x212.bmp/5fa2dd/ffffff",
          price: 123,
          contrat:
            "http://cloudflare.com/auctor/gravida.png?tempor=adipiscing&convallis=elit&nulla=proin&neque=interdum&libero=mauris&convallis=non&eget=ligula&eleifend=pellentesque&luctus=ultrices&ultricies=phasellus&eu=id&nibh=sapien&quisque=in&id=sapien&justo=iaculis&sit=congue&amet=vivamus&sapien=metus&dignissim=arcu&vestibulum=adipiscing&vestibulum=molestie&ante=hendrerit&ipsum=at&primis=vulputate&in=vitae&faucibus=nisl&orci=aenean&luctus=lectus&et=pellentesque&ultrices=eget&posuere=nunc&cubilia=donec"
        },
        {
          ref: 8,
          courseName: "The White Haired Witch of Lunar Kingdom",
          categroy: "Legal",
          img: "http://dummyimage.com/144x249.bmp/cc0000/ffffff",
          price: 80,
          contrat:
            "https://yale.edu/dolor.aspx?erat=lobortis&nulla=est&tempus=phasellus&vivamus=sit&in=amet&felis=erat&eu=nulla&sapien=tempus&cursus=vivamus&vestibulum=in&proin=felis&eu=eu&mi=sapien&nulla=cursus&ac=vestibulum&enim=proin&in=eu&tempor=mi&turpis=nulla&nec=ac&euismod=enim&scelerisque=in&quam=tempor&turpis=turpis&adipiscing=nec&lorem=euismod&vitae=scelerisque&mattis=quam&nibh=turpis&ligula=adipiscing"
        },
        {
          ref: 9,
          courseName: "Whole Night, A (Toute une nuit)",
          categroy: "Support",
          img: "http://dummyimage.com/246x101.bmp/dddddd/000000",
          price: 217,
          contrat:
            "https://a8.net/ut/volutpat/sapien/arcu/sed/augue/aliquam.aspx?lorem=est&id=et&ligula=tempus&suspendisse=semper&ornare=est&consequat=quam&lectus=pharetra&in=magna&est=ac&risus=consequat&auctor=metus&sed=sapien&tristique=ut&in=nunc&tempus=vestibulum&sit=ante&amet=ipsum&sem=primis&fusce=in&consequat=faucibus"
        },
        {
          ref: 10,
          courseName: "Green Dragon",
          categroy: "Accounting",
          img: "http://dummyimage.com/134x152.png/cc0000/ffffff",
          price: 263,
          contrat:
            "https://studiopress.com/volutpat/quam.jsp?donec=mattis&ut=egestas&dolor=metus&morbi=aenean&vel=fermentum&lectus=donec&in=ut&quam=mauris&fringilla=eget&rhoncus=massa&mauris=tempor&enim=convallis&leo=nulla&rhoncus=neque&sed=libero&vestibulum=convallis&sit=eget&amet=eleifend&cursus=luctus&id=ultricies&turpis=eu&integer=nibh&aliquet=quisque&massa=id&id=justo&lobortis=sit&convallis=amet&tortor=sapien&risus=dignissim&dapibus=vestibulum&augue=vestibulum&vel=ante&accumsan=ipsum&tellus=primis&nisi=in&eu=faucibus&orci=orci&mauris=luctus&lacinia=et&sapien=ultrices&quis=posuere&libero=cubilia&nullam=curae"
        },
        {
          ref: 11,
          courseName: "Keeping Up with the Steins",
          categroy: "Marketing",
          img: "http://dummyimage.com/150x185.jpg/ff4444/ffffff",
          price: 76,
          contrat:
            "http://sfgate.com/varius/integer/ac/leo/pellentesque.png?vestibulum=risus&ante=auctor&ipsum=sed&primis=tristique&in=in&faucibus=tempus&orci=sit&luctus=amet&et=sem&ultrices=fusce&posuere=consequat&cubilia=nulla&curae=nisl&donec=nunc&pharetra=nisl&magna=duis&vestibulum=bibendum&aliquet=felis&ultrices=sed&erat=interdum&tortor=venenatis&sollicitudin=turpis&mi=enim&sit=blandit&amet=mi&lobortis=in&sapien=porttitor&sapien=pede&non=justo&mi=eu&integer=massa&ac=donec&neque=dapibus&duis=duis&bibendum=at&morbi=velit&non=eu&quam=est&nec=congue&dui=elementum&luctus=in&rutrum=hac&nulla=habitasse&tellus=platea&in=dictumst&sagittis=morbi&dui=vestibulum&vel=velit&nisl=id&duis=pretium&ac=iaculis&nibh=diam&fusce=erat"
        },
        {
          ref: 12,
          courseName: "Double Play: James Benning and Richard Linklater",
          categroy: "Human Resources",
          img: "http://dummyimage.com/107x242.bmp/ff4444/ffffff",
          price: 140,
          contrat:
            "https://cnn.com/egestas/metus/aenean/fermentum/donec/ut/mauris.xml?neque=luctus&libero=nec&convallis=molestie&eget=sed&eleifend=justo&luctus=pellentesque&ultricies=viverra&eu=pede&nibh=ac&quisque=diam&id=cras&justo=pellentesque&sit=volutpat&amet=dui&sapien=maecenas&dignissim=tristique&vestibulum=est&vestibulum=et&ante=tempus&ipsum=semper&primis=est&in=quam&faucibus=pharetra&orci=magna&luctus=ac&et=consequat&ultrices=metus&posuere=sapien&cubilia=ut&curae=nunc&nulla=vestibulum&dapibus=ante&dolor=ipsum&vel=primis&est=in&donec=faucibus&odio=orci&justo=luctus&sollicitudin=et&ut=ultrices&suscipit=posuere&a=cubilia&feugiat=curae&et=mauris&eros=viverra&vestibulum=diam&ac=vitae&est=quam&lacinia=suspendisse&nisi=potenti&venenatis=nullam&tristique=porttitor&fusce=lacus&congue=at&diam=turpis&id=donec&ornare=posuere&imperdiet=metus&sapien=vitae"
        },
        {
          ref: 13,
          courseName: "Shorts",
          categroy: "Support",
          img: "http://dummyimage.com/168x149.bmp/ff4444/ffffff",
          price: 192,
          contrat:
            "https://un.org/vitae/quam/suspendisse/potenti.xml?consectetuer=est&adipiscing=lacinia&elit=nisi&proin=venenatis&interdum=tristique&mauris=fusce&non=congue&ligula=diam&pellentesque=id&ultrices=ornare&phasellus=imperdiet&id=sapien&sapien=urna&in=pretium&sapien=nisl&iaculis=ut&congue=volutpat&vivamus=sapien&metus=arcu&arcu=sed&adipiscing=augue&molestie=aliquam&hendrerit=erat&at=volutpat"
        },
        {
          ref: 14,
          courseName: "Hans Christian Andersen",
          categroy: "Business Development",
          img: "http://dummyimage.com/100x167.bmp/cc0000/ffffff",
          price: 299,
          contrat:
            "https://t.co/venenatis/turpis/enim/blandit.js?sapien=turpis&urna=eget&pretium=elit&nisl=sodales&ut=scelerisque&volutpat=mauris&sapien=sit&arcu=amet&sed=eros&augue=suspendisse&aliquam=accumsan&erat=tortor&volutpat=quis&in=turpis&congue=sed&etiam=ante&justo=vivamus&etiam=tortor&pretium=duis&iaculis=mattis&justo=egestas"
        },
        {
          ref: 15,
          courseName: "Portraits Chinois",
          categroy: "Product Management",
          img: "http://dummyimage.com/143x133.png/5fa2dd/ffffff",
          price: 253,
          contrat:
            "https://gravatar.com/amet.jpg?odio=aenean&cras=fermentum&mi=donec&pede=ut&malesuada=mauris&in=eget&imperdiet=massa&et=tempor&commodo=convallis&vulputate=nulla&justo=neque&in=libero&blandit=convallis&ultrices=eget&enim=eleifend&lorem=luctus&ipsum=ultricies&dolor=eu&sit=nibh&amet=quisque&consectetuer=id&adipiscing=justo&elit=sit&proin=amet&interdum=sapien&mauris=dignissim&non=vestibulum&ligula=vestibulum&pellentesque=ante&ultrices=ipsum&phasellus=primis&id=in&sapien=faucibus&in=orci&sapien=luctus&iaculis=et&congue=ultrices&vivamus=posuere&metus=cubilia&arcu=curae&adipiscing=nulla&molestie=dapibus&hendrerit=dolor&at=vel&vulputate=est&vitae=donec&nisl=odio&aenean=justo&lectus=sollicitudin&pellentesque=ut&eget=suscipit&nunc=a&donec=feugiat&quis=et&orci=eros&eget=vestibulum&orci=ac&vehicula=est&condimentum=lacinia&curabitur=nisi&in=venenatis&libero=tristique&ut=fusce&massa=congue&volutpat=diam&convallis=id&morbi=ornare&odio=imperdiet&odio=sapien&elementum=urna&eu=pretium&interdum=nisl&eu=ut&tincidunt=volutpat&in=sapien&leo=arcu&maecenas=sed&pulvinar=augue&lobortis=aliquam&est=erat&phasellus=volutpat&sit=in&amet=congue&erat=etiam&nulla=justo&tempus=etiam&vivamus=pretium&in=iaculis&felis=justo&eu=in&sapien=hac&cursus=habitasse&vestibulum=platea&proin=dictumst&eu=etiam&mi=faucibus"
        }
      ]
    };
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course =>
        course.courseName.match(this.search)
      );
    }
  },
  components: {Stats}
};
</script>

<style></style>
