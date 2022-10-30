import React, { useEffect, useState } from 'react';
import ob from "firebase/compat/app";
import { db } from "../Firebase";

const Showdata = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(1);
    const getPostFormFirebase = [];

    const dataList =
      db.collection("information")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getPostFormFirebase.push({
              ...doc.data(),
              key: doc.id,
            })
          })
          setPosts(getPostFormFirebase);
          setLoading(false);
        })

  }, [])
  if (loading) {
    return <h1>loading Firebase...</h1>
  }

  return (
    <div>
      <h4 className='banner-data'>data</h4>
      {posts.length > 0 ? (
        posts.map((post) =>
              <div>
                <div key={post.key} className='banner-data'>
                  <h3>name</h3>
                  <p>{post.name} {post.surname}</p>
                  <h3>number</h3>
                  <p>{post.number}</p>
                  <h3>message</h3>
                  <p>{post.message}</p>
                </div>
              </div>          
        )
      )
        : (
          <h1> No Data!!!</h1>
        )
      }
    </div>
  )
}

export default Showdata