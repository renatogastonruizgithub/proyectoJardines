import { createContext, useContext, useState } from "react";
export const UploadFile = createContext();

export const useUploadFile = () => {
    return useContext(UploadFile);
};

export const UploadFileProvider = ({ children }) => {
    const [preview, setPreview] = useState("")
    const [image, setimage] = useState("")



    const resetFileInput = () => {
        setPreview("")
    }

    const vistaPrevia = async (e) => {
        setPreview(URL.createObjectURL(e.target.files[0]))
        /*    fetch(URL.createObjectURL(e.target.files[0]))
               .then((res) => res.blob())
               .then((blob) => {
                   setimage(blob)
               }) */
        setimage(e.target.files[0])
    }




    return <UploadFile.Provider value={{ image, preview, resetFileInput, vistaPrevia }}>{children}</UploadFile.Provider>;
};
