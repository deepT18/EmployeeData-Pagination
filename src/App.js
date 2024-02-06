// // import logo from './logo.svg';
// import './App.css';
// import React,{useState,useEffect} from "react";
// import axios from "axios";

// function App() {
//   const [page,setPage]=useState(1)
//   const[data,setData]=useState([])

//   useEffect(()=>{
//     axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((res)=>{
//       setData(res.data)
//       console.log(res.data)
//     }).catch((err)=>{
//       alert("failed to fetch data",err)
//     })
//   },[])

//   const startIndex = (page - 1) * 10;
//   const endIndex = page * 10;
//   const currentPageData = data.slice(startIndex, endIndex);


//   const handleChangePrev=()=>{
//     if (page > 1) {
//       setPage((prevPage) => prevPage - 1);
//     }
//   }

//   const handleChangeNext=()=>{
//     if (page < Math.ceil(data.length / 10)) {
//       setPage(page + 1);
//     }
//   }

//   return (
//     <div style={{ marginLeft: "20px" }}>
//     <h1 style={{ color: "#005498", fontSize: "2rem" }}>Employee Data Table</h1>
//     <table>
//       <thead>
//         <tr>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Role</th>
//         </tr>
//       </thead>
//       <tbody>
//       {currentPageData.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>{employee.name}</td>
//               <td>{employee.email}</td>
//               <td>{employee.role}</td>
//             </tr>
//           ))}
//       </tbody>
//       <div>
//         <button onClick={handleChangePrev}>Previous</button>
//         <span></span>
//         <button onClick={handleChangeNext}>Next</button>
//         </div>
//     </table>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert("failed to fetch data", err);
      });
  }, []);

  const startIndex = (page - 1) * 10;
  const endIndex = page * 10;
  const currentPageData = data.slice(startIndex, endIndex);

  const handleChangePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleChangeNext = () => {
    if (page < Math.ceil(data.length / 10)) {
      setPage(page + 1);
    }
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <h1 style={{textAlign: "center", color: "green", fontSize: "2rem" }}>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", width: "5%" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", width: "15%" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", width: "15%" }}>Email</th>
            <th style={{ border: "1px solid #ccc", padding: "8px", width: "10%" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((employee) => (
            <tr key={employee.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.email}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.role}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              <div>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    marginRight: "16px",
                  }}
                  onClick={handleChangePrev}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <span>
                  Page {page} of {Math.ceil(data.length / 10)}
                </span>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    cursor: "pointer",
                    marginLeft: "16px",
                  }}
                  onClick={handleChangeNext}
                  disabled={page === Math.ceil(data.length / 10)}
                >
                  Next
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
