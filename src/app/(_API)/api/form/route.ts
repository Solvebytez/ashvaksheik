import { basicAuth } from "@/lib/api-authorize";
import { NextResponse } from "next/server";



export const POST = async (req: Request) => {

    try {
        // Parse the incoming JSON data
        const formData = await req.json();   

        const message = formData.message || `${formData.propertyname}. ${formData.time??""}` || 'No message provided';
        const name = formData.name || '';
        const email = formData.email || '';
        const phone = formData.phone || '';

        const response = await fetch(`https://api.followupboss.com/v1/events`,{
            method: 'POST',
            headers: {
                'Authorization': `Basic ${basicAuth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({        
                "message": `Here is the message: ${message}`,
                "person": {
                    "firstName": `${name}`,
                    "lastName":  `${name}`,
                    "emails": [{"value": `${email}`}],
                    "phones": [{"value": `${phone}`}]
                }
            })
        })
        const data = await response.json();
        console.log('API response:', data);

        if (!response.ok) {
           throw new Error(`Failed to fetch data: ${response.status}`);
          }
    
        // Handle the form data as needed (e.g., save to a database, send an email, etc.)
    
        // Send a successful response
        return NextResponse.json({ message: 'Request submitted successfully!' },{status: 200 });
      } catch (error) {
        console.error('Error processing form data:', error);
        // Send an error response
        return NextResponse.json(
          { message: 'Failed to process the form data' },
          { status: 500 }
        );
      }
   
   
}