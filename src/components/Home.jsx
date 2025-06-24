import React, { useState,useRef } from "react";
import Chart from "./Chart";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [headers, setHeader] = useState([]);
  const [rows, setRow] = useState([]);
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [chartType,setchartType]=useState("Bar") ;
  const  chartRef= useRef(null);

  
  const downloadhandler=()=>
  {
      const chart=chartRef.current;
      if(!chart)
      {
        alert("please select the x and y axis first");
        return;
      }
      const image=chart.toBase64Image();
      const link=document.createElement("a");
      link.href=image;
      link.download=`${x}_vs_${y}_${chartType}.png`;
      link.click();

  }
  const fileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  
   

  const uploadFile = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3001/api/file/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
     // setHeader(data.headers);
      //setRow(data.rows);
       if(data.headers && data.rows) {
         setHeader(data.headers);
         setRow(data.rows);
       }
       else{
        console.error("missing headers and rows ",data)
          alert("file not  uploaded successfully OR  due to the session over ");
       }
      
      
    } catch (err) {
      console.error("Upload failed", err);
      alert("Upload failed.");
    }

  };
  


  return (
    <div className="min-h-screen flex bg-gray-50">
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 text-2xl font-bold text-indigo-600  border-indigo-100">
          Analytics Platform
        </div>
       
      </aside>

      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 space-y-6">
          {/* Upload Section */}
          <section className="bg-white rounded-lg shadow p-6 border border-indigo-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Upload Excel File
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="file"
                accept=".csv, .xlsx, .xls"
                className="w-full md:w-auto border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                onChange={fileChange}
              />
              <button
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-900 transition"
                onClick={uploadFile}
              >
                Upload
              </button>
            </div>
          </section>

          {/* Graph Section */}
          <section className="bg-white rounded-lg shadow p-9  mt-6 border-indigo-100 ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 ">
              Generate Graph
            </h2>
            <div className="mb-4">
              <button onClick={()=>setchartType("Bar")} className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700" >Bar Graph</button>
              <button onClick={()=>setchartType("Line")} className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700">Line Graph</button>
              <button onClick={()=>setchartType("Pie")}className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700">pie Graph</button>
              <button onClick={()=>setchartType("Doughnut")}className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700">Doughnut Graph</button>
              <button onClick={()=>setchartType("Radar")}className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700">Radar Graph</button>
              <button onClick={()=>setchartType("Scatter")}className=" rounded-lg border border-gray-200 bg-sky-400 text-white p-2 mr-4 hover:bg-sky-700">Scatter Graph</button>
            </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  X Axis:
                </label>

                <select
                  onChange={(e) => setX(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  {headers?.map?.((header, i) => (
                    <option key={i} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">
                  Y Axis:
                </label>
                <select
                  onChange={(e) => setY(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  {headers.map((header, i) => (
                    <option key={i} value={header}>
                      {header}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center mt-18">
              <button  onClick={downloadhandler} className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-950 transition">
                Download
              </button>
              <div className="bg-indigo-50 flex-1 h-64 ml-6 rounded-lg flex items-center justify-center text-indigo-200 text-lg">
                {x && y ? (
                  <Chart ref={chartRef} chartType={chartType} headers={headers} rows={rows} x={x} y={y} />
                ) : (
                  "[ Chart Preview ]"
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Home;
