import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Head from "next/head";
import Link from "next/link";

const Schema = yup.object().shape({
  email: yup.string().required().email(),
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
        <title>Login | Klinflow</title>
        <link rel="icon" href="/dlogo.png" />
      </Head>

      <div className="register__container">
        <section>
          <div className="signup__form">
            <h1 className="register-text-heading">Login</h1>

            <div className="input-areas">
              <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
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
                <a className="button-light mt-1" onClick={handleSubmit(onSubmit)}>
                  Login
                </a>
              </form>
            </div>

            <div className="mt-2">
              <p>
                <Link href="/register">
                  <a>Belum punya akun?</a>
                </Link>
              </p>
            </div>
            {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default ExampleHookForm;
