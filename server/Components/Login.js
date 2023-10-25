import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Login() {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="bg-black h-screen  w-screen">
      <div className="flex flex-col items-center   flex-1 h-full justify-center px-4 sm:px-0">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2   bg-white sm:mx-0" style={{ height: '500px' }}>
            <div className="flex flex-col w-full md:w-1/2 border border-blue-400 p-4">
              <div className="flex flex-col  flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center text-black font-bold ">Welcome Back</h1>
                <div className="w-full mt-4">
                  <div className="flex flex-col mt-4  text-black">
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500" />
                  </div>
                  <div className="flex flex-col mt-4 text-black">
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500" />
                  </div>
                  <div className="flex items-center mt-4">
                    <Field type="checkbox" name="remember" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                  </div>
                  <div className="flex flex-col mt-8">
                    <button type="submit" className="bg-blue-700 hover:bg-blue-900 text-white text-sm font-semibold py-2 px-4 rounded">
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }}></div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
