exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // For now, return a mock status
    // You can implement actual status checking logic here
    const status = {
      isOpen: true,
      deadline: "2024-12-31",
      message: "Applications are currently open!"
    };
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(status)
    };
  } catch (err) {
    console.error("Status check error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to check status" })
    };
  }
}; 