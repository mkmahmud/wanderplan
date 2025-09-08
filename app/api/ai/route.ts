import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const { destination } = await request.json();

    // Check if destination exists
    if (!destination) {
        return new Response(JSON.stringify({ error: 'Destination is required' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    try {
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'gpt-4', // or use a different chat-based model, e.g., 'gpt-3.5-turbo'
                messages: [
                    { role: 'system', content: 'You are a helpful travel assistant.' },
                    { role: 'user', content: `I want to tour in  ${destination}  from Dhaka Bangladesh date is 10 September to 15 September give me best option To transport and give me respons as JSON ` },
                ],
                max_tokens: 500,
            }),
        });

        // Check if OpenAI API returns an error
        if (!openaiResponse.ok) {
            const errorData = await openaiResponse.json();
            console.error('OpenAI API error:', errorData);
            return new Response(JSON.stringify({ error: 'Failed to fetch AI recommendation' }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        const data = await openaiResponse.json();

        return new Response(JSON.stringify({ recommendation: data.choices[0].message }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.error('Server error:', err);
        return new Response(JSON.stringify({ error: 'Server error' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
