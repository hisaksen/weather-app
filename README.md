
**Daily Weather React/Express application**

**Materialize design**

**using babel and webpack**


**Users will need to get their own API key from www.openweathermap.org and pass it to the _APIKEY variable in weatherApi.js**

**Using www.Windytv.com to show displayed weather data**

- Using containers/Components style
 - Containers hold business logic
 - Components hold JSX render elements
- Config
  - config holds router.
    - Router allows user to navigate through the DOM.
- Utilities
  - holds general utilities for app functionality
   - apiKey(gitignored)
      - const _APIKEY = '<APIKEY>'' <br />
        module.exports = _APIKEY
    - date
      - provides date date function
    - weatherApi
      - uses axios to get data from openweathermap.org
    - leastUsedCache
      - cache to store x amount of inputs. Resets on page reload
