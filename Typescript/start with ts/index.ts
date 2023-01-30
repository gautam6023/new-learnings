let name: string = "Gautam";

let hero: string;

function getHero() {
  return "true";
}
hero = getHero();

// Return value type

// function returnAns(num: number): boolean | string {
//   if (num > 5) {
//     return true;
//   } else {
//     return "403 Error";
//   }
// }

// returnAns(5);

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};

type Card = CardNumber &
  CardDate & {
    cardName: string;
  };

let user: Card = {
  cardName: "Gautam",
  cardNumber: "56343",
  cardDate: "17th Aug",
};

export {};
