<template>
  <div class="rest-rooms demo">
    <!-- Toolbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav"> <md-icon>menu</md-icon> </md-button>

      <h2 class="md-title" style="flex: 1;">トイレ情報</h2>

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
        title="白潟"
        :draggable="false"
        :position="{ lat: 35.4648524, lng: 133.0530971 }"
        label="WC"
      />
      <googlemaps-marker
        title="御手船場"
        :draggable="false"
        :position="{ lat: 35.4669724, lng: 133.0612445 }"
        label="WC"
      />
      <googlemaps-marker
        title="末次"
        :draggable="false"
        :position="{ lat: 35.467871, lng: 133.0502241 }"
        label="WC"
      />
      <googlemaps-marker
        title="堀川遊覧船乗り場"
        :draggable="false"
        :position="{ lat: 35.4735632, lng: 133.0525019 }"
        label="WC"
      />

      <googlemaps-marker
        title="白潟公園（灘町）"
        :draggable="false"
        :position="{ lat: 35.4620618, lng: 133.053355 }"
        label="WC"
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
        lat: 35.4680969,
        lng: 133.0634134,
      },
      path: [
        {
          lat: 35.4823393,
          lng: 133.063217,
        },
        {
          lat: 35.4638116,
          lng: 133.0650176,
        },
      ],
      options: {},
      userPosition: null,
      zoom: 14,
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
