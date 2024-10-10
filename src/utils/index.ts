export const capitalizeFirstLetterOfEachWord = (str: string): string => {
    return str
        .split(' ') // Split the string by spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
        .join(' '); // Join the words back into a single string
};
