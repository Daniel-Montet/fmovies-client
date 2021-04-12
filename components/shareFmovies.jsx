import styles from "../styles/shareFmovies/shareFmovies.module.css";

export default function shareFmovies(props) {
    return (
        <div className={ styles.margin }>
			<h3>Watch Movies Online Free</h3>
			<p>fmovies.to - Just a better place to <bold>watch movies online for free</bold>. 
						It allows you to <bold>watch movies online</bold> in high quality for free. 
						No registration is required. The content is updated daily with fast streaming servers, 
						multi-language subtitles supported. Just open fmovies.to and watch your favorite movies, tv-shows. 
						We have almost any movie, tv-shows you want to watch!
						Please bookmark <small><bold>fmovies.name</bold></small> to update about fmovies domains.</p>
			<p>Please help us by sharing this site with your friends. Thanks!</p>

			<div>
				{/* <!-- Facebook --> */}
				<a className="btn btn-primary btn-sm" style={{"background-color": "#3b5998"}} href="#!" role="button">
					<i className="fab fa-facebook-f me-2"></i>Facebook
				</a>
				{/* Twitter */}
				<a className="btn btn-primary btn-sm" style={{ "background-color": "#55acee" }} href="#!" role="button">
					<i className="fab fa-twitter me-2"></i>Twitter
				</a>

				{/* <!-- Pinterest --> */}
				<a className="btn btn-primary btn-sm" style={{'background-color': "#c61118"}} href="#!" role="button">
					<i className="fab fa-pinterest me-2"></i>Pinterest
				</a>

				{/* <!-- Whatsapp --> */}
				<a className="btn btn-primary btn-sm" style={{"background-color": "#25d366"}} href="#!" role="button">
					<i className="fab fa-whatsapp me-2"></i>Whatsapp
				</a>
			</div> 
		</div>   )
}