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

const authentication = (has, needs) => {
    return has >= needs
}

module.exports = {snakeCaseToTitleCase, insertSpace, authentication};