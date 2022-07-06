import { Box, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Logo } from '../../../assets/icons'
import { LogoSvg, StyledHeader } from './Header.style'

function Header() {
  return (
    <StyledHeader>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <LogoSvg as={Logo} />
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
      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ShareIcon color="primary" />
          <Typography sx={{ fontSize: '1.125rem' }}>Share</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ChatBubbleIcon color="primary" />
          <Typography sx={{ fontSize: '1.125rem' }}>Contact us</Typography>
        </Box>
      </Box> */}
    </StyledHeader>
  )
}

export default Header
