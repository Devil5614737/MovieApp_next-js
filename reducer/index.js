import {
  FETCH_ACTION_SUCCESS,
  FETCH_COMEDY_SUCCESS,
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

export const fetchTheData = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST:
      return { loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_TOP_RATED_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_ACTION_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_COMEDY_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_HORROR_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_HORROR_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_ROMANTIC_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_DOCUMENTARIES_SUCCESS:
      return { loading: false, movies: payload };
    case FETCH_DATA_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};
export const searchTheData = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_DATA_REQUEST:
      return { loading: true };
    case SEARCH_DATA_SUCCESS:
      return { loading: false, movies: payload };
    case SEARCH_DATA_FAILED:
      return { loading: false, error: payload };
    default:
      return state;
  }
};


export const loginTheUser=(state={},action)=>{
  const {type,payload}=action;
  switch(type){
    case LOGIN_USER_REQUEST: return {loading:true}
    case LOGIN_USER_SUCCESS:return {loading:false,currentUser:payload}
    case LOGIN_USER_FAILED:return {loading:false,error:payload}
default:return state;
  }

}


export const showMovieInfo=(state={},action)=>{
  const {type,payload}=action;
  switch(type){
    case MOVIE_INFO:return {movie:payload}
    default: return state
  }
}