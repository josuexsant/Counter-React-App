const libro = {
  titulo: "El mejor programador",
  autor: "Juanito",
  paginas: 100,
  editorial: "Editorial",
  precio: 100,
};

export const HelloWorldApp = () => {

  return (
    <>
      <code> { JSON.stringify(libro) }</code>
      <h1>{libro.titulo}</h1>
      <p>El mejor programador</p>
    </>
  );
};
