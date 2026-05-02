export async function POST(req) {
  try {
    const { name, email } = await req.json();

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      return Response.json(
        { error: "Missing Mailchimp environment variables" },
        { status: 500 }
      );
    }

    const DC = API_KEY.split("-")[1];

    const response = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name || "",
          },
        }),
      }
    );

    const data = await response.json();

    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
