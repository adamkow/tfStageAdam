# Orders App Exercise

Install and start:

- `npm i`
- `npm start`

Rationale for unit tests

On the home page, a button should be displayed that takes me to /orders (nothing else on home page).
Unit test: Confirm that the homepage button that navigates to the /orders correctly

The number of currently visible orders should also be displayed within the page.
Unit test: Count the number of orders displayed initially without filters is correct

When on the orders page, the document's title (i.e. the text of the browser tab name) should contain a number that matches the number of orders currently being displayed (e.g. "(12) My Orders").
Unit test: Verify that the number of orders displayed is the same as the document title

Users can filter by Accepted/In Progress/Complete orders (one at a time).
Unit test: Ensure that the number of orders displayed matches that selected filter

Users can jump between Accepted/In Progress/Complete directly.
Unit test: Check if the correct filter is active

When users have an order filter on, it should be displayed at the top of the list, with an "X" button/icon which is used to dismiss the current filter.
Unit test: Check that the current filter is displayed at the top of the list, and when clicked removes the selected filter
