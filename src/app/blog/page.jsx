import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/PostCard'

// default - caching
// cache:"no-store" - not store caches. show fresh data
// next:{revalidate:3600} - refresh data every hour

const getData = async () => {
  const res  = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}})

  if(!res.ok){
    throw new Error("something went wrong");
  }

  return res.json();
}

async function BlogPage() {

  const posts = await getData();

  return (
      <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage