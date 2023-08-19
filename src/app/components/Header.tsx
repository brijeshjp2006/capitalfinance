import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function header() {
  return (
    <>
       <div className="header-sec">
                    <div className="search-box">
                        
                            <Image src="/images/search-normal.png" alt="" height={16} width={16} />
                        <input type="text" placeholder="Search item" />
                    </div>
                    <div className="header-box-r">
                        <Link href="javascript:void(0)" className="notification-btn">
                        <Image src="/images/notification.png" alt="" height={20} width={20} />
                          
                            <span>2</span>
                        </Link>
                        <Link href="javascript:void(0)" className="user-btn">
                           
                            <Image src="/images/user-pic.png" alt="" height={36} width={36} />
                        </Link>
                    </div>
                </div>
    </>
  )
}

