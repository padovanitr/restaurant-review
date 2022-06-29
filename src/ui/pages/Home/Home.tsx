import { Box } from '@mui/material'
import { useJsApiLoader } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'
import List from '../../components/List/List'
import MapContainer from '../../components/MapContainer'
import { Container } from './Home.style'
import { GoogleRestaurantsType, UserCoordsType } from './Home.utils'

function Home() {
  const [userCoords, setUserCoords] = useState<UserCoordsType>()
  const [googleRestaurants, setGoogleRestaurants] = useState<GoogleRestaurantsType[]>([])
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })

  const fetchGooglePlaces = useCallback(
    (map: HTMLDivElement | google.maps.Map) => {
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
        if (status === 'OK') {
          console.log('results', results)
          setGoogleRestaurants(results as GoogleRestaurantsType[])
        }
      })
    },
    [userCoords]
  )

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
      <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
        {isLoaded && userCoords && (
          <MapContainer
            fetchGooglePlaces={fetchGooglePlaces}
            userCoords={userCoords}
            googleRestaurants={googleRestaurants}
          />
        )}
      </Box>
      <Box sx={{ padding: '10px 40px', overflow: 'scroll' }}>
        <List googleRestaurants={googleRestaurants} />
      </Box>
    </Container>
  )
}

export default Home
