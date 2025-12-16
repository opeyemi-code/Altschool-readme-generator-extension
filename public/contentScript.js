function isValidPage() {
    const focusedContent = document.querySelector(".ld-focus-content");

    if (!focusedContent) {
        return { isValid: false, content: "" };
    }

    const content = focusedContent.innerText.toLowerCase().trim();

    const keywords = [
        "assignment", "task", "project", "exercise", "assessment",
        "activity", "homework", "challenge", "brief", "instructions",
        "rubric", "submission", "submit", "deliverable", "requirements",
        "goal", "objectives", "overview", "case study", "question",
        "prompt", "task description", "details", "readme", "grading",
        "score", "deadline", "due date", "evaluation", "criteria",
        "module task", "lesson task", "exam", "test", "quiz",
        "student task", "project description", "expected output",
        "specification", "acceptance criteria", "what you should submit"
    ];

    const matchedKeywords = keywords.filter(keyword =>
        content.includes(keyword)
    );

    const isValid = matchedKeywords.length >= 3;

    return {
        isValid,
        content: isValid ? content : ""
    };
}

/**
 * LISTEN for popup trigger
 */
chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "START_SCRAPE") {
        const result = isValidPage();

        chrome.runtime.sendMessage({
            type: "scraped_page",
            ...result,
        });
    }
});
