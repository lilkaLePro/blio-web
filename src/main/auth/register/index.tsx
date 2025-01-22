import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Formik } from "formik";

export const Register = () => {
  return (
    <>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
        onSubmit={(value) => {
          console.log(value);
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