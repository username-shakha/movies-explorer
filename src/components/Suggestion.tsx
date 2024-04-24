import { TextField, Paper, MenuItem, Grid, Typography } from '@mui/material'
import Downshift from 'downshift'
import { Link } from 'react-router-dom'
import { IMAGES_BASE_PATH } from '@/constants'
import { styled } from '@mui/system'
import { mapGenres } from '@/helper'
import { ChangeEvent } from 'react'

const PaperStyled = styled(Paper)({
  backgroundColor: 'darkgoldenrod',
  top: -40,
  position: 'relative',
})

const MenuItemStyled = styled(MenuItem)({
  paddingTop: 5,
  paddingBottom: 5,
})

const ImgStyled = styled('img')({
  height: '100%',
})

const LinkStyled = styled(Link)({
  display: 'block',
  textDecoration: 'none',
})

const TitleStyled = styled(Typography)({
  color: 'black',
  paddingTop: 10,
})

const CaptionStyled = styled(Typography)({
  color: 'black',
})

type TSuggestionProps = {
  movies: TMoviesResponse
  genres: TGenre[]
  inputOnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Suggestion = ({ movies, genres, inputOnChange }: TSuggestionProps) => {
  const itemToString = () => ''

  return (
    <Downshift itemToString={itemToString}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <TextField
            id="search"
            placeholder="Search"
            fullWidth={true}
            sx={{ mb: 5 }}
            variant="standard"
            InputProps={{
              ...getInputProps({
                onChange: inputOnChange,
              }),
            }}
          />
          {isOpen ? (
            <PaperStyled square={true} {...getMenuProps()}>
              {movies &&
                movies.results &&
                movies.results.length > 0 &&
                movies.results
                  .slice(0, 10)
                  .filter(
                    (item) =>
                      !inputValue ||
                      item.title.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item, index) => (
                    <MenuItemStyled
                      {...getItemProps({
                        item,
                        key: item.id,
                        selected: highlightedIndex === index,
                        style: {
                          fontWeight: selectedItem === item ? 500 : 400,
                        },
                      })}
                    >
                      <LinkStyled to={`/movie/${item.id}`}>
                        <Grid container={true} spacing={8}>
                          <Grid item={true}>
                            {item.poster_path !== null ? (
                              <ImgStyled
                                src={`${IMAGES_BASE_PATH}/w92${item.poster_path}`}
                                alt={item.title}
                              />
                            ) : (
                              <ImgStyled
                                alt={item.title}
                                src={
                                  'https://via.placeholder.com/92x138.png?text=No+Cover'
                                }
                              />
                            )}
                          </Grid>
                          <Grid item={true}>
                            <TitleStyled variant="h4">{item.title}</TitleStyled>
                            <CaptionStyled variant="caption">
                              {mapGenres(item.genre_ids, genres)}
                            </CaptionStyled>
                          </Grid>
                        </Grid>
                      </LinkStyled>
                    </MenuItemStyled>
                  ))}
            </PaperStyled>
          ) : null}
        </div>
      )}
    </Downshift>
  )
}

export default Suggestion
