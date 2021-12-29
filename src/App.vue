<template>
  <v-app> 
    <v-app-bar app color="#546E7A" dark>
      <v-app-bar-title> Grupo 5 </v-app-bar-title>
      <v-spacer></v-spacer>
            <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>
    <!-- Login -->
    <v-main>
      <router-view></router-view>
    </v-main>
  <v-footer
    color="#546E7A"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.label }}
      </v-btn>
      <v-col
        class="blue-grey lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    links: [{
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "about",
    },
    { 
      label: "Leonardo",
      path: "leo",
    },

     { 
      label: "Diego",
      path: "diego",
    },

     { 
      label: "Gabriel",
      path: "gabriel",
    },

     { 
      label: "Nicolas",
      path: "nicolas",
    },

    ],
  }),
  methods: {},
};
</script>