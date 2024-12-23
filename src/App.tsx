import { useEffect } from "react";
import "./App.css";
import IdeationScrollAnimation from "./components/IdeationScrollAnimation";
import ScrollTextEffect from "./components/ScrollTextEffect";
import MotionNew from "./components/Motion/MotionNew";
import ScrollVelocity from "./components/Motion/Velocity/ScrollVelocity";

function App() {
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
      {/* <IdeationScrollAnimation /> */}
      
        {/* <MotionNew /> */}
        <ScrollVelocity />
      
      {/* <ScrollTextEffect /> */}
      <div style={{ height: "100vh", background: "#f4f4f4" }}>
        <p>Contenido adicional para probar el scroll...</p>
      </div>
    </>
  );
}

export default App;
