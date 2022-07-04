import { Box } from '@mui/material'
import { Logo } from '../../../assets/icons'
import { LogoSvg, StyledHeader } from './Header.style'

function Header() {
  return (
    <StyledHeader>
      <Box>
        <LogoSvg as={Logo} inheritViewBox />
        <Box>Restaurant Review</Box>
      </Box>
      <Box>
        <Box>Share</Box>
        <Box>Contacts us</Box>
      </Box>
    </StyledHeader>
  )
}

export default Header
