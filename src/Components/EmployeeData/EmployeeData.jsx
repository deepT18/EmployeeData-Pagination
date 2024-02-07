// import React from "react";
// export default function Table({employeeData}){
//     return (
//         <div style={{ marginLeft: "20px" }}>
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
//       </div>
//     )
// }