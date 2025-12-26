import { GoogleGenAI, Type } from "@google/genai";
import { AIDiagnosisResponse } from "../types";

export const analyzeIssue = async (description: string): Promise<AIDiagnosisResponse> => {
  try {
    // @ts-ignore: Check if process is defined to prevent browser crashes
    const apiKey = typeof process !== "undefined" && process.env ? process.env.API_KEY : undefined;

    // Use a fallback if API key is not present, instead of crashing or erroring out
    if (!apiKey) {
      console.warn("API Key not found or process.env missing. Using fallback diagnosis.");
      return {
        category: "Pendiente de Análisis",
        severity: "Media",
        advice: "Le recomendamos apagar el equipo y esperar a que el Ing. Alan o el Ing. Juan lo contacten."
      };
    }

    const ai = new GoogleGenAI({ apiKey });
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

    if (response.text) {
      return JSON.parse(response.text) as AIDiagnosisResponse;
    }
    
    throw new Error("No response text");
  } catch (error) {
    console.error("Error analyzing issue:", error);
    // Fallback safe response
    return {
      category: "General",
      severity: "Media",
      advice: "Por favor apague el equipo y espere a nuestro técnico para evitar daños mayores."
    };
  }
};