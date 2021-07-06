// plot a line charts
Plotly.newPlot('plotArea', [{x:[1,2,3,4,5], y:[2,4,6,8,10]}]);

// plot a bar chart
var barchart = {
    x:['burrito', 'pizza','chicken'], 
    y:[10, 18, 5], 
    type:'bar'
};

var layout = {
    title: 'Luncheon Survey',
    xaxis: {title: 'Food Options'},
    yaxis: {title: 'Number of Respondents'}
};
Plotly.newPlot('plotArea2', [barchart], layout);

//  Skill drill
// Instruction: create a bar chart with several beverages and the pecentage of the number of orders they comprise in a popular nonalcoholic bar.

var trace = [{
    x : ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 'ice tea', "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y : [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type : "bar"
}];

var layout = {
    title: "beverages drinks",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percent of Drinks ordered"}
};

Plotly.newPlot("plotArea3", trace, layout);

// Plot a pie chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "Pie Chart",
   };
   Plotly.newPlot("plotArea4", data, layout);

// Skill drill 2
// Instruction: plot a scatter plot
var scatterpl = {
    x:[2,4,6,8,10],
    y:[30,40,50,60,70],
    mode: 'markers',
    type: 'scatter'
};

var scatterpl2 = {
    x:[10,4,1,25,11],
    y:[35,45,55,65,75],
    mode: 'markers',
    type: 'scatter'
};
var lay = {
    title: 'scatter plot',
    xaxis: {title:'slide shoes sizes'},
    yaxis: {title:'unisex ages'}
};

var scattered = [scatterpl, scatterpl2];

Plotly.newPlot('plotArea5', scattered, lay);