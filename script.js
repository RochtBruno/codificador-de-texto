// script.js
document.getElementById("encryptButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const encryptedText = encryptText(inputText);
  document.getElementById("outputText").value = encryptedText;
});

document.getElementById("decryptButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const decryptedText = decryptText(inputText);
  document.getElementById("outputText").value = decryptedText;
});

document.getElementById("copyButton").addEventListener("click", () => {
  const outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
  alert("Texto copiado para a área de transferência!");
});

function encryptText(text) {
  const encryptionRules = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  return text.replace(/[eioua]/g, (match) => encryptionRules[match]);
}

function decryptText(text) {
  const decryptionRules = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  return text.replace(
    /enter|imes|ai|ober|ufat/g,
    (match) => decryptionRules[match]
  );
}
