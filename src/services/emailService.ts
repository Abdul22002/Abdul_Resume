
// This is a client-side simulation of using NotificationAPI
// In a real implementation, this would be an API endpoint on your server

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

// Function to simulate sending email through a hypothetical backend API
export const sendContactEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // In a real implementation, this would call your backend API
    // which would then use NotificationAPI to send emails
    console.log('Sending email data to backend:', data);
    
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
    // In a real implementation, this would call your backend API
    console.log('Sending thank you email to:', data.email);
    
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Simulate successful response
    return true;
  } catch (error) {
    console.error('Error sending thank you email:', error);
    return false;
  }
};
