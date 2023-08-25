import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Employeelist from '../components/Employeelist'

export default function Employees() {
  return (
    <>
    
      <div className="main-outer-sec">

<Sidebar />
<div className="content-sec scrollbar">
<Header />
<div className="top-title-bar">
                    <div className="title-sec">
                        <h2>Employees</h2>
                        <h5>All the employees</h5>
                    </div>
                    <div className="btn-sec">
                        <Link href="javascript:void(0)" className="btn-style add-employee-btn">+ Add Employee</Link>
                    </div>
                </div>


<Employeelist/>

    </div>

      </div>
    </>
  )
}
