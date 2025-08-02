import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import sgMail from '@sendgrid/mail';

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      // Check if SendGrid API key is available
      const sendgridApiKey = process.env.SENDGRID_API_KEY;
      if (!sendgridApiKey) {
        console.log('SendGrid API key not found. Message would be sent to: kanhiyas135@gmail.com');
        console.log('From:', name, '<' + email + '>');
        console.log('Message:', message);
        
        return res.status(200).json({ 
          message: 'Message received successfully. Please provide SENDGRID_API_KEY to enable email sending.' 
        });
      }

      // Log the email attempt for debugging
      console.log(`📧 Attempting to send email from contact form:`);
      console.log(`   From: ${name} <${email}>`);
      console.log(`   To: kanhiyas135@gmail.com`);
      console.log(`   Subject: Portfolio Contact: Message from ${name}`);
      console.log(`   Message: ${message.substring(0, 100)}...`);

      // Configure SendGrid
      sgMail.setApiKey(sendgridApiKey);

      // Email content - using a simple verified sender approach
      const emailContent = {
        to: 'kanhiyas135@gmail.com',
        from: 'kanhiyas135@gmail.com', // Use the same email as sender for now
        subject: `Portfolio Contact: Message from ${name}`,
        text: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
        html: `
          <h3>New Portfolio Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      };

      const result = await sgMail.send(emailContent);
      console.log('SendGrid response:', result[0].statusCode, result[0].headers);
      
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      
      // More detailed error logging
      if (error.response) {
        console.error('SendGrid error body:', error.response.body);
        console.error('SendGrid error status:', error.response.status);
      }
      
      res.status(500).json({ 
        error: 'Failed to send message',
        details: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
