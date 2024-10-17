const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get('https://www.boredapi.com/api/activity');
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching activity' })
    };
  }
}
