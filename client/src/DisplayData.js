import React, {useState} from 'react'
import { useQuery, useLazyQuery, gql } from "@apollo/client"
// useQuery: fetches data from API, does it whenever the component renders.
// gql -> gql statement. Note that this gql is from apollo/client, not apollo-server.

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
        }
    }
`;

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            name
            yearOfPublication
        }
    }
`;

const GET_MOVIE_BY_NAME = gql`
    query Movie($name: String!) { # Define a variable "name", giving it a type
        movie(name: $name) { # parameter name: value
            name
            yearOfPublication
        }
    }
`;


function DisplayData() {
    const [movieSearched, setMovieSearched] = useState("");

    const { data: userData } = useQuery(QUERY_ALL_USERS); // data: execute the query and get the data
    const { data: movieData, loading, error } = useQuery(QUERY_ALL_MOVIES); // data: execute the query and get the data
    const [
        fetchMovie, 
        {data: movieSearchData, error: movieError},
    ] = useLazyQuery(GET_MOVIE_BY_NAME); //fetchMovie = onClick function, cuz the query is lazy

    if(loading) {
        return <h1>DATA IS LAODING</h1> // Add a loading spinner
    }
    if(userData) {
        //console.log(userData.users[1].name);
    }
    if(error) {
        console.log(error.message);
    }
    if(movieError) {
        console.log(movieError.message);
    }
    //console.log(movieData);
    return (
        <div>
            {userData.users && userData.users.map((user) => {
                return (<div>
                    <h3>Name: {user.name}</h3>
                    <h3>Username: {user.username}</h3>
                    <h3>Age: {user.age}</h3>
                    <br></br>
                </div>)
            })}
            {movieData.movies && movieData.movies.map((movie) => {
                return (<div>
                    <h5>Movie Name: {movie.name}</h5>
                    <h5>Year Of Publication: {movie.yearOfPublication}</h5>
                    <br></br>
                </div>)
            })}

            <div>
                <input type="text" placeholder="The Godfather II..." onChange={(event) => {
                    setMovieSearched(event.target.value)
                }}/>
                <button onClick={() => {
                        fetchMovie({
                            variables: {
                                name: movieSearched,
                            }
                        })
                }}>Fetch Data</button>
                <div>
                    {/*whenever movieSearchData is not null*/}
                    {movieSearchData && (
                        <div> 
                            {" "}
                            <h1>MovieName: {movieSearchData.movie.name}</h1>
                            <h1>Movie Year: {movieSearchData.movie.yearOfPublication}</h1>
                        </div>
                    )}
                    {movieError && (<h1>There's some error fetching your movie UwU</h1>)}
                </div>
            </div>
        </div>
    )
}

export default DisplayData