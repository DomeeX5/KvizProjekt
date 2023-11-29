export interface country {
    id: number;
    CountryImage: string;
    CorrectAnswer: string;
    FirstIncorrectAnswer: string;
    SecondIncorrectAnswer: string;
}

export class CorrectAnswer {
    private _points = 0;
    get points(): number {
        return this._points;
    }
    set points(value: number) {
        this._points = value;
    }
}
