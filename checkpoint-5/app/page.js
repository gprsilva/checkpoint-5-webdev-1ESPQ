"use client";

import { useState, useEffect } from "react";

import Header from "@/componentes/Header";
import Filters from "@/componentes/Filters";
import Loader from "@/componentes/Loader";
import ErrorState from "@/componentes/ErrorState";
import PokeList from "@/componentes/PokeList";
import { sortPokemons, toPokemon } from "./utils/utils";
import apiClient from "./utils/api";

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("id");

  useEffect(() => {
    apiClient
      .get("/pokemon", { params: { limit: 20 } })
      .then((response) => setPokemons(response.data.results.map(toPokemon)))
      .catch(() => setError("Erro ao buscar os Pokémon."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      <Header />
      <h2 className="text-xl font-semibold">Pokémon</h2>
      <Filters sortBy={sortBy} setSortBy={setSortBy} />
      {loading && <Loader />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <PokeList pokemons={sortPokemons(pokemons, sortBy)} />}
    </div>
  );
}
