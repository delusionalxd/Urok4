fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(function(countries) {
    console.log(countries);
    
    
    var HtmlCountries = "";

    for (var index in countries) {
      var element = countries[index];
      const flagsUrl = element.flags?.svg;
      HtmlCountries += `<tr>
          <td>${+index + 1}</td>
          <td>${element.name.common}</td>
          <td>${element.population}</td>
          <td>${element.region}</td>
          <td>${element.area}</td>
          <td class="flagsurl" style="background-image: url(${flagsUrl})"></td>
 
        </tr>`;
    }

    document.querySelector("#countries-Table tbody").innerHTML = HtmlCountries;
  });


