import { useField } from "formik";

export default function Select({ options, label, original = false, ...props }) {
  const [field, meta, helpers] = useField(props);

  const changeHandle = (e) => {
    let selected = options.find((option) => option.key === +e.target.value);
    helpers.setValue(original ? selected : +e.target.value);
  };

  return (
    <>
      <label className="block w-full">
        <div className="text-sm text-gray-600">{label}</div>
        <select
          className="w-full h-10 rounded border-b-2 outline-none focus:border-black"
          onChange={changeHandle}
          defaultValue={field.value}
          {...props}
        >
          {options.map((option, index) => (
            <option value={option.key} key={index}>
              {" "}
              {option.value}{" "}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
