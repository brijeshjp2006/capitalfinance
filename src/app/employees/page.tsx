import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../components/sidebar'
import Header from '../components/header'

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


                <div className="employees-data-sec">
                    <div className="table-scroll-mobile">
                        <table>
                          <tr>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Station</th>
                            <th>FedEx ID</th>
                            <th>Employee ID</th>
                            <th>Pay Adjustment</th>
                            <th></th>
                          </tr>
                          <tr>
                            <td>
                                <Image src="/images/user-icon.png" alt='user icon' width={36} height={36} />
                              
                                <h6>Dmitriy Popello</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>
                                Zev Express Inc
                            </td>
                            <td>King of Prussia</td>
                            <td>7953645</td>
                            <td>10310</td>
                            <td><samp className="training">Training</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                                <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                    
                                    </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user icon' width={36} height={36} />
                                <h6>Jeffrey Yearick</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>Zev Express Inc</td>
                            <td>7101882</td>
                            <td>7101882</td>
                            <td>10460</td>
                            <td><samp className="per-stop">Per Stop</samp></td>
                            <td>
                            <Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link>
                                </td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Dmitriy Popello</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>
                                Zev Express Inc
                            </td>
                            <td>King of Prussia</td>
                            <td>7953645</td>
                            <td>10310</td>
                            <td><samp className="Weekly">Weekly</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Dmitriy Popello</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>
                                Zev Express Inc
                            </td>
                            <td>King of Prussia</td>
                            <td>7953645</td>
                            <td>10310</td>
                            <td><samp className="training">Training</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Jeffrey Yearick</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>Zev Express Inc</td>
                            <td>7101882</td>
                            <td>7101882</td>
                            <td>10460</td>
                            <td><samp className="per-stop">Per Stop</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Dmitriy Popello</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>
                                Zev Express Inc
                            </td>
                            <td>King of Prussia</td>
                            <td>7953645</td>
                            <td>10310</td>
                            <td><samp className="Weekly">Weekly</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Dmitriy Popello</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>
                                Zev Express Inc
                            </td>
                            <td>King of Prussia</td>
                            <td>7953645</td>
                            <td>10310</td>
                            <td><samp className="training">Training</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                          <tr>
                            <td>
                            <Image src="/images/user-icon.png" alt='user' width={36} height={36} />
                                <h6>Jeffrey Yearick</h6>
                                <span>Zev Express Inc</span>
                            </td>
                            <td>Zev Express Inc</td>
                            <td>7101882</td>
                            <td>7101882</td>
                            <td>10460</td>
                            <td><samp className="per-stop">Per Stop</samp></td>
                            <td><Link href="javascript:void(0)" className="employees-edit">
                              
                              <Image src="/images/edit-icon.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link></td>
                          </tr>
                        </table>
                    </div>
                    <div className="pagination">
                        <ul>
                            <li>
                               
                                <Link href="javascript:void(0)" >
                              
                                <Image src="/images/arrow-left.png" alt='Edit' width={20} height={20} />
                                    
                                    </Link>
                            </li>
                            <li>
                            <Link href="javascript:void(0)" >1</Link>
                            </li>
                            <li>
                            <Link href="javascript:void(0)" >2</Link>
                            </li>
                            <li>
                            <Link href="javascript:void(0)" >3</Link>
                            </li>
                            <li>
                            <Link href="javascript:void(0)" >...</Link>
                            </li>
                            <li>
                            <Link href="javascript:void(0)" >6</Link>
                            </li>
                            <li>
                               
                                <Link href="javascript:void(0)" >
                              
                              <Image src="/images/arrow-right.png" alt='Edit' width={20} height={20} />
                                  
                                  </Link>
                            </li>
                        </ul>
                    </div>
                </div>


    </div>

      </div>
    </>
  )
}
