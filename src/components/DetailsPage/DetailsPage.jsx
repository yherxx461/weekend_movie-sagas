function DetailsPage() {
  return (
    <>
      <div data-testid="movieDetails" className="movieDtails"></div>
    </>
  );
}

export default DetailsPage;

// This view should show all details including ALL the genres for the selected movie, as well as the title, description, and poster image. Use Sagas and Redux to handle these requests and data.
//  The details page must have a data-testid="movieDetails" attribute.
//  The details page must have a "back to movie list" button, which should bring the user back to the Home/List Page.
//  The "back to movie list" button must have a data-testid="toList" attribute.
// Hint: You can make a GET request for a specific movie! Remember req.params and :id?
