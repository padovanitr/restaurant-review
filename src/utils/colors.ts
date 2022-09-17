export const restaurantReviewColors = {
  mainRed: '#c71054',
  mainRedDarker: '#9c0b41',
  mainBlue: '#17204e',
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
  starYellow: '#F9D71C',
} as const

export type Colors = typeof restaurantReviewColors

export default restaurantReviewColors
