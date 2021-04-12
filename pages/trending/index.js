import Layout from '../../components/Layout';
import PageLayout from '../../components/PageLayout'
import axios from 'axios';
import _ from 'lodash';
import EventEmitter from 'events';

class MovieDetails extends EventEmitter {
    constructor(url, country, array, chunkSize, microSeconds, callback) {
        super();
        this.id = setInterval(this.operate, microSeconds);
        this.chunk = _.chunk(array, chunkSize);
        this.count = 0;
        this.operations = this.chunk.length - 1;
        this.newChunk = [];
        this.url = url;
        this.callback = callback;
        this.country = country;
        this.operate = this.operate.bind(this);
        this.stopFunction = this.stopFunction.bind(this);
    }

    operate = () => {
        let subChunk = this.chunk[this.count];
        console.log("count", this.count)
        console.log("operations", this.operations);
        if (this.count > this.operations) {
            this.emit('endOfList', { data: this.newChunk });
            clearInterval(this.id);
            return;
        }


        const subChunkResponse = subChunk.map(i => {
            let title = i.replace('/title/', "")

            const options = {
                method: 'GET',
                url: this.url,
                params: {
                    tconst: title.replace("/", ""),
                },
                headers: {
                    'x-rapidapi-key': `${process.env.XRAPID_API_KEY}`,
                    'x-rapidapi-host': `${process.env.XRAPID_API_HOST}`
                }
            };

            const run = async () => {
                let { data, error } = await this.callback(options);
                this.newChunk.push(data);
            }

            run()
            return;
        });
        this.count += 1;
        return;
    }


}


export default function Page(props) {
    console.log(props.data);

    return (
        <Layout>
            <PageLayout pageName="TRENDING" movies={props.data}/>
        </Layout>
    )
}


export async function getStaticProps(context) {
    // get movie titles
    let movieData = [
        // {
        //     "@type":"imdb.api.title.title",
            // "id":"/title/tt0944947/",
            // "image":{
            //     "height":1500,
            //     "id":"/title/tt0944947/images/rm4204167425",
            //     "url":"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            //     "width":1102
            // },
            // "runningTimeInMinutes":57,
            // "nextEpisode":"/title/tt1480055/",
            // "numberOfEpisodes":73,
            // "seriesEndYear":2019,
            // "seriesStartYear":2011,
            // "title":"Game of Thrones",
            // "titleType":"tvSeries",
            // "year":2011
        // },
        // {
        //     "@type": "imdb.api.title.title",
        //     "id": "/title/tt5109280/",
        //     "image": { ...},
        //     "runningTimeInMinutes": 107,
        //     "title": "Raya and the Last Dragon",
        //     "titleType": "movie",
        //     "year": 2021,
        // },
        // {
        //     "@type":"imdb.api.title.title",
        //     "id":"/title/tt0944947/",
        //     "image":{
        //         "height":1500,
        //         "id":"/title/tt0944947/images/rm4204167425",
        //         "url":"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        //         "width":1102
        //     },
        //     "runningTimeInMinutes":57,
        //     "nextEpisode":"/title/tt1480055/",
        //     "numberOfEpisodes":73,
        //     "seriesEndYear":2019,
        //     "seriesStartYear":2011,
        //     "title":"Game of Thrones",
        //     "titleType":"tvSeries",
        //     "year":2011
        //     },
        // {
        //     "@type":"imdb.api.title.title",
        //     "id":"/title/tt0944947/",
        //     "image":{
        //         "height":1500,
        //         "id":"/title/tt0944947/images/rm4204167425",
        //         "url":"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        //         "width":1102
        //     },
        //     "runningTimeInMinutes":57,
        //     "nextEpisode":"/title/tt1480055/",
        //     "numberOfEpisodes":73,
        //     "seriesEndYear":2019,
        //     "seriesStartYear":2011,
        //     "title":"Game of Thrones",
        //     "titleType":"tvSeries",
        //     "year":2011
        //     },
        // {
        //     "@type":"imdb.api.title.title",
        //     "id":"/title/tt0944947/",
        //     "image":{
        //         "height":1500,
        //         "id":"/title/tt0944947/images/rm4204167425",
        //         "url":"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        //         "width":1102
        //     },
        //     "runningTimeInMinutes":57,
        //     "nextEpisode":"/title/tt1480055/",
        //     "numberOfEpisodes":73,
        //     "seriesEndYear":2019,
        //     "seriesStartYear":2011,
        //     "title":"Game of Thrones",
        //     "titleType":"tvSeries",
        //     "year":2011
        //     }
    ];

    const { data } = await getDetails(
        'https://imdb8.p.rapidapi.com/title/get-most-popular-movies',
        false,
        'US',
        null
    );

    // const data = ['/title/tt12361974/', '/title/tt6802400/', '/title/tt0974015/',
    //     '/title/tt9130508/', '/title/tt12361974/', '/title/tt6802400/', '/title/tt0974015/',
    //     '/title/tt9130508/', '/title/tt12361974/', '/title/tt6802400/', '/title/tt0974015/',
    //     '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/','/title/tt12361974/', '/title/tt6802400/',  '/title/tt0974015/',
    //         '/title/tt9130508/'
    // ]
    const newData = _.slice(data,0,10);
    // get movie details for each movie title in the data array above
    
    const movieDetails = new MovieDetails(
        'https://imdb8.p.rapidapi.com/title/get-details',
        'US',
        newData,
        5,
        2000,
        getData
    );

    movieDetails.on('endOfList', (arg) => {
        movieData = arg.data;
    })

    console.log(movieData);
    
    return {
        props: {data: movieData}
    }
}

/** Takes four arguments.
 *  (a) url - the endpoint to be called
 *  (b) boolean - true or false
 *  (c) country
 *  (d) list - Optional. A list with data to be operated on.
 * This function arbitrates the calling of the endpoints dependent on: 
 *  1. If the boolean is false , we are calling this endpoint once.
 *  2. If the boolean is true, call the passed url and append every item in this 
 *    list to the endpoint and call them.
 *  */
async function getDetails(url, boolean, country, list) {
    if (boolean === false) {
        const options = {
            method: 'GET',
            url: url,
            params: {
                homeCountry: country,
                purchaseCountry: country,
                currentCountry: country
            },
            headers: {
                'x-rapidapi-key': `${process.env.XRAPID_API_KEY}`,
                'x-rapidapi-host': `${process.env.XRAPID_API_HOST}`
            }
        }
        const { data } = await getData(options);
        return { data };
    }
}

async function getData(options) {
    try {
        let response = await axios.request(options);
        let data = response.data
        return { data };
    }

    catch (error) {
        console.log(error, "this is an error")
        return { error };
    }

}


async function getMoreDetails(url, boolean, country, list) {
    const chunk = _.chunk(list, 2);
    const id = setInterval(run, 1000);
    let count = 0;
    let movieData = [];
    let complete = false;

    function run() {
        if (count > chunk.length - 1) {
            clearInterval(id);
            complete = true;
            console.log(complete)
            return;
        }

        return operation(chunk[count]);

    }

    function operation(list) {
        const newList = list.map(item => item * 2);
        movieData = movieData.concat(newList);
        return;
    }

    if (complete === true) {
        return movieData
    }
}