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
            <div className={"card " + styles.movieCard}
                onMouseOver={(e) => addTooltip()}
                onMouseOut={(e) => removeTooltip()}
            >
                <div className={ styles.movieTooltipOff } id={key}>
                    <div className={ styles.tooltipContent }>
                        <div className={ styles.title2 }>Kong Skull Island</div>
                        <div className={ styles.meta2 }>
                            <span className={ styles.imdb }><i className="fa fa-star"></i> 4.40</span>
                            <span>2021</span>
                            <span>106 min</span>
                            <span className={styles.textright}><span className={ styles.quality }>HD</span></span>
                        </div>
                        <div className={ styles.desc }>
                            In a world terrorized by super-villains, one woman has developed the process 
                            to give superpowers to regular people. But when scientist Emily Stanton accidentally 
                            imbues her estranged best-friend with incredible...
                        </div>
                        <div className={ styles.meta2 }>
                            <div>
                                <span>Country:</span>
                                <span>
                                    <a href="https://fmovies.pub/country/united-states" title="United States movies">United States</a>
                                </span>
                            </div>

                            <div>
                                <span>Genre:</span>
                                <span>
                                    <a href="https://fmovies.pub/genre/comedy" title="Comedy">Comedy</a>,
                                    <a href="https://fmovies.pub/genre/sci-fi" title="Sci-Fi">Sci-Fi</a>,
                                    <a href="https://fmovies.pub/genre/adventure" title="Adventure">Adventure</a>,
                                    <a href="https://fmovies.pub/genre/action" title="Action">Action</a>,
                                    <a href="https://fmovies.pub/genre/fantasy" title="Fantasy">Fantasy</a>
                                </span>
                            </div>

                        </div>
                        <div className={ styles.actions }>
                            <a className={ styles.bookmark } data-id="jprrn" data-action="add" 
                                data-add="<i className='fa fa-heart' style='font-weight: 400'></i>" 
                                data-remove="<i className='fa fa-minus'></i>">
                                <i className="fa fa-heart" style={{ "fontWeight": 400}}></i>
                            </a>
                            <a className={"btn btn-light " + styles.watchnow } href="/film/thunder-force.jprrn"><i className="fa fa-play"></i> Watch now</a>
                        </div>
                    </div>
                </div>

                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="dark">
                    <img
                    src="https://source.unsplash.com/random"
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
