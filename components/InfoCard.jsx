import Image from 'next/image';

export default function InfoCard(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <Image src="/popcornflix.png" class="card-img-top" alt="..." width={200} height={100}/>
                <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
                </p>
            </div>
        </div>
    )
}