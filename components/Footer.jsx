import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer/footer.module.css";

export default function Footer(props) {
    return (
        <footer className="bg-dark text-start text-white">
            <div className="container-fluid p-4">
                <div className="row">
                    <div className="col-6 col-md-6 mb-6 mb-md-0">
                        <Image src="/fmovies-logo.png" alt="fmovies logo" height={50} width={150}/>
                        <p className={"mt-4 " + styles.outro}>
                            FMovies.to is top of free streaming website, 
                            where to watch movies online free without registration required. 
                            With a big database and great features, we're confident FMovies is the 
                            best free movies online website in the space that you can't simply miss!
                        </p>
                        <small className={styles.small}>This site does not store any files on our server, we only linked to 
                        the media which is hosted on 3rd party services.</small>
                    </div>
                    <div className="col-6 col-md-6 mb-6 mb-md-0">
                        <h5 className={styles.title}>Links</h5>
                        
                        <section className={styles.links}>
                            <Link href="#">
                                <a className={styles.link}>Hello World</a>
                            </Link>
                            <Link href="#">
                                <a className={styles.link}>Hello World</a>
                            </Link>
                            <Link href="#">
                                <a className={styles.link}>Hello World</a>
                            </Link>
                            <Link href="#">
                                <a className={styles.link}>Hello World</a>
                            </Link>
                            <Link href="#">
                                <a className={styles.link}>Hello World</a>
                            </Link>
                        </section>
                    </div>
                </div>
            </div>

        </footer>
    )
}