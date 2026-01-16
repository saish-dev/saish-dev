import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE_DATA, EXPERIENCE, PROJECTS, SKILLS } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
}

const SYSTEM_INSTRUCTION = `
You are an AI Assistant integrated into the portfolio website of ${PROFILE_DATA.name}, a ${PROFILE_DATA.role}.
Your role is to answer visitor's questions about ${PROFILE_DATA.name} based strictly on the following context.
Be professional, concise, and friendly. Act as if you are a knowledgeable representative.

Context:
Name: ${PROFILE_DATA.name}
Role: ${PROFILE_DATA.role}
Bio: ${PROFILE_DATA.bio}
Contact: ${PROFILE_DATA.email}
Location: ${PROFILE_DATA.location}

Skills: ${SKILLS.map(s => s.name).join(', ')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description[0]}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}

If asked about something not in the context, politely state you only know about ${PROFILE_DATA.name}'s professional background.
`;

export const createChatSession = (): Chat | null => {
  if (!ai) {
    console.warn("Gemini API Key is missing.");
    return null;
  }

  try {
    return ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return null;
  }
};
