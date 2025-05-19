
# NotificationAPI Setup Guide

## Overview

This document explains how to properly set up NotificationAPI to send emails from your portfolio contact form.

## Important Note

The NotificationAPI SDK (`notificationapi-node-server-sdk`) is a server-side package that should be used in a backend environment, not directly in the browser. The current implementation in this project is a simulation that would need to be connected to a real backend service.

## Proper Implementation

To properly implement email notifications with NotificationAPI:

1. Create a server-side API endpoint (Node.js/Express, Serverless Function, etc.)
2. Install the NotificationAPI package on your server
3. Set up the NotificationAPI with your credentials:

```javascript
import notificationapi from 'notificationapi-node-server-sdk'

notificationapi.init(
  'm4wplzgtkvfvkvwwcr2a3q7crr',
  'fi68iw4gw85hmxugc7yu1otlysjelvydfm8xqzfr50edxpeu5n2yq7iq2i'
)
```

4. Create an endpoint that receives form data from your frontend and sends it using NotificationAPI:

```javascript
// Example Express endpoint
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Send message to portfolio owner
    await notificationapi.send({
      type: 'contact',
      to: {
        email: 'abdulalghanim476@gmail.com'
      },
      email: {
        subject: `Portfolio Contact from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      }
    });
    
    // Send thank you email to sender
    await notificationapi.send({
      type: 'welcome',
      to: {
        email: email
      },
      email: {
        subject: 'Thank you for contacting Abdullrahman Alghanim',
        html: `
          <p>Dear ${name},</p>
          <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Abdullrahman Alghanim</p>
        `
      }
    });
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});
```

5. Update your frontend to call this API endpoint instead of using the simulation.

## Required Backend Options

To implement this properly, you would need one of:

1. A Node.js server (Express, Nest.js, etc.)
2. Serverless functions (AWS Lambda, Vercel Functions, Netlify Functions)
3. A Backend-as-a-Service like Supabase Edge Functions

## Security Considerations

Never expose your NotificationAPI credentials in client-side code. Always keep them secure in server-side environments and use environment variables.
