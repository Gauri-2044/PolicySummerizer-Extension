// ⚠️ Put your API key here
const OPENAI_API_KEY = "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";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "scrape_and_summarize") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "get_page_text" }, async (pageText) => {
        if (!pageText) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "inject_summary", summary: "No policy text found." });
          return;
        }

        let summary = await summarizeWithOpenAI(pageText);

        chrome.tabs.sendMessage(tabs[0].id, {
          action: "inject_summary",
          summary: summary || "Could not generate summary."
        });
      });
    });
  }
});

async function summarizeWithOpenAI(text) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful assistant that summarizes privacy policies." },
          { role: "user", content: `Summarize the following privacy policy in 5 bullet points:\n\n${text.substring(0, 4000)}` }
        ],
        max_tokens: 250
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim();
  } catch (err) {
    console.error("OpenAI API error:", err);
    return null;
  }
}
