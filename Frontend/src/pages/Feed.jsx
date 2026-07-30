import React, {useState} from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: 'https://unsplash.com/photos/a-lush-green-hillside-with-a-house-in-the-middle-9nFp294-Ye0',
            caption: 'This is a sample post'
        }
    ])

  return (
    
    <section className='feed-section'>
        {
            posts.map((post) => (
                <div key={post._id} className='post'>
                    <img src={post.image} alt='Post' />
                    <p>{post.caption}</p>
                </div>
            ))

        }

    </section>
  )
}

export default Feed