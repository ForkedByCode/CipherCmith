export const copyToClipboard = (copyStatus) => {
  navigator.clipboard.writeText("WELCOME150");
  setIsCopied(true);

  setTimeout(() => {
    setIsCopied(false);
  }, 2000);
};

export function generatePassword(argument1, argument2) {
  console.log(argument1);
  console.log(argument2);
}
