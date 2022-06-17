import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

import {
  fetchMovie,
  searchMovie,
  movieInfo,
  fetchTopRated,
  fetchComedy,
  fetchHorror,
  fetchRomantic,
  fetchAction,
  fetchDocumentaries,
} from "../actions/actions";

export default function Home() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const movieData = useSelector((state) => state.fetchTheData);
  const searchData = useSelector((state) => state.searchTheData);
  const movieInfos = useSelector((state) => state.showMovieInfo);

  const { movies, error, loading } = movieData;
  const { movie } = movieInfos;

  useEffect(() => {
    dispatch(fetchMovie("trending"));
  }, []);

  const handleTrendings = () => {
    dispatch(fetchMovie("trending"));
  };

  const handleSearch = () => {
    dispatch(searchMovie(query));
  };

  const imageLink = "https://image.tmdb.org/t/p/original";

  const handleTopRated = () => {
    dispatch(fetchTopRated());
  };

  const handleComedy = () => {
    dispatch(fetchComedy());
  };
  const handleHorror = () => {
    dispatch(fetchHorror());
  };
  const handleRomantic = () => {
    dispatch(fetchRomantic());
  };
  const handleAction = () => {
    dispatch(fetchAction());
  };
  const handleDocumentaries = () => {
    dispatch(fetchDocumentaries());
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navContainer}>
          <Navbar />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.content}>
            <div className={styles.heroText}>
              <p>All Movies At One Place</p>
            </div>
            <div className={styles.searchBox}>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="search by name"
              />
              <div onClick={handleSearch} className={styles.searchBtn}>
                <svg width="25" height="25" viewBox="0 0 40 38" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.2083 23.5901L36.175 32.1084C36.4902 32.408 36.6671 32.8143 36.667 33.2379C36.6668 33.6615 36.4896 34.0676 36.1742 34.367C35.8588 34.6664 35.4311 34.8346 34.9852 34.8344C34.5394 34.8343 34.1118 34.6659 33.7967 34.3662L24.83 25.8479C22.1495 27.8202 18.7788 28.7484 15.4035 28.4436C12.0283 28.1387 8.90205 26.6238 6.6608 24.207C4.41955 21.7901 3.23165 18.653 3.33875 15.4336C3.44586 12.2143 4.83992 9.15461 7.23734 6.87706C9.63477 4.5995 12.8555 3.27514 16.2442 3.1734C19.633 3.07165 22.9353 4.20016 25.4793 6.32934C28.0234 8.45853 29.618 11.4285 29.9389 14.6349C30.2598 17.8414 29.2828 21.0436 27.2067 23.5901H27.2083ZM16.6667 25.3333C19.3188 25.3333 21.8624 24.3324 23.7377 22.5508C25.6131 20.7692 26.6667 18.3529 26.6667 15.8333C26.6667 13.3138 25.6131 10.8974 23.7377 9.11582C21.8624 7.33422 19.3188 6.33333 16.6667 6.33333C14.0145 6.33333 11.471 7.33422 9.5956 9.11582C7.72023 10.8974 6.66667 13.3138 6.66667 15.8333C6.66667 18.3529 7.72023 20.7692 9.5956 22.5508C11.471 24.3324 14.0145 25.3333 16.6667 25.3333Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.genreSelection}>
            <p className={styles.genre}>Genres</p>
            <select id="cars" className={styles.genreSelect}>
              <option
                onClick={handleTrendings}
                className={styles.option}
                value="trending"
              >
                Trendings
              </option>
              <option
                onClick={handleTopRated}
                className={styles.option}
                value="toprated"
              >
                TopRated
              </option>
              <option
                onClick={handleAction}
                className={styles.option}
                value="action"
              >
                Action
              </option>
              <option
                onClick={handleComedy}
                className={styles.option}
                value="comedy"
              >
                Comedy
              </option>
              <option
                onClick={handleHorror}
                className={styles.option}
                value="Horror"
              >
                Horror
              </option>
              <option
                onClick={handleRomantic}
                className={styles.option}
                value="Romantic"
              >
                Romantic
              </option>
              <option
                onClick={handleDocumentaries}
                className={styles.option}
                value="documentaries"
              >
                Documentaries
              </option>
            </select>
          </div>
          {loading ? (
            <p style={{ color: "white", fontSize: "1.6em" }}>Loading....</p>
          ) : (
            <div className={styles.movieThumbnails}>
              {!searchData.movies
                ? movies &&
                  movies.map((movie) => (
                    <>
                      <div
                        onClick={() => {
                          dispatch(movieInfo(movie));
                          setShowModal(true);
                        }}
                        className={styles.thumbnails}
                      >
                        <Image
                          layout="responsive"
                          src={
                            imageLink + movie.poster_path ||
                            imageLink + movie.poster_path
                          }
                          alt="thumbnails"
                          width={250}
                          height={350}
                          objectFit="cover"
                        />
                        <div className={styles.movieName}>
                          <p>{movie.name || movie.title}</p>
                        </div>
                      </div>
                    </>
                  ))
                : searchData.movies.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => {
                        dispatch(movieInfo(movie));
                        setShowModal(true);
                      }}
                      className={styles.thumbnails}
                    >
                      <Image
                        layout="responsive"
                        src={
                          imageLink + movie.poster_path ||
                          imageLink + movie.poster_path
                        }
                        alt="thumbnails"
                        width={250}
                        height={350}
                        objectFit="cover"
                      />
                      <div className={styles.movieName}>
                        <p>{movie.name || movie.title}</p>
                      </div>
                    </div>
                  ))}
            </div>
          )}
        </div>
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <svg
                onClick={() => setShowModal(false)}
                height="25px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
                width="512px"
                fill="white"
                className={styles.close}
              >
                <g>
                  <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
                </g>
              </svg>
              <Image
                objectFit="cover"
                width={100}
                height={60}
                layout="responsive"
                src={
                  imageLink + movie.poster_path || imageLink + movie.poster_path
                }
                alt="thumbnails"
              />

              <div className={styles.movieInfo}>
                <p className={styles.movieName}>
                  {(movie && movie.title) || (movie && movie.name)}
                </p>
                <div className={styles.ratings}>
                  <p>Ratings : {movie && movie.vote_average}</p>
                </div>
                <p className={styles.movieDesc}>{movie && movie.overview}</p>
                <button>
                  Watchlist{" "}
                  <svg
                    style={{ marginLeft: "5px" }}
                    width="22"
                    height="22"
                    viewBox="0 0 28 25"
                    fill="none"
                  >
                    <path
                      d="M13.1797 3.71094H14.8203C14.9661 3.71094 15.0391 3.77604 15.0391 3.90625V21.0938C15.0391 21.224 14.9661 21.2891 14.8203 21.2891H13.1797C13.0339 21.2891 12.9609 21.224 12.9609 21.0938V3.90625C12.9609 3.77604 13.0339 3.71094 13.1797 3.71094Z"
                      fill="white"
                    />
                    <path
                      d="M4.8125 11.5723H23.1875C23.3333 11.5723 23.4062 11.6374 23.4062 11.7676V13.2324C23.4062 13.3626 23.3333 13.4277 23.1875 13.4277H4.8125C4.66667 13.4277 4.59375 13.3626 4.59375 13.2324V11.7676C4.59375 11.6374 4.66667 11.5723 4.8125 11.5723Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
