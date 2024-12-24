import { useEffect } from "react";
import "./App.css";
import IdeationScrollAnimation from "./components/Motion/IdeationScroll/IdeationScrollAnimation";
import ScrollTextEffect from "./components/Motion/ScrollTextEffect/ScrollTextEffect";
import MotionNew from "./components/Motion/ScrollingDynamic/MotionNew";
import ScrollVelocity from "./components/Motion/Velocity/ScrollVelocity";
import DynamicFooter from "./components/Motion/Footer/DynamicFooter";

function App() {
  useEffect(() => {
    const disableZoomWithScroll = (event: any) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", disableZoomWithScroll, { passive: false });

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("wheel", disableZoomWithScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100vh", background: "f4f4f4" }}>
        <p>Contenido adicional para probar el scroll...</p>
      </div>
      {/* <IdeationScrollAnimation /> */}
      <div style={{ height: "100vh", background: "black" }}>
        <MotionNew />
      </div>
      {/* <ScrollVelocity /> */}
      {/* <ScrollTextEffect /> */}
      <DynamicFooter />

      <div style={{ height: "100vh", background: "#f4f4f4" }}>
        <p color="black">Contenido adicional para probar el scroll...</p>
      </div>
    </>
  );
}

export default App;
