# Code Helper AI - React App

A modern React application built with Vite that serves as an interactive coding tutor powered by Google's Gemini AI.

## Features

- Interactive coding question interface
- Real-time AI responses for programming questions
- Modern, responsive design
- Welcome screen animation
- Sidebar navigation
- Support for multiple programming languages and concepts

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:

```bash
npm install
```

3. Update the API key in `src/components/MainContent.jsx`:
   - Replace `GEMINI_API_KEY` with your actual Google AI Studio API key
   - Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`




## Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.jsx    # Landing page component
│   ├── Sidebar.jsx          # Navigation sidebar
│   ├── MainContent.jsx      # Main application logic
│   ├── InputSection.jsx     # Question input form
│   └── OutputSection.jsx    # AI response display
├── App.jsx                  # Root component
├── main.jsx                 # Application entry point
└── index.css               # Global styles
```

## Usage

1. Launch the application
2. Click "Enter" on the welcome screen
3. Type your coding question in the textarea
4. Click "Ask Coding Instructor" or press Enter
5. View the AI-generated response

## Customization

- **API Configuration**: Update the `GEMINI_API_KEY` and `MODEL_NAME` in `MainContent.jsx`
- **Styling**: Modify the CSS variables in `index.css` to change colors and themes
- **System Instructions**: Adjust the AI behavior by modifying `systemInstructionText` in `MainContent.jsx`

## Technologies Used

- **React 18** - UI framework
- **Google Gemini AI** - AI response generation
- **Font Awesome** - Icons
- **CSS3** - Styling with custom properties

