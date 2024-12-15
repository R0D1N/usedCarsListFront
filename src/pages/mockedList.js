const mockedList = [
  {
    record: "C001",
    title: "2018 Toyota Camry LE",
    images: [
      "https://example.com/images/car001-1.jpg",
      "https://example.com/images/car001-2.jpg",
    ],
    carInfo: "2.5L 4-cylinder engine, 203 HP, FWD",
    characteristics:
      "Automatic transmission, Bluetooth connectivity, Cruise control",
    autoReport: "No accidents, 1 previous owner, regularly serviced",
  },
  {
    record: "1",
    brand: "BMW",
    model: "i7",
    year: 2023,
    color: "silver",
    price: 107900,
    images: [
      "https://www.bmw.ua/content/dam/bmw/common/all-models/i-series/i7/2022/Highlights/bmw-7-series-i7-cp-design-exterior-desktop.jpg",
      "https://i.infocar.ua/i/2/6853/127556/1920x.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/BMW_i7_out_by_Augustas_Didzgalvis.jpg/1200px-BMW_i7_out_by_Augustas_Didzgalvis.jpg",
      "https://www.bmw.ua/content/dam/bmw/common/all-models/i-series/i7/2022/Highlights/bmw-7-series-i7-cp-design-interior-desktop.jpg",
      "https://vip-car.com.ua/sites/default/files/styles/social/public/news/2022/obzor-bmw-i7-pervyy-elektromobil-7-serii/obzor-bmw-i7-pervyy-elektromobil-7-serii-4.jpg?itok=qPIxNRF7",
      "https://s0.rbk.ru/v6_top_pics/media/img/1/66/347213089511661.jpeg",
      "https://www.bmwusa.com/content/dam/bmw/common/vehicles/2024/my25/all-electric/i7/sedan/overview/desktop/BMW-MY25-i7-Overview-Luxury-03-ALL-V2.jpg.bmwimg.small.jpg",
    ],
    description:
      "BMW is a German multinational manufacturer of luxury vehicles, including performance and sports cars, SUVs, and light commercial vehicles. The BMW brand is owned by Bayerische Motoren Werke AG (BMW AG), founded in Munich in 1916. BMW is renowned for its engineering excellence and driving dynamics. Popular models include the 3 Series, 5 Series, 7 Series, X5, and the electric i Series.",
    generation: ["G70", "60 101.7 kWh (544 к.с.) xDrive", "M Sport"],
    characteristic: {
      mileage: 45000,
      type: "Electric",
      city: "Rivne",
      gearBox: "Automatic",
    },
  },
  // {
  //   id: 2,
  //   brand: "Audi",
  //   model: "e-tron GT",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://hips.hearstapps.com/hmg-prod/images/2025-audi-e-tron-gt-102-66743d083580e.jpg?crop=0.646xw:0.546xh;0.112xw,0.248xh&resize=2048:*",
  //   description:
  //     "Audi is a German automobile manufacturer headquartered in Ingolstadt, Germany. Founded in 1909 by August Horch, Audi is known for its luxury vehicles featuring advanced technology and innovative design. The brand's lineup includes sedans, SUVs, and sports cars, with popular models like the A4, A6, Q5, Q7, and the electric e-tron series.",
  //   url: "https://www.audi.com/en-us/index.html",
  // },
  // {
  //   id: 3,
  //   brand: "Mercedes-Benz",
  //   model: "EQE SUV",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://img.mercedes-benz-kiev.com/data/purchase/eqe-suv/0352600505/mercedes-benz-eqe-suv-x294-1.jpg",
  //   description:
  //     "Mercedes-Benz is a German global automobile marque known for luxury vehicles, buses, coaches, and trucks. The brand is owned by Daimler AG, which was founded in 1926. Mercedes-Benz is recognized for its premium quality, innovation, and performance. Notable models include the C-Class, E-Class, S-Class, GLE, and the electric EQ series.",
  //   url: "https://www.mercedes-benz.com/en/index.html",
  // },
  // {
  //   id: 4,
  //   brand: "Porsche",
  //   model: "Taycan",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://cdn.hevcars.com.ua/wp-content/uploads/2019/09/porsche-taycan-exterior-hevcars-10.jpg",
  //   description:
  //     "Porsche is a German automobile manufacturer specializing in high-performance sports cars, SUVs, and sedans. Founded in 1931 by Ferdinand Porsche, the company is headquartered in Stuttgart, Germany. Porsche is renowned for its iconic 911 model and has expanded its lineup to include the Cayenne, Macan, Panamera, and the electric Taycan.",
  //   url: "https://www.porsche.com/en/index.html",
  // },
  // {
  //   id: 5,
  //   brand: "Lexus",
  //   model: "RZ",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://www.servcolexus.com/on/demandware.static/-/Sites-ServcoLexus-Library/default/dwb3f15d1d/images/model/RZ/hero/2023_RZ_Hero.jpg",
  //   description:
  //     "Lexus is the luxury vehicle division of the Japanese automaker Toyota. Established in 1989, Lexus is known for its reliability, luxury, and advanced technology. The brand offers a range of sedans, SUVs, and hybrids, with popular models including the ES, LS, RX, NX, and the electric RZ.",
  //   url: "https://www.lexus.com/en/index.html",
  // },
  // {
  //   id: 6,
  //   brand: "Tesla",
  //   model: "Cybertruck",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://moscowteslaclub.ru/upload/uf/c45/yz3tomsafthko5mjxdq13vh6jhhf7kgq.jpg",
  //   description:
  //     "Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003 by engineers Martin Eberhard and Marc Tarpenning. Tesla specializes in electric vehicles, battery energy storage, and solar energy solutions. The Model S is a luxury all-electric sedan known for its high performance, advanced technology, and long-range capabilities.",
  //   url: "https://www.tesla.com/models",
  // },
  // {
  //   id: 7,
  //   brand: "Tesla",
  //   model: "Model S Plaid",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image: "https://www.vcentrum.pl/wp-content/uploads/2023/07/DSC04299.jpg",
  //   description:
  //     "Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003. The Model 3 is a compact electric sedan that offers a balance of performance, range, and affordability. It has become one of the best-selling electric vehicles globally, known for its minimalist design and advanced features.",
  //   url: "https://www.tesla.com/model3",
  // },
  // {
  //   id: 8,
  //   brand: "Tesla",
  //   model: "Model Y",
  //   year: 2020,
  //   color: "black",
  //   price: 10000,
  //   mileage: 10000,
  //   image:
  //     "https://electro-motors.top/image/cache/catalog/electrocars/TeslaY/teslay-1200x800.jpeg",
  //   description:
  //     "Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003. The Model Y is a compact electric crossover SUV that shares many components with the Model 3. It offers versatility, ample cargo space, and the option for a third-row seat, making it a popular choice among electric SUVs.",
  //   url: "https://www.tesla.com/modely",
  //   characteristic: {
  //     mileage: 62400,
  //     type: "Electric",
  //     city: "Dnipro",
  //     gearBox: "Automatic",
  //   },
  // },
  // {
  //   id: 9,
  //   brand: "Tesla",
  //   model: "Model Y",
  //   year: 2022,
  //   color: "white",
  //   price: 29500,
  //   image:
  //     "https://electro-motors.top/image/cache/catalog/electrocars/TeslaY/teslay-1200x800.jpeg",
  //   description:
  //     "Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003. The Model Y is a compact electric crossover SUV that shares many components with the Model 3. It offers versatility, ample cargo space, and the option for a third-row seat, making it a popular choice among electric SUVs.",
  //   url: "https://www.tesla.com/modely",
  //   characteristic: {
  //     mileage: 35000,
  //     type: "Electric",
  //     city: "Lviv",
  //     gearBox: "Automatic",
  //   },
  // },
];

export default mockedList;
