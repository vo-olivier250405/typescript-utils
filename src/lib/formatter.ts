export const underscoreToSentence = (str: string) => str.split("_").join(" ");

export const capitalizeFirstLetter = (str: string) =>
  str.replace(/^./, str[0].toUpperCase());
