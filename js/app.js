// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);

         data.forEach(function(data) {
               console.log(data);
               var row = tbody.append("tr");
               Object.entries(data).forEach(function([key, value]) {
                 console.log(key, value);
                 
                 var cell = tbody.append("td");
                 cell.text(value);
               });
             });

            
             var submit = d3.select("#Filter Table");
             function filterByDate(data) {
              var filteredData = data.filter(function (d) {
                return d.datetime === $('#datetime').val();
              });
              return filteredData;
          }
          function updateTable(data) {
          submit.on("click", function() {
            // When filter is click
            // Filter data by datetime and update the table
            var result = filterByDate(data);
            updateTable(result);
          
          })};






            //  var people = data;

             // Select the submit button
            //  var submit = d3.select("#Filter Table");
             
            //  submit.on("click", function() {
            
            //    // Prevent the page from refreshing
            //    d3.event.preventDefault();
             
            //    // Select the input element and get the raw HTML node
            //    var inputElement = d3.select("#datetime");
             
            //    // Get the value property of the input element
            //    var inputValue = inputElement.property("value");
             
            //    var filteredData = tableData.filter(data => data.datetime === inputValue);
             
            //    console.log(filteredData);
            //    d3.select("tr>span").text(ifilteredData);
            //  })