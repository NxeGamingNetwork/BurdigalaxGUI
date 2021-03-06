const fixtures = {
  config: {
    hasTaxEnabled: true,
    enabledStockLimitation: true,
    enabledWeightControl: true
  },
  player: {
    money: {
      cash: 300
    },
    freeStorageSpace: 20
  },
  shop: {
    hasPaymentTerminalBroken: true,
    name: "On7/7",
    articles: [
      {
        id: 1,
        name: "Bouteille d'eau",
        pluralName: "Bouteilles d'eau",
        categoryName: "Consommables",
        price: 5,
        quantity: 100,
        description: "Eau de la ville, avec un léger coût de javel.",
        iconUrl: "https://image.flaticon.com/icons/svg/824/824239.svg",
        storageCost: 2,
        tax: 6,
        effects: [
          {
            id: "hydration",
            value: 40
          }
        ]
      },
      {
        id: 7,
        name: "Bandage",
        categoryName: "Santé",
        price: 25,
        quantity: 25,
        description: "",
        iconUrl: "https://image.flaticon.com/icons/svg/1546/1546109.svg",
        storageCost: 2,
        tax: 20,
        effects: [
          {
            id: "bleeding",
            value: -70
          }
        ]
      },
      {
        id: 6,
        name: "Jerrican d'essence",
        pluralName: "Jerricans d'essence",
        categoryName: "Outillage",
        price: 50,
        quantity: 2,
        description: "",
        iconUrl: "https://image.flaticon.com/icons/svg/140/140638.svg",
        storageCost: 5,
        tax: 35,
        effects: [
          {
            id: "petrol",
            value: 15
          }
        ]
      },
      {
        id: 4,
        name: "Médicament",
        categoryName: "Santé",
        price: 15,
        quantity: 10,
        description: "",
        iconUrl: "https://image.flaticon.com/icons/svg/1546/1546140.svg",
        storageCost: 2,
        tax: 20,
        effects: [
          {
            id: "health",
            value: 20
          }
        ]
      },
      {
        id: 5,
        name: "Chocolatine",
        categoryName: "Consommables",
        price: 1,
        quantity: 50,
        description: "Meilleure qu'un pain au chocolat !",
        iconUrl: "https://pbs.twimg.com/media/C45FiwpWYAAW_dm.png",
        storageCost: 1,
        tax: 6,
        effects: [
          {
            id: "food",
            value: 20
          },
          {
            id: "hydration",
            value: -5
          }
        ]
      },
      {
        id: 2,
        name: "Pomme",
        categoryName: "Consommables",
        price: 0.5,
        quantity: 5,
        description:
          "La pomme est un fruit comestible à pépins d'un goût sucré et acidulé et à la propriété plus ou moins astringente selon les variétés.",
        iconUrl: "https://image.flaticon.com/icons/svg/415/415682.svg",
        storageCost: 1,
        tax: -15,
        effects: [
          {
            id: "food",
            value: 7
          },
          {
            id: "hydration",
            value: 5
          }
        ]
      },
      {
        id: 3,
        name: "Téléphone",
        categoryName: "Outillage",
        price: 500,
        quantity: 0,
        description: "",
        iconUrl: "https://image.flaticon.com/icons/svg/186/186239.svg",
        storageCost: 1,
        tax: 20
      }
    ]
  },
  effects: {
    hydration: {
      name: "Hydratation",
      unit: "%",
      iconUrl: "https://image.flaticon.com/icons/svg/414/414974.svg"
    },
    petrol: {
      name: "Essence",
      unit: "L",
      iconUrl:
        "http://free-pictures-hosting.org/upload/2019-11-20-23-51-10-203080-petrol.svg"
    },
    food: {
      name: "Alimentation",
      iconUrl: "https://image.flaticon.com/icons/svg/1046/1046755.svg",
      unit: "%"
    },
    health: {
      name: "Santé",
      iconUrl: "https://image.flaticon.com/icons/svg/148/148838.svg",
      unit: "%"
    },
    bleeding: {
      name: "Saignement",
      iconUrl: "https://image.flaticon.com/icons/svg/1101/1101334.svg",
      unit: "%"
    }
  }
};

export default fixtures;
