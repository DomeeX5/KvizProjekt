import { CountryService } from "./countryService";

const countryService = new CountryService();

document.addEventListener('DOMContentLoaded', listCountries);

async function listCountries() {
  const countries = await countryService.getAll();
  console.log(countries);
  const image = document.getElementById('image') as HTMLImageElement;
  
  const country = countries[0];
  image.src = country.CountryImage;

}


