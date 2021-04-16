const reversesString = (input) => {
  const reverse = [];

  const reverser = (reverseInput) => {
    if (reverseInput.length > 0) {
      reverse.push(reverseInput.pop());
      reverser(reverseInput);
    }
  };
  reverser(input);

  return reverse;
};

console.log(reversesString(["h", "e", "l", "l", "o"]));
