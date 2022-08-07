export interface UserCoordsType {
  lat: number
  lng: number
}

export interface GoogleRestaurantsType {
  name: string
  photos: Array<{
    getUrl: () => string
  }>
  website: string
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
