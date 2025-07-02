import Image from 'next/image'
import React from 'react'
import styles from "./postCard.module.css"
import Link from 'next/link'

function PostCard({post}) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img &&
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="post image" fill className={styles.img}/>
        </div>}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.desc}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard