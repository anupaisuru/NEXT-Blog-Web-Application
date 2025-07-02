import React, { Suspense } from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data';

//fetch data from api
// const getData = async (slug) => {
//   const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//   if(!res.ok){
//     throw new Error("something went wrong");
//   }

//   return res.json();
// }

async function SinglePostPage({params}) {

  const {slug} = params;

  //fetch data from api
  //const post = await getData(slug);

  //fetch data from without api
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt='' fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
        { post &&
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={post.userId}/>
        </Suspense>
        }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>21-02-2025</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  )
}

export default SinglePostPage