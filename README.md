# React Redux Movie Project
## About the Project
This project is a comprehensive movie database application built with the Redux centralized state management architecture. Users can view a list of movies, check out their details, add new movies, delete existing ones, and manage their favorite movies. The most important feature of the application is that its entire state is managed by the Redux Store.

The project uses React Router for navigation and Tailwind CSS for its user interface design. This gives both the state management and UI layers a modern and scalable structure.
## Key Features
* Centralized State Management: The Redux Store holds all application data in a single, central location, including the movie list and the favorite movie list.
* Separate Reducers: Separate reducers are created for movies (movieReducer.js) and favorite movies (favoritesReducer.js), and they are combined with combineReducers. This makes the code more modular.
* Movie Management:
    * The MovieList.jsx component gets all movies from the Redux Store and lists them in a table using MovieListItem components.
    * The MovieListItem.jsx component displays the name, director, genre, and Metascore for each movie and includes a button that links to the movie's detail page.
    * The AddMovieForm.jsx component provides a form for adding new movies and uses the addMovie action from movieActions.js to add the movie to the store.
* Favorites Management:
    * A button in MovieHeader.jsx allows the favorite list to be shown or hidden.
    * The FavoriteMovieList.jsx component is a side menu that lists the movies added to favorites. This list uses data from favoritesReducer.js and allows users to remove movies from their favorites.
* Navigation (Routing): React Router is used within App.jsx to enable navigation between different pages (/movies, /movies/:id, /movies/add).
* State Selection and Update: The useSelector and useDispatch hooks from the react-redux library allow components to access the state and update it by dispatching actions.
## Project Structure
src/:
* App.jsx: The main component of the application, which connects to the Redux Store and contains the React Router routing logic.
* components/:
    * AddMovieForm.jsx: The form for adding new movies.
    * FavoriteMovieList.jsx: The component that lists favorite movies.
    * Movie.jsx: The component that displays the details of a single movie.
    * MovieHeader.jsx: Includes the application title and navigation buttons.
    * MovieList.jsx: The component that lists all movies.
    * MovieListItem.jsx: The component that represents each row in the movie list table.
    * MovieFooter.jsx: Displays the number of movies shown.
* store/:
    * store.js: Creates the Redux store.
* src/store/reducers/:
    * favoritesReducer.js: The reducer that manages the state of favorite movies.
    * movieReducer.js: The reducer that manages the state of movies.
    * index.js: Combines and exports the reducers.
* src/store/actions/:
    * favoritesActions.js: Defines actions related to favorites.
    * movieActions.js: Defines actions related to movies.
## How To Run
To run this project on your local machine, you need to have Node.js and npm installed.
1. Install Required Packages:
```
Bash
npm install
```
2. Start the Application:
```
Bash
npm run dev
```
3. View in Browser: After running the command, your project will typically open automatically at http://localhost:5173/.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You will learn the fundamental concepts of Redux, a predictable state container for JavaScript applications. The project demonstrates the setup of a Redux store, the creation of separate reducers for movies and favorites, and the use of actions to perform state updates. You will also see how to interact with the Redux store from React components using the useSelector and useDispatch hooks.
* You'll learn to implement client-side navigation using React Router. This includes defining routes for different views such as a list of all movies, a form to add a new movie, and individual movie details. The project also shows how to use navigation components like Link and Switch to manage the user's flow through the application.
* You will learn to structure an application with a clean, component-based approach. The project is broken down into logical components like MovieHeader, MovieList, and MovieListItem, which promotes a more organized and maintainable codebase.
* You will understand how to manage form state and user input using React's useState hook, as seen in the AddMovieForm component. The project also demonstrates CRUD (Create, Read, Update, Delete) principles by allowing you to add new movies, view movie details, and delete movies from the list.
* You will gain experience using Tailwind CSS, a utility-first CSS framework. The components use predefined classes such as flex, bg-white, and shadow to quickly and efficiently style the application's UI.