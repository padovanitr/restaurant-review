export interface UserCoordsType {
  lat: number
  lng: number
}

export interface GoogleRestaurantsType {
  name: string
  place_id: string
  geometry: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
}
