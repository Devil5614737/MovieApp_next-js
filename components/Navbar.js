import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/actions";
import styles from "../styles/Home.module.css";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState("");

  // const handleLogout=()=>{
  //     localStorage.removeItem('currentUser')
  // }

  //   useEffect(() => {
  //    let email= JSON.parse(localStorage.getItem("currentUser")).email;
  //    setUserEmail(email)
  //   }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <p>MovieHub</p>
      </div>
      <div className={styles.links}>
        <ul>
          {/* {userEmail && (
            <li>
              <p>Welcome@{userEmail}</p>
            </li>
          )} */}

          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Watchlist</a>
          </li>
          {/* <li onClick={() => dispatch(loginUser())}>
            {typeof window !== 'undefined'&&localStorage.getItem('currentUser')?    <a onClick={handleLogout} href="#!">Logout</a>:<a href="#!">Login</a>}
        
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
