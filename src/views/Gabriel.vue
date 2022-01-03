<template>
<div id="app">
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>SpaceX Lançamentos</h2>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-timeline v-if="launches.length > 0">
          <LaunchTimlineItem
            v-for="launch in launches"
            :key="launch.flight_number"
            :launch="launch"
          />
        </v-timeline>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>

<script>
import axios from "axios";
import LaunchTimlineItem from "../components/LaunchTimeLineItem";
export default {
  name: "App",
  components: {
    LaunchTimlineItem,
  },
  data: () => ({
    launches: [],
  }),
  async created() {
    const { data } = await axios.get(
      "https://api.spacexdata.com/v3/launches"
    );
    
    data.forEach((launch) => {
      this.launches.push(launch);
    });
  },
};
</script>
