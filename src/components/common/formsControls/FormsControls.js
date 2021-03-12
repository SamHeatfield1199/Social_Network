import React from 'react';
import classes from './FormsController.module.css';
//props содержат все кроме input и meta

const FormControl = ({input, meta, child, ...props}) =>{
    const hasError = meta.touched && meta.error

    return(
        <div className = {classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
            {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) =>{
    const {input, meta, child, ...restprops} = props
    return(
        <FormControl {...props}>
            <textarea {...input}{...restprops} />
        </FormControl>
    )
}

export const Input = (props) =>{
    const  {input, meta, child, ...restprops} = props
    return(
         <FormControl {...props}>
            <input {...input}{...restprops} />
        </FormControl>
    )
}