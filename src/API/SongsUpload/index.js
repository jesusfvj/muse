export const uploadSongsAPI = async (filesFormData) => {

    filesFormData.forEach((fileFormData, index) => {
        const file = fileFormData.get(`file${index + 1}`);
        const dataFile = fileFormData.get(`dataFile${index + 1}`);
        const imageFile = fileFormData.get(`imageFile${index + 1}`);
        console.dir(file);
        console.dir(dataFile);
        console.log(imageFile);
    });
    /*  const response = await fetch("http://localhost:4002/uploadsongs/register", {
         method: "POST",
         headers: {
           "Content-Type": "multipart/form-data",
           "x-token": window.localStorage.getItem("token")
         },
         body: filesFormData
       });

       const data = await response.json();
       const okData = checkTokenExpired(data);
       return okData && data; */
}