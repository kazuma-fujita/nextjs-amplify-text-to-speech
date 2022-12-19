type selectOption = {
  label: string;
  value: string;
};

export type LanguageOptionGroup = {
  group: string;
  options: selectOption[];
};

export const languageOptions: LanguageOptionGroup[] = [
  { group: "Arabic", options: [{ label: "Zeina/Female", value: "Zeina" }] },
  {
    group: "Chinese (Mandarin)",
    options: [{ label: "Zhiyu/Female", value: "Zhiyu" }],
  },
  {
    group: "Danish",
    options: [
      { label: "Naja/Female", value: "Naja" },
      { label: "Mads/Male", value: "Mads" },
    ],
  },
  {
    group: "Dutch",
    options: [
      { label: "Lotte/Female", value: "Lotte" },
      { label: "Ruben/Male", value: "Ruben" },
    ],
  },
  {
    group: "English (Australian)",
    options: [
      { label: "Nicole/Female", value: "Nicole" },
      { label: "Russell/Male", value: "Russell" },
    ],
  },
  {
    group: "English (British)",
    options: [
      { label: "Amy/Female", value: "Amy" },
      { label: "Emma/Female", value: "Emma" },
      { label: "Brian/Male", value: "Brian" },
    ],
  },
  {
    group: "English (Indian)",
    options: [
      { label: "Aditi/Female", value: "Aditi" },
      { label: "Raveena/Female", value: "Raveena" },
    ],
  },
  {
    group: "English (US)",
    options: [
      { label: "Ivy/Female(child)", value: "Ivy" },
      { label: "Joanna/Female", value: "Joanna" },
      { label: "Kendra/Female", value: "Kendra" },
      { label: "Kimberly/Female", value: "Kimberly" },
      { label: "Salli/Female", value: "Salli" },
      { label: "Joey/Male", value: "Joey" },
      { label: "Justin/Male(child)", value: "Justin" },
      { label: "Matthew/Male", value: "Matthew" },
    ],
  },
  {
    group: "English (Welsh)",
    options: [{ label: "Geraint/Male", value: "Geraint" }],
  },
  {
    group: "French",
    options: [
      { label: "Céline/Female", value: "Celine" },
      { label: "Léa/Female", value: "Léa" },
      { label: "Mathieu/Male", value: "Mathieu" },
    ],
  },
  {
    group: "French (Canadian)",
    options: [{ label: "Chantal/Female", value: "Chantal" }],
  },
  {
    group: "German",
    options: [
      { label: "Marlene/Female", value: "Marlene" },
      { label: "Vicki/Female", value: "Vicki" },
      { label: "Hans/Male", value: "Hans" },
    ],
  },
  {
    group: "Hindi",
    options: [{ label: "Aditi/Female", value: "Aditi" }],
  },
  {
    group: "Icelandic",
    options: [
      { label: "Dóra/Female", value: "Dora" },
      { label: "Karl/Male", value: "Karl" },
    ],
  },
  {
    group: "Italian",
    options: [
      { label: "Carla/Female", value: "Carla" },
      { label: "Bianca/Female", value: "Bianca" },
      { label: "Giorgio/Male", value: "Giorgio" },
    ],
  },
  {
    group: "Japanese",
    options: [
      { label: "Mizuki/Female", value: "Mizuki" },
      { label: "Takumi/Male", value: "Takumi" },
    ],
  },
  {
    group: "Korean",
    options: [{ label: "Seoyeon/Female", value: "Seoyeon" }],
  },
  {
    group: "Norwegian",
    options: [{ label: "Liv/Female", value: "Liv" }],
  },
  {
    group: "Polish",
    options: [
      { label: "Ewa/Female", value: "Ewa" },
      { label: "Maja/Female", value: "Maja" },
      { label: "Jacek/Male", value: "Jacek" },
      { label: "Jan/Male", value: "Jan" },
    ],
  },
  {
    group: "Portuguese (Brazilian)",
    options: [
      { label: "Camila/Female", value: "Camila" },
      { label: "Vitória/Female", value: "Vitoria" },
      { label: "Ricardo/Male", value: "Ricardo" },
    ],
  },
  {
    group: "Portuguese (European)",
    options: [
      { label: "Inês/Female", value: "Ines" },
      { label: "Cristiano/Male", value: "Cristiano" },
    ],
  },
  {
    group: "Romanian",
    options: [{ label: "Carmen/Female", value: "Carmen" }],
  },
  {
    group: "Russian",
    options: [
      { label: "Tatyana/Female", value: "Tatyana" },
      { label: "Maxim/Male", value: "Maxim" },
    ],
  },
  {
    group: "Spanish (European)",
    options: [
      { label: "Conchita/Female", value: "Conchita" },
      { label: "Lucia/Female", value: "Lucia" },
      { label: "Enrique/Male", value: "Enrique" },
    ],
  },
  {
    group: "Spanish (Mexican)",
    options: [{ label: "Mia/Female", value: "Mia" }],
  },
  {
    group: "Spanish (US)",
    options: [
      { label: "Lupe/Female", value: "Lupe" },
      { label: "Penélope/Female", value: "Penelope" },
      { label: "Miguel/Male", value: "Miguel" },
    ],
  },
  {
    group: "Swedish",
    options: [{ label: "Astrid/Female", value: "Astrid" }],
  },
  {
    group: "Turkish",
    options: [{ label: "Filiz/Female", value: "Filiz" }],
  },
  {
    group: "Welsh",
    options: [{ label: "Gwyneth/Female", value: "Gwyneth" }],
  },
];

export const defaultLanguageOptionValue = "Takumi";
