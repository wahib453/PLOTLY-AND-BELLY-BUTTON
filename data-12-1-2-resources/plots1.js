// create a line chart. A line chart is good for showing trends
// Plotly.newPlot("plotArea", [{x:[2,4,6,8,10], y:[0,2,4,6,8,12,14,16,18,20]}]);

// create a bar chart. A bar chart is good for showing how data is distributed across categories.
// var trace = [{
//     x : ["burrito", "pizza", "chicken"],
//     y : [10,18,5],
//     type : "bar"
// }];

// var layout = {
//     title: "Luncheon Survey"
// };

// Plotly.newPlot("plotArea", trace, layout);

//  Skill drill
//  Instruction: create a bar chart with several beverages and the pecentage of the number of orders they comprise in a popular nonalcoholic bar.

// var trace = [{
//     x : ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 'ice tea', "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y : [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type : "bar"
// }];

// var layout = {
//     title: "beverages drinks",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "Percent of Drinks ordered"}
// };

// Plotly.newPlot("plotArea", trace, layout);

// skill Drill
var numbers = [0,2,4,6,8];
var addFive = numbers.map(function(x){
    return x + 5;
});