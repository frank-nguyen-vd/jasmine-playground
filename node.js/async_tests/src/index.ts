/** Use Axios to get data from restcountries api */
import axios from "axios";

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(countryName: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/name/${countryName}`
  );
  const data = getApi.data;

  return data[0];
}

/** Create a test for this getRegion function */
async function getRegionalBlocCountries(blocName: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/regionalbloc/${blocName}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionName: string) {
  const getApi = await axios(
    `https://restcountries.eu/rest/v2/region/${regionName}`
  );
  const data = getApi.data;
  const capitals = [];
  for (let i = 0; i < data.length; i++) {
    capitals.push(data[i].capital);
  }
  return capitals;
}

export default {
  getCountry,
  getRegionalBlocCountries,
  getRegionCapitals,
};
