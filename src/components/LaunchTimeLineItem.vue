<template>
  <v-timeline-item>
    <template v-slot:icon>
      <v-avatar>
        <img :src="launch.links.mission_patch_small" /> <!-- Pega as imagens dos icones -->
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span>{{launchDate}}</span>
    </template>
    <v-card class="elevation-2">
      <v-card-title class="headline">
        Missão: {{ launch.mission_name }}
      </v-card-title>
      <v-card-subtitle>
        Foguete: {{ launch.rocket.rocket_name }}
      </v-card-subtitle>
      <v-card-text>
        {{ launch.details }}
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import moment from "moment";
export default {
  props: ["launch"],
  computed: {
    launchDate() {
      return moment(this.launch.launch_date_local).format("DD/MM/YYYY");
    },
  },
};
</script>
