import Link from "next/link";

export default function Header(){
    return(
        <header className="mb-6">
            <h1 className="text-3x1 font-bold">Pokedex</h1>
            <nav className="mt-2 flex gap-2">
                <span></span>
                <Link href="/search" className="underline"> Buscar</Link>
            </nav>
            <hr className="mt-4"/>
        </header>
    );
}