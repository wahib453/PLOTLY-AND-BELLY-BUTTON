function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

function appendOuid(name) {
  var listOfOuid = [];
  for (var i = 0; i < name.length; i++) {
    listOfOuid.push(`OTU ${name[i]}`);
  }
  return listOfOuid;
}

function appendBacteria(name) {
  var listOfBact = [];

  for (var i = 0; i < name.length; i++) {
    var stringName = name[i].toString();
    var splitValue = stringName.split(";");
    if (splitValue.length > 1) {
      listOfBact.push(splitValue[splitValue.length - 1]);
    } else {
      listOfBact.push(splitValue[0]);
    }
  }
  return listOfBact;
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
     PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples;
    var metadata = data.metadata;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    var result = resultArray[0];


    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuids = resultArray.map(x => x.otu_ids).sort((a,b)=> b - a);
    var svalues = resultArray.map(x => x.sample_values).sort((a,b)=> b - a);
    var otu_labels = resultArray.map(x => x.otu_labels).sort((a,b)=> b - a);
    var allotuids = resultArray.map(x => x.otu_ids);
    var weeklyFreq = metadataArray[0].wfreq;

    svalues = svalues[0].slice(0,10);
    otu_labels = appendBacteria(otu_labels[0].slice(0,10));
    otuids = appendOuid(otuids[0].slice(0,10));
    allotuids = allotuids[0];

    //console.log(otuids);
    //console.log(svalues);
    //console.log(otu_labels);
    //console.log(allotuids);


    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuids;

    // 8. Create the trace for the bar chart. 
    var trace = {
      x: svalues,
      y: yticks,
      type: "bar",
      orientation: "h"
    }
    var barData = [trace];
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      xaxis: { title: "Values"},
      yaxis: { title: "OTU Labels",
      width: "420",
      height: "420" ,
      autorange: "reversed",
      margin: { t: 0, b: 0 }
    }
     
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    // 1. Create the trace for the bubble chart.
    var traceBubble = {
      x: allotuids,
      y: svalues,
      mode: "markers",
      marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: svalues
      },
      text: otu_labels
    };


    // 1. Create the trace for the bubble chart.
    var bubbleData = [traceBubble];
    

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title:'Bacteria Cultures Per Sample',
      showlegend: false,
      xaxis: { title: "OTU ID" },
      width: "700",
      height: "500" ,
      margin: { t: 0, b: 0 }
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);


    // 4. Create the trace for the gauge chart.


    var gaugeData = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      title: {
        text: "Belly Button Washing Frequency <br>Scrubs per Week"
      },
      type: "indicator",

      mode: "gauge",
      gauge: {
        axis: {
          range: [0, 9],
          tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          ticks: "outside"
        },

        steps: [
          { range: [0, 1], color: "EEDFE7" },
          { range: [1, 2], color: "#E2CBD2" },
          { range: [2, 3], color: "#D5B6BA" },
          { range: [3, 4], color: "#C9A4A2" },
          { range: [4, 5], color: "#BC998E" },
          { range: [5, 6], color: "#AF917A" },
          { range: [6, 7], color: "#A28B67" },
          { range: [7, 8], color: "#797B4C" },
          { range: [8, 9], color: "#5D673E" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 1,
          value: weeklyFreq
        }
      }
    }
    ];

    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: "620",
      height: "300",
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);




  });
}