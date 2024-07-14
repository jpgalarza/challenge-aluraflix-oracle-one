export const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "tooLong",
  "customError",
  "rangeUnderflow",
  "stepMismatch"
];

export const messages = {
  title: {
    valueMissing: "Ingrese un título",
    typeMismatch: "Ingrese un título válido",
    customError: "Ingrese título. Max. 50 Caract."
  },
  category: {
    valueMissing: "Ingrese una categoría",
    typeMismatch: "Ingrese una categoría válida",
    customError: "Ingrese una categoría"
  },
  image: {
    valueMissing: "Ingrese el link de la imágen",
    typeMismatch: "El link debe ser un texto",
    customError: "Ingrese un link válido. JS"
  },
  video: {
    valueMissing: "Ingrese el link del video",
    typeMismatch: "El link debe ser un texto",
    customError: "Ingrese un link válido. JS"
  },
  description: {
    valueMissing: "Ingrese la descripción del video",
    tooShort: "Desarrolle descripción del video",
    totooLong: "La descripción es demasiada larga",
    typeMismatch: "La descripción debe ser un texto",
    customError: "Ingrese descripción. Max. 300 Caract."
  }
};
