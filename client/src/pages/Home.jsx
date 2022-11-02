/* eslint-disable no-restricted-globals */
import { Box, Grid, Pagination, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MovieCard } from "../components/MovieCard";
import { MovieFavorite } from "../components/MovieFavorite";
import { useQuery } from "@apollo/client";
import { QUERY_GET_MOVIES } from "../queries";
import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { MovieSelectedForm } from "../components/MovieSelectedForm";
import { ConfirmModal } from "../components/ConfirmModal";
import { Filter } from "../components/Filter";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  minHeight: "300px",
  maxHeight: "325px",
  position: "sticky",
  top: theme.spacing(2),
  marginBottom: "10px",
  overflowY: "auto",
}));

export const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const [page, setPage] = useState(1);
  const [filterRequest, setFilterRequest] = useState([]);
  const [link, setLink] = useState("");
  const [listName, setListName] = useState("");

  const { data, loading } = useQuery(QUERY_GET_MOVIES, {
    variables: {
      format: "dd.MM.yyyy",
      page,
    },
  });

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const onSubmit = ({ listName }) => {
    const ids = selectedMovies.map((movie) => movie.id);
    const link = `${
      window.location.host
    }/recommend?title=${listName}&ids=${ids.join()}`;

    setLink(link);
    setListName(listName);
  };

  const onCloseConfirmModal = () => {
    setLink("");
  };

  const onSubmitFilter = (value) => {
    setFilterRequest({
      year: value.year,
      genre: value.genre,
    });
  };

  console.log(filterRequest);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Filter onSubmit={onSubmitFilter} />
            </Paper>
          </Grid>
          {/* Movie Cards */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              {loading ? (
                <p>LOADING...</p>
              ) : (
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: 1,
                  }}
                >
                  <Grid container spacing={2}>
                    {data?.movies.results.map((item) => (
                      <Grid key={item.id} item xs={12} sm={4} md={4} lg={3}>
                        <MovieCard
                          movie={item}
                          onClick={selectMovie}
                          isSelected
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
              <Box
                mt={2}
                pb={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {data && (
                  <Pagination
                    count={500}
                    page={page}
                    onChange={paginationHandler}
                    showFirstButton
                    showLastButton
                  />
                )}
              </Box>
            </Paper>
          </Grid>
          {/* MovieFavorite */}
          <Grid item xs={12} md={4}>
            <SelectedMovies elevation={3}>
              {selectedMovies.length === 0 && <h1>NO SELECTED MOVIES</h1>}

              {selectedMovies?.map((movie) => (
                <MovieFavorite
                  key={movie.id}
                  movie={movie}
                  handleDelete={deleteMovie}
                />
              ))}

              {selectedMovies.length > 0 && (
                <MovieSelectedForm onSubmit={onSubmit} />
              )}

              <ConfirmModal
                url={link}
                title={listName}
                open={!!link}
                onClose={onCloseConfirmModal}
              />
            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
