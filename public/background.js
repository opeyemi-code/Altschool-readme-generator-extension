chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "scraped_page") {
        console.log("Received scraped content:", message.content);
    }
});