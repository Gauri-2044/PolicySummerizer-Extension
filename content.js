chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "inject_summary") {
    injectSummaryBox(msg.summary);
  }
});

// Helper: get visible text from page
function scrapePageText() {
  return document.body.innerText;
}

// Insert the summary box UI
function injectSummaryBox(summary) {
  let box = document.createElement("div");
  box.style.position = "fixed";
  box.style.bottom = "20px";
  box.style.right = "20px";
  box.style.width = "300px";
  box.style.padding = "15px";
  box.style.background = "white";
  box.style.border = "2px solid #4f46e5";
  box.style.borderRadius = "10px";
  box.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
  box.style.zIndex = "999999";
  box.innerHTML = `<h4>Policy Summary</h4><p>${summary}</p>`;
  document.body.appendChild(box);
}

// Allow background to request page text
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "get_page_text") {
    sendResponse(scrapePageText());
  }
});
