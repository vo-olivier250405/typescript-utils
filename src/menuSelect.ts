import * as readline from "readline";
import { cs } from "./colors";

export function menuSelect(options: { name: string; function: () => void }[]) {
  let currentChoice: number = 0;

  const handleOnChange = (offset: -1 | 1) => {
    currentChoice = (currentChoice + offset + options.length) % options.length;
    displayMenu();
  };

  const displayMenu = () => {
    console.clear();
    options.forEach((option, index) => {
      console.log(
        index === currentChoice
          ? `   ${cs("> " + option.name, "cyan")}` // Afficher la clé actuelle
          : `   ${option.name}`
      );
    });
  };

  displayMenu(); // Afficher le menu initial

  readline.emitKeypressEvents(process.stdin);
  if (process.stdin.isTTY) process.stdin.setRawMode(true);

  process.stdin.on("keypress", (_chunk, key) => {
    if (key && key.name == "return") {
      options[currentChoice].function();
      process.exit();
    }

    if (key && ["up", "down"].includes(key.name))
      handleOnChange(key.name === "up" ? -1 : 1);
  });
}
