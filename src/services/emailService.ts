
// This is a client-side simulation of using NotificationAPI
// In a real implementation, this would be an API endpoint on your server

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// NotificationAPI credentials (in a real app, these would be on the server)
const notificationApiClientId = 'm4wplzgtkvfvkvwwcr2a3q7crr';
const notificationApiClientSecret = 'fi68iw4gw85hmxugc7yu1otlysjelvydfm8xqzfr50edxpeu5n2yq7iq2i';
const portfolioOwnerEmail = 'abdulalghanim476@gmail.com';

// Function to simulate sending email through a hypothetical backend API
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Simulating NotificationAPI contact email to portfolio owner:', {
      type: 'contact',
      to: { email: portfolioOwnerEmail },
      email: {
        subject: `Portfolio Contact from ${data.name}`,
        html: `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      }
    });
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful response
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Function to simulate sending a thank you email
export const sendThankYouEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log('Simulating NotificationAPI thank you email to:', data.email, {
      type: 'welcome',
      to: { email: data.email },
      email: {
        subject: 'Thank you for contacting Abdullrahman Alghanim',
        html: `
          <p>Dear ${data.name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Abdullrahman Alghanim</p>
        `
      }
    });
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate successful response
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
};

// For readability, the actual implementation in a real project would require a backend
// service that uses the NotificationAPI SDK:
/*
import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init(notificationApiClientId, notificationApiClientSecret);

export const sendRealContactEmail = async (data: EmailData): Promise<any> => {
  return notificationapi.send({
    type: 'contact',
    to: { email: portfolioOwnerEmail },
    email: {
      subject: `Portfolio Contact from ${data.name}`,
      html: `<p><strong>Name:</strong> ${data.name}</p>
             <p><strong>Email:</strong> ${data.email}</p>
             <p><strong>Message:</strong></p>
             <p>${data.message}</p>`
    }
  });
};

export const sendRealThankYouEmail = async (data: EmailData): Promise<any> => {
  return notificationapi.send({
    type: 'welcome',
    to: { email: data.email },
    email: {
      subject: 'Thank you for contacting Abdullrahman Alghanim',
      html: `<p>Dear ${data.name},</p>
             <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
             <p>Best regards,<br>Abdullrahman Alghanim</p>`
    }
  });
};
*/

