import VueRouter from 'vue-router'
import store from './store'

import SimpleMap from './components/SimpleMap.vue'
import NearbyPlaces from './components/NearbyPlaces.vue'
import LocationGeocoder from './components/LocationGeocoder.vue'
import PlaceDetails from './components/PlaceDetails.vue'
import RouteMapDay1 from './components/RouteMapDay1.vue'
import RouteMapDay2 from './components/RouteMapDay2.vue'
import RouteMapDay3 from './components/RouteMapDay3.vue'
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
      path: '/route2',
      name: 'route2',
      component: RouteMapDay2,
    },
    {
      path: '/route3',
      name: 'route3',
      component: RouteMapDay3,
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
