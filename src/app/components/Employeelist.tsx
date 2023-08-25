"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DataTable from 'react-data-table-component'


function Employeelist() {
  const [employees,setEmployees]=useState([]);
 
  const customStyles = {
      rows: {
          style: {
              minHeight: '72px', // override the row height
          },
      },
      headCells: {
          style: {
              backgroundColor: "#F6F6F6",
             
              
          },
      },
      cells: {
          style: {
              paddingLeft: '8px', // override the cell padding for data cells
              paddingRight: '8px',
          },
      },
  };

  useEffect(()=>{
    async function getEmployeeData(){
    const apiUrlEndpoint="http://localhost:3000/api/employeedata";
    const response=await fetch(apiUrlEndpoint)
    const res= await response.json();
    console.log(res.data);
    setEmployees(res.data);
    }
    getEmployeeData();
},[]);

const columns=[
  {
      name: "Name ",      
    selector : (row: any)=>row.fname,      
      sortable : true,
      width:"27%",
      class:"hellobar"
   
  },
  {
      name: "Primary Company ",
      selector : (row)=>row.PrimaryCompany
   
  },
  {
      name: "Primary Station",
      selector : (row)=>row.PrimaryStation
   
  },
  {
      name: "FedEx ID",
      selector : (row)=>row.FedExID
   
  },
  {
      name: "Employee ID",
      selector : (row)=>row.EmployeeID
   
  },
  
  {
      name: "Pay Adjustment",
      selector : (row)=>row.PayAdjustment
   
  },
  {
      name: "Action",
      cell: row=><button type="button" className="employees-edit" data-bs-toggle="modal" data-bs-target="#exampleModal"><Image src="/images/edit-icon.png" alt="text" width={20} height={20} /></button>
     
   
  }
  
      ]


  return (
    
    <>
   <DataTable 
   columns={columns} 
   data={employees}  
className='employees-data-sec'
responsive
pagination 
subHeader 
customStyles={customStyles}
 subHeaderAlign="right"
/>
        
    </>
  )
}

export default Employeelist

