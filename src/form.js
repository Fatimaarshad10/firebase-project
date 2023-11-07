import React from 'react'
import * as yup from 'yup'
import {  useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
function Input() {

    const schema = yup.object().shape({
        fullName : yup.string().required("Your Full Name is Required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password : yup.string().min(4).max(20).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password"),null]).required()

    })
    const {register , handleSubmit , formState :{errors}} = useForm({
resolver : yupResolver(schema)
    })

const onSubmit = (data)=>{
    console.log(data)
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='full name' {...register("fullName")}/>
        <p>{errors.fullName?.message}</p>
        <input type='text' placeholder='email' {...register("email")}/>
        <input type='number' placeholder='age' {...register("age")}/>
        <input type='password' placeholder='password' {...register("password")}/>
        <input type='password' placeholder='confirm password' {...register("confirmPasword")}/>
        <input type='submit'/>
    </form>
  )
}

export default Input