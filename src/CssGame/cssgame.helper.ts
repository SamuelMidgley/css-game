export const randInt = (toNum: number): number => {
  return Math.floor(Math.random() * (toNum + 1));
};

interface RGBVal {
  r: number;
  g: number;
  b: number;
}

const generateRGBVal = (): RGBVal => {
  return {
    r: randInt(255),
    g: randInt(255),
    b: randInt(255),
  };
};

export const generateRandomRGB = (): string => {
  const rgbVals = generateRGBVal();

  return `rgb(${rgbVals.r}, ${rgbVals.g}, ${rgbVals.b})`;
};

const singleValToHex = (val: number): string => {
  const hexCodeLetters = ["A", "B", "C", "D", "E", "F"];

  let hex;
  if (val >= 10) {
    hex = hexCodeLetters[val - 10];
  } else {
    hex = `${val}`;
  }

  return hex;
};

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

export const generateHexCode = () => {
  const rgbVals = generateRGBVal();

  return (
    "#" +
    ((1 << 24) | (rgbVals.r << 16) | (rgbVals.g << 8) | rgbVals.b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};
