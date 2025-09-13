import emailjs from '@emailjs/browser';

// Configuration EmailJS - Variables d'environnement
const EMAIL_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_default'
};

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Initialize EmailJS (only needed once)
    emailjs.init(EMAIL_CONFIG.publicKey);

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: 'Malaury',
      to_email: 'boudonmalaury@gmail.com',
    };

    const response = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email envoyé avec succès!'
      };
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Erreur lors de l\'envoi. Veuillez réessayer.'
    };
  }
};