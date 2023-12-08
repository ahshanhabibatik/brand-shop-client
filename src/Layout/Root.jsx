
import { Outlet } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook

const Root = () => {
    const { isDarkTheme, toggleTheme } = useTheme(); // Use the useTheme hook

    const rootStyle = {
        background: isDarkTheme ? "#112245" : "#112245",
        color: isDarkTheme ? "#fff" : "#333",
    };

    return (
        <div className="mx-auto" style={rootStyle}>
             
            <Outlet />
        </div>
    );
};

export default Root;
