import Navbar from "../components/Navbar";

const Layout = ({children}) => {

    return (
        <div>
            <Navbar/>
            <div className="mt-[71px]">
                  {children}
            </div>
        </div>       
    )
};

export default Layout;