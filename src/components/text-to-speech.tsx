import { FormEventHandler, MouseEventHandler, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useConvertTextToSpeech } from "../hooks/use-convert-text-to-speech";

type Props = {
  sourceLanguageCode: string;
};

export const TextToSpeech = ({ sourceLanguageCode }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { convertTextToSpeech, speechBlobUrl, error } =
    useConvertTextToSpeech(sourceLanguageCode);

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!textareaRef || !textareaRef.current) {
      return;
    }
    const sourceText = textareaRef.current.value;
    convertTextToSpeech(sourceText);
  };

  return (
    <>
      <button onClick={handleSubmit}>Speech</button>
      <textarea ref={textareaRef} rows={8} cols={32} />
      {speechBlobUrl && (
        <ReactAudioPlayer src={speechBlobUrl} controls autoPlay />
      )}
      {error && <p>{error}</p>}
    </>
  );
};
