import { Link } from "@inertiajs/react";

export default function Layout({children}){
    return (
    <>
        <header className="">
            <nav className="">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/create" className="nav-link">Create</Link>
            </nav>
        </header>

        <main className="">
            {children}
        </main>
    </>
    );
}
