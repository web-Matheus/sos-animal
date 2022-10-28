import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc } from 'firebase/firestore'
import { db } from '../../firebase/firebase-config'
const Feed = () => {
    const [postList, setPostList] = useState([]);
    const postsCollection = collection(db,"animaisPosts");


    useEffect(() => {
        const getPosts = async () => {
          const data = await getDocs(postsCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
          //é um pouco confuso mas é pra criar um novo array 
          //apartir do array que já existia
        }
        getPosts()
      });

  return (
    <div>
        {postList.map((post) => {
            return(
                <section>
                    <h2>{post.QueAnimal}</h2>
                </section>
            )
        })}
    </div>
  )
}

export default Feed