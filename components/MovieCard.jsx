export default function MovieCard(props) {
    return (
        <div class="col" style={{ margin:2+'px',padding:0 }}>
            <div class="card h-100" style={{ width: 9+'rem' }}>
            <img
                src="https://mdbootstrap.com/img/new/standard/city/043.jpg"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                This card has supporting text below as a natural lead-in to additional
                content.
                </p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        </div>
    )
}