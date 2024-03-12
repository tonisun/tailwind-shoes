import nike1 from "./assets/n1-min.png";
import nike2 from "./assets/n2-min.png";
import nike3 from "./assets/n3-min.png";
import nike4 from "./assets/n4-min.png";

/* App Array Datas */
/* Shoe Sizes */
export const SIZES = [36,37,38,39,40,41,42,43,44,45,46,47]

/* Quantities */
export const QTYS = [1,2,3,4,5]

/* Currencies */
export const CURRS = [
    {
      "curr-desc": "US-Dollar",
      "curr-code": "USD",
      "curr-symbol": "$"
    },
    {
      "curr-desc": "Euro",
      "curr-code": "EUR",
      "curr-symbol": "€"
    },
    {
      "curr-desc": "Britisches Pfund",
      "curr-code": "GBP",
      "curr-symbol": "£"
    },
    {
      "curr-desc": "Japanischer Yen",
      "curr-code": "JPY",
      "curr-symbol": "¥"
    },
    {
      "curr-desc": "Australischer Dollar",
      "curr-code": "AUD",
      "curr-symbol": "$"
    },
    {
      "curr-desc": "Kanadischer Dollar",
      "curr-code": "CAD",
      "curr-symbol": "$"
    },
    {
      "curr-desc": "Schweizer Franken",
      "curr-code": "CHF",
      "curr-symbol": "CHF"
    },
    {
      "curr-desc": "Chinesischer Yuan",
      "curr-code": "CNY",
      "curr-symbol": "¥"
    },
    {
      "curr-desc": "Schwedische Krone",
      "curr-code": "SEK",
      "curr-symbol": "kr"
    },
    {
      "curr-desc": "Neuseeland-Dollar",
      "curr-code": "NZD",
      "curr-symbol": "$"
    }
  ]
  

/* Shoe Object Array List */
export const SHOE_LIST  = [
    {
        id: 1,
        src: nike1,
        className: "bg-[#EEFFA4]",
        title: "Nike Air Max 270",
        description:
          "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.",
        price: 160,
      },
      {
        id: 2,
        src: nike2,
        className: "bg-[#DDCEFD]",
        title: "Nike Air Vapor",
        description:
          "The Nike Air Vapor is a sleek and stylish shoe that's perfect for any occasion. It's the perfect shoe for any active lifestyle.",
        price: 100,
      },
      {
        id: 3,
        src: nike3,
        className: "bg-[#DAFFA2]",
        title: "Nike Air Max 2090",
        description:
          "The Nike Air Max 2090 is shoe that's both stylish and comfortable. It's the perfect shoe for any fashion-forward individual.",
        price: 150,
      },
      {
        id: 4,
        src: nike4,
        className: "bg-[#FCC4EA]",
        title: "Nike Air Blazer",
        description:
          "The Nike Air Blazer is a classic shoe that's perfect for any casual occasion. It's the perfect shoe for any laid-back individual.",
        price: 110,
      },
    ]