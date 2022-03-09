const { UserList, MovieList } = require("../FakeData")
const _ = require("lodash");

// Here to make an API call to your Database
const resolvers = {
    Query: {
        // User Resolvers
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        
        // Movie Resolvers
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) =>  {
            const name = args.name;
            const movie = _.find(MovieList, {name: name});
            return movie;
        }
    },

    User: {
        favoriteMovies: () => {
            return _.filter(
                UserList.favoriteMovies, 
                (movie) => 
                    movie.yearOfPublication < 2000 && movie.yearOfPublication >= 1990
            );
        }
    }
};

module.exports = { resolvers }