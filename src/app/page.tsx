import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
   <>
 
    <div className="login-logo">
            <Link href="javascript">
            <Image
              src="/images/login-logo.png"
              alt="Logo"
              className="dark:invert"
              width={48}
              height={48}
              />
            </Link>
        </div>
        <div className="login-main-sec">
          <div className='login-left-sec'>
          <div className="inner-sec">
                            <h1>Get Started Now</h1>
                            <p>Enter your credentials to access your account</p>
                            <div className="login-options">
                                <Link href="javascript">
                                <Image
              src="/images/gmail-icon.png"
              alt="gmail Logo"
              className="dark:invert"
              width={21}
              height={20}
              priority
            />
                                  Log in with Google</Link>
                                <Link href="javascript"> 
                                <Image
              src="/images/ios-icon.png"
              alt="ios Logo"
              className="dark:invert"
              width={21}
              height={20}
              priority
            />
                                Log in with Apple</Link>
                            </div>
                            <div className="or-text"><span>or</span></div>
                            <form className="login-form">
                                <div className="input-items">
                                    <label>Name</label>
                                    <input type="text" name="" />
                                </div>
                                <div className="input-items">
                                    <label>Email Address</label>
                                    <input type="Email" name="" />
                                </div>
                                <div className="input-items">
                                    <label>Password</label>
                                    <input type="password" name="" />
                                </div>
                                <div className="agree-items">
                                    <input type="checkbox" name="" />
                                    <label>I agree to the Terms & Priavcy</label>
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" value="Sign up" />
                                </div>
                            </form>
                            <div className="have-account-sec">Have an account ? <Link href="javascript">Sign in</Link></div>
                        </div>

          </div>
          <div className="login-right-sec">
                        <div className="inner-sec">
                            <h2>The simplest way to do payroll for FedEx contractor</h2>
                            <p>Enter your credentials to access your account</p>
                            <Image
              src="/images/dashboard-img.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={523}
              height={442}
              priority
            />
                            
                            <div className="login-marquee">
                              <div className="track">
                              <Image
              src="/images/paychex-logo-black-and-white.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={110}
              height={20}
              priority
            />
                  <Image
              src="/images/FedEx-Logo-white.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/Stripe-logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/Google-logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/paychex-logo-black-and-white.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/FedEx-Logo-white.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/Stripe-logo.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  <Image
              src="/images/FedEx-Logo-white.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
                  
                              </div>
                            </div>
                        </div>

                    </div> 
   <div className="copyright-sec">
                <p>2023 Avakyan Capital LLC, All right Reserved</p>
            </div>
    </div>
       
   </>
  )
}
