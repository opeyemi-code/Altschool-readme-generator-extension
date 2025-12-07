import ErrorScreen from "./components/ErrorScreen";
import GeneratedReadMeScreen from "./components/GeneratedReadMeScreen";
import Home from "./components/Home";
import ProcessingScreen from "./components/ProcessingScreen";

function App() {
  return (
    <>
      <div className="w-[380] h-[471] bg-white">
        {/* <Home /> */}
        {/* <ProcessingScreen /> */}
        {/* <GeneratedReadMeScreen /> */}
        <ErrorScreen />
      </div>
    </>
  );
}

export default App;
