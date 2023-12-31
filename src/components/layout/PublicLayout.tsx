import { Outlet } from "react-router-dom";
import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";

const PublicLayout=()=>{
    return(
        <div>
            <PublicHeader />
            <main className="container">
                <Outlet/>
            </main>
            <PublicFooter />
        </div>
    );
};

export default PublicLayout;