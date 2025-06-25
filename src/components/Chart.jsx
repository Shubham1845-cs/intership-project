import React,{forwardRef} from "react";
import { Bar, Line, Pie,Doughnut, Radar, Scatter} from "react-chartjs-2";
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale,
  
} from "chart.js";

Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
  ArcElement,
  LineElement,
  PointElement,
  RadialLinearScale

);

const  Chart= forwardRef(({ chartType, headers, rows, x, y },ref) =>{
  if ( !chartType ||!headers || !rows || !x || !y) {
    return <p>please upload the file and select the x and y column</p>;
  }

  const xIndex = headers.indexOf(x);
  const yIndex = headers.indexOf(y);

  const chartData = {
    labels: rows.map((row) => row[xIndex]),
    datasets: [
      {
        label: `${y} vs ${x}`,
        data: rows.map((row) => parseFloat(row[yIndex])),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
         borderColor: 'rgba(75,192,192,1)',
         borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugin: {
      Legend: {
        position: "top",
      },

      title: {
        display: true,
        text: `chart of ${y} vs ${x}`,
      },
     
    },

  };
  return (
    <div className="w-full bg-white p-4 rounded mt-auto h-72 shadow">
      {chartType === "Bar" && (
        <Bar
        
            ref={ref}
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Bar>
      )}
      {chartType === "Line" && (
        <Line
           
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Line>
      )}
      {chartType === "Pie" && (
        <Pie
        
            ref={ref}
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Pie>
      )}
       {chartType === "Doughnut" && (
        <Doughnut
        
            ref={ref}
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Doughnut>
      )}
       {chartType === "Radar" && (
        <Radar
        
            ref={ref}
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Radar>
      )}
       {chartType === "Scatter" && (
        <Scatter
       
            ref={ref}
          data={chartData}
          options={options}
          width={1400}
          height={1100}
        ></Scatter>
      )}
    </div>
  );
});

export default Chart;
