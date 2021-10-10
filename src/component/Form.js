import React from 'react';
import { useForm } from 'react-hook-form';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '60vw',
        marginTop: 80,
        gap: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'column'
    },
    inputBox: {
        padding: 5,
        borderRadius: 8
    },
    submitButton: {
        border: 0,
        backgroundColor: '#ff5d52',
        color: 'white',
        fontWeight: 200,
        padding: 8,
        borderRadius: 8,
    }
})
function Form() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    // google.auth.getClient.GoogleAuth({
    //     keyFilename: process.ENV.REACT_APP_GOOGLE_APPLICATION_CREDENTIALS,
    //     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // })
    const submit = (form) => {
        try {
            fetch(process.env.REACT_APP_URL, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form),
            })
        } catch (e) {
            console.log('error', e)
        }
        
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={classes.formContainer}>
                <input name='email' {...register('email', {})} className={classes.inputBox} />
                <input name='ticket' {...register('ticket', {})} className={classes.inputBox} />
                <input name='firstName' {...register('firstName', {})} className={classes.inputBox} />
                <input name='lastName' {...register('lastName', {})} className={classes.inputBox} />
                <input type="submit" className={classes.submitButton} />
            </div>
        </form>
    )
}

export default Form