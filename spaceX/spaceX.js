// console.log("test")

// const url = "https://api.spacexdata.com/v2/launchpads";

// arraySpaceX = d3.json(url).then(spaceXResults => spaceXResults);

// console.log(arraySpaceX)

// array2 = arraySpaceX.Array.map(pad => pad.location.latitude)


// console.log(array2)
// d3.json(url).then(spaceXResults =>{
//     console.log(spaceXResults[0].location.latitude)
//     console.log(spaceXResults[0].location.longitude)
// }
//     );


// d3.json(url).then(spaceXResults => spaceXResults.map(
//     console.log([spaceXResults[0].location.latitude, spaceXResults[0].location.longitude])
// ))

d3.json("samples.json").then(function(data){
    console.log("hello");
});