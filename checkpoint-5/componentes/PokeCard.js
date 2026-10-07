"use client";

import Link from "next/link";
import {getImageUrl} from '@/lib/utils';


export default function PokeCard(key, pokemon){

    return(
        <div>
            <Link href={'/details/'+ pokemon.id}>
                <img src={getImageUrl(pokemon.id)} alt={pokemon.name} width="96" height="96" />
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
            </Link>
        </div>
    )

}