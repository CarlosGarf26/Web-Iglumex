import { GoogleGenAI, Type } from "@google/genai";
import { AIDiagnosisResponse } from "../types";

// Analyze HVAC issues using Gemini AI
export const analyzeIssue = async (description: string): Promise<AIDiagnosisResponse> => {
  try {
    // Create a new instance right before use as recommended for the latest context
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Un cliente de una empresa de reparación de aire acondicionado (IGLUMEX) reporta el siguiente problema: "${description}".
      
      Actúa como un técnico experto. Analiza el texto y devuelve un JSON con:
      1. La categoría probable del problema (ej: Eléctrico, Falta de Gas, Limpieza, Motor).
      2. La severidad estimada (Baja, Media, Alta).
      3. Un consejo breve y seguro para el cliente mientras llega el técnico (ej: "Apague el equipo inmediatamente").
      
      No inventes problemas graves si no es obvio. Sé profesional.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING },
            severity: { type: Type.STRING, enum: ['Baja', 'Media', 'Alta'] },
            advice: { type: Type.STRING },
          },
          required: ["category", "severity", "advice"]
        }
      }
    });

    // The text property returns the string output; it must be trimmed before parsing JSON as per guidelines
    const jsonStr = response.text?.trim();
    if (jsonStr) {
      return JSON.parse(jsonStr) as AIDiagnosisResponse;
    }
    
    throw new Error("No response text");
  } catch (error) {
    console.error("Error analyzing issue:", error);
    // Fallback safe response for operational continuity
    return {
      category: "General",
      severity: "Media",
      advice: "Por favor apague el equipo y espere a nuestro técnico para evitar daños mayores."
    };
  }
};