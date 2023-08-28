"use client"
import { useContext, createContext, useState } from "react";
import { useRouter } from "next/navigation";
// export async function getWord() {
//     const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
//     const word = res.json()
//     return (
//         // word
//         console.log(word)
//     )
// }

export default function SearchBar() {
    const [searchLabel, setSearchLabel] = useState("search")
    const [search, setSearch] = useState("")
    const router = useRouter()

    function handleChange(e) {
        setSearchLabel("")
        setSearch(e.target.value)
    }

    function onBlur(e){
        if (e.target.value === "") { setSearchLabel("search") }
    }

    // function handleClick(search){
    //     console.log(search); 
    //     router.push("/word/"+search)
    // }

    return (
        <div className="searchbar-wrapper">
            <div className="searchbar-container">
                <input onChange={handleChange}
                    onBlur={(e) => onBlur(e)}
                    value={search}
                    className="searchbar" type="text" name="search-input" id="search" />
                <label className="searchbar-label" htmlFor="search">
                    {searchLabel}
                </label>
                <button type="button"
                    onClick={() => router.push("/word/"+search)}
                >search</button>
            </div>
        </div>
    )
}