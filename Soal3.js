const checkBrackets = (input) => {
  let temp = [];
  const bracketLookup = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    if (current == "{" || current == "[" || current == "(") {
      temp.push(current);
    } else if (current == "}" || current == "]" || current == ")") {
      if (bracketLookup[temp[temp.length - 1]] == current) {
        temp.pop();
      }
    }
  }

  return temp.length === 0;
};

console.log("Input1 { [ ( ) ] } : " + checkBrackets("{ [ ( ) ] }"));
console.log("Input2 { [ ( ] ) } : " + checkBrackets("{ [ ( ] ) }"));
console.log(
  "Input3 { ( ( [ ] ) [ ] ) [ ] } : " + checkBrackets("{ ( ( [ ] ) [ ] ) [ ] }")
);
