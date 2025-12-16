import { createContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [homeScreen, setHomeScreen] = useState(true);
  const [processingScreen, setProcessingScreen] = useState(false);
  const [errorScreen, setErrorScreen] = useState(false);
  const [hasContent, setHasContent] = useState(false);
  const [scrapedContent, setScrapedContent] = useState("");
  const [scrapeRequested, setScrapeRequested] = useState(false);

  useEffect(() => {
    if (!scrapeRequested) return;

    const listener = (message) => {
      if (message.type !== "scraped_page") return;

      if (message.isValid) {
        setHasContent(true);
        setScrapedContent(message.content);

        setHomeScreen(false);
        setProcessingScreen(true);
        setErrorScreen(false);
      } else {
        setHasContent(false);

        setHomeScreen(false);
        setProcessingScreen(false);
        setErrorScreen(true);
      }

      // reset flag after handling
      setScrapeRequested(false);
    };

    chrome.runtime.onMessage.addListener(listener);

    return () => {
      chrome.runtime.onMessage.removeListener(listener);
    };
  }, [scrapeRequested]);

  function handleClick() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      console.log(tab);

      // No tab or invalid URL
      if (!tab || !tab.url) {
        showError();
        return;
      }

      // Not AltSchool LMS
      if (!tab.url.startsWith("https://learn.altschoolafrica.com")) {
        showError();
        return;
      }

      // Valid website → request scraping
      setHomeScreen(false);
      setProcessingScreen(true);
      setErrorScreen(false);
      setScrapeRequested(true);

      chrome.tabs.sendMessage(tab.id, {
        type: "START_SCRAPE",
      });
    });
  }

  function showError() {
    setHomeScreen(false);
    setProcessingScreen(false);
    setErrorScreen(true);
  }

  return (
    <DataContext.Provider
      value={{
        homeScreen,
        setHomeScreen,
        processingScreen,
        setProcessingScreen,
        errorScreen,
        setErrorScreen,
        hasContent,
        scrapedContent,
        setScrapedContent,
        handleClick,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
