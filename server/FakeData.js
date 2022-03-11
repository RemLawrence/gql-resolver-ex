const UserList = [
    {
        id: 1,
        name: "Uruha Rushia",
        username: "urushia",
        age: 1000,
        nationality: "JAPAN",
    }, // Needs to go
    {
        id: 2,
        name: "Gwar Gura",
        username: "ggura",
        age: 1000,
        nationality: "CANADA",
        friends: [
            {
                id: 4,
                name: "Takanashi Kiara",
                username: "kiara",
                age: 24,
                nationality: "AUSTRALIA",
            },
            {
                id: 5,
                name: "Amelia Watson",
                username: "awatson",
                age: 19,
                nationality: "UK"
            },
            {
                id: 6,
                name: "Ninomae Ina'nis",
                username: "ina",
                age: 1000,
                nationality: "USA"
            }
        ],
        favoriteMovies: [
            {
                id: 3,
                name: "The Godfather II",
                yearOfPublication: 1974,
                isInTheaters: true
            },
            {
                id: 1,
                name: "The Legend of 1900",
                yearOfPublication: 1998,
                isInTheaters: true
            }
        ]
    },
    {
        id: 3,
        name: "Houshou Marine",
        username: "hmarine",
        age: 35,
        nationality: "JAPAN",
    },
    {
        id: 4,
        name: "Takanashi Kiara",
        username: "kiara",
        age: 24,
        nationality: "AUSTRALIA",
    },
    {
        id: 5,
        name: "Amelia Watson",
        username: "awatson",
        age: 19,
        nationality: "UK",
        friends: [
            {
                id: 6,
                name: "Ninomae Ina'nis",
                username: "ina",
                age: 1000,
                nationality: "USA"
            }
        ]
    },
    {
        id: 6,
        name: "Ninomae Ina'nis",
        username: "ina",
        age: 1000,
        nationality: "USA"
    }
]

const MovieList = [
    {
        id: 1,
        name: "The Legend of 1900",
        yearOfPublication: 1998,
        isInTheaters: true
    },
    {
        id: 2,
        name: "The Truman Show",
        yearOfPublication: 1998,
        isInTheaters: true
    },
    {
        id: 3,
        name: "The Godfather II",
        yearOfPublication: 1974,
        isInTheaters: true
    },
]

module.exports = { UserList, MovieList }