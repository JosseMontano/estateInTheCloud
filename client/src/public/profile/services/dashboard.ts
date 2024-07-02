import { httpGo } from "@/config/http";
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