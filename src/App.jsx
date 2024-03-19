import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel] = useState(true);

  return (
    <>
    <Perfil nomeUsuario="kethyllendeliperi"/>
    <ReposList nomeUsuario="kethyllendeliperi"/>

    {formularioVisivel && (
      <Formulario/>
    )}
    </>
  )
}

export default App
