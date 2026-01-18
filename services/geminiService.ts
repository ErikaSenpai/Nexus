import { GoogleGenAI, Type } from "@google/genai";
import { WordData } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateWordWithAI = async (customTopic?: string): Promise<WordData | null> => {
  if (!apiKey) {
    console.warn("API Key is missing for AI generation");
    return null;
  }

  try {
    const prompt = customTopic 
      ? `Genera una palabra secreta relacionada con el tema "${customTopic}" para el juego 'El Impostor' (Spyfall). 
         IMPORTANTE: La pista debe ser EXACTAMENTE UNA SOLA PALABRA. 
         CRÍTICO: La pista NO debe ser una definición ni algo obvio. Debe ser un ACERTIJO, una REFERENCIA CULTURAL, o PENSAMIENTO LATERAL. Debe ser difícil de adivinar para un extraño pero tener sentido.
         Ejemplo Malo: "Grapadora" -> "Papel" (Muy obvio).
         Ejemplo Bueno: "Grapadora" -> "Disparo" (Por la acción).
         Ejemplo Malo: "Pingüino" -> "Hielo".
         Ejemplo Bueno: "Pingüino" -> "Mayordomo" (Por el traje) o "Batman".`
      : `Genera una palabra secreta aleatoria para el juego 'El Impostor'. 
         IMPORTANTE: La pista debe ser EXACTAMENTE UNA SOLA PALABRA. 
         CRÍTICO: La pista NO debe ser una definición ni algo obvio. Debe ser un ACERTIJO, una REFERENCIA CULTURAL, o PENSAMIENTO LATERAL.
         Ejemplo Malo: "Grapadora" -> "Papel".
         Ejemplo Bueno: "Grapadora" -> "Disparo".
         Ejemplo Bueno: "Tiburón" -> "Spielberg".`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            category: { type: Type.STRING, description: "La categoría general de la palabra" },
            word: { type: Type.STRING, description: "La palabra secreta" },
            hint: { type: Type.STRING, description: "UNA SOLA PALABRA muy ingeniosa, rebuscada o cultural. No obvia." },
          },
          required: ["category", "word", "hint"],
        },
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as WordData;
    }
    return null;
  } catch (error) {
    console.error("Error generating word with Gemini:", error);
    return null;
  }
};