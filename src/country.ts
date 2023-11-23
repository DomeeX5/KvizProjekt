export interface Countries {
    countryImage: URL
    countryName: string
    correctAnswer: boolean
}

export interface AllCountries {
    countries: Countries[];
}