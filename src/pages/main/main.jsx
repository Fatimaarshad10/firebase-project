import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import{Posts}   from "./posts";


function Main () {
  const postsRef = collection(db, "posts");
  const [postsList, setPostsList] = useState([]);
  
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (

    <div>
      {postsList?.map((post) => (
        <Posts post={post} />
      
      ))}
    </div>
  );
};
export default Main