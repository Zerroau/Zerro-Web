export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await fetch(`/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return await response.json();
    }

    return null;
  } catch (error) {
    console.error(error);

    return null;
  }
};
