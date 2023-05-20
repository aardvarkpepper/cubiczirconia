const snakeCaseToTitleCase = (stringToConvert) => {
    return stringToConvert.split("_")
        .map((element) => {
            return (element.charAt(0).toUpperCase() + element.slice(1));
        })
        .join(" ");
};

module.exports = {snakeCaseToTitleCase};