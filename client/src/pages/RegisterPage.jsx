/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    reset();
    try {
      await axios.post("http://localhost:3310/api/user", data);
    } catch (e) {
      console.error(e.response.data);
    }
  };

  return (
    <div className="register">
      <div className="buttonregister">
        <p className="creationCompte">Créer un compte</p>
        <Link to="/connexion" className="seConnecter">
          Se connecter
        </Link>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="allform">
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Prénom"
              className="inputForm"
              {...register("firstname", {
                required: "Ce champ est requis !",
                minLength: {
                  value: 2,
                  message: "Votre prénom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.firstname && <span>{errors.firstname.message}</span>}
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Nom"
              className="inputForm"
              {...register("lastname", {
                required: "Ce champ est requis !",
                minLength: {
                  value: 2,
                  message: "Votre nom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.lastname && <span>{errors.lastname.message}</span>}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="inputForm"
              {...register("email", {
                required: "Votre email est obligatoire!",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Le format de votre email est incorrect !",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              className="inputForm"
              {...register("password", {
                required: "le mot de passe est requis!",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message: "Le format de votre mot de passe est incorrect !",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="confirmez votre mot de passe"
              className="inputForm"
              {...register("confirmpassword", {
                required: "le mot de passe est requis!",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message: "Le format de votre mot de passe est incorrect !",
                },
                validate: (value) =>
                  value === watch("password") ||
                  "Les mots ne sont pas identiques !",
              })}
            />
            {errors.confirmpassword && (
              <span>{errors.confirmpassword.message}</span>
            )}
          </div>
          <div className="button_connexion">
            <button type="submit" className="conect">
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
