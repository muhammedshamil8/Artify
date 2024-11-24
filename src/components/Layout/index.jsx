// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

    return (
        <div className="layout">
            {/* <header className="p-2 z-40"> */}
            {/* <nav>
                    <ul className='flex justify-around font-semibold'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
                        <li><Link to="/IndividualResult">Individual Result</Link></li>
                    </ul>
                </nav> */}
            {/* </header> */}

            <main className='overflow-hidden'>
                {/* style={{ minHeight: 'calc(100vh - 80px)' }} */}

                <div className='z-20 flex-1 h-full bg-[#FDFFF5]'>

                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
