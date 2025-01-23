export interface IUser {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

export const validate = async (values: IUser) => {
  const errors = {
    email: "",
    password: ""
  };
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if(!values.password) {
    errors.password = "Required"
  }else if(values.password.length < 8) {
    errors.password = "Entrez au moins 8 carracters";
  }
  return errors;
}