const InputSection = ({ question, setQuestion, onAskQuestion, isLoading }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onAskQuestion()
    }
  }

  return (
    <div className="card input-section">
      <div className="card-header">
        <h2>
          <i className="fas fa-question-circle" style={{ color: 'var(--secondary)' }}></i> 
          Ask a Coding Question
        </h2>
      </div>
      <div className="card-body">
        <div className="instructions">
          <i className="fas fa-info-circle"></i>
          <div>
            <p><strong>How to use:</strong> Ask any coding-related question in any programming language. The AI is specialized to help with coding problems and concepts.</p>
            <p>For non-coding questions, responses may be unpredictable!</p>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="questionInput">
            <i className="fas fa-terminal"></i>
            Your Coding Question
          </label>
          <textarea
            id="questionInput"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., Explain closures in JavaScript, How to implement binary search in Python, What is recursion?"
          />
        </div>
        <button
          id="askButton"
          onClick={onAskQuestion}
          disabled={isLoading}
        >
          <i className="fas fa-paper-plane"></i>
          Ask Coding Instructor
        </button>
      </div>
    </div>
  )
}

export default InputSection