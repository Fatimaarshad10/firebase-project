import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {addDoc , collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
function CreateForm () {
  const schema = yup.object().shape({
    title: yup.string().required("You must add a title"),
    detail: yup.string().required("You must add a detail"),
    price : yup.number().required("You must add a price")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });




const books = collection(db, "books")

  const onCreatePost = async(data) => {
   await addDoc(books , {
    title : data.title ,
    detail : data.detail,
    price : data.price
   })
  };


  return (
    <div>

      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="Title..." {...register("title")} />
        <p style={{ color: "red" }}>{errors.title?.message}</p>
        <textarea placeholder="Detail..." {...register("detail")} />
        <input placeholder="Price" {...register("price")} />
        <p style={{ color: "red" }}>{errors.description?.message}</p>
        <input type="submit" className="submitForm" />
      </form>
    </div>
  );
};
export default CreateForm