import { Helmet } from "react-helmet";
import { Formik, Form, Field } from "formik";
import Input from "../Components/form/Input";
import File from "../Components/form/File";
import Checkbox from "../Components/form/Checkbox";
import Textarea from "../Components/form/Textarea";
import Select from "../Components/form/Select";
import { SampleSchema } from "../validations";

export default function ContactPage() {
  return (
    <>
      <div>
        Contact Page
        <Helmet>
          <title>İletişim</title>
        </Helmet>
      </div>

      <div>
        <Formik
          initialValues={{
            name: "Kadircan",
            about: "",
            accept: true,
            gender: 2,
            avatar: "",
            skills: ["html", "css"],
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={SampleSchema}
        >
          {({ values }) => (
            <Form className="p-6">
              <Input label="AD:" name="name" />
              <br />
              <Textarea name="about" label="hakkında" cols={15} rows={5} />
              <Checkbox label="kuralları kabul ediyorum" name="accept" />
              <br />
              <Select
                label="cinsiyet"
                name="gender"
                original={true}
                options={[
                  { key: 1, value: "Kadın" },
                  { key: 2, value: "Erkek" },
                ]}
              />
              <br /> <br />
              <Field component="select" name="skills" multiple={true}>
                <option value="html">Html</option>
                <option value="css">Css</option>
                <option value="javascript">JavaScript</option>
                <option value="reactjs">ReactJs</option>
              </Field>
              <br />
              <File label="Avatar" name="avatar" />
              <br />
              <button
                disabled={!values.accept}
                className="bg-gray-400 p-2 m-2 rounded hover:scale-105"
                type="submit"
              >
                Gönder
              </button>
              <pre> {JSON.stringify(values, null, 2)} </pre>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
