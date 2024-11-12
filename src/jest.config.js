/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".jsx", ".js"],
  preset: "ts-jest",
};

module.exports = config;
