import { basicAuth } from "@/lib/api-authorize";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        // Parse the incoming JSON data
        const formData = await req.json();

        const message = formData.message || `${formData.propertyname}. ${formData.time?.label ?? ""}` || 'No message provided';
        const name = formData.name || '';
        const email = formData.email || '';
        const phone = formData.phone || '';

    
        // Sending request to FollowUpBoss
        const response = await fetch('https://api.followupboss.com/v1/events', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "source": "ashvaksheik.com",
              "type": "General Inquiry",
                "message": `Here is the message: ${message}`,
                "person": {
                    "firstName": name,
                    "lastName": name,
                    "emails": [{ "value": email }],
                    "phones": [{ "value": phone }]
                }
            })
        });

        // Check for response status and throw an error if not successful
        if (!response.ok) {
            const errorData = await response.json();
            console.error('FollowUpBoss API Error:', errorData);
            throw new Error(`Failed to send data to FollowUpBoss: ${response.status} ${response.statusText}`);
        }

        // If the response is okay, parse it
        const data = await response.json();
        console.log('API response:', data);

        // Send a successful response to the client
        return NextResponse.json({ message: 'Request submitted successfully!' }, { status: 200 });

    } catch (error) {
        console.error('Error processing form data:', error);
        return NextResponse.json(
            { message: 'Failed to process the form data' },
            { status: 500 }
        );
    }
};