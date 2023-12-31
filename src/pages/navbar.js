import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import '../styles/app.css'

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/student"> Create Student </Link>
        <Link to="/course"> Create Course </Link>
        <Link to="/attendence"> Create Attendence </Link>
        <Link to="/dashboard"> Dashboard </Link>
        {!user ? ( <Link to="/login"> Login </Link>)  : 
        (<Link to="/createpost"> Create Post </Link>)
        }
      </div>
      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <img src={user?.photoURL || ""} width="20" height="20" />
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </div>
    </div>
  );
};