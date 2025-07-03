import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/PostCard'
import { getPosts } from '@/lib/data'

// default - caching
// cache:"no-store" - not store caches. show fresh data
// next:{revalidate:3600} - refresh data every hour

//fetch data from api
const getData = async () => {
  const res  = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})

  if(!res.ok){
    throw new Error("something went wrong");
  }

  return res.json();
}

async function BlogPage() {

  //fetch data from api
  const posts = await getData();

  //fetch data from without api
  //const posts = await getPosts();

  return (
      <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage