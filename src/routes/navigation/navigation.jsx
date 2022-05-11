import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Fragment>            
            <div>Logo</div>
            <nav>              
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
            <Outlet />            
        </Fragment>
    )
}

export default Navigation
