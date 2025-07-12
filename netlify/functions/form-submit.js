exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, year, department, answers } = JSON.parse(event.body);

    if (!name || !email || !phone || !year || !department || !answers) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields" })
      };
    }

    // For now, just log the submission and return success
    // This allows testing without Google Sheets setup
    console.log("Form submission received:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      year,
      department,
      answers
    });
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Application submitted successfully!" })
    };
  } catch (err) {
    console.error("Submission error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to submit data" })
    };
  }
}; 