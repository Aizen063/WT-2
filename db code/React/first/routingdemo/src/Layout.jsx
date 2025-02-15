import React from 'react';

import { Outlet} from "react-router-dom";
import Header from './Header';


function Layout(){
    return (
       <>
       <div>
        <div className="Container">
            <div className="row">
                <div className="col">
                    <Header />
                    <div className="row">
                    <div className="col-3 border border-primary p-3 text-center">
                    </div>
                    <div className="col p-3"></div>
                    <Outlet/>
       </div>
       </div>
       </div>
       </div>
       </div>
       </>
    )
}

export default Layout;