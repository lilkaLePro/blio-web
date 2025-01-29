import { Formik } from "formik"
import { useSubscriber } from "./add-edit-subscriber.hook"

export const AddEditSubscriber = () => {

  const { values } = useSubscriber()

  return (
    <Formik
      initialValues={values}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form>
          <p className="text-center">Ajouter un abonné</p>
          <div className="flex mt-10 flex-col justify-center max-w-md m-auto">

          </div>
        </form>
      )}
    </Formik>
  )
}