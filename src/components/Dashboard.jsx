import React from 'react'

function Dashboard({user, uploadCount, lastUpload}) {
  return (
    
       <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-indigo-100 p-4 rounded shadow">
          <h3 className="font-bold">Total Uploads</h3>
          <p>{uploadCount}</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded shadow">
          <h3 className="font-bold">Last Upload</h3>
          <p>{lastUpload || "No uploads yet"}</p>
        </div>
        <div className="bg-indigo-100 p-4 rounded shadow">
          <h3 className="font-bold">User</h3>
          <p>{user?.name}</p>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard
