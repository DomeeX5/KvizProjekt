    /**
    * Az ország kvíz elemeit leíró interfész.
    */
export interface country {
    /**
     * A kérdés azonosítója
     */
    id: number;
    /**
     * A ország zászlajának url-je.
     */
    CountryImage: string;
    /**
     * A helyes válasz
     */
    CorrectAnswer: string;
    /**
     * Az első helytelen válasz
     */
    FirstIncorrectAnswer: string;
    /**
     * A második helytelen válasz.
     */
    SecondIncorrectAnswer: string;
}

    /**
    * Az város kvíz elemeit leíró interfész.
    */
export interface city {
     /**
     * A kérdés azonosítója
     */
    id: number;
    /**
     * A városhoz tartozó zászlónak az url-je.
     */
    CityImage: string;
    /**
     * A kérdés.
     */
    Question: string;
    /**
     * A helyes válasz.
     */
    CorrectAnswer: string;
    /**
     * Az első helytelen válasz.
     */
    FirstIncorrectAnswer: string;
    /**
     * A második helytelen válasz.
     */
    SecondIncorrectAnswer: string;
}