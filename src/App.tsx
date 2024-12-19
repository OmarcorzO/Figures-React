import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IdeationScrollAnimation from "./components/IdeationScrollAnimation";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const disableZoomWithScroll = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', disableZoomWithScroll, { passive: false });

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('wheel', disableZoomWithScroll);
    };
  }, []);

  return (
    <>
      <IdeationScrollAnimation />
      <div style={{ height: "100vh", background: "#f4f4f4" }}>
        <p>Contenido adicional para probar el scroll...</p>
      </div>
    </>
  );
}

export default App;
