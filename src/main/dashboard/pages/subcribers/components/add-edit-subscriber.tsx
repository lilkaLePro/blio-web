import { Formik } from 'formik';
import { useSubscriber } from './add-edit-subscriber.hook';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { userCurrentUserStore } from '@/main/auth/store';

export const AddEditSubscriber = () => {
  const id = userCurrentUserStore.use.id();
  console.log(id);
  
  const { values, addSubscriber } = useSubscriber(id);

  return (
    <Formik
      initialValues={values}
      onSubmit={(values) => {
        if (id.length < 1) {
          console.error('userId not available');
          return
        }
        addSubscriber.mutate(values);
      }}
    >
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="border h-full">
          <p className="text-center">Ajouter un abonné</p>
          <div className="flex mt-10 flex-col justify-center max-w-md m-auto">
            <div className="flex gap-3">
              <Input
                name="firstname"
                value={values?.firstname}
                label="Firstname*"
                onChange={handleChange}
                error={!!errors}
              />
              <Input
                name="lastname"
                value={values?.lastname}
                label="Lastname*"
                onChange={handleChange}
                error={!!errors}
              />
            </div>
            <Input
              name="email"
              label="Email"
              value={values?.email}
              onChange={handleChange}
              error={!!errors}
            />
            <div className="flex gap-3">
              <Input
                name="phoneNumber"
                label="Téléphone"
                value={values?.phoneNumber}
                onChange={handleChange}
                error={!!errors}
              />
              <Input
                name="job"
                label="job"
                value={values?.job}
                onChange={handleChange}
                error={!!errors}
              />
            </div>
            <Button className="w-full"> Ajouter </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
