import { httpGo } from "@/config/http";
import deleteServ from "@/global/utilities/deleteService";
import { index } from "@/global/utilities/getServices";

export const getUsers = async <T>() => {
    const url = `${httpGo}getUsers`;
    const { json, status } = await index<T>(url);
    return { json, status };
}

export const disabledUser = async <T>(id: number) => {
    const url = `${httpGo}disableUser/${id}`;
    
    const res = await index<T>(url);

    const { json, status } = res;
    return { json, status };
}

export const enabledUser = async <T>(id: number) => {
    const url = `${httpGo}enableUser/${id}`;
    const { json, status } = await index<T>(url);
    return { json, status };
}

export const getQuestions = async <T>() => {
    const url = `${httpGo}questions`;
    const { json, status } = await index<T>(url);
    return { json, status };
}

export const deleteQuestion = async(id: number) => {
    const url = `${httpGo}question/${id}`;
    const { json, status } = await deleteServ(url);
    return { json, status };
}