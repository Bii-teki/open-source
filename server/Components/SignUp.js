import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function SignUp() {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    phoneNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg gap-4 flex">
        <div className="w-1/2 bg-cover hidden lg:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
        <div className="w-1/2 p-4 border border-blue-400 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Get your free account now</h1>
          <p className="text-gray-600">Let's get you all set up so you can verify your personal account and begin setting up your profile.</p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Snow"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">Phone number</label>
                <Field
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="XXX-XX-XXXX-XXX"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email address</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johnsnow@example.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">Confirm password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gray-800 placeholder-gray-400 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </div>
              <div className="flex flex-col justify-center">
                <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md hover-bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Sign Up</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
