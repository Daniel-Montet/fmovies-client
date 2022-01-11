import MovieCard from "./MovieCard";

import _ from "lodash";
import CardgroupRow from "./cardGroupRow";
import styles from "../styles/cardGroup/cardGroup.module.css";
import Link from "next/link";


export default function CardGroup(props) {
    let chunkedList = _.chunk(props.data,6);
    const rows = chunkedList.map( (chunk,index) => <CardgroupRow key={index} chunk ={chunk}/>);
    
    return (
        <div className={"container-fluid overflow-hidden " + styles.margin}>
            <div className={"row " + styles.row}>
                <div className="col-3">
                    <h2>{props.title}</h2>
                </div>
                <div className="col-4">
                    {/* <a className="btn me-2" style={{"backgroundColor": "#55acee"}} href="#!" role="button">
                        <i className="fab fa-twitter me-2"></i>Twitter
                    </a>
                    <a className="btn me-2" style={{"backgroundColor": "#55acee"}} href="#!" role="button">
                        <i className="fab fa-twitter me-2"></i>Twitter
                    </a>
                    <a className="btn me-2" style={{"backgroundColor": "#55acee"}} href="#!" role="button">
                        <i className="fab fa-twitter me-2"></i>Twitter
                    </a> */}
                </div>
                <div className="col-5">
                    <Link href="#" >
                        <a className={styles.more}>View all <i class="fas fa-chevron-circle-right"></i></a> 
                    </Link>
                </div>
            </div>
            { rows }
        </div>
    )
}

// A row has 6 cards
// Card group will render a row for each chunk of 6 movies
//  