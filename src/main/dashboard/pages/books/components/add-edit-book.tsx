import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Formik } from 'formik';
import { useAddEditBook } from './add-adit-book.hook';
import { userCurrentUserStore } from '@/main/auth/store';

export const AddEditBook = () => {
  const id = userCurrentUserStore.use.id();

  const { values, addBookMutation } = useAddEditBook(id);
  
  return (
    <Formik initialValues={values} 
      onSubmit={(values) => {
      if (!id) {
        console.error('userId not available');
        return
      }
      addBookMutation.mutate(values);
    }}>
      {({ values, errors, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="pt-20">
          <p className="text-center">Ajouter un livre</p>
          <div className="flex mt-10 flex-col justify-center max-w-md m-auto">
            <Input
              label="Nom du livre"
              placeholder="Entrez le nom ou titre du livre"
              name="title"
              onChange={handleChange}
              value={values.title}
              error={!!errors.title}
            />
            <Input
              label="auteur"
              name="author"
              placeholder="Entrez le nom de l'hauteur"
              onChange={handleChange}
              value={values?.author}
            />
            <div className="grid grid-cols-2 gap-2">
              <Input
                label="Stocke"
                type="number"
                name="stok"
                onChange={handleChange}
                value={`${values.stok}`}
              />
              <Input
                label="isbn"
                placeholder="Entrez le code isbn unique du livre"
                name="isbn"
                onChange={handleChange}
                value={values?.isbn}
              />
            </div>
            <Input
              label="Categories"
              name="categories"
              placeholder="Selectionnez une categorie"
              onChange={handleChange}
              value={values?.categories}
            />
            <Button className="w-full"> Ajouter </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};
