import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Formik } from "formik";
import { useAuthHook } from "../auth.hook";

export const Register = () => {
  const { registerMutation, values,  } = useAuthHook()
  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          registerMutation.mutate(values);
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="h-screen justify-center w-full flex items-center"
          >
            <div className="max-w-md w-full flex flex-col bg-muted p-10 rounded-r-lg">
                <p> Je m enregistre </p>
                <div className="flex gap-3">
                <Input
                  placeholder="Entrez votre Prenom"
                  label="Prenom"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  error={!!errors.firstname}
                  erroText={errors.firstname}
                />
                <Input
                  placeholder="Entrez votre Lastname"
                  label="Nom"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  erroText={errors.lastname}
                  error={!!errors.lastname}
                />
                </div>
                <Input
                  placeholder="Entrez votre Email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  erroText={errors.email}
                />
                <Input
                  placeholder="Entrez votre Password"
                  label="Password"
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