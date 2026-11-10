# Album Listening Journal

A full-stack web application for saving and rating music albums. Users can manage their album collection, record their listening experiences and browse albums using filters.

## Getting Started

1. Clone the repository

`git clone <repository-url>`

`cd album-journal`

2. Start the front end

`cd client`

`npm install`

`npm run dev`

3. Start the back end

Open a second terminal:

`cd server`

`npm install`

`npm run dev`

4. Open the application

Navigate to the local URL provided by Vite in your terminal (usually `http://localhost:5173`).

The back end requires a server/.env file containing your PostgreSQL connection string (DB_URL) and server port (PORT).

## Technologies Used

**Front End**
- React with Vite
- JavaScript (JSX)
- CSS
- Fetch API

**Back End**
- Node.js
- Express.js
- PostgreSQL (hosted on Supabase)
- `pg` for database queries

The back end follows the **Model-View-Controller (MVC)** architectural pattern and provides a REST API for communicating with the front end.

## Features

- Browse albums with cover art and album information.
- Add and delete albums.
- Mark albums as listened or not listened.
- Rate albums from 1–5 stars.
- Add and edit personal album reviews.
- Filter albums by listening status and rating.
- Changes are saved to a PostgreSQL database.

## Project Structure

- `client/` — React frontend and UI components
- `server/routes/` — REST API routes
- `server/controllers/` — Request handling and responses
- `server/models/` — Database queries and album operations
- `server/db/` — PostgreSQL connection and database setup

## Future Improvements

- Search albums by title or artist.
- Improved loading states and error handling.
- Automated testing using Jest, Supertest and React Testing Library.
- Hide Info mode for an artwork-focused view.
- Integrate with an external API such as MusicBrainz for adding albums and artwork.
