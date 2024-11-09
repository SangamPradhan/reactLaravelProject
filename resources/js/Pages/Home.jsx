import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useRoute } from "ziggy-js";

export default function Home({ posts }) {

    const route = useRoute();
    const { flash } = usePage().props;
    const {component} = usePage();

    console.log(usePage);
    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
            setFlashMsg(null)
        }, 2000
    );


    return (
        <>
            <Head title={component}/>

            <h1 className="title">Helloo !?</h1>
            {flashMsg &&
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            }

            <div>
                {posts.data.map(post => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-slate-600">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleDateString()}</span>
                        </div>

                        <p className="font-medium">{post.body}</p>

                        {/* <Link href={`/posts/${post.id}`} className="text-link">See More...</Link> */}

                        <Link href={route('posts.show', post)} className="text-link">See More...</Link>


                    </div>
                ))}
            </div>

            <div className="py-12 px-4">
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""
                                }`}
                        />
                    )
                        :
                        (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-slate-300"
                            ></span>
                        )
                )}
            </div>
        </>
    );
}




