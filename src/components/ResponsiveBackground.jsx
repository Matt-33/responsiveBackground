import { useState, useEffect } from "react";
import "./ResponsiveBackground.css";

export function ResponsiveBackground() {
  const [bgColor, setBgColor] = useState("#ADD8E6");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth >= 800) {
        setBgColor("#ADD8E6");
      } else {
        setBgColor("#FFC0CB");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="responsive-background" style={{ backgroundColor: bgColor }}>
      <h1>Largeur de la fenêtre : {windowWidth}px</h1>
      <p>La couleur d'arrière-plan change en fonction de la largeur.</p>
    </div>
  );
}
