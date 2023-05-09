import axios from "axios";

/* const BASE_URL = "http://localhost:4000/uploadsongs"; */
const BASE_URL = "http://localhost:4000/track";

export const uploadSongsAPI = async (filesFormData, userId) => {
  const response = await axios.post(`${BASE_URL}/uploadNewSongs/${userId}`, filesFormData);
  /* const okData = checkTokenExpired(response);
  return okData && data; */
  return response;
}

/* Object.values(selectedFiles).forEach((selectedFile, index) => {
  const file = filesFormData.get(`audioFile${index + 1}`);
  const dataFile = filesFormData.get(`dataFile${index + 1}`);
  const imageFile = filesFormData.get(`imageFile${index + 1}`);
  console.dir(file);
  console.log(dataFile);
  console.log(imageFile);
}); */