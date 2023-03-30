export async function submitJoinForm(formData: {
  data: {
    email: string;
    gitHubLink: string;
    firstName: string;
  } | null;
}): Promise<any> {
  const QUERY = `https://squid-app-7h5w9.ondigitalocean.app/api/community-requests`;
  const PUBLIC_API_KEY =
    "60ddbbc1a6a0a0680db682785fea02eafe51cd448b12fd4aeabe5b1b8d3b8b9f1a5bb29fda748c158a1dfc738af78c4bdb1ea680b3b33aebcf138f1e0f6007fccb9c4b0da00dd2533d661289d134cb409e9633af0010019c0890809dd219339b53b5208d68d999a946b693c10002cedc8dbb02086ddb5f6c039b5d8b1e68ab46";

  try {
    return await fetch(QUERY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PUBLIC_API_KEY}`,
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    return { error };
  }
}
