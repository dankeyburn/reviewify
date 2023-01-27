import React, { useEffect } from "react";
import { Button, ModalBody } from "react-bootstrap";
import "./Styles.css";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    const [selected, setSelected] = useState(false);
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(darkTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            document.getElementById("dark-logo").style.display = "none";
            document.getElementById("light-logo").style.display = "flex";
            document.getElementById("dark-nav-logo").style.display = "flex";
            document.getElementById("light-nav-logo").style.display = "none";
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            document.getElementById("dark-logo").style.display = "flex";
            document.getElementById("light-logo").style.display = "none";
            document.getElementById("dark-nav-logo").style.display = "none";
            document.getElementById("light-nav-logo").style.display = "flex";
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };
    useEffect(() => {
        if (theme === "dark") {
            setSelected(false);
        } else {
            setSelected(true);
        }
    }, [theme]);

    return (
        <>
            {" "}
            <ToggleButton
                current_theme={theme}
                selected={selected}
                toggleSelected={(e) => {
                    setSelected(!selected);
                    switchTheme(e);
                }}
                className={theme === "dark" ? clickedClass : ""}
                id="darkMode"
                onClick={(e) => switchTheme(e)}
            />
        </>
    );
};

export default DarkMode;
