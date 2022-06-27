import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import { useCallback } from 'react'

const containerStyle = {
  width: '500px',
  height: '500px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

function Home() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })

  const onLoad = useCallback((map: unknown) => {
    console.log('map', map)
  }, [])

  const onUnmount = useCallback(() => {}, [])

  return isLoaded && <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} />
}

export default Home
