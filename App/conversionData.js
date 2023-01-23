// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const conversionDataArray = [
  {
    type: "length",
    from: `Meter`,
    to: `Feet`,
    multiplier: 2.381,
  },
  {
    type: "volume",
    from: `Liters`,
    to: `Gallons`,
    multiplier: 0.264,
  },
  {
    type: "mass",
    from: `Kilograms`,
    to: `Pounds`,
    multiplier: 2.204,
  },
];
export { conversionDataArray };
