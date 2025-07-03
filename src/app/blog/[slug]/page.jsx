import React, { Suspense } from 'react'
import styles from "./singlePost.module.css"
import Image from 'next/image'
import PostUser from '@/components/postUser/PostUser'
import { getPost } from '@/lib/data';

//fetch data from api
const getData = async (slug) => {
  const res  = await fetch(`http://localhost:3000/api/blog/${slug}`)

  console.log(res.json)

  if(!res.ok){
    throw new Error("something went wrong");
  }

  return res.json();
}

//dynamic seo
export const generateMetadata = async ({params}) => {
  const {slug} = params;

  const post = await getPost(slug);

  return {
    title : post.title,
    description : post.desc,
  }
}

async function SinglePostPage({params}) {

  const {slug} = params;

  //fetch data from api
  const post = await getData(slug);

  //fetch data from without api
  //const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} alt='' fill className={styles.img}/>
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
             <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  )
}

export default SinglePostPage