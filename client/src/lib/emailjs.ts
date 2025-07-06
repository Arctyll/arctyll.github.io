declare global {
  interface Window {
    emailjs: any;
  }
}

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.emailjs) {
      // For development/demo, simulate success
      console.log('Email simulation:', data);
      setTimeout(() => resolve(), 1000);
      return;
    }

    // Initialize EmailJS with your public key
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || "service_id";
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || "template_id";

    window.emailjs.init(publicKey);

    window.emailjs.send(serviceId, templateId, {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: "arctyllofficial@gmail.com"
    }).then(
      () => {
        resolve();
      },
      (error: any) => {
        console.error('EmailJS error:', error);
        reject(error);
      }
    );
  });
};
