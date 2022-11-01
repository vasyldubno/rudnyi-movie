import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { QUERY_GET_MOVIE_BY_ID } from "../queries";
import { useQuery } from "@apollo/client";

// components
import { MovieCard } from "../components/MovieCard";

// mui
import { Box, Typography, Grid, Pagination, Paper } from "@mui/material";

export const Recommend = () => {
  const [searchParams] = useSearchParams();
  const [ids, setIds] = useState([]);

  const title = searchParams.get("title");

  useEffect(() => {
    const ids = searchParams.get("ids");
    const idsToArray = ids.split(",");
    const idsToNumber = idsToArray.map((id) => Number(id));
    setIds(idsToNumber);
  }, [searchParams]);

  const { data, loading } = useQuery(QUERY_GET_MOVIE_BY_ID, {
    variables: {
      ids: ids,
    },
  });

  console.log("data", data);

  return (
    <>
      <Box>
        <Typography variant="h1" component="h1">
          {title}
        </Typography>
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
              {data?.moviesByIds.map((item) => (
                <Grid key={item.id} item xs={12} sm={4} md={4} lg={3}>
                  <MovieCard movie={item} onClick={() => {}} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>
    </>
  );
};
