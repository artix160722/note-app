import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ul className="appbar">
                <li>
                    <h3>Notes App</h3>
                </li>
            </ul>
            <div className="notesApp">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;