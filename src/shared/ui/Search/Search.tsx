import React, { FormEvent, useState } from "react"
import SearchIcon from "../../../app/assets/icons/icon-search.svg"

interface SearchProps {
    placeholder: string
}

export const Search: React.FC<SearchProps> = ({ placeholder }) => {
    const [searchText, setSearchText] = useState("")

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        setSearchText("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                <input
                    id="default-search"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    className="bg-primary outline-none"
                />
            </label>
        </form>
    )
}
