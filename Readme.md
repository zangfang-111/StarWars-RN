INSTALL AND RUN
---------------------
> npm i   or   yarn 
---------------------
> expo start   or   npm start



General requirements:
---------------------

The ui should have a basic theme of black and yellow
Movie names in the dropdown to be sorted by release date from
earliest to newest
There should be no movie selected initially and the app should
show the Star Wars logo instead of movie information
The opening crawl of the selected movie should be animated, a
simple scrolling marqueue text would be sufficient

Data requirements:
---------------------

The data should be fetched online from The Star Wars API
Loading indicators should be shown in proper places during data
fetch
Error messages should be shown if there are any errors

Character list requirements:
---------------------

Below the crawl, all characters that appear in that movie should be
listed showing name, gender and height in the form of a table.
Gender can be shown as an icon or abbreviation to save horizontal
space.
Character list can be sorted by clicking on the table headers.
Clicking on the same header twice toggles the sort order by that
field between ascending and descending.
There should also be a gender filter selection right above the list so
that either all characters are listed or only the selected gender are

listed.
The last row of the table should show the total number of
characters currently visible on the list.
Last row should also show the sum of the heights of the characters
currently visible.
The sum of heights should be shown both in cm and and in ft/in in
parens, for example 170 cm (5ft 6.93in)