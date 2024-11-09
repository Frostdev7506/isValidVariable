function isValidVariable(variable) {
    switch (typeof variable) {
        case 'string':
            return variable.trim() !== '';
        case 'number':
            return !isNaN(variable) && isFinite(variable); // Check for valid numbers
        case 'object':
            return variable !== null && Object.keys(variable).length > 0; // Check if object is not null and not empty
        // Add other types as needed
        default:
            return !!variable; // Default to truthiness check
    }
}


export default isValidVariable;