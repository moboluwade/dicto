import SearchBar from "./SearchBar"
export default function Navbar() {



    return (
        <header className="navbar-wrapper">
            <p className="text-2xl">Dicto</p>
            <p>Whatever word you're having trouble understanding, here's a one step solution; type it right here in the searchbar!</p>
            <SearchBar />
        </header>
    )
}