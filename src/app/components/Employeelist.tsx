"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DataTable from 'react-data-table-component'


function Employeelist() {
  const [employees,setEmployees]=useState([]);
  const [search,setSearch]=useState("");
  const [filterdEmployees,setfilterdEmployees]=useState([]);

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
    const apiUrlEndpoint="https://capitalfinance.vercel.app/api/employeedata";
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
      cell : (row: any)=><><div className='firstcol'>
      <Image src="/images/user-icon.png" alt="text" width={36} height={36} />
       <h6> {row.fname} {row.lname}</h6>
        <span>{row.PrimaryCompany}</span>
        </div>
        </>,
      
      sortable : true,
      width:"27%",
      class:"hellobar"
   
  },
  {
      name: "Primary Company ",
      selector : (row: any)=>row.PrimaryCompany
   
  },
  {
      name: "Primary Station",
      selector : (row: any)=>row.PrimaryStation
   
  },
  {
      name: "FedEx ID",
      selector : (row: any)=>row.FedExID
   
  },
  {
      name: "Employee ID",
      selector : (row: any)=>row.EmployeeID
   
  },
  
  {
      name: "Pay Adjustment",
      selector : (row: any)=>row.PayAdjustment
   
  },
  {
      name: "Action",
      cell: (row: any)=><button type="button" className="employees-edit" data-bs-toggle="modal" data-bs-target="#exampleModal"><Image src="/images/edit-icon.png" alt="text" width={20} height={20} /></button>
     
   
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
/>
        
    </>
  )
}

export default Employeelist

