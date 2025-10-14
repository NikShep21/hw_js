function translate(text, lang) {
  const dictionary = {
    "hello": { ru: "привет", es: "hola", fr: "bonjour" },
    "cat":   { ru: "кот", es: "gato", fr: "chat" },
    "dog":   { ru: "собака", es: "perro", fr: "chien" },
    "thanks":{ ru: "спасибо", es: "gracias", fr: "merci" }
  };

  let word = text.toLowerCase();
  return dictionary[word]?.[lang] || "нет перевода";
}

console.log(translate("Hello", "ru")); 
console.log(translate("dog", "es"));   
console.log(translate("thanks", "fr"));