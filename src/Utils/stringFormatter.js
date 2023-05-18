export const stringFormatter = (fieldName, findBy = false) => {
    // Replace all instances of "_id" with "Id"
    fieldName = fieldName.replace(/_id/g, 'Id');

    // Replace all instances of camelCase with Title Case
    fieldName = fieldName.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Split the field name into words
    const words = fieldName.split(' ');

    // Capitalize the first letter of the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

    // Modify the first letter of each remaining word
    const modifiedWords = words.slice(1).map(word => {
        return word.charAt(0).toLowerCase() + word.slice(1);
    });

    // Join the words back into a string with spaces
    fieldName = [words[0], ...modifiedWords].join(' ');

    if (findBy) {
        if (fieldName.endsWith("s")) {
            fieldName = fieldName.replace(/s$/, "");
        }
        const arayExcludes = ["Id", "Name", "Email", "Thumbnail", "Duration", "Thumbnail url", "Track url", "Genre", "Full name", "Role", "Profile photo"];
        !arayExcludes.includes(fieldName) ? fieldName = fieldName + " (id)" : fieldName;
    }

    return fieldName;
}