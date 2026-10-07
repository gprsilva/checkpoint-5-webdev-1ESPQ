"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import apiClient from "@/lib/apiClient";
import { getImageUrl } from "@/lib/utils";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

export default function PokemonDetailPage() {
  const router = useRouter();
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    apiClient
      .get("/pokemon/" + id)
      .then((response) => {
        setPokemon(response.data);
        setError("");
      })
      .catch(() => setError("Erro ao buscar o Pokémon."))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      <Header />
      <button onClick={() => router.back()} className="rounded border px-3 py-1">
        Voltar
      </button>{" "}
      <Link href="/" className="underline">Ir para o início</Link>
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {pokemon && !error && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            #{pokemon.id} {pokemon.name}
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={getImageUrl(pokemon.id)} alt={pokemon.name} width="200" height="200" />
          <p>Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </div>
  );
}
