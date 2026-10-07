"use client";

import { useState, useEffect } from "react";
import PokeCard from "./PokeCard.js"

export default function PokeList({ pokemons }) {
    return (
        <div className="">
            {pokemons.map((p) => (<PokeCard key={p.id} pokemon={p} />))}
        </div>

    )
}