import VueRouter from 'vue-router'
import store from './store'

import SimpleMap from './components/SimpleMap.vue'
import NearbyPlaces from './components/NearbyPlaces.vue'
import LocationGeocoder from './components/LocationGeocoder.vue'
import PlaceDetails from './components/PlaceDetails.vue'
import RouteMapDay1 from './components/RouteMapDay1.vue'
import RestRooms from './components/RestRooms.vue'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'route1',
      component: RouteMapDay1,
    },
    {
      path: '/restrooms',
      name: 'restrooms',
      component: RestRooms,
    },
    {
      path: '/simple',
      name: 'simple',
      component: SimpleMap,
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: NearbyPlaces,
    },
    {
      path: '/geocoder',
      name: 'geocoder',
      component: LocationGeocoder,
    },
    {
      path: '/place-details',
      name: 'place-details',
      component: PlaceDetails,
    },
  ],
})

router.afterEach(() => {
  store.dispatch('layout/setSideNavOpen', false)
})

export default router
