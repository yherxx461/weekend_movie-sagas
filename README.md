# Weekend_Movie_Saga Challenge

## Description

Duration: 1 Weekend Sprint

This project is designed to be a code challenge for users who want to test their understanding and comprehension of Redux-Saga. The default tests for this application are already built in. Same with the base mode routers. The user is to complete the base mode requirements below to ensure the movie list renders to the client side.

## Base Mode Requirements:

1. ### Home/List Page

- [ ] When a movie poster (<img> element) is clicked, a user should be brought to the details page.
- [ ] Each of the movie items' posters (<image> element) on the page must have a data-testid="toDetails" attribute.

2. ### Details Page

- [ ] This view should show all details including ALL the genres for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data.
- [ ] The detail page must have a "back to movie list" button, which should bring th user back to the Home/List Page.
- [ ] The "back to movie list" button must have a data-testid="toList" attribute.

Hint: You can make a GET request for a specific movie! Remmember req.params and :id?

## Screen Shot

![Movie List](<Screenshot 2024-03-05 at 12.34.45 AM.png>)
![Movie Details](<Screenshot 2024-03-05 at 12.32.56 AM.png>)

### Prerequisites

Node
Postgres
Git
React-Redux

## Installation

Install project dependencies:

```
`npm install`
```

## Database Setup

1. Create a database named `saga_movies_weekend` in Postico.
2. Copy and paste the queries in the `database.sql` file to create all necessary tables and data.

## Get Everything Up and Running

1. Open up your editor of choice and run an `npm install`
2. Run `npm run server` in your terminal
3. Run `npm run client` in your terminal
4. The `npm run client` command will open up a new browser tab for you!

## Built With

```
React
Node.js
Express
PostgreSQL
```

## Acknowledgement

Special thanks to Prime Digital Academy for the support and guidance during the development of this application.

## Support

If you have any questions or concerns, please reach out to me at yher.prime@gmail.com
