export interface UserCoordsType {
  lat: number
  lng: number
}

export interface GoogleRestaurantsType {
  name: string
  place_id: string
  rating: number
  vicinity: string
  user_ratings_total: number
  geometry: {
    location: {
      lat: () => number
      lng: () => number
    }
  }
}
