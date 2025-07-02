import React from 'react'
import styles from "./postUser.module.css"
import Image from 'next/image';
import { getUser } from '@/lib/data';

//fetch data from api
// const getData = async (userId) => {
//   const res  = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"})

//   if(!res.ok){
//     throw new Error("something went wrong");
//   }

//   return res.json();
// }

async function PostUser({userId}) {

  //fetch data from api
  // const user = await getData(userId);

  //fetch data from without api
  const user = await getUser(userId);

  return (
    <div className={styles.container}>
        <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
      />
        <div className={styles.texts}>
         <span className={styles.title}>Author</span>
         <span className={styles.username}>{user.username}</span>
      </div>  
    </div>
  )
}

export default PostUser