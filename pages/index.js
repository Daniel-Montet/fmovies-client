import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import ShareFmovies from '../components/shareFmovies';
import CardGroup from '../components/CardGroup';
import { data } from '../data';
import Footer from '../components/Footer';

export default function Home() {
	return (
			<Layout> 
				<Carousel/>
				<ShareFmovies/>
				<CardGroup data={ data } title={"Recommended"}/>
				<CardGroup data={ data } title={"Latest Movies"}/>
				<CardGroup data={ data } title={"Latest TV-Series"}/>
				<Footer/>
			</Layout>
	)
}
