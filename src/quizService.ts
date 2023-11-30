import { country } from "./quizInterfaces";
import { city } from "./quizInterfaces";

export class CountryService {
    
    url = "https://kvizprojektteszt-default-rtdb.europe-west1.firebasedatabase.app/.json";

    async getAll(): Promise<country[]> {
        const response = await fetch(this.url, {
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error("An error occured while listing people");
        }
        return response.json();
      }
    
}

export class CityService {
    
    url = "https://kvizprojektvarosok-default-rtdb.europe-west1.firebasedatabase.app/.json";

    async getAll(): Promise<city[]> {
        const response = await fetch(this.url, {
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error("An error occured while listing people");
        }
        return response.json();
      }

}
