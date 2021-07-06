// console.log(cityGrowths);
// var sortedCities = cityGrowths.sort((a,b) =>
// a.Increase_from_2016 - b.Increase_from_2016).reverse();
// var topFiveCities = sortedCities.slice(0,5);
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: { title: "City" },
//     yaxis: { title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// sort the cities in descending order of the population growth
var sortedstate = cityGrowths.sort(function(a,b){
  return (a.Increase_from_2016 - b.Increase_from_2016);
}).reverse();

// seleect only the top five cities in termsof growth
var topFiveCities = sortedstate.slice(0,5);

// create an array of the city names
var cityNames = topFiveCities.map(cityName => cityName.City); 

// create an array of the population names
var populations = topFiveCities.map(population => population.population);

var pt = {
  
}

Plotly.newPlot('bar-plot', )