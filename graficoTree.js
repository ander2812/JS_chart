// import * as echarts from 'echarts/core';
// import { TooltipComponent } from 'echarts/components';
// import { TreeChart } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';
// echarts.use([TooltipComponent, TreeChart, CanvasRenderer]);

console.log("Entro aqui")

import * as fs from 'fs';

  fs.readFile("./MapaFactoresEstrategicos.csv", (err, data) => {
    if (err) {
      throw new Error(err);
    }

    const csvt = String(data) // convert the buffer to a string
      .split("\n") // Split the string into an array where each item contains one line
      .filter(Boolean); // Remove any empty lines

    // Do the rest of the operations on the CSV data here

    //console.log(csv);

    function csvToJSON(csv) {
      const [headers, ...data] = csv.map((row) => row.split(";"));
      return data.map((row) => {
        const rowObject = {};
        row.forEach((value, index) => {
          rowObject[headers[index]] = value;
        });
        //console.log(rowObject)
        return rowObject;
      });
    }

    //res.json(csvToJSON(csv)); 


    jsonStr = JSON.stringify(csvToJSON(csvt));

    console.log("it a json " + jsonStr );
  });