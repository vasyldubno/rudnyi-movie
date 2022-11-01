import { Form, Field } from "react-final-form";

export const MovieSelectedForm = ({ onSubmit }) => {
  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.listName) {
            errors.listName = "Required";
          }
          return errors;
        }}
        render={({ handleSubmit }) => (
          <form style={{}} onSubmit={handleSubmit}>
            <Field
              name="listName"
              render={({ input, meta }) => (
                <>
                  <input type="text" {...input} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            />
            <button type="submit">CLICK</button>
          </form>
        )}
      ></Form>
    </>
  );
};
