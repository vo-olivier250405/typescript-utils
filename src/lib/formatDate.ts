export const formatDate = (date: Date) =>
  `${date.toLocaleDateString(
    "fr-FR"
  )} à ${date.getHours()}:${date.getMinutes()}`;
