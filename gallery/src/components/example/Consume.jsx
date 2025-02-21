import { useContext } from "react";
import { ThemeContext } from "./Provider";

const Consume = () => {
    const { theme, Theme } = useContext(ThemeContext);
    
    return (
        <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
            <p>Current Theme: {theme}</p>
            <button onClick={Theme}>Change Theme</button>
        </div>
    );
};

export default Consume;
