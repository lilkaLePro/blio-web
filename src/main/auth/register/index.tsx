import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const Register = () => {
  const router = useNavigate();

  const [values, setValues] = useState({ firstname: "", lastname: "", email: "", password: "" })
  const mutation = useMutation({
    mutationKey: ['register'],
    mutationFn: async (formData: IUser) => {      
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        throw new Error('Failed to create hackathon');
    }
    if(response.ok){
        setValues({firstname: "", lastname: "", email: "", password: ""})
        router('/dashboard')
    }
    const data = await response.json();;
    return data;
    }
  })
  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          mutation.mutate(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="h-screen justify-center w-full flex items-center"
          >
            <div className="max-w-md w-full flex flex-col bg-muted p-10 rounded-r-lg">
                <p> Je m enregistre </p>
                <Input
                  placeholder="Firstname"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  error={!!errors.firstname}
                  erroText={errors.firstname}
                />
                <Input
                  placeholder="Lastname"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  erroText={errors.lastname}
                  error={!!errors.lastname}
                />
                <Input
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  erroText={errors.email}
                />
                <Input
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  erroText={errors.password}
                />
                <Button type="submit" className="w-full"> S'inscrire </Button>
                <p className="text-xs pt-4">
                  Vous avez déjà un compte ?{" "}
                  <a href="/login" className="text-foreground px-3">Inscrivez-vous.</a>
                </p>
              </div>
          </form>
        )}
      </Formik>
    </>
  );
};