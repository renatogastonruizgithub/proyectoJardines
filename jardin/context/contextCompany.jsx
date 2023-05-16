import { createContext, useContext, useState } from "react";
import instance from "../config/axios/instance";
import { alertConfirmation, alertDeleted, alertError } from "../components/alert"


export const Company = createContext();

export const useCompany = () => {
    return useContext(Company);
};

export const CompanyProvider = ({ children }) => {
    const [loading, setLoading] = useState();
    const [company, setCompany] = useState([]);
    const [enableButton, setEnableButton] = useState(true)
    const [valuesForm, setvaluesForm] = useState(
        {
            name: "",
            location: "",
            resolution: "",
            biography: "",
            img: "",
            schedules: "",
            phone: "",
            email: "",
            linkIg: "",
            linkFb: "",
            linkLk: "",
            mission: "",
            vision: ""
        })


    const get = () => {
        instance.get(`company/` + 1)
            .then((res) => {


                if (res.data.lenght == 0) {
                    setEnableButton(true)
                } else {
                    setEnableButton(false)
                    setCompany([res.data])
                }
                setEnableButton()
                setvaluesForm({
                    name: res.data.name,
                    location: res.data.location,
                    resolution: res.data.resolution,
                    biography: res.data.biography,
                    img: res.data.imageUrl,
                    schedules: res.data.schedules,
                    phone: res.data.phone,
                    email: res.data.email,
                    linkIg: res.data.linkIg,
                    linkFb: res.data.linkFb,
                    linkLk: res.data.linkLk,
                    mission: res.data.mission,
                    vision: res.data.vision
                })
            })
            .catch((error) => {
                setEnableButton(true)
            })
    }

    const edit = (update) => {
        setLoading(true)
        instance.put(`company/1`, update)
            .then((res) => {
                setCompany([...company, res.data])
                setLoading(false)
                get()
                alertConfirmation("actualizado correctamente")
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }
    const add = (company) => {
        setLoading(true)
        instance.post(`company`, company)
            .then((res) => {
                setCompany([...company, res.data])
                setLoading(false)
                alertConfirmation("Empresa añadida correctamente")
                get()
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                alertError("UPS", "error inesperado!")
            })

    }


    return <Company.Provider value={{ enableButton, loading, company, add, get, edit, valuesForm }}>{children}</Company.Provider>;
};

