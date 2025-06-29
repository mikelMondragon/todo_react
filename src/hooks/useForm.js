import { useState } from "react";

export const useForm = (newDataCallBack) => {
    const [formData, setFormData] = useState({})

    const parseForm = (target) => {
        const newFormData = new FormData(target);
        const parsedData = {};
        for (const [key, value] of newFormData) {
            parsedData[key] = value;
        }
        return parsedData
    }

    const onSubmit = (ev) => {
        console.log(ev)
        ev.preventDefault();
        const parsedData = parseForm(ev.target);
        setFormData(parsedData);
        console.log({ newDataCallBack })
        newDataCallBack.onSubmit(parsedData);
    }

    return {
        formData,
        onSubmit
    }
}
