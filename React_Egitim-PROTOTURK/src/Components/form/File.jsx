import { useField } from "formik";
import { Button } from "react-bootstrap";
import { FiCheck } from "react-icons/fi";

export default function File({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  // const changeHandle = e => {

  //     helpers.setValue(e.target.files[0])
  // }

  async function fileOpen() {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      helpers.setValue(file);
    } catch (error) {
      helpers.setValue("");
    }
  }

  return (
    <>
      <div>
        <div>{label}</div>
        {/* <input type="file" onChange={changeHandle} className="hidden" {...props} /> */}
        <button
          type="button"
          onClick={fileOpen}
          className="flex px-5 rounded bg-blue-500 h-10 text-blue-200  hover:scale-105"
        >
          {field.value && (
            <>
              {" "}
              Dosya Seçildi <FiCheck className="ml-3" size={20} />{" "}
            </>
          )}
          {!field.value && <> Dosya Seç </>}
        </button>
        {field.value && (
          <button
            onClick={() => helpers.setValue("")}
            className="bg-green-400 p-3 m-3"
          >
            {" "}
            Dosyayı kaldır
          </button>
        )}
      </div>
    </>
  );
}
