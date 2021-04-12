import styles from '../styles/carousel/carousel.module.css';

export default function carousel(props) {
		return (
        <div id="carouselexamplecaptions" className="carousel slide" data-mdb-ride="carousel">
			<div className={"carousel-indicators " + styles.carouselIndicators}>
				<button
					type="button"
					data-mdb-target="#carouselexamplecaptions"
					data-mdb-slide-to="0"
					className={ styles.dots + " active"}
					aria-current="true"
					aria-label="slide 1"
				></button>
				<button
					type="button"
					data-mdb-target="#carouselexamplecaptions"
					data-mdb-slide-to="1"
					aria-label="slide 2"
					className={ styles.dots }
				></button>
				<button
					type="button"
					data-mdb-target="#carouselexamplecaptions"
					data-mdb-slide-to="2"
					aria-label="slide 3"
					className={ styles.dots }
				></button>
			</div>
			<div className="carousel-inner ">
				<div className={"carousel-item active "  + styles.overlay }>
					<img
						src="https://mdbootstrap.com/img/new/slides/041.jpg"
						className="d-block w-100"
						alt="..."
					/>
					<div className={"carousel-caption " + styles.caption}>
						<h1 className={ styles.dataItem + " " + styles.dataTitle }>Kong: Skull Island</h1>
						<div className={ styles.dataItem + " " + styles.metadata }>
							<div className={ styles.margin + " " + styles.dataQuality}>HD</div>
							<div className={ styles.margin + " " + styles.dataRating}>
								<i className="fas fa-star"></i> 5.40
							</div>
							<div className={ styles.margin + " " + styles.dataDuration}>118min</div>
							<div className={ styles.margin + " " + styles.dataList}>
								<div className={ styles.dataGenre }>SciFi</div>
								<div className={ styles.dataGenre }>Action</div>
								<div className={ styles.dataGenre }>Fantasy</div>
							</div>
						</div>
						<p className={ styles.desc }>Donec sollicitudin molestie malesuada. Curabitur arcu erat, 
							accumsan id imperdiet et, porttitor at sem. Cras ultricies
							ligula sed magna dictum porta.Curabitur aliquet quam id dui posuere blandit. 
							Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh.</p>

						<div className={styles.dataButtons}>
							<a className={ "btn " + styles.watchNow } role="button" data-mdb-ripple-color="dark">
								<i className="fas fa-play me-2"></i> Watch now
							</a>
							<a className={ "btn " + styles.watchLater } role="button" data-mdb-ripple-color="dark">
								<i className="far fa-heart me-2"></i> Add to list
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}