import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Chat is not configured right now.' },
        { status: 503 }
      );
    }

    // Initialize the OpenAI client per request so the build never
    // depends on the key being present at collection time.
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

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
      - Product Engineer at Bundie, a DeFi startup (Jan 2026 - Jul 2026): built the Bundie mobile app bringing DeFi yield strategies to mobile, developed yield automation features, and revamped the web frontend.
      - Software Engineering Intern at Hata, a cryptocurrency exchange (Jan 2026 - Apr 2026): built RESTful APIs in Go and Gin for trading wallet operations (improving processing efficiency by 20%+), a Kafka-based push notification system scaled to 200,000+ users, and an internal profit reconciliation system.

      Education:
      - Bachelor of Science (Hons) in Software Engineering at Asia Pacific University (March 2025 - Present)
      - Diploma in ICT, specialism in Interactive Technology, at Asia Pacific University (Sep 2022 - Feb 2025)

      Technical Skills:
      - Languages: JavaScript, TypeScript, Go, Python, Java, Rust, SQL
      - Frameworks: React, Next.js, React Native, Node.js, Gin
      - Tools: Git, Linux, Docker, GitHub Actions, Kubernetes, GCP, Kafka
      - Databases: MySQL, PostgreSQL

      Projects:
      1. YumeProof - A Kotlin Android app with Rust (Uniffi) for secure device attestation, using Google Play Integrity, Confidential VMs, on-chain DIDs and IOTA Notarization.
      2. ENSPin - A TypeScript/Node.js service that monitors ENS resolver contracts and continuously pins IPFS content (Docker, Next.js), reducing ENS content expiration by 70% for prototype users.
      3. Jobier - A responsive React frontend that automated 500+ job applications via AI integration, built with a cross-functional team of 6.

      Leadership: President of the APU Blockchain & Cryptocurrency Club (APUBCC), leading 300+ members.
      Achievements: 1st Place at IOTA Hackathon Malaysia 2025, Best ENS Infrastructure at ETHGlobal Taipei 2025, 2nd Place (Citrea Track) at Encode University Hackathon.
      
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