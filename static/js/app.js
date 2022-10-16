// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Buidling our dynamic table
function buildTable(data) {
    tbody.html("");

    //Next, loop through each object in the data and append a row and cells for each valus in the row.
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr");
        
        // Loop through each field in the dataRow and add each values as a table cell(td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};