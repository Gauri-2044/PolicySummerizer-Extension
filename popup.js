document.getElementById("summarizeBtn").addEventListener("click", async () => {
  document.getElementById("status").innerText = "Summarizing...";

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      function: scrapeAndSummarize
    },
    (injectionResults) => {
      if (chrome.runtime.lastError) {
        document.getElementById("status").innerText = "Error: " + chrome.runtime.lastError.message;
      } else {
        document.getElementById("status").innerText = "Summary injected on page!";
      }
    }
  );
});

function scrapeAndSummarize() {
  chrome.runtime.sendMessage({ action: "scrape_and_summarize" });
}
