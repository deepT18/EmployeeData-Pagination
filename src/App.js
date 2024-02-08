// import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react";
import axios from "axios";
import EmployeeTable from "./Components/EmployeeData/EmployeeData"
import ChangeButton from "./Components/ChangeButtons/changeButton"

function App() {
  const[data,setData]=useState([])
  const [page,setPage]=useState(1)
  const [employeesPerPage] = useState(10);

  useEffect(()=>{
    const fetchEmployeeData = async () => {
      try {
        const res = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setData(res.data);
      } catch (error) {
        alert("failed to fetch data");
      }
    };

    fetchEmployeeData();
  },[])

  const totalEmployees = data.length; //length of total employees data objects

  //Logic to get current page employee data:-

  //Math.min is used for last page purpose because when total employees = 46
  //and currentPage*employeesPerPage = 50, we should extract till
  //46 only in slice operation not 50 and there are only 46 employees.
  const indexOfLastEmployee = Math.min(
    page * employeesPerPage,
    totalEmployees
  );
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentPageEmployees = data.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  // const startIndex = (page - 1) * 10;
  // const endIndex = page * 10;
  // const currentPageData = data.slice(startIndex, endIndex);


  const handleChangePrev=()=>{
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  const handleChangeNext=()=>{
    if (page < Math.ceil(data.length / employeesPerPage)) {
      setPage(page + 1);
    }
  }



  return (
    <div>
    <EmployeeTable employeeData={currentPageEmployees}/>
    <ChangeButton currentPage={page} nextFn={handleChangeNext} preFn={handleChangePrev}/>
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [page, setPage] = useState(1);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
//       .then((res) => {
//         setData(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         alert("failed to fetch data", err);
//       });
//   }, []);

//   const startIndex = (page - 1) * 10;
//   const endIndex = page * 10;
//   const currentPageData = data.slice(startIndex, endIndex);

//   const handleChangePrev = () => {
//     if (page > 1) {
//       setPage((prevPage) => prevPage - 1);
//     }
//   };

//   const handleChangeNext = () => {
//     if (page < Math.ceil(data.length / 10)) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <div style={{ marginLeft: "20px" }}>
//       <h1 style={{textAlign: "center", color: "green", fontSize: "2rem" }}>Employee Data Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid #ccc", padding: "8px", width: "5%" }}>ID</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px", width: "15%" }}>Name</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px", width: "15%" }}>Email</th>
//             <th style={{ border: "1px solid #ccc", padding: "8px", width: "10%" }}>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentPageData.map((employee) => (
//             <tr key={employee.id}>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.id}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.name}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.email}</td>
//               <td style={{ border: "1px solid #ccc", padding: "8px" }}>{employee.role}</td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="4" style={{ textAlign: "center" }}>
//               <div>
//               </div>
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//       <div style={{textAlign:"center"}}>
//       <button
//                   style={{
//                     backgroundColor: "green",
//                     color: "#fff",
//                     border: "none",
//                     padding: "8px 16px",
//                     cursor: "pointer",
//                     marginRight: "16px",
//                   }}
//                   onClick={handleChangePrev}
//                 >
//                   Previous
//                 </button>
//                 <span>
//                   Page {page} of {Math.ceil(data.length / 10)}
//                 </span>
//                 <button
//                   style={{
//                     backgroundColor: "green",
//                     color: "#fff",
//                     border: "none",
//                     padding: "8px 16px",
//                     cursor: "pointer",
//                     marginLeft: "16px",
//                   }}
//                   onClick={handleChangeNext}
//                 >
//                   Next
//                 </button>
//                 </div>
//     </div>
//   );
// }

// export default App;
