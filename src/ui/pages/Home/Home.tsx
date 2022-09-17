import { useJsApiLoader } from '@react-google-maps/api'
import { useEffect, useState } from 'react'
import RestaurantsList from '../../components/RestaurantsList/RestaurantsList'
import MapContainer from '../../components/MapContainer'
import RestaurantModal from '../../components/RestaurantModal'
import { Container, ListWrapper, MapWrapper } from './Home.style'
import { GoogleRestaurantsType, UserCoordsType } from './Home.utils'
import SubMenu from '../../components/SubMenu'

function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [userCoords, setUserCoords] = useState<UserCoordsType>()
  const [googleRestaurants, setGoogleRestaurants] = useState<GoogleRestaurantsType[]>([])
  const [selectedRestaurantInfo, setSelectedRestaurantInfo] = useState<GoogleRestaurantsType>()
  const [mapObj, setMapObj] = useState<HTMLDivElement | google.maps.Map>()
  const [placeInfo, setPlaceInfo] = useState<google.maps.places.PlaceResult | null>()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyD8oKLh-p7_hSxhSg03u_nRkN2RPYpl720',
  })

  const fetchGooglePlaces = async (map: HTMLDivElement | google.maps.Map) => {
    if (!userCoords) {
      return
    }

    if (map) {
      setMapObj(map)
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
        setGoogleRestaurants(results as GoogleRestaurantsType[])
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

  const getPlaceInfo = (
    mapObjInfo: HTMLDivElement | google.maps.Map,
    selectedRestaurant: GoogleRestaurantsType
  ) => {
    const service = new google.maps.places.PlacesService(mapObjInfo)
    const placeId = selectedRestaurant.place_id
    if (placeId) {
      service.getDetails({ placeId }, (placeResult, pstatus) => {
        if (pstatus === 'OK' && placeResult) {
          console.log('placeResult', placeResult)
          setPlaceInfo(placeResult)
        }
      })
    }
  }

  useEffect(() => {
    if (selectedRestaurantInfo && mapObj) {
      getPlaceInfo(mapObj, selectedRestaurantInfo)
    }
  }, [selectedRestaurantInfo, mapObj])

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <>
      <SubMenu />
      <Container>
        <MapWrapper>
          {isLoaded && userCoords && googleRestaurants && (
            <MapContainer
              fetchGooglePlaces={fetchGooglePlaces}
              userCoords={userCoords}
              googleRestaurants={googleRestaurants}
            />
          )}
        </MapWrapper>
        <ListWrapper sx={{ flex: 1, padding: '30px 40px', overflow: 'scroll', margin: '0 auto' }}>
          {googleRestaurants && (
            <RestaurantsList
              setSelectedRestaurantInfo={setSelectedRestaurantInfo}
              setModalOpen={setModalOpen}
              googleRestaurants={googleRestaurants}
            />
          )}
        </ListWrapper>
        {modalOpen && placeInfo && (
          <RestaurantModal
            selectedRestaurantInfo={placeInfo}
            isModalOpen={modalOpen}
            setOpenModal={setModalOpen}
          />
        )}
      </Container>
    </>
  )
}

export default Home
