const snakeCaseToTitleCase = (stringToConvert) => {
    return stringToConvert.split("_")
        .map((element) => {
            return (element.charAt(0).toUpperCase() + element.slice(1));
        })
        .join(" ");
};

const insertSpace = (spaces) => {
    return "\u00A0".repeat(spaces)
}


module.exports = {snakeCaseToTitleCase, insertSpace};