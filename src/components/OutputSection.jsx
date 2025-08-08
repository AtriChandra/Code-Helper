const OutputSection = ({ output, isLoading }) => {
  return (
    <div className="card output-section">
      <div className="card-header">
        <h2>
          <i className="fas fa-graduation-cap" style={{ color: 'var(--success)' }}></i> 
          Instructor's Response
        </h2>
      </div>
      <div className="card-body">
        <div className={`loading-indicator ${isLoading ? 'show' : ''}`} id="loadingIndicator">
          <div className="spinner"></div>
          <p>Analyzing your question and preparing the best explanation...</p>
        </div>
        <div className="output-container">
          <div 
            id="outputArea" 
            dangerouslySetInnerHTML={{ 
              __html: output || `
                <p>Welcome to Coding Instructor AI! I'm here to help you with any programming questions you have.</p>
                <p>Ask me about:</p>
                <ul>
                  <li>Programming concepts (OOP, recursion, closures)</li>
                  <li>Language-specific questions (JavaScript, Python, Java)</li>
                  <li>Algorithm explanations</li>
                  <li>Code debugging</li>
                  <li>Best practices</li>
                </ul>
                <p>Try asking: <code>"Explain how promises work in JavaScript"</code> or <code>"Show me a Python implementation of quicksort"</code></p>
              `
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OutputSection