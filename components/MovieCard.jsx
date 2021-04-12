import styles from "../styles/movieCard/movieCard.module.css";
import $ from "jquery";
import { useState, useEffect } from "react";

export default function MovieCard({movie,position,id}) {
    const [key,setId] = useState("");

    const addTooltip = () => {
        if (position < 3) return $("#" + id).removeClass(styles.movieTooltipOff).addClass(styles.movieTooltipOnRight);

        return $("#" + id).removeClass(styles.movieTooltipOff).addClass(styles.movieTooltipOnLeft);
    }

    const removeTooltip = () => {
        if (position < 3) return $("#" + id).removeClass(styles.movieTooltipOnRight).addClass(styles.movieTooltipOff);

        return $("#" + id).removeClass(styles.movieTooltipOnLeft).addClass(styles.movieTooltipOff);
    }

    useEffect(() => {
        setId(id);
        return;
    })

    return (
        <div className="col col-6 col-md-4 col-sm-3 col-lg-3 col-xl-2">
            <div className={"card " + styles.movieCard } 
                    onMouseOver={ (e) => addTooltip()}
                    onMouseOut={ (e) => removeTooltip()}
            >
                <div className={styles.movieTooltipOff} id={ key }>  
                    <p>Hello there im a tooltip { key }</p>       
                </div>

                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                    <img
                    src="https://source.unsplash.com/random/500x300"
                    className={"img-fluid " + styles.movieCardImage}
                    />
                    <a href="#!">
                        <div className="mask" style={{ "backgroundColor": "rgba(33, 37, 41, .4)"}}>
                           <div className={ styles.wrap }>
                               <i className={"fas fa-play fa-1x " + styles.maskPlayIcon }></i>
                           </div>
                             {/* <a href="#" >tooltip</a> */}
                        </div>
                    </a>
                    
                    <div className={styles.icons}>
                        <div className={styles.quality}>
                            HD
                        </div>
                    </div>
                </div>
                <div className={ "card-footer " + styles.cardFooter }>
                    <h3>
                        <a className={ styles.title }>Hello World Hi There</a>
                    </h3>
                    <div className={"meta " + styles.meta}>
                        <p className={ styles.text }>2021</p>
                        <p className={styles.text + " " + styles.dot }></p>
                        <p className={ styles.text }>113 min</p>
                        <button type="button" className={ styles.type} data-mdb-ripple-color="dark">Movie</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
