import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Head from "next/head";

const Schema = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  instansi: yup.string().required().min(2),
  whatsapp: yup.number().required().min(6),
});

function ExampleHookForm() {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const labelClick = (e) => {
    //labelclick makes change to checkbox
  };

  //errors.instansi && console.log("error name", errors.instansi);

  console.log(errors);

  return (
    <>
      <Head>
        <title>Daftar | Klinflow</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>
      
      <div className="register__container">
        <section>
          <div className="signup__form">
            <h1 className="register-text-heading">Daftar</h1>
            <div className="input-areas">
              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className={`register-input ${
                    errors.name ? "username-error" : null
                  }`}
                  name="name"
                  type="name"
                  placeholder="Nama Lengkap"
                  ref={register}
                />
                <p className="error-label">{errors.name?.message}</p>
                <input
                  className="register-input"
                  name="email"
                  type="email"
                  placeholder="Alamat Email"
                  ref={register}
                />
                <p className="error-label">{errors.email?.message}</p>
                <input
                  autoComplete="new-password"
                  className="register-input"
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register}
                />
                <input
                  className={`register-input ${
                    errors.instansi ? "username-error" : null
                  }`}
                  name="instansi"
                  type="name"
                  placeholder="Asal Instansi"
                  ref={register}
                />
                <p className="error-label">{errors.instansi?.message}</p>
                <input
                  className="register-input"
                  name="whatsapp"
                  type="tel"
                  placeholder="Nomor Whatsapp"
                  ref={register}
                />
                <p className="error-label">{errors.whatsapp?.message}</p>

                  
                  <a className="button-light mt-1" onClick={handleSubmit(onSubmit)}>Register</a>
                  
              </form>
            </div>

            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
          </div>
        </section>
      </div>
      
    </>
  );
}

export default ExampleHookForm;
