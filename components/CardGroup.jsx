import MovieCard from "./MovieCard";

import _ from "lodash";
import CardgroupRow from "./cardGroupRow";
import styles from "../styles/cardGroup/cardGroup.module.css";


export default function CardGroup(props) {
    let chunkedList = _.chunk(props.data,6);
    const rows = chunkedList.map( (chunk,index) => <CardgroupRow key={index} chunk ={chunk}/>);
    
    return (
        <div className={"container-fluid overflow-hidden " + styles.margin}>
            { rows }
        </div>
    )
}

// A row has 6 cards
// Card group will render a row for each chunk of 6 movies
//  