import { GoogleMap, Marker } from '@react-google-maps/api'
import { GoogleRestaurantsType, UserCoordsType } from '../../pages/Home/Home.utils'

const containerStyle = {
  width: '100%',
  height: '100%',
}

interface MapContainerProps {
  fetchGooglePlaces: (map: HTMLDivElement | google.maps.Map) => void
  userCoords: UserCoordsType
  googleRestaurants: Array<GoogleRestaurantsType>
}

function MapContainer({ fetchGooglePlaces, userCoords, googleRestaurants }: MapContainerProps) {
  return (
    <GoogleMap
      onLoad={(map) => fetchGooglePlaces(map)}
      mapContainerStyle={containerStyle}
      center={userCoords}
      zoom={13}
    >
      {userCoords && <Marker title="My position" position={userCoords} />}

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
  )
}

export default MapContainer
