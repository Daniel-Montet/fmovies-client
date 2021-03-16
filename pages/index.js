import Layout from '../components/Layout';
import Image from "next/image";
import InfoCard from "../components/InfoCard";

export default function Home() {
	return (
		<>
			<Layout />
			<div className="centeredLogo">
                <Image src="/fmovies logo.png" width={300} height={150} alt="fmovies logo"/>
            </div>
            <div class="input-group">
                <div class="form-outline">
                    <input id="search-input" type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Search</label>
                </div>
                <button id="search-button" type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <button>Use the old Fmovies? Click here</button>

            <h3>13 Alternavites of Fmovies.</h3>
            <p>Such alternatives will help the users to stream their favorite movies and multimedia content.</p>
            
            <InfoCard/>
		</>
	)
}
