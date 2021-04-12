import { useQuery,gql, NetworkStatus, useMutation} from "@apollo/client";
import { useState } from "react";


export default function Page(props) {
    
    return (
        <>
            <Movies/>
            <AddMovie/>
        </>
    )
}

const GET_MOVIES = gql`
    query GetMovies {
        movies {
            title
        }
    }
`;


const ADD_MOVIE = gql`
    mutation AddMovie($movie: Movie) {
        createMovie(movieInput:$movie) {
            id
            image {
                id
                height
                width
                url
            }
            numberOfEpisodes
            seriesEndYear
            seriesStartYear
            nextEpisode
            year
            title
            titleType
            runningTimeInMinutes
            }
        }
`;

function AddMovie() {
    const [addMovie, { data }] = useMutation(ADD_MOVIE);
    const [id, setId] =  useState("");
    const [imageId, setImageId] = useState("");
    const [imageHeight, setImageheight] = useState("");
    const [imageWidth, setImageWidth] = useState("");
    const [imageurl,setImageUrl] = useState("");
    const [numberOfEpisodes,setnumberOfEpisodes] = useState("");
    const [seriesEndYear,setSeriesEndYear] = useState("");
    const [seriesStartYear,setSeriesStartYear] = useState("");
    const [nextEpisode,setNextEpisode] = useState("");
    const [year,setYear] = useState("");
    const [titleType,setTitleType] = useState("");
    const [title, setTitle] = useState("");
    const [runningTimeInMinutes,setRunningTimeInMinutes] = useState("");


    return (
        <div>
           <form onSubmit={ e => {
               e.preventDefault();
               addMovie({variables: { movieInput:{
                    id: id,
                    image:[{
                        id: imageId,
                        height: imageHeight,
                        width: imageWidth,
                        url: imageurl
                    }],
                    numberOfEpisodes: numberOfEpisodes,
                    seriesEndYear:seriesEndYear,
                    seriesStartYear:seriesStartYear,
                    nextEpisode:nextEpisode,
                    year:year,
                    title:title,
                    titleType:titleType,
                    runningTimeInMinutes:runningTimeInMinutes
               }}});
           }}>
                <input type="text" value={ id } onChange={ e => setId(e.target.value)} placeholder="movie id"/>
                <input type="text" value={ imageId } onChange={ e => setImageId(e.target.value)} placeholder="image id"/>
                <input type="text" value={ imageHeight } onChange={ e => setImageheight(e.target.value)} placeholder="image height"/>
                <input type="text" value={ imageWidth } onChange={ e => setImageWidth(e.target.value)} placeholder="image width"/>
                <input type="text" value={ imageurl } onChange={ e => setImageUrl(e.target.value)} placeholder="image url"/>
                <input type="text" value={ numberOfEpisodes } onChange={ e => setnumberOfEpisodes(e.target.value)} placeholder="number of episodes"/>
                <input type="text" value={ seriesEndYear } onChange={ e => setSeriesEndYear(e.target.value)} placeholder="series end year"/>
                <input type="text" value={ seriesStartYear } onChange={ e => setSeriesStartYear(e.target.value)} placeholder="series start year"/>
                <input type="text" value={ nextEpisode } onChange={ e => setNextEpisode(e.target.value)} placeholder="next episode"/>
                <input type="text" value={ year } onChange={ e => setYear(e.target.value)} placeholder="year"/>
                <input type="text" value={ title } onChange={ e => setTitle(e.target.value)} placeholder="title"/>
                <input type="text" value={ titleType } onChange={ e => setTitleType(e.target.value)} placeholder="title type"/>
                <input type="text" value={ runningTimeInMinutes } onChange={ e => setRunningTimeInMinutes(e.target.value)} placeholder="running time in minutes"/>

                <input type="submit" value="submit" name="submit"/>
           </form> 
        </div>
    )
}

function Movies(props) {
    const { loading, data, error } = useQuery(GET_MOVIES);
    if (loading) return "Loading";
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {
                data.movies.map( movie => (
                    <div key={ movie.title }> {movie.title}</div>
                ))
            }
        </div>
    );
}

// const GET_DOGS = gql`
//     query GetDogs {
//         dogs {
//             id
//             breed
//         }
//     }
// `;

// function Dogs({ onDogSelected }) {
//     const { loading, data, error } = useQuery(GET_DOGS);

//     if (loading) return "Loading";
//     if (error) return `Error! ${error.message}`;

//     return (
//         <select name="dog" onChange={onDogSelected}>
//             {
//                 data.dogs.map(dog => (
//                     <option key={ dog.id } value={ dog.breed }>
//                         { dog.breed }
//                     </option>
//                 ))
//             }
//         </select>
//     )
// }

// function Dogphoto({ breed }) {
//     const { loading, error, data, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
//         variables: {breed},
//         notifyOnNetworkStatusChange: true
//     });

//     if(networkStatus === NetworkStatus.refetch) return 'Refetching!';
//     if(loading) return null;
//     if(error) return `Error! ${error}`;

//     return (
//         <>
//             <img src={data.dog.displayImage} style={{ height: 100, width:100}}/>
//             <button onClick={ () => refetch()}>Refetch!</button>
//         </>
//     );
// }