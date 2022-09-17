import { IconButton } from '@mui/material'
import { SearchIcon } from '../../../assets/icons'
import { StyledTextField } from './SearchBar.style'

export interface SearchBarProps {
  name: string
  placeholder: string
  ariaLabel: string
}

function SearchBar({ name, placeholder, ariaLabel }: SearchBarProps) {
  return (
    <StyledTextField
      name={name}
      placeholder={placeholder}
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
