import { FiCheck } from "react-icons/fi";
import { useField } from "formik";
import classNames from "classnames";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label className="flex gap-x-2 items-center text-sm cursor-pointer">
        <button
          onClick={() => {
            helpers.setValue(!field.value);
          }}
          className={classNames({
            "w-5 h-5 rounded border transition-all flex items-center  justify-center": true,
            "text-transparent border-gray-300": !field.value,
            "border-blue-600 text-blue-600": field.value,
          })}
        >
          <FiCheck size={20} />
        </button>
      </label>
    </>
  );
}
