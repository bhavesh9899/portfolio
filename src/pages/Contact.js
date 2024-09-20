import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://formspree.io/f/manwgnqq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your form has been submitted successfully!',
                    confirmButtonText: 'OK',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Failed to submit the form. Please try again.',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error submitting the form. Please try again later.',
                confirmButtonText: 'OK',
            });
        }
    };
    return (
        <>
            <Navbar />
            <div className='container min-vh-100 py-5'>
                <form className='form-group col-md-5 col-lg-6 col-md-7 m-auto' method="post" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-center title mt-5'>Contact</h2>
                    <div className='pb-1 pb-lg-3'>
                        <label style= {{fontFamily: ' "Kanit", serif', fontWeight: '400'}} htmlFor='name'>Name</label>
                        <input type='text' className='form-control' placeholder="Enter Name..." id="name" name="name" {...register('name', { required: 'name is required' })} />
                        {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                    </div>
                    <div className='pb-1 pb-lg-3'>
                        <label style= {{fontFamily: ' "Kanit", serif', fontWeight: '400'}} htmlFor='email'>E-mail</label>
                        <input type='text' className='form-control' placeholder="Enter E-mail..." id="email" name="email" {...register('email', {
                            required: 'email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'enter a valid email',
                            },
                        })} />
                        {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                    </div>
                    <div className='pb-1 pb-lg-3'>
                        <label style= {{fontFamily: ' "Kanit", serif', fontWeight: '400'}} htmlFor='message'>Message</label>
                        <textarea className='form-control' rows="5" placeholder="Enter Message..." id="message" name="message" {...register('message', { required: 'message is required' })}></textarea>
                        {errors.message && <small className='text-danger'>{errors.message.message}</small>}
                    </div>
                    <input type='submit' className='form-control btn btn-primary my-2' />

                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact