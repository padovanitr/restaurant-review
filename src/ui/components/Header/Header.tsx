import { Box } from '@mui/material'
import { Logo } from '../../../assets/icons'
import { LogoSvg, StyledHeader } from './Header.style'

function Header() {
  return (
    <StyledHeader>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <LogoSvg as={Logo} inheritViewBox />
        <Box
          sx={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#e51b23',
            fontFamily: 'Source Serif Pro',
          }}
        >
          Restaurant Review
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Box>Share</Box>
        <Box>Contacts us</Box>
      </Box>
    </StyledHeader>
  )
}

export default Header
