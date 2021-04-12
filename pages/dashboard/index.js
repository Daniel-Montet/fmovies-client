export default function Dashboard(props) {
    return (
        <div className="container-fluid" style={{ background: "white", height: "100vh" }}>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Get Popular Movies</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}