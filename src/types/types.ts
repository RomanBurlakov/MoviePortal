export type Theme = 'light' | 'dark';

export interface UserData {
	login: string,
	password: string
}

export interface LoginState {
	isLogin: boolean,
	name: string
}

export interface MovieFull {
	kinopoiskId: number
	nameRu: string
	nameOriginal: string
	posterUrl: string
	posterUrlPreview: string
	coverUrl: string
	logoUrl: string
	ratingKinopoisk: number | null
	ratingImdb: number | null
	webUrl: string
	year: number
	filmLength: number
	slogan: string
	description: string
	shortDescription: string
	type: string
	ratingAgeLimits: string
	countries: Country[]
	genres: Genre[]
	startYear: number | null
	endYear: number | null
	serial: boolean
	shortFilm: boolean
	completed: boolean
}

export interface MovieSearchRequest {
	total: number,
	totalPages: number,
	items: MovieShortData[]
}

export interface MovieQuickSearchRequest {
	keyword: string,
	pagesCount: number,
	films: MovieShortData[]
}

export interface MovieShortData {
	kinopoiskId: number
	filmId?: number
	nameRu: string
	nameEn?: string
	nameOriginal?: string
	countries: Country[]
	genres: Genre[]
	ratingKinopoisk: number | null
	ratingImdb?: number | null
	rating?: number | string
	year: number | string
	type: string
	posterUrl: string
	posterUrlPreview?: string
}

export interface Staff {
	staffId: number
	nameRu: string
	nameEn: string
	description: string | null
	posterUrl: string
	professionText: string
	professionKey: string
}

export interface Country {
	country: string
}

export interface Genre {
	genre: string
}

export interface FiltersType {
	countries?: string
	genres?: string
	keyword?: string
	order?: 'YEAR' | 'NUM_VOTE' | 'RATING'
	ratingFrom?: number
	ratingTo?: number
	type?: 'FILM' | 'TV_SERIES'
	yearFrom?: number
	yearTo?: number
}

export interface FilterParams {
	id: string
	genre?: string
	country?: string
	type?: string
	order?: string
	year?: number
	rating?: number
}

export interface SortVariant {
	id: number
	name: string
	sortFn: (a: MovieShortData, b: MovieShortData) => number
}