import { useContext } from "react";
import Home from "./components/Home";
import ProcessingScreen from "./components/ProcessingScreen";
import ErrorScreen from "./components/ErrorScreen";
import GeneratedReadMeScreen from "./components/GeneratedReadMeScreen";
import DataContext, { DataProvider } from "./components/context/DataContext";

function AppContent() {
  const { homeScreen, processingScreen, errorScreen, hasContent } =
    useContext(DataContext);

  if (homeScreen) return <Home />;
  if (errorScreen) return <ErrorScreen />;
  if (processingScreen) return <ProcessingScreen />;
  if (hasContent) return <GeneratedReadMeScreen />;
}

function App() {
  return (
    <div className="w-[380px] h-[471px] bg-white">
      <DataProvider>
        <AppContent />
      </DataProvider>
    </div>
  );
}

export default App;
