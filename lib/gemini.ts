
import { GoogleGenAI, Type } from "@google/genai";
import { EstimateResult } from "../types.ts";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are an expert bioinformatics project manager for DeepBio Limited, an AI and bioinformatics research startup.
Your task is to provide a preliminary project estimate based on user input.
You must respond ONLY with a valid JSON object that adheres to the provided schema. Do not include any markdown formatting like \`\`\`json.

Our internal pricing model for estimates is as follows:
- **Base Analysis Fee:** $500 (covers project setup, QC, and reporting).
- **Per Sample Cost:**
  - Bulk RNA-Seq: $60 per sample.
  - Single-Cell RNA-Seq: $120 per sample (more complex).
  - Genomic Analysis (WGS/WES): $80 per sample.
  - Molecular Docking/Simulations: This is not per sample. Price is based on complexity. Low complexity: $1000, Medium: $2500, High: $5000+.
- **Timeline:**
  - Base: 1 week.
  - Add 1 week for every 24 samples for sequencing projects.
  - Add 2 weeks for medium complexity simulations, 4+ weeks for high complexity.
- **Cost Calculation:** (Base Fee) + (Per Sample Cost * Number of Samples) OR (Complexity Cost). Provide a 20% range on the final cost (e.g., $1000 becomes a range of $900 - $1100).

Analyze the user's project description to infer complexity for non-sample-based services.
Provide a clear timeline and cost range.
List the key services we would perform.
Include a potential roadblock or assumption to manage user expectations.
`;

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        recommendedServices: {
            type: Type.ARRAY,
            description: "A list of key services recommended for this project (e.g., 'Data QC', 'Differential Expression', 'Pathway Analysis').",
            items: { type: Type.STRING }
        },
        estimatedTimeline: {
            type: Type.STRING,
            description: "A human-readable estimated timeline (e.g., '2-3 Weeks')."
        },
        estimatedCostRange: {
            type: Type.STRING,
            description: "A human-readable estimated cost range (e.g., '$1500 - $1800 USD')."
        },
        potentialRoadblocks: {
            type: Type.STRING,
            description: "A brief, one-sentence potential roadblock or assumption made for this estimate (e.g., 'Assumes standard data quality from sequencers.')"
        },
        assumptions: {
            type: Type.STRING,
            description: "A brief, one-sentence assumption made to generate this estimate. e.g., 'Assumes a human reference genome will be used.'"
        }
    },
    required: ["recommendedServices", "estimatedTimeline", "estimatedCostRange"]
};

export async function getProjectEstimate(formData: any): Promise<EstimateResult> {
    const prompt = `
        Please generate a project estimate based on the following user inputs:
        - Service of Interest: ${formData.service}
        - Sample Count: ${formData.sampleCount || 'N/A'}
        - Organism: ${formData.organism || 'N/A'}
        - Project Description: """
        ${formData.description}
        """
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.2,
            },
        });
        
        const text = response.text.trim();
        return JSON.parse(text) as EstimateResult;

    } catch (error) {
        console.error("Error generating project estimate:", error);
        throw new Error("Failed to get an estimate from the AI. The model may be overloaded or the request was malformed.");
    }
}
