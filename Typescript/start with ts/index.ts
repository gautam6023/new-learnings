let name: string = "Gautam";

let hero: string;

function getHero() {
  return "true";
}
hero = getHero();

// Return value type

function returnAns(num: number): boolean | string {
  if (num > 5) {
    return true;
  } else {
    return "403 Error";
  }
}

returnAns(5);
export {};
