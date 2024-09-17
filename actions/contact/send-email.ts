export const sendEmail = async (
  name: string,
  email: string,
  phone: string,
  message: string,
  company?: string
) => {
  try {
    const response = await fetch(`/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message, company }),
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
