import '../styles/globals.css'
import Head from 'next/head';
import { ApolloClient, ApolloProvider, InMemoryCache,gql } from "@apollo/client";
import $ from "jquery";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Fmovies - Watch Free Movies and TV Shows Online</title>
				{/* <!-- Font Awesome --> */}
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
					rel="stylesheet"
				/>
				{/* <!-- Google Fonts --> */}
				<link
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					rel="stylesheet"
				/>
				{/* <!-- MDB --> */}
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.css"
					rel="stylesheet"
				/>
				{/* <!-- MDB --> */}
				<script
					type="text/javascript"
					src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.3.0/mdb.min.js"
				></script>
			</Head>
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	)
}

export default MyApp
