import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/navbar/navbar.module.css";
import Login from './Login';

export default function Navbar(props) {
    return (
        <>
            <nav className={"navbar navbar-expand-lg " + `${styles.navbarLight}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src="fmovies-logo.png"
                            alt="fmovies logo"
                            loading="lazy"
                        />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link href="/">
                                   <a className={"nav-link " + `${styles.active}`} aria-current="page" >Home</a>
                               </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/trending">
                                <a className="nav-link" >Genre</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/tv-shows">
                                <a className="nav-link" >Country</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/movies">
                                    <a className="nav-link" >Movies</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/episodes">
                                    <a className="nav-link" >TV-Series</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/top-imdb">
                                    <a className="nav-link" >Top IMD</a>
                                </Link>
                            </li>
                        </ul>
                        <div className={"form-outline " + styles.search}>
                            <i className={"fas fa-search trailing " + styles.searchIcon}></i>
                            <input type="text" className="form-control form-icon-trailing " placeholder="Enter your keywords..."/>
                        </div>
                        {/* <Login/> */}
                    </div>
                </div>
            </nav>
        </>
    )
}