export default function SerachPoke({ query, setQuery, inputRef }){

    return(
        <input ref={inputRef} 
        type="text" 
        placeholder="Digite o nome" 
        value={query} 
        onChange={(e)=> setQuery(e.target.value)}
        className="w-full roounded border px-3 py-2"/>
    );
}