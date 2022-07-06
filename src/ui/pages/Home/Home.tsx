import { useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import List from '../../components/List/List'
import MapContainer from '../../components/MapContainer'
import { Container, ListWrapper, MapWrapper } from './Home.style'
import { GoogleRestaurantsType, UserCoordsType } from './Home.utils'

function Home() {
  const [userCoords, setUserCoords] = useState<UserCoordsType>()
  const [googleRestaurants, setGoogleRestaurants] = useState<GoogleRestaurantsType[]>([])
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })
  console.log('googleRestaurants', googleRestaurants)

  const fetchGooglePlaces = (map: HTMLDivElement | google.maps.Map) => {
    if (!userCoords) {
      return
    }
    const pyrmont = new window.google.maps.LatLng(userCoords.lat, userCoords.lng)

    const request = {
      location: pyrmont,
      radius: 1500,
      type: 'restaurant',
    }

    const service = new google.maps.places.PlacesService(map)

    service.nearbySearch(request, (results, status) => {
      if (status === 'OK' && results) {
        const places: unknown[] = []
        results.forEach((result) => {
          if (result.place_id) {
            service.getDetails({ placeId: result.place_id }, (placeResult, pstatus) => {
              if (pstatus === 'OK' && placeResult) {
                places.push(placeResult)

                setGoogleRestaurants(places as GoogleRestaurantsType[])
              }
            })
          }
        })
      }
    })
  }

  const getUserLocation = async () => {
    const { coords } = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej)
    })

    const userLocation = {
      lat: coords.latitude,
      lng: coords.longitude,
    }
    setUserCoords(userLocation)
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <Container>
      <MapWrapper>
        {isLoaded && userCoords && (
          <MapContainer
            fetchGooglePlaces={fetchGooglePlaces}
            userCoords={userCoords}
            googleRestaurants={googleRestaurants}
          />
        )}
      </MapWrapper>
      <ListWrapper sx={{ flex: 1, padding: '30px 40px', overflow: 'scroll', margin: '0 auto' }}>
        <List googleRestaurants={googleRestaurants} />
      </ListWrapper>
    </Container>
  )
}

export default Home
