# 🔐 Policy Summarizer – Chrome Extension
A Chrome extension that helps users understand Privacy Policies & Terms & Conditions instead of blindly clicking “I Agree” every time.

## 📌 Problem Statement

In today’s digital world, most users ignore Privacy Policies and T&C because:

- They are **too long**
- Written in **complex legal language**
- Time-consuming to read

Blindly agreeing can be **dangerous**:

- Your personal data may be collected, shared, or sold
- You may unknowingly give permissions you wouldn’t normally allow
- Hidden risks and red flags often go unnoticed
 Hidden risks and red flags often go unnoticed

## 💡 Solution

Policy Summarizer solves this problem by:
Detecting policy / terms pages
Summarizing them using AI

Clearly explaining:

- ✅ What data is collected
- 📍 Where your data is used/shared
- ⚠️ Potential risks & red flags
- 👍 Safe or user-friendly practices
All this is shown directly on the same page, so users can make informed decisions before agreeing.

## ✨ Key Features

- 🔍 Detects Privacy Policy & T&C pages
- 🧠 AI-powered summarization using OpenAI
- 📋 Bullet-point summaries (easy to read)
- 🪟 Floating summary box (bottom-right)
- 🖱 One-click “Summarize This Page” popup
- 🎨 Clean, modern UI


## 🛠 Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)
![OpenAI API](https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white)
![AI](https://img.shields.io/badge/AI-GPT%203.5-orange?style=for-the-badge&logo=openai&logoColor=white)
![Privacy](https://img.shields.io/badge/Privacy-Tools-blue?style=for-the-badge&logo=privacyidea&logoColor=white)

## 🔄 How It Works

1. User opens a Privacy Policy / Terms page
2. Extension extracts visible page text
3. Text is sent to OpenAI GPT model
4. AI generates a clear summary:
   - What data is collected
   - How it is used
   - Risks & red flags
5. A floating summary box appears on the page
6. User reads & decides whether to agree


📁 Folder Structure
``bash
PolicySummarizer_Extension/
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── popup.css
│── icons/
``

## 💻 Run Locally
```bash
git clone https://github.com/your-username/policy-summarizer-extension.git
```

Add your OpenAI API key in content.js

- Open chrome://extensions/
- Enable Developer Mode
- Click Load Unpacked
- Select the extension folder
- Visit any Privacy Policy page
- Click Summarize This Page

## 📸 Screenshots

### Extension in Chrome toolbar
![Extension in Chrome toolbar](Extension_in_chrome2.png)

### Popup UI
![Popup UI](popup_ui.png)


## 🧠 What I Learned

- Chrome Extension architecture (Manifest V3)
- Content scripts & background scripts
- DOM text extraction
- OpenAI API integration
- Injecting UI elements into live webpages
- Building user-centric privacy tools

## 🚀 Future Improvements

- Multi-language support
- Auto-summarization
- Short / detailed summary modes
- Export summary (PDF / Email)

Local caching for repeated pages

## 🤝 Open for Contribution

Contributions are welcome!
Ideas, bug fixes, UI improvements, and feature enhancements are appreciated 🚀
