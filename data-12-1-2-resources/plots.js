//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "scatter"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);



//    var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
//        "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
//   };
//   var data = [trace];
//   var layout = {
//     title: "'Pie' Chart",
//   };
//   Plotly.newPlot("plotArea", data, layout);



// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num =>num + 5);
// console.log(doubled);

// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num) {
//      return num + 5});
// console.log(doubled);


var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPopulation = cities.map(function(city){
    return city.population;
});
console.log(cityPopulation);



var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var namesWithS  = words.filter(word => word.split("")[0]=='s')

console.log(namesWithS)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var namesWithS  = words.filter(function(word) {
    return word.split("")[0]=='s'
});

console.log(namesWithS)





var namesF3  = words.slice(0,3)

console.log(namesF3)