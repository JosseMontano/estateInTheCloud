import {RealEstate} from '../interface/realEstateData'

export const initialForm =  {
    title:"",
    description:"",
    urlPhoto:"",
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
   /* if (!form.urlPhoto.trim()) {
      errors.urlPhoto = "El campo 'foto' es requerido";
    }*/
    return errors;
  };
  