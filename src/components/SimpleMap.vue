<template>
  <div class="simple-map demo">
    <!-- Toolbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav"> <md-icon>menu</md-icon> </md-button>

      <h2 class="md-title" style="flex: 1;">Simple map</h2>

      <md-button class="md-icon-button" :disabled="!userPosition" @click="centerOnUser">
        <md-icon>my_location</md-icon>
      </md-button>
    </md-toolbar>

    <!-- Map -->
    <googlemaps-map ref="map" class="map" :center.sync="center" :zoom.sync="zoom">
      <!-- User Position -->
      <googlemaps-user-position @update:position="setUserPosition" />

      <!-- Marker -->
      <googlemaps-marker
        title="松江城山稲荷神社"
        :draggable="true"
        :position="{ lat: 35.477443178160144, lng: 133.04928015958498 }"
      />

      <!-- Polyline -->
      <googlemaps-polyline
        :path="path"
        :draggable="true"
        :options="options"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
    </googlemaps-map>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      center: {
        lat: 35.477443178160144,
        lng: 133.04928015958498,
      },
      path: [
        {
          lat: 35.43077538025353,
          lng: 133.15140181451056,
        },
        {
          lat: 35.463839,
          lng: 133.080354,
        },
        {
          lat: 35.468073,
          lng: 133.052507,
        },
        {
          lat: 35.477443178160144,
          lng: 133.04928015958498,
        },
      ],
      options: {},
      userPosition: null,
      zoom: 18,
    }
  },

  methods: {
    ...mapActions('layout', ['toggleSideNav']),

    polylineClicked() {
      //console.log('clicked')

      const options = {
        strokeOpacity: Math.random(),
      }

      this.options = options
    },

    pathChanged(path) {
      //console.log(path)
    },

    centerOnUser() {
      if (this.userPosition) {
        this.center = this.userPosition
      }
    },

    setUserPosition(position) {
      this.userPosition = position
    },
  },
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map {
  flex: 100% 1 1;
}
</style>
