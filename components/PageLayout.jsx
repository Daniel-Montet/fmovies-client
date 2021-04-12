import GridCards from '../components/GridCards';
import PageButton from '../components/PageButton';

export default function PageLayout(props) {
    return (
        <div className="container-fluid">
            <PageButton pageName={props.pageName}/>
            <GridCards movies={props.movies}/>
        </div>
    )
}