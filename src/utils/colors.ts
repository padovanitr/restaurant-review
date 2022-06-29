export const restaurantReviewColors = {
  whiteSmoke: '#F5F5F5',
  brightGray: '#EDEDED',
  sunsetOrange: '#fe5f50',
  apricotGelatoOrange: '#f6d5b2',
  black: '#000000',
  blackRock: '#2E2E3A',
  darkGrey: '#413C3C',
  lightGray: '#E6E6E6',
  arrowTownGray: '#94806b',
  white: '#FFFFFF',
} as const

export type Colors = typeof restaurantReviewColors

export default restaurantReviewColors