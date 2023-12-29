export type dataType = {
    title: string
    thumbnail: thumbnail
    year: number
    category: category
    rating: string
    isBookmarked: boolean
    isTrending: boolean
}

interface thumbnail {
    trending: trending
    regular: regular
}

interface trending {
    small: string
    large: string
}

interface regular {
    small: string
    medium: string
    large: string
}

export type category = "Movie" | "TV Series"
