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
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.user; // This 'user' comes from mutation's parameter name
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId+1;
            console.log(user);
            UserList.push(user);
            return user;
        },
        addFriend: (parent, args) => {
            const userId = args.userId;
            const friendId = args.friendId;
            const user = _.find(UserList, (user) => { /* Needs an arrow function like this because the id is interpreted as a string */
                return user.id == userId;
            });
            const friend = _.find(UserList, (friend) => {
                return friend.id == friendId;
            });
            user.friends.push(friend);
            //console.log(friend);
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id == id) {
                    user.username = newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated;
        },
        deleteUser: (parent, args) => {
            const id = args.userId;
            _.remove(UserList, (user) => user.id == Number(id));
            return null;
        }
    }
};

module.exports = { resolvers }