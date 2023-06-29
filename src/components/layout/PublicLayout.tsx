import PublicFooter from "./PublicFooter";
import PublicHeader from "./PublicHeader";

const PublicLayout=()=>{
    return(
        <div>
            <PublicHeader />
            <main className="container"></main>
            <PublicFooter />
        </div>
    );
};

export default PublicLayout;