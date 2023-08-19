import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <>
       <div className="sidebar-sec scrollbar">
                    <div className="main-logo">
                        <Link href="javascript:void(0)" className="logo-item">
                        <Image
              src="/images/login-logo.png"
              alt="Logo"
              className="dark:invert"
              width={48}
              height={48}
              />
                        </Link>
                            <h6>Vazgen Avakyan</h6>
                            <Link className="header-mail" href="mailto:vaz@avakyancapital.com">vaz@avakyancapital.com</Link>
                    </div>
                    <div className="mobile-menu-bars">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                        <span className="line-3"></span>
                    </div>
                    <div className="sidebar-menus-sec">
                    <div className="sidebar-top-sec">
                    <div className="sidebar-menus">
                        <h6>Analytics</h6>
                        <ul>
                            <li>
                                <Link href="linkhere">
                                  
                                    <Image src="/images/home-icon.png" width={20} height={20} alt="home icon" />
                      
                                    Overview
                                </Link>
                            </li>
                            <li>
                            <Link href="linkhere">
                                  <Image src="/images/chart-icon.png" width={20} height={20} alt='chart' />
                                    Insights
                                </Link>
                            </li>
                            <li>
                            <Link href="linkhere">
                                 
                                    <Image src="/images/ranking.png" width={20} height={20} alt='ranking' />
                                    Leaderboard
                                    </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-menus">
                        <h6>Employees</h6>
                        <ul>
                            <li>
                                <Link className="active" href="javascript:void(0)">
                                    
                                    <Image src="/images/profile-icon.png" width={20} height={20} alt='profile' />
                                    Employees
                                </Link>
                            </li>
                            <li>
                            <Link className="active" href="javascript:void(0)">
                                  
                                    <Image src="/images/dollar-icon.png" width={20} height={20} alt='dollar' />
                                    Run Payroll
                                    </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-bottom-sec">
                <div className="sidebar-menus">
                        <h6>Others</h6>
                        <ul>
                            <li>
                                <Link href="#">
                                <Image src="/images/other-icon1.png" width={20} height={20} alt='other icon' />
                                    Apps
                                    </Link>
                            </li>
                            <li>
                            <Link href="#">
                            <Image src="/images/other-icon2.png" width={20} height={20} alt='other icon' />
                                    Training
                                    </Link>
                            </li>
                            <li>
                            <Link href="#">
                                  
                                    <Image src="/images/other-icon3.png" width={20} height={20} alt='other icon' />
                                    Handbook
                                    </Link>
                            </li>
                            <li>
                            <Link href="#">
                     
            <Image src="/images/other-icon4.png" width={20} height={20} alt='other icon' />
                 
                                  
                                    Settings
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
