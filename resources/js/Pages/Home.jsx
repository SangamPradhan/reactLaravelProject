export default function Home({ posts }) {
    console.log(posts);

    return (
        <>
            <h1 className="title">Hello World</h1>
            <div>
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post.id} className="padding-4 border-b">
                            <div className="text-sm text-slate-600">
                                <span>Posted on:</span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts available</p>
                )}
            </div>
        </>
    );
}


//<Link preserveScroll href="/" className="block title mt-[1000px]">{new Date().toLocaleTimeString()}</Link>

