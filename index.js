const length = document.getElementById("passLen");
const LowerCase = document.getElementById("lowerCase");
const UpperCase = document.getElementById("upperCase");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");
const generatedPass = document.getElementById("generatedPass");
const generateButton = document.getElementById("generateButton");

function generatePassword() {
  var allowedChars = "";
  var password = "";

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*()_+-=";

  const passLen = Number(length.value);

  if (passLen < 4 || passLen > 20) {
    // console.log(`Incorrect Password Length. Range: 4-20 characters.`);
    return (generatedPass.textContent = `Incorrect Password Length. Range: 4-20 characters.`);
  }

  const includeLowerCase = LowerCase.checked ? true : false;
  const includeUpperCase = UpperCase.checked ? true : false;
  const includeNumbers = Numbers.checked ? true : false;
  const includeSymbols = Symbols.checked ? true : false;

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSymbols ? symbols : "";

  if (allowedChars.length === 0) {
    // console.log(`Select atleast 1 set of Characters.`);
    return (generatedPass.textContent = `Select atleast 1 set of Characters.`);
  }
  /*
    else{
        console.log(allowedChars);
    }
    */

  for (var i = 0; i < passLen; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  // console.log(password);
  generatedPass.textContent = `The Password is ${password}`;
  generateButton.textContent = `Regenerate`;
}
