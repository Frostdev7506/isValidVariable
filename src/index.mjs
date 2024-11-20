function isValidVariable(variable) {
  switch (typeof variable) {
    case "string":
      return variable.trim() !== "";
    case "number":
      return !isNaN(variable) && isFinite(variable); // Check for valid numbers
    case "object":
      return variable !== null && Object.keys(variable).length > 0; // Check if object is not null and not empty
    case "array":
      return Array.isArray(variable) && variable.length > 0; // Check if array is not empty
    case "function":
      return true; // Functions are considered valid
    case "symbol":
      return true; // Symbols are considered valid
    case "bigint":
      return true; // BigInt values are considered valid
    case "boolean":
      return true; // Booleans are considered valid
    case "undefined":
      return false; // Undefined is considered invalid
    default:
      return !!variable; // Default to truthiness check
  }
}

// module.exports = isValidVariable;

export default isValidVariable;
