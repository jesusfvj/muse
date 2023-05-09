import { toast } from 'react-toastify';

const toastMessageError = (errorMessage) => {
    toast.error(errorMessage, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

const toastMessageSuccess = (message) => {
    toast.success(message , {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
};

export { toastMessageError, toastMessageSuccess}