<template>
  <div class="route-map-day1 demo">
    <!-- Toolbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav"> <md-icon>menu</md-icon> </md-button>

      <h2 class="md-title" style="flex: 1;">渡御祭ルート情報</h2>

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
        :draggable="false"
        :position="{ lat: 35.477704, lng: 133.049543 }"
      />

      <googlemaps-marker
        title="阿太加夜神社"
        :draggable="false"
        :position="{ lat: 35.432991, lng: 133.126316 }"
      />

      <!-- Polyline -->
      <googlemaps-polyline
        :path="path"
        :draggable="false"
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
        lat: 35.455748,
        lng: 133.091857,
      },
      path: [
        {
          lat: 35.477704,
          lng: 133.049543,
        },
        {
          lat: 35.477136,
          lng: 133.050333,
        },
        {
          lat: 35.476883,
          lng: 133.050214,
        },
        {
          lat: 35.47623,
          lng: 133.05106,
        },
        {
          lat: 35.475861,
          lng: 133.051737,
        },
        {
          lat: 35.475739,
          lng: 133.052231,
        },
        {
          lat: 35.475484,
          lng: 133.052754,
        },
        {
          lat: 35.47543,
          lng: 133.0531,
        },
        {
          lat: 35.475777,
          lng: 133.053151,
        },
        {
          lat: 35.475685,
          lng: 133.054513,
        },
        {
          lat: 35.4733,
          lng: 133.054318,
        },
        {
          lat: 35.473047,
          lng: 133.054168,
        },
        {
          lat: 35.470194,
          lng: 133.053986,
        },
        {
          lat: 35.469216,
          lng: 133.055085,
        },
        {
          lat: 35.468508,
          lng: 133.055103,
        },
        {
          lat: 35.468473,
          lng: 133.054883,
        },
        {
          lat: 35.467752,
          lng: 133.053746,
        },
        {
          lat: 35.467544,
          lng: 133.061959,
        },
        {
          lat: 35.465423,
          lng: 133.070126,
        },
        {
          lat: 35.461427,
          lng: 133.093474,
        },
        {
          lat: 35.456217,
          lng: 133.100088,
        },
        {
          lat: 35.454288,
          lng: 133.100783,
        },
        {
          lat: 35.450052,
          lng: 133.10738,
        },
        {
          lat: 35.450114,
          lng: 133.12013,
        },
        {
          lat: 35.453448,
          lng: 133.139274,
        },
        {
          lat: 35.449459,
          lng: 133.139684,
        },
        {
          lat: 35.441729,
          lng: 133.131084,
        },
        {
          lat: 35.435128,
          lng: 133.12648,
        },
        {
          lat: 35.434986,
          lng: 133.126678,
        },
        {
          lat: 35.434848,
          lng: 133.126651,
        },
        {
          lat: 35.432702,
          lng: 133.13044,
        },
        {
          lat: 35.432991,
          lng: 133.126316,
        },
      ],
      options: { strokeColor: 'red' },
      userPosition: null,
      zoom: 12,
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
