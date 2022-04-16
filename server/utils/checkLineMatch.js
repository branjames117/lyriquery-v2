function checkLineMatch(phrase, line) {
  phrase = phrase
    .replace("in'", "ing")
    .replace(/[,.;()"']/g, "")
    .trim();
  line = line.replace("in'", "ing").replace(/[,.;()"']/g, "");
  const allowedSeparator = "\\s,;\"'|";

  // RegEx to check if word is the last word, the first word, the only word, or a between word
  const regex = new RegExp(
    `(^.*[${allowedSeparator}]${phrase}$)|(^${phrase}[${allowedSeparator}].*)|(^${phrase}$)|(^.*[${allowedSeparator}]${phrase}[${allowedSeparator}].*$)`,

    // set case to insensitive
    "i"
  );

  // return true or false depending on if line contains the queried phrase
  return regex.test(line);
}

module.exports = { checkLineMatch };
