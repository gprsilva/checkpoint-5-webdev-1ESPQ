"use client"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

function Page() {
    const params = useSearchParams()
    const nome = params.name
    const id = params.id

    const pokemon = [
        nomePoke = nome,
        IdPoke = id
    ]

    useEffect(() => {
        async function carregar() {
            const res = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/" + "$(pokemon.nomePoke)"
            );
            setData(res.data.data);
            const pokemon2 = [
                nomePoke = res.data.name,
                IdPoke = res.data.id
            ]
            PageDetalhes(pokemon2)
        }
        carregar();
    }, []);
}
export default function PageDetalhes(pokemon) {

    return (
        <div>
            <li>Nome:{pokemon.nomePoke}</li>
            <li>Id:{pokemon.IdPoke}</li>
        </div>
    )

}
