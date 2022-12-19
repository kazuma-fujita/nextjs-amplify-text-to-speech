import { TextToSpeechOutput } from "@aws-amplify/predictions";
import { Predictions } from "aws-amplify";
import { useCallback, useState } from "react";
import { languageOptions } from "../data/language-options";

export const useConvertTextToSpeech = (voiceId: string) => {
  const [speechBlobUrl, setSpeechBlobUrl] = useState<string | null>(null);
  const [error, setError] = useState("");
  const convertTextToSpeech = useCallback(
    async (sourceText: string) => {
      try {
        const result: TextToSpeechOutput = await Predictions.convert({
          textToSpeech: {
            source: {
              text: sourceText,
            },
            voiceId: voiceId,
          },
        });
        setSpeechBlobUrl(result.speech.url);
      } catch (error) {
        console.error(error);
        setError(JSON.stringify(error, null, 2));
      }
    },
    [voiceId]
  );

  return { convertTextToSpeech, speechBlobUrl, error };
};
