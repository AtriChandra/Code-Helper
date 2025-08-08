import { useState, useEffect } from 'react'
import InputSection from './InputSection'
import OutputSection from './OutputSection'

const MainContent = () => {
  const [question, setQuestion] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
  const MODEL_NAME = "gemini-2.5-flash"

  const systemInstructionText = `
You are a focused and knowledgeable Coding Instructor. Your job is to answer only programming-related questions, including topics like debugging, algorithms, data structures, system design, software development, and related technologies.

Your behavior should follow these rules:

1. If the user asks a **coding-related** question:
   - Respond in a clear, detailed, and structured manner.
   - Use examples, code snippets, and explanations to help the user understand the concept.
   - Be professional, patient, and supportive — like a good teacher.

2. If the user asks a question **not related to coding**:
   - Reply briefly and disinterestedly, as if you don't know or care about the topic.
   - Do not attempt to be helpful, redirect the user, or engage in non-coding topics.
   - Remain in character — someone who only understands and communicates about code.

Do not break this behavior. Stay in your role as a coding-only assistant at all times.
`

  const handleAskQuestion = async () => {
    if (!question.trim()) {
      setOutput('<div class="error-message"><i class="fas fa-exclamation-circle"></i> Please enter a coding question first!</div>')
      return
    }

    setOutput('')
    setIsLoading(true)

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`

    const requestBody = {
      contents: [
        {
          role: "user",
          parts: [
            { text: question }
          ]
        }
      ],
      systemInstruction: {
        parts: [
          { text: systemInstructionText }
        ]
      }
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        let errorMsg = `API Error: ${response.status}`
        let errorDetails = "Could not retrieve error details."
        try {
          const errorData = await response.json()
          if (errorData.error && errorData.error.message) {
            errorDetails = errorData.error.message
          }
          errorMsg = `${errorMsg} - ${errorDetails}`
          if (errorData.error && errorData.error.status) {
            errorMsg += ` (Status: ${errorData.error.status})`
          }
          if (
            errorDetails.toLowerCase().includes("api key not valid") ||
            errorDetails.toLowerCase().includes("permission denied")
          ) {
            errorMsg += "<br><strong>Please double-check your API key and ensure it's correctly enabled for the Gemini API in your Google Cloud Console or AI Studio.</strong>"
          }
        } catch (parseError) {
          errorMsg = `${errorMsg} (Could not parse error response: ${response.statusText})`
        }
        throw new Error(errorMsg)
      }

      const data = await response.json()

      if (
        data.candidates && data.candidates.length > 0 &&
        data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0
      ) {
        const answerText = data.candidates[0].content.parts[0].text
        let formattedText = answerText
        formattedText = formattedText.replace(/```([\s\S]*?)```|`([^`]+)`/g, (match, p1, p2) => {
          if (p1 !== undefined) {
            return `<pre><code>${p1}</code></pre>`
          } else if (p2 !== undefined) {
            return `<code>${p2}</code>`
          }
          return match
        })

        const paragraphs = formattedText.split('\n\n')
        let htmlOutput = ''

        for (const paragraph of paragraphs) {
          if (paragraph.trim() !== '') {
            htmlOutput += `<p>${paragraph}</p>`
          }
        }

        setOutput(htmlOutput)
      } else if (data.promptFeedback && data.promptFeedback.blockReason) {
        setOutput(`<div class="error-message"><i class="fas fa-ban"></i> Blocked due to: ${data.promptFeedback.blockReason}. Details: ${data.promptFeedback.blockReasonMessage || ''}</div>`)
      } else {
        console.warn("Unexpected response structure:", data)
        setOutput('<div class="error-message"><i class="fas fa-exclamation-triangle"></i> Received an unexpected response structure from the AI.</div>')
      }

    } catch (error) {
      console.error('Frontend Error:', error)
      setOutput(`<div class="error-message"><i class="fas fa-bug"></i> Failed to get answer: ${error.message}</div>`)
    } finally {
      setIsLoading(false)
    }
  }

  // Set initial output after component mounts
  useEffect(() => {
    setTimeout(() => {
      setOutput(`
        <p><strong>Welcome to Coding Instructor AI!</strong> I'm here to help you with any programming questions you have.</p>
        <p>Here's an example of how I can help:</p>
        <p><strong>Question:</strong> What is a closure in JavaScript?</p>
        <p><strong>Answer:</strong> A closure is a function that retains access to variables from its outer (enclosing) scope even after the outer function has finished executing. This happens because the inner function maintains a reference to its lexical environment.</p>
        <p>Example:</p>
        <pre><code>function outer() {
 const outerVar = 'I am outside!';
 
 function inner() {
   console.log(outerVar); // Accesses outerVar from outer function's scope
 }
 
 return inner;
}

const myInner = outer();
myInner(); // Logs "I am outside!"</code></pre>
        <p>In this example, <code>inner()</code> is a closure that "closes over" the <code>outerVar</code> variable.</p>
      `)
    }, 2000)
  }, [])

  return (
    <div className="main-content">
      <div className="header">
        <h1>Code Helper AI</h1>
      </div>
      <div className="dashboard">
        <InputSection
          question={question}
          setQuestion={setQuestion}
          onAskQuestion={handleAskQuestion}
          isLoading={isLoading}
        />
        <OutputSection output={output} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default MainContent