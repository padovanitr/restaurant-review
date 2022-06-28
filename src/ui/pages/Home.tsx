import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useEffect, useState } from 'react'

const containerStyle = {
  width: '600px',
  height: '500px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

interface UserCoords {
  lat: number
  lng: number
}

function Home() {
  const [userCoords, setUserCoords] = useState<UserCoords>()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })

  const getUserLocation = async () => {
    const { coords } = await new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej)
    })
    console.log('coordinates', coords)
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
    isLoaded &&
    userCoords && (
      <GoogleMap mapContainerStyle={containerStyle} center={userCoords} zoom={11}>
        {userCoords && <Marker position={userCoords} />}
      </GoogleMap>
    )
  )
}

export default Home
