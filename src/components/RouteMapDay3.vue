<template>
  <div class="route-map-day1 demo">
    <!-- Header -->
    <md-toolbar>
      <div class="md-toolbar-container">
        <h2 class="md-title" style="margin:auto">ホーランエンヤ2019情報</h2>
      </div>
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
      <googlemaps-polyline
        :path="path6"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path7"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path8"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
      <googlemaps-polyline
        :path="path9"
        :draggable="false"
        :options="options2"
        @click="polylineClicked"
        @path_changed="pathChanged"
      />
    </googlemaps-map>
    <!-- Toolbar -->
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleSideNav"> <md-icon>menu</md-icon> </md-button>

      <h2 class="md-title" style="flex: 1;">還御祭ルート情報</h2>

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
        lat: 35.455748,
        lng: 133.091857,
      },
      path1: [
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
      path6: [
        {
          lat: 35.468437,
          lng: 133.052503,
        },
        {
          lat: 35.468471,
          lng: 133.051991,
        },
        {
          lat: 35.468177,
          lng: 133.051932,
        },
        {
          lat: 35.46781,
          lng: 133.052002,
        },
        {
          lat: 35.465574,
          lng: 133.052778,
        },
        {
          lat: 35.465885,
          lng: 133.053375,
        },
      ],
      path7: [
        {
          lat: 35.46585,
          lng: 133.053899,
        },
        {
          lat: 35.466497,
          lng: 133.054038,
        },
        {
          lat: 35.466897,
          lng: 133.054235,
        },
        {
          lat: 35.46706,
          lng: 133.054369,
        },
        {
          lat: 35.467156,
          lng: 133.054514,
        },
        {
          lat: 35.467256,
          lng: 133.055209,
        },
        {
          lat: 35.468486,
          lng: 133.055059,
        },
      ],
      path8: [
        {
          lat: 35.467197,
          lng: 133.056169,
        },
        {
          lat: 35.46726,
          lng: 133.055348,
        },
        {
          lat: 35.467295,
          lng: 133.055308,
        },
        {
          lat: 35.468494,
          lng: 133.055157,
        },
        {
          lat: 35.468558,
          lng: 133.058924,
        },
        {
          lat: 35.467161,
          lng: 133.059055,
        },
        {
          lat: 35.46724,
          lng: 133.058279,
        },
        {
          lat: 35.467275,
          lng: 133.057335,
        },
        {
          lat: 35.467332,
          lng: 133.057051,
        },
      ],
      path9: [
        {
          lat: 35.466864,
          lng: 133.061509,
        },
        {
          lat: 35.467157,
          lng: 133.059231,
        },
        {
          lat: 35.468546,
          lng: 133.059102,
        },
        {
          lat: 35.468616,
          lng: 133.060422,
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
