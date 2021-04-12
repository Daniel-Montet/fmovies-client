import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import ShareFmovies from '../components/shareFmovies';
import CardGroup from '../components/CardGroup';
import { data } from '../data';

export default function Home() {
	return (
			<Layout> 
				<Carousel/>
				<ShareFmovies/>
				<CardGroup data={ data }/>
			</Layout>
	)
}
