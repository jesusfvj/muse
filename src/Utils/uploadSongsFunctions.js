const checkForEmptyImageFiles = (imageFiles) => {
    return imageFiles.some(file => file === '');
}

const organizeAndSetDataForm = (dataFromTheForm, isAlbumChecked, albumInputValue, selectedFiles, filesFormData, imageFiles) => {
    const form = dataFromTheForm;
    const formDataForm = new FormData(form);
    const data = Object.fromEntries(formDataForm.entries());

    //Group the data from the form according to the song number:
    const dataFiltered = {};
    for (const key in data) {
        const songNumber = key.match(/\d+$/)[0];
        if (!dataFiltered[`formDataFile${songNumber}`]) {
            dataFiltered[`formDataFile${songNumber}`] = {};
        }
        dataFiltered[`formDataFile${songNumber}`][key.replace(/\d+$/, "")] = data[key];
    }

    //Add the key albumName in the case album is checked:
    if (isAlbumChecked) {
        for (let key in dataFiltered) {
            dataFiltered[key].albumName = albumInputValue
        }
    }

    //Set the formData to be sent to the backend with the fields
    Object.values(selectedFiles).map((selectedFile, index) => {
        const stringifiedData = JSON.stringify(dataFiltered[`formDataFile${index + 1}`])
        filesFormData.set(`dataFile${index + 1}`, stringifiedData)
        filesFormData.set(`imageFile${index + 1}`, imageFiles[index])
    })

    return filesFormData;
}

export {
    checkForEmptyImageFiles,
    organizeAndSetDataForm
}