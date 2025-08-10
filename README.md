# Code Helper AI

**Code Helper AI** is a modern React web application that helps users learn programming concepts, debug code, and solve coding challenges in any programming language. Powered by Google Gemini AI, users can ask programming questions and receive structured, example-rich answers instantly with a sleek, responsive interface.
 
<img width="1918" height="910" alt="image" src="https://github.com/user-attachments/assets/ad25db95-169f-427c-bf90-e82a20e5438a" />


--- 

## ✨ Features

- **Modern React Architecture:** Built with React 18 and Vite for optimal performance and development experience
- **Component-Based Design:** Modular, maintainable components with proper state management
- **AI-Powered Coding Instructor:** Answers coding questions with clear explanations, code snippets, and best practices
- **Responsive & Accessible:** Perfect experience across desktops, tablets, and mobile devices

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- A **Google Gemini API Key** (get yours from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AtriChandra/Code-Helper.git
   cd Code-Helper

   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory
   - Add your API key:
     ```
     VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
     ```
   - **Important:** Never commit your `.env` file to version control

### Running Locally

```bash
# Start development server
npm run dev

# Open your browser to http://localhost:5173
```



---

## 🖥️ Project Structure

| File/Folder                   | Purpose                                                           |
|-------------------------------|-------------------------------------------------------------------|
| `src/App.jsx`                 | Root component managing welcome screen and main application       |
| `src/main.jsx`                | Application entry point with React DOM rendering                  |
| `src/index.css`               | Global styles with CSS custom properties and responsive design    |
| `src/components/WelcomeScreen.jsx` | Animated landing page component                              |
| `src/components/Sidebar.jsx`  | Navigation sidebar with menu items and branding                   |
| `src/components/MainContent.jsx` | Core application logic and Gemini AI integration              |
| `src/components/InputSection.jsx` | Question input form with validation and keyboard shortcuts    |
| `src/components/OutputSection.jsx` | AI response display with formatted code highlighting        |
| `package.json`                | Project dependencies and build scripts                            |
| `vite.config.js`              | Vite configuration for development and build                      |
| `.env`                        | Environment variables (not tracked in Git)                        |
| `.gitignore`                  | Excludes sensitive files and build outputs from Git               |

---

## 🧑‍💻 Usage

1. **Welcome Screen:** On first load, enjoy the smooth welcome animation
2. **Ask Questions:** Type any coding-related question in the input area:
   - *"Explain closures in JavaScript"*
   - *"How to implement binary search in Python?"*
   - *"What are React hooks and how do they work?"*
3. **Submit:** Click **Ask Coding Instructor** or press **Enter**
4. **Get Answers:** View comprehensive responses with:
   - Clear explanations and concepts
   - Working code examples
   - Best practices and tips
   - Proper syntax highlighting

---

## 🔒 Security & Deployment

### Development Security
- ✅ API keys stored in `.env` file (excluded from Git)
- ✅ Environment variables properly configured for Vite
- ✅ No hardcoded secrets in source code


---

## ⚡ Technologies Used

- **Frontend Framework:** React 18 with modern hooks and functional components
- **Build Tool:** Vite for lightning-fast development and optimized builds
- **Styling:** CSS3 with custom properties, Flexbox, Grid, and responsive design
- **Icons:** Font Awesome 6 for beautiful, scalable icons
- **AI Integration:** Google Gemini API for intelligent code assistance


