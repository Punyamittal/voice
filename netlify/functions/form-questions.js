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
    const { dept } = event.queryStringParameters || {};

    if (!dept) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Department parameter is required" })
      };
    }

    // Mock questions based on department
    const questions = {
      "Content": [
        "What experience do you have in content creation?",
        "How would you approach creating engaging content for our audience?",
        "What topics are you most passionate about discussing?"
      ],
      "Technical": [
        "What technical skills do you bring to the team?",
        "How would you handle technical challenges in broadcasting?",
        "What experience do you have with audio/video equipment?"
      ],
      "Design": [
        "What design tools are you proficient with?",
        "How would you approach creating visual content for our brand?",
        "What's your creative process for design projects?"
      ],
      "HR": [
        "How would you approach team building and conflict resolution?",
        "What experience do you have in event organization?",
        "How would you ensure smooth communication within the team?"
      ]
    };

    const departmentQuestions = questions[dept] || [
      "Why do you want to join this department?",
      "What skills can you contribute?",
      "How do you handle challenges?"
    ];
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ questions: departmentQuestions })
    };
  } catch (err) {
    console.error("Questions error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to fetch questions" })
    };
  }
}; 