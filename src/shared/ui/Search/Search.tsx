import React, { FormEvent, useState } from "react"

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
        <form onSubmit={handleSubmit} className="mt-3 pl-4 pr-4">
            <label className="flex justify-start items-center">
                <svg
                    className="h-6 w-6 fill-text mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <rect opacity="0.01" width="24" height="24" fill="black" />
                    <path
                        d="M17.31 15.9L20.71 19.29C20.8993 19.4778 21.0058 19.7334 21.0058 20C21.0058 20.2666 20.8993 20.5222 20.71 20.71C20.5222 20.8993 20.2666 21.0058 20 21.0058C19.7334 21.0058 19.4778 20.8993 19.29 20.71L15.9 17.31C14.5025 18.407 12.7767 19.0022 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19.0022 12.7767 18.407 14.5025 17.31 15.9ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5Z"
                        fill="white"
                    />
                </svg>
                <input
                    id="default-search"
                    placeholder={placeholder}
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    className="bg-primary outline-none w-[214px] h-[30px] pt-3 pb-4 caret-contrast placeholder: bg-opacity-50 focus:border-b-[1px] focus:border-secondary active:border-b-[1px] active:border-secondary md:w-[321px]"
                />
            </label>
        </form>
    )
}
