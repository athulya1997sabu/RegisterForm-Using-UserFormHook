import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import MyForm from "./components/formSubmit";
import Form from "./components/mainForm";

function App() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="container py-4">
        {/* <Form methods={methods} /> */}
        {/* <MyForm /> */}
      </div>
    </FormProvider>
  );
}

export default App;
