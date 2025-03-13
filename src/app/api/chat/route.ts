import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { messages, personalInfo } = await request.json();

    // Create a system message with information about you
    const systemMessage = {
      role: 'system',
      content: `You are an AI assistant for ${personalInfo.name}, a ${personalInfo.age}-year-old software developer from ${personalInfo.country}. 
      Answer questions about ${personalInfo.name} based on the following information:
      
      Personal Information:
      - Name: ${personalInfo.name}
      - Age: ${personalInfo.age}
      - Country: ${personalInfo.country}
      
      Work Experience:
      - Software Development Intern & Teaching Assistant at Sigma School (Oct 2024 - Jan 2025)
      
      Education:
      - Bachelor of Science in Software Engineering at Asia Pacific University (March 2025 - Present)
      - Diploma in Information & Communication Technology at Asia Pacific University (Sep 2022 - Feb 2025)
      
      Skills: JavaScript, TypeScript, React, Next.js, Solidity, HTML, CSS, Tailwind CSS, MySQL
      
      Projects:
      1. Data.Auc - A decentralized data marketplace with bidding system
      2. MAP Mak Mak - A decentralized location-based bounty system
      3. AIquidity - An AI agent for managing portfolio and executing smart contract transactions
      
      Only answer questions related to ${personalInfo.name}'s background, skills, projects, and professional information. 
      For any questions outside this scope, politely explain that you can only provide information about ${personalInfo.name}.
      Keep responses concise and friendly.`
    };

    // Filter out only the last few messages to save tokens
    const recentMessages = messages.slice(-5);

    // Prepare the messages for the API call
    const apiMessages = [
      systemMessage,
      ...recentMessages
    ];

    // Call the OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: apiMessages,
      max_tokens: 300,
    });

    // Extract the assistant's response
    const responseMessage = completion.choices[0].message.content;

    return NextResponse.json({ message: responseMessage });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 