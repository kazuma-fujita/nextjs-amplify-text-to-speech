import { useState, useCallback } from "react";
import styles from "../../styles/Home.module.css";
import { TextToSpeech } from "./text-to-speech";
import { SelectBox } from "./select-box";
import {
  defaultLanguageOptionValue,
  languageOptions,
} from "../data/language-options";

export const TextToSpeechForm = () => {
  const [selectSource, setSelectSource] = useState(defaultLanguageOptionValue);
  const getLanguageLabel = useCallback((voiceId: string): string => {
    const foundOptions = languageOptions.filter((item) =>
      item.options.find((option) => option.value === voiceId)
    );
    return foundOptions.length === 1
      ? `${foundOptions[0].group} ${voiceId}`
      : "";
  }, []);

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Source Language</h2>
          <SelectBox
            optionGroups={languageOptions}
            defaultValue={defaultLanguageOptionValue}
            setSelectOption={setSelectSource}
          />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>{getLanguageLabel(selectSource)}</h2>
          <TextToSpeech sourceLanguageCode={selectSource} />
        </div>
      </div>
    </>
  );
};
