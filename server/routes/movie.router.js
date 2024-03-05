const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Get all movie data from movies
router.get('/', (req, res) => {
  const query = `
    SELECT * FROM "movies"
      ORDER BY "title" ASC;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500);
    });
});

// Get individual movie from movies with genre data from movies_genres.genre_id (MANY-TO-MANY RELATIONSHIP)
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT movies.title AS title, movies.poster AS poster, movies.description AS description, STRING_AGG(genres.name, ', ') AS genre 
  FROM movies
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  GROUP BY movies.id;`;

  pool
    .query(query, [id])
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.send(result.rows[0]);
    })
    .catch((error) => {
      console.error('Error in getting movie result', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
    INSERT INTO "movies" 
      ("title", "poster", "description")
      VALUES
      ($1, $2, $3)
      RETURNING "id";
  `;
  const insertMovieValues = [
    req.body.title,
    req.body.poster,
    req.body.description,
  ];
  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, insertMovieValues)
    .then((result) => {
      // ID IS HERE!
      console.log('New Movie Id:', result.rows[0].id);
      const createdMovieId = result.rows[0].id;

      // Now handle the genre reference:
      const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" 
          ("movie_id", "genre_id")
          VALUES
          ($1, $2);
      `;
      const insertMovieGenreValues = [createdMovieId, req.body.genre_id];
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, insertMovieGenreValues)
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        })
        .catch((err) => {
          // catch for second query
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      // 👈 Catch for first query
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
