import {
  FETCH_ACTION_SUCCESS,
  FETCH_DATA_FAILED,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DOCUMENTARIES_SUCCESS,
  FETCH_HORROR_SUCCESS,
  FETCH_ROMANTIC_SUCCESS,
  FETCH_TOP_RATED_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  MOVIE_INFO,
  SEARCH_DATA_FAILED,
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
} from "../constants";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const fetchMovie = (value) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      `https://api.themoviedb.org/3/${value}/all/week?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US`
    );
    const data = await res.json();

    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};
export const fetchTopRated = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&language=en-US"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_TOP_RATED_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};
export const fetchAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=28"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_ACTION_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};
export const fetchComedy = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=35"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_ACTION_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};


export const fetchHorror = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=27"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_HORROR_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};
export const fetchRomantic = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=10749"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_ROMANTIC_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};
export const fetchDocumentaries = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DATA_REQUEST,
    });

    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=99"
    );
    const data = await res.json();

    dispatch({
      type: FETCH_DOCUMENTARIES_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILED,
      data: error,
    });
  }
};


















export const searchMovie = (query) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_DATA_REQUEST,
    });

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=2edf9f02e088272f6ff2eab6bf5fa21a&with_genres=10749`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_DATA_SUCCESS,
      payload: data.results,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_DATA_FAILED,
      data: error,
    });
  }
};

export const loginUser = () => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      typeof window !== "undefined" &&
        localStorage.setItem("currentUser", JSON.stringify(user));
      dispatch({
        type: LOGIN_USER_SUCCESS,
        dispatch: user,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_FAILED,
        dispatch: error,
      });
    });
};

export const movieInfo = (item) => {
  return {
    type: MOVIE_INFO,
    payload: item,
  };
};
