import emailjs from "@emailjs/browser";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  time: string;
}

export const sendEmail = async (data: EmailData): Promise < void > => {
  try {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);
    
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        time: data.time,
      }
    );
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
};