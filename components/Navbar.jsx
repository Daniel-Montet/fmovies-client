import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/navbar/navbar.module.css";
import Login from './Login';

export default function Navbar(props) {
    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className={"navbar navbar-expand-lg " + `${styles.navbarLight}`}>
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Navbar brand --> */}
                    <a className="navbar-brand" href="#">
                        <img
                            src="fmovies logo.png"
                            height="30"
                            alt=""
                            loading="lazy"
                        />
                    </a>

                    {/* <!-- Toggle button --> */}
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

                    {/* <!-- Collapsible wrapper --> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <!-- Left links --> */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                               <Link href="/">
                                   <a className={"nav-link " + `${styles.active}`} aria-current="page" >HOME</a>
                               </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/trending">
                                <a className="nav-link" >TRENDING</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/tv-shows">
                                <a className="nav-link" >TV SHOWS</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/episodes">
                                    <a className="nav-link" >EPISODES</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/episodes">
                                    <a className="nav-link" >EPISODES</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/top-imdb">
                                    <a className="nav-link" >TOP IMDB</a>
                                </Link>
                            </li>
                        </ul>
                        {/* <!-- Search form --> */}
                        <div className="form-outline">
                            <i className="fas fa-search trailing"></i>
                            <input type="text" id="form1" className="form-control form-icon-trailing" />
                            <label className="form-label" htmlFor="form1">search</label>
                        </div>
                        <Login/>
                    </div>
                    {/* <!-- Collapsible wrapper --> */}
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}
        </>
    )
}