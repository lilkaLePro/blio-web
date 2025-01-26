import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Formik } from "formik";
import { useAuthHook } from "../auth.hook";

export const Login = () => {

  const { loginMutation, values } = useAuthHook()

  return (
    <>
      <Formik
        initialValues={values}
        onSubmit={(values) => {
          loginMutation.mutate(values)
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="h-screen justify-center w-full flex items-center">
            <div className="max-w-md w-full flex flex-col gap-3 bg-muted p-10 rounded-r-lg ">
                <p> CONNEXION </p>
                  <Input
                    placeholder="Entrez votre Email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    error={!!errors.email}
                    erroText={errors.email}
                  />
                  <Input
                    placeholder="Entrez votre Password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    error={!!errors.password}
                    erroText={errors.password}
                  />
                  {errors.password && errors.password}
                  <Button type="submit" className="w-full"> Se connecter </Button>
                  <div className="text-center flex flex-col gap-3">
                    <span className="text-secondary-foreground text-xs">OU</span>
                    <span className="text-sm text-secondary-foreground"> Nouveau a enens ? 
                      <a href="/register" className="text-foreground px-3">Inscrivez-vous.</a> </span>
                    <span className="text-secondary-foreground text-xs">OU</span>
                    <div className="border rounded-md p-2 font-extrabold"> Google </div>
                  </div>
               </div>
          </form>
        )}
      </Formik>
    </>
  );
};