"use client";

import Link from "next/link";



export default function PokeCard(key, pokemon) {

    return (
        <div>
            <Link href={'/details/' + pokemon?.id}>
                <p>{pokemon?.id}</p>
                <p>{pokemon?.name}</p>
            </Link>
        </div>
    )

}