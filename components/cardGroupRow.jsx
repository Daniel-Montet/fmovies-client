import MovieCard from "./MovieCard";
import crypto from "crypto";


export default function CardgroupRow({ chunk }) {
    const getRandomId = () => {
        return crypto.randomBytes(6).toString('hex');
    }

    const cards = chunk.map( (item,index) => {
        return <MovieCard key={index} position={index} id={getRandomId()}  movie={ item }/>
    })
    
    return (
        <div className="row">
            { cards }
        </div>
    )
} 