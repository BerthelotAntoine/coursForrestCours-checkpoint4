/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ConnexionPage() {
  const { setCurrentUser } = useOutletContext();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios
        .post("http://localhost:3310/api/auth/login", data, {
          withCredentials: true,
        })

        .then((response) => {
          setCurrentUser(response.data.user);
        })
        .finally(() => navigate("/"));
    } catch (e) {
      console.error(e.response.data);
    }
  };

  return (
    <div className="register">
      <div className="buttonregister">
        <Link to="/register" className="seConnecter">
          Créer un compte
        </Link>
        <p className="creationCompte">Se connecter</p>
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="allform">
            <input
              type="text"
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

export default ConnexionPage;
