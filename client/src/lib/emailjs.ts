declare global {
  interface Window {
    emailjs: any;
  }
}

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise < void > => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.emailjs) {
      console.log("Email simulation:", data);
      setTimeout(() => resolve(), 1000);
      return;
    }
    
    window.emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => resolve())
      .catch((error: any) => reject(error));
  });
};