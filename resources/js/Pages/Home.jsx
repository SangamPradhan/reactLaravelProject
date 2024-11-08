export default function Home({ posts }) {
    console.log(posts);

    return (
        <>
            <h1 className="title">Helloo !?</h1>
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </>
    );
}


//<Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>

