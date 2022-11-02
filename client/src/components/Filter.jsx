import { Form, Field } from "react-final-form";

export const Filter = ({ onSubmit }) => {
  return (
    <>
      <h1>FILTERS ...</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="year" component="select">
              <option>year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Field>
            <Field name="genre" component="select">
              <option>genre</option>
              <option value="drama">Drama</option>
              <option value="comedy">Comedy</option>
            </Field>
            <button onClick={form.submit} disabled={pristine}>
              apply
            </button>
          </form>
        )}
      ></Form>
    </>
  );
};
