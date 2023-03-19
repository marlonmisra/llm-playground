const apiKeyOpenAi = process.env.OPENAI_API_KEY;


async function searchOpenAi(query: string): Promise<any> {
  const response = await fetch('https://api.openai.com/v1/engines/davinci/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKeyOpenAi}`
    },
    body: JSON.stringify({
      query,
      documents: [],
      max_rerank: 200,
      return_metadata: true
    })
  });

  const data = await response.json();
  return data;
}

export {searchOpenAi};

// Test the searchOpenAI function
console.log(apiKeyOpenAi);