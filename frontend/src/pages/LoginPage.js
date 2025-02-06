// Instead of hardcoded URLs like:
// fetch('http://localhost:8081/api/auth/login')

// Use the environment variable:
fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`)
// Or use your API configuration if you have one 