import { IconButton } from '@mui/material'
import { SearchIcon } from '../../../assets/icons'
import { StyledTextField } from './SearchBar.style'

export interface SearchBarProps {
  name: string
  placeholder: string
  ariaLabel: string
  setPlaceSearch: (e: string) => void
}

function SearchBar({ name, placeholder, ariaLabel, setPlaceSearch }: SearchBarProps) {
  return (
    <StyledTextField
      name={name}
      placeholder={placeholder}
      onChange={(e) => setPlaceSearch(e.target.value)}
      InputProps={{
        startAdornment: (
          <IconButton aria-label={ariaLabel} onClick={() => console.log('clicou')}>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  )
}

export default SearchBar
