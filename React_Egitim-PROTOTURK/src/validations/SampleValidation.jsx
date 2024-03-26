import * as Yup from "yup";

export const SampleSchema = Yup.object().shape({
  code: Yup.string().required("Kod alanı boş bırakılamaz").min(6),
});
