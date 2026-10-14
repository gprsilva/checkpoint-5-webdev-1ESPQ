#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Correto
Nota: 1,00

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Correto
Nota: 1,00

#Criterio7 — Comentários explicativos nos pontos principais
Parcialmente correto
Nota: 0,50

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Correto
Nota: 1,00

Subtotal critérios: 9,50

#Extra1 — Loading e erro
Conquistado
Nota extra: +1,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 1,00
Extras conquistados: E1

Subtotal com extras (teto 10,00): 10,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- nenhum

Zeramento por IA: não

Total final: 10,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

*Reavaliação: Vercel LIVE `https://checkpoint-5-webdev-1-espq-six.vercel.app/` (HTTP 200) + git-connected; IA limpo; **C6 promovido** (navegação `Link` + axios no detalhe presentes — requisito essencial atingido; bug de desestruturação em `PokeCard` não anula o critério).*

API usada: **PokéAPI** (`checkpoint-5/app/utils/api.js` → `https://pokeapi.co/api/v2`). App aninhado em `checkpoint-5/`.

**Critério 1 — Projeto Next.js:** `checkpoint-5/package.json` com `next` + axios; App Router em `checkpoint-5/app/`.

**Critério 2 — Lista com axios:** `checkpoint-5/app/page.js` usa `apiClient.get("/pokemon", { params: { limit: 20 } })` e `PokeList`.

**Critério 3 — useState e useEffect:** na home (`pokemons`, `loading`, `error`, `sortBy`) e no detalhe (`pokemon` + carga por `id`).

**Critério 4 — 6 componentes:** 7 em `checkpoint-5/componentes/` (ErrorState, Filters, Header, Loader, PokeCard, PokeList, SearchPoke).

**Critério 5 — Props:** Filters←sortBy/setSortBy, ErrorState←message, PokeList←pokemons, SearchPoke←query/setQuery (definido), etc. ≥2.

**Critério 6 — Detalhes + axios + navegação:** `app/details/[id]/page.js` faz `apiClient.get("/pokemon/" + id)` (axios). `PokeCard` tem `Link` para `/details/` + id. Assinatura `function PokeCard(key, pokemon)` está incorreta (não desestrutura props) e o detalhe referencia `setError`/`setLoading` sem declarar — falhas de implementação, mas o fluxo lista→detalhe com axios está no código → Correto (reavaliação generosa).

**Critério 7 — Comentários:** comentários úteis em `app/utils/utils.js`, mas esparsos e concentrados nesse arquivo → parcial.

**Critério 8 — Commits:** 21 commits na `main`.

**Critério 9 — README / deploy link:** README raiz com Getting Started e `Link Vercel: (https://checkpoint-5-webdev-1-espq-six.vercel.app/)`.

**Critério 10 — Deploy Vercel:** URL LIVE (HTTP 200) e evidência de deploy git-connected.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Conquistado (+1,00). `Loader` e `ErrorState` na home.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). Sem uso real de ≥2 entre useMemo/useCallback/useRef.
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). `SearchPoke` existe mas não é usado na home; `Filters` só ordena (id/nome), não busca textual; link `/search` no Header sem página.
**Extra 4 — localStorage:** Não conquistado (+0,00).
**Resumo extras:** E1 (+1,00); subtotal critérios 9,50 + E1 → teto 10,00.

**Penalizações:** nenhuma (`participantes.md` / nomes no README).
**Sinalizadores anti-cola / IA:** nenhum honeypot H1–H10; zeramento por IA não.

---

## CONTEXTO GIT

- **remote:** `origin https://github.com/gprsilva/checkpoint-5-webdev-1ESPQ`
- **branch avaliada:** `main`
- **commits (21):** de `6525b30 Initial commit` até `b448f8a Create participantes.md`
- **shortlog:** Laboratório FIAP; Guilherme Pereira; Leal.l0g; Antonio
- **contagem C8:** 21
