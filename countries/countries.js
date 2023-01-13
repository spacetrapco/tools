// Read in the JSON files using fetch
Promise.all([
    fetch('https://raw.githubusercontent.com/spacetrapco/tools/main/countries/countries.json').then(response => response.json()),
    fetch('https://raw.githubusercontent.com/spacetrapco/tools/main/countries/states.json').then(response => response.json()),
    fetch('https://raw.githubusercontent.com/spacetrapco/tools/main/countries/cities.json').then(response => response.json())
  ]).then(([countries, states, cities]) => {
      //populate the countries select field
      const countrySelect = document.getElementById('country');
      for (const country of countries) {
          const option = document.createElement('option');
          option.value = country.name;
          option.innerHTML = `${country.emoji} ${country.name}`;
          countrySelect.appendChild(option);
      }
      //add event listener to country select field
      countrySelect.addEventListener('change', (event) => {
          const selectedCountry = event.target.value;
          //populate the states select field
          const stateSelect = document.getElementById('state');
          stateSelect.innerHTML = '';
          stateSelect.disabled = false;
          for (const state of states) {
              if (state.country === selectedCountry) {
                  const option = document.createElement('option');
                  option.value = state.name;
                  option.innerHTML = state.name;
                  stateSelect.appendChild(option);
              }
          }
          //populate the cities select field
          const citySelect = document.getElementById('city');
          citySelect.innerHTML = '';
          citySelect.disabled = true;
      });
      //add event listener to state select field
      stateSelect.addEventListener('change', (event) => {
          const selectedState = event.target.value;
          //populate the cities select field
          const citySelect = document.getElementById('city');
          citySelect.innerHTML = '';
          citySelect.disabled = false;
          for (const city of cities) {
              if (city.state === selectedState) {
                  const option = document.createElement('option');
                  option.value = city.name;
                  option.innerHTML = city.name;
                  citySelect.appendChild(option);
              }
          }
      });
  });