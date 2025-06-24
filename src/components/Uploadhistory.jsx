import React, { useEffect, useState } from "react";



function Uploadhistory() {
  const [history, sethistory] = useState([]);
  const fetchHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3001/api/file/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log("upload history", data);
      sethistory(data);
    } catch (error) {
      console.error("failed to fetch the upload history", error);
      alert("failed to fetch the upload history ");
    }
  };
  useEffect(() => {
    fetchHistory();
  }, []);
  return (
    <>
      <div className="bg-white p-4 rounded shadow mt-6">
        <h2 className="text-lg font-bold mb-4">Upload History</h2>
        <ul className="space-y-2">
            {history.map((file,index)=>(
              <li key={index} className="border-b py-2"> <strong>{file.fileName}</strong> uploaded on {new Date(file.uploadDate).toLocaleString()}</li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Uploadhistory;
