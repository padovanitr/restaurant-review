import { Box } from '@mui/material'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'

const containerStyle = {
  width: '600px',
  height: '500px',
}

interface UserCoordsType {
  lat: number
  lng: number
}

interface GoogleRestaurantsType {
  place_id: string
  geometry: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
}

function Home() {
  const [userCoords, setUserCoords] = useState<UserCoordsType>()
  const [googleRestaurants, setGoogleRestaurants] = useState<GoogleRestaurantsType[]>([])
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })

  const handleMarkerClick = (event: google.maps.MapMouseEvent) => {}

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
    <Box>
      {isLoaded && userCoords && (
        <GoogleMap
          onLoad={(map) => fetchGooglePlaces(map)}
          mapContainerStyle={containerStyle}
          center={userCoords}
          zoom={13}
        >
          {userCoords && (
            <Marker
              title="My position"
              position={userCoords}
              onClick={(e) => handleMarkerClick(e)}
            />
          )}

          {googleRestaurants &&
            googleRestaurants.map((restaurant) => (
              <Marker
                key={restaurant.place_id}
                title="My position"
                position={{
                  lat: restaurant.geometry.location.lat(),
                  lng: restaurant.geometry.location.lng(),
                }}
              />
            ))}
        </GoogleMap>
      )}
    </Box>
  )
}

export default Home
