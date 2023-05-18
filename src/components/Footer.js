import React from 'react'

export default function Footer() {
  return (
    <footer className="footer footer-bar bg-black">
    <div className="container text-foot text-center " style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    ,
    columnGap:'10px'
    }}>
        <p className="mb-0 text-white-50">© 2014 - {new Date().getFullYear()}</p> 
        |
        <span className='mt-0'>  
          <ul className="list-unstyled mb-0 mt-0 social-icon">                            
                    <li className="list-inline-item me-1"><a target="_blank" href="https://github.com/theRod15" rel='noreferrer' className="rounded-circle"><i className="mdi mdi-github-circle"></i></a></li>
                    <li className="list-inline-item me-1"><a target="_blank" href="https://www.linkedin.com/in/lopez-www" rel='noreferrer' className="rounded-circle"><i className="mdi mdi-linkedin"></i></a></li>
                </ul>
                
        </span>
       
    </div>
</footer>
  )
}
