import { CircularProgress } from '@mui/material'
import { styled } from '@mui/system'

const LoaderWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
}))

export default function Loader() {
  return (
    <LoaderWrapper>
      <CircularProgress />
    </LoaderWrapper>
  )
}
