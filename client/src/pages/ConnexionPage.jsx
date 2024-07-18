/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";

function ConnexionPage() {
  const { setCurrentUser } = useOutletContext();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3310/api/auth/login",
        data,
        {
          withCredentials: true,
        }
      );
      setCurrentUser(response.data.user);
    } catch (e) {
      console.error(e.response.data);
    }
  };

  return (
    <div className="register">
      <div className="buttonregister">
        <Link to="/register">
          <button type="button">Créer un compte</button>
        </Link>
        <button type="button">Se connecter</button>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="allform">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: "Votre email est obligatoire!",
                pattern: {
                  value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                  message: "Le format de votre email est incorrect !",
                },
              })}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: "le mot de passe est requis!",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message: "Le format de votre mot de passe est incorrect !",
                },
              })}
            />
          </div>
          <button type="submit" className="button_connexion">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConnexionPage;
