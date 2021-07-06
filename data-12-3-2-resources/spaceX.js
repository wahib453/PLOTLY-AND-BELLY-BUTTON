// retrieve the url and then execute the subsequent code
// const url = "https://api.spacexdata.com/v2/launchpads";

// d3.json(url).then(receivedData => console.log(receivedData)); // sample data

// rewrite the code to retrieve the details only from the Vandenberg Air Force Base
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// extract details
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].details));

// access the latitude of the Vandenberg Airforce Base
// d3.json(url).then(spaceXResults =>console.log(spaceXResults[0].location.latitude));

d3.json("samples.json").then(function(data){
    console.log(data);
});


// // extract only the wfreq, or the weekly belly button washing frequency, of each person into a new array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// // sort the wfreq array in descending order
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// // delete null values from the sorted wfreq array
// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person =>
// person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=
// null);
//     console.log(filteredWfreq);
// });
