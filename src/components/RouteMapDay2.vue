<template>
  <div class="route-map-day1 demo">
    <!-- Map -->
    <googlemaps-map ref="map" class="map" :center.sync="center" :zoom.sync="zoom">
      <!-- User Position -->
      <googlemaps-user-position @update:position="setUserPosition" />

      <!-- Marker -->
      <googlemaps-marker
        title="スタート地点"
        :draggable="false"
        :position="{ lat: 35.434986, lng: 133.126678 }"
      />

      <googlemaps-marker
        title="阿太加夜神社"
        :draggable="false"
        :position="{ lat: 35.432991, lng: 133.126316 }"
      />

      <!-- Polyline -->
      <googlemaps-polyline
        :path="path1"
        :draggable="false"
        :options="options1"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path2"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path3"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path4"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path5"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
    </googlemaps-map>
    <!-- Toolbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav"> <md-icon>menu</md-icon> </md-button>

      <h2 class="md-title" style="flex: 1;">中日祭ルート情報</h2>

      <md-button class="md-icon-button" :disabled="!userPosition" @click="centerOnUser">
        <md-icon>my_location</md-icon>
      </md-button>
    </md-toolbar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      center: {
        lat: 35.433912,
        lng: 133.128295,
      },
      path1: [
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
      options1: { strokeColor: 'blue' },
      path2: [
        {
          lat: 35.435355,
          lng: 133.126277,
        },
        {
          lat: 35.435136,
          lng: 133.126186,
        },
        {
          lat: 35.434857,
          lng: 133.126642,
        },
        {
          lat: 35.435071,
          lng: 133.126798,
        },
      ],
      path3: [
        {
          lat: 35.434866,
          lng: 133.126701,
        },
        {
          lat: 35.432773,
          lng: 133.130417,
        },
      ],
      path4: [
        {
          lat: 35.434801,
          lng: 133.126654,
        },
        {
          lat: 35.432745,
          lng: 133.130274,
        },
        {
          lat: 35.432973,
          lng: 133.126965,
        },
      ],
      path5: [
        {
          lat: 35.432894,
          lng: 133.126986,
        },
        {
          lat: 35.432653,
          lng: 133.13043,
        },
      ],
      options2: { strokeColor: 'orange' },
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
