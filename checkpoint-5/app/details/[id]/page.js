"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import apiClient from "@/app/utils/api";


export default function PokemonDetailPage() {
    const router = useRouter();
    const { id } = useParams();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        apiClient
            .get("/pokemon/" + id)
            .then((response) => {
                setPokemon(response.data);
                setError("");
            })
            .catch(() => setError("Erro ao buscar o Pokémon."))
            .finally(() => setLoading(false));
        console.log("foi")
    }, [id]);
    console.log(pokemon)

    return (
        <div>

            <button onClick={() => router.back()}>
                Voltar
            </button>{" "}
            <Link class="margin-left-10" href="/">Ir para o início</Link>

            <div>
                <h2 >
                    <li>Id:{pokemon?.id}</li>
                    <li>Nome:{pokemon?.name}</li>
                </h2>
                <p>Altura: {pokemon?.height}</p>
                <p>Peso: {pokemon?.weight}</p>
            </div>
        </div>
    );
}