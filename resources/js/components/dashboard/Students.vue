<template>
  <v-container>
    <v-text-field
      v-model="search"
      label="Rechercher"
      append-icon="mdi-magnify"
    ></v-text-field>
    <v-simple-table fixed-header height="500px">
      <template v-slot:default>
        <thead>
          <tr>
            <th></th>
            <th class="text-left">Nom complét</th>
            <th class="text-left">Type</th>
            <th class="text-left">Email</th>
            <th class="text-left">phone</th>
            <th class="text-left">nombre de formations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in clients" :key="user.id">
            <td>
              <v-responsive>
                <v-avatar size="40">
                  <img
                  :src='`/upload/${user.image}`'  
                  alt="" />
                </v-avatar>
              </v-responsive>
            </td>
            <td>{{user.nom}} {{user.prenom}}</td>
            <td>{{user.role}}</td>
            <td>{{user.email}}</td>
            <td>{{user.tel}}</td>
            <td>0</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  props:['clients'],
  data() {
    return {
      search: "",
      students: [
        {
          id: 1,
          first_name: "Kaitlynn",
          last_name: "Siddell",
          email: "ksiddell0@behance.net",
          phone: "325-714-6685",
          img: "https://robohash.org/exutenim.png?size=50x50&set=set1"
        },
        {
          id: 2,
          first_name: "Woodie",
          last_name: "McGrane",
          email: "wmcgrane1@hud.gov",
          phone: "679-225-8012",
          img: "https://robohash.org/inquimaiores.bmp?size=50x50&set=set1"
        },
        {
          id: 3,
          first_name: "Dorothee",
          last_name: "Tippin",
          email: "dtippin2@miitbeian.gov.cn",
          phone: "562-599-3944",
          img: "https://robohash.org/etnisiut.jpg?size=50x50&set=set1"
        },
        {
          id: 4,
          first_name: "Tedmund",
          last_name: "Briskey",
          email: "tbriskey3@cbsnews.com",
          phone: "260-655-5976",
          img: "https://robohash.org/etdolorqui.jpg?size=50x50&set=set1"
        },
        {
          id: 5,
          first_name: "Candis",
          last_name: "Allkins",
          email: "callkins4@miibeian.gov.cn",
          phone: "420-941-2883",
          img:
            "https://robohash.org/aliasasperioresenim.png?size=50x50&set=set1"
        },
        {
          id: 6,
          first_name: "Gothart",
          last_name: "Larkin",
          email: "glarkin5@alexa.com",
          phone: "356-813-5135",
          img:
            "https://robohash.org/evenietoccaecatiharum.bmp?size=50x50&set=set1"
        },
        {
          id: 7,
          first_name: "Annissa",
          last_name: "Wedderburn",
          email: "awedderburn6@symantec.com",
          phone: "547-250-9397",
          img:
            "https://robohash.org/dignissimosrepellendusnesciunt.jpg?size=50x50&set=set1"
        },
        {
          id: 8,
          first_name: "Willdon",
          last_name: "Tott",
          email: "wtott7@rakuten.co.jp",
          phone: "918-731-8838",
          img: "https://robohash.org/nonquaerattotam.bmp?size=50x50&set=set1"
        },
        {
          id: 9,
          first_name: "Jackelyn",
          last_name: "Van Castele",
          email: "jvancastele8@dedecms.com",
          phone: "520-474-5033",
          img:
            "https://robohash.org/dolorumarchitectominus.bmp?size=50x50&set=set1"
        },
        {
          id: 10,
          first_name: "Robers",
          last_name: "Maine",
          email: "rmaine9@sohu.com",
          phone: "719-779-8006",
          img: "https://robohash.org/utrerumpariatur.bmp?size=50x50&set=set1"
        },
        {
          id: 11,
          first_name: "Cedric",
          last_name: "Jahnke",
          email: "cjahnkea@bing.com",
          phone: "876-582-3494",
          img:
            "https://robohash.org/sedaccusamusconsequatur.bmp?size=50x50&set=set1"
        },
        {
          id: 12,
          first_name: "Melisent",
          last_name: "Mazin",
          email: "mmazinb@360.cn",
          phone: "624-607-5940",
          img: "https://robohash.org/etnumquamut.jpg?size=50x50&set=set1"
        },
        {
          id: 13,
          first_name: "Riccardo",
          last_name: "Lundy",
          email: "rlundyc@tinyurl.com",
          phone: "774-450-5594",
          img:
            "https://robohash.org/quoexpeditapraesentium.bmp?size=50x50&set=set1"
        },
        {
          id: 14,
          first_name: "Rubia",
          last_name: "Heinle",
          email: "rheinled@phoca.cz",
          phone: "527-101-2902",
          img:
            "https://robohash.org/consequaturrepellatsapiente.jpg?size=50x50&set=set1"
        },
        {
          id: 15,
          first_name: "Gnni",
          last_name: "Billson",
          email: "gbillsone@dropbox.com",
          phone: "315-210-4759",
          img: "https://robohash.org/repellatnequevitae.png?size=50x50&set=set1"
        },
        {
          id: 16,
          first_name: "Anthea",
          last_name: "Dickey",
          email: "adickeyf@meetup.com",
          phone: "868-198-8586",
          img: "https://robohash.org/velitautodio.jpg?size=50x50&set=set1"
        },
        {
          id: 17,
          first_name: "Jim",
          last_name: "Krauss",
          email: "jkraussg@jalbum.net",
          phone: "659-202-8594",
          img:
            "https://robohash.org/reiciendisrationequi.bmp?size=50x50&set=set1"
        },
        {
          id: 18,
          first_name: "Ainslie",
          last_name: "Waggitt",
          email: "awaggitth@google.de",
          phone: "814-527-7083",
          img:
            "https://robohash.org/quisdoloresmolestiae.bmp?size=50x50&set=set1"
        },
        {
          id: 19,
          first_name: "Gustave",
          last_name: "Adlington",
          email: "gadlingtoni@goo.gl",
          phone: "470-230-3589",
          img:
            "https://robohash.org/voluptatesdoloresmolestiae.jpg?size=50x50&set=set1"
        },
        {
          id: 20,
          first_name: "Berty",
          last_name: "Gotch",
          email: "bgotchj@netlog.com",
          phone: "872-415-9901",
          img:
            "https://robohash.org/blanditiiscummaiores.bmp?size=50x50&set=set1"
        },
        {
          id: 21,
          first_name: "Trumaine",
          last_name: "O'Hare",
          email: "toharek@mtv.com",
          phone: "929-928-6710",
          img:
            "https://robohash.org/consequatursequiomnis.bmp?size=50x50&set=set1"
        },
        {
          id: 22,
          first_name: "Sydney",
          last_name: "Hughill",
          email: "shughilll@goo.ne.jp",
          phone: "183-563-7923",
          img: "https://robohash.org/essemolestiasanimi.bmp?size=50x50&set=set1"
        },
        {
          id: 23,
          first_name: "Boothe",
          last_name: "Wortman",
          email: "bwortmanm@xrea.com",
          phone: "919-817-4162",
          img: "https://robohash.org/consequaturautnam.jpg?size=50x50&set=set1"
        },
        {
          id: 24,
          first_name: "Ferrell",
          last_name: "Rearie",
          email: "frearien@unesco.org",
          phone: "433-627-9296",
          img: "https://robohash.org/quirerumfugit.jpg?size=50x50&set=set1"
        },
        {
          id: 25,
          first_name: "Adoree",
          last_name: "Knobell",
          email: "aknobello@hhs.gov",
          phone: "615-678-6172",
          img:
            "https://robohash.org/doloremvoluptatemnam.jpg?size=50x50&set=set1"
        },
        {
          id: 26,
          first_name: "Ned",
          last_name: "Bootman",
          email: "nbootmanp@facebook.com",
          phone: "700-405-3480",
          img:
            "https://robohash.org/officiaasperioressaepe.jpg?size=50x50&set=set1"
        },
        {
          id: 27,
          first_name: "Tyler",
          last_name: "Vagges",
          email: "tvaggesq@123-reg.co.uk",
          phone: "968-795-2174",
          img:
            "https://robohash.org/repellatperferendisvel.png?size=50x50&set=set1"
        },
        {
          id: 28,
          first_name: "Maurits",
          last_name: "Olenichev",
          email: "molenichevr@webnode.com",
          phone: "518-433-8548",
          img: "https://robohash.org/abrerumaut.bmp?size=50x50&set=set1"
        },
        {
          id: 29,
          first_name: "Gabriele",
          last_name: "Emmerson",
          email: "gemmersons@illinois.edu",
          phone: "824-839-0213",
          img: "https://robohash.org/veroautemodio.jpg?size=50x50&set=set1"
        },
        {
          id: 30,
          first_name: "Fransisco",
          last_name: "Abbis",
          email: "fabbist@mayoclinic.com",
          phone: "606-407-2076",
          img: "https://robohash.org/veniamestnobis.png?size=50x50&set=set1"
        }
      ]
    };
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => {
        const studentName = student.first_name + " " + student.last_name;
        return studentName.match(this.search);
      });
    }
  }
};
</script>

<style></style>
