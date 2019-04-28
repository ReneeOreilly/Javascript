// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

function updateTable(data) {
  tbody.selectAll("*").remove();
  data.forEach(function(data) {
    console.log(data);
    var row = tbody.append("tr");
    Object.entries(data).forEach(function([key, value]) {
      console.log(key, value);
          
      var cell = tbody.append("td");

      cell.text(value);
    });
  });
}

updateTable(data);

// var submit = d3.select("#filter-btn");

// function filterByDate(data) {
//   var filteredData = data.filter(function (d) {
//     return d.datetime === d3.select('#datetime').val();
//   });

//   return filteredData;
// };

// submit.on("click", function() {
//   d3.event.preventDefault();
//   // When filter is click
//   // Filter data by datetime and update the table
//   var result = filterByDate(data);
//   updateTable(result);
// });





var submit = d3.select("#filter-btn");
  

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  
  // Get the value property of the input element
  var SelectedDate = d3.select("#datetime").property("value");
  var SelectedCity = d3.select("#city").property("value");
  var SelectedState = d3.select("#state").property("value");
  var SelectedCountry = d3.select("#country").property("value");
  var SelectedShape = d3.select("#shape").property("value");

  var filteredData = tableData;

  if (SelectedDate != "") {
    filteredData = filteredData.filter(table => table.datetime === SelectedDate);
  }
  if (SelectedCity != "") {
    filteredData = filteredData.filter(table => table.city === SelectedCity);
  }
  if (SelectedState != "") {
    filteredData = filteredData.filter(table => table.state === SelectedState);
  }
  if (SelectedCountry != "") {
    filteredData = filteredData.filter(table => table.country === SelectedCountry);
  }
  if (SelectedShape != "") {
    filteredData = filteredData.filter(table => table.shape === SelectedShape);
  }
  updateTable(filteredData);

});