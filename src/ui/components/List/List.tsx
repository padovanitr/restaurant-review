import { Box } from '@mui/material'
import InfoCard from '../InfoCard'

function List() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1>List</h1>
      <InfoCard />
    </Box>
  )
}

export default List
