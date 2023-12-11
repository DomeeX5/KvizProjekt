import { country } from "./quizInterfaces";
import { city } from "./quizInterfaces";
/**
 * A ország kvízre valósít meg Read-et.
 * Az adatok forrása url tagváltozóban található firebasedatabase.
 */
export class CountryService {
    
    url = "https://kvizprojektteszt-default-rtdb.europe-west1.firebasedatabase.app/.json";
/**
 * Lekérdezi a ország kvíz tagjai a szerverről.
 * @returns Egy ország kvíz adattagjait tartalmazó lista.
 */
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
/**
 * A város kvízre valósít meg Read-et.
 * Az adatok forrása url tagváltozóban található firebasedatabase.
 */
export class CityService {
    
    url = "https://kvizprojektvarosok-default-rtdb.europe-west1.firebasedatabase.app/.json";
/**
 * Lekérdezi a város kvíz tagjai a szerverről.
 * @returns Egy ország kvíz adattagjait tartalmazó lista.
 */
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
