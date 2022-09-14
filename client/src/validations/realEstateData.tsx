import {RealEstate} from '../interface/realEstateData'

export const initialForm =  {
    title:"",
    description:"",
    idUser:0
  };
  
export const validationsForm = (form: RealEstate) => {
    let errors = {} as RealEstate;
    if (!form.title.trim()) {
      errors.title = "El campo 'titulo' es requerido";
    } 
    if (!form.description.trim()) {
      errors.description = "El campo 'descripcion' es requerido";
    }
    return errors;
  };
  