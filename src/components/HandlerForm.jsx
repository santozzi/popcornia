import React, { useState } from "react";

function HandlerForm() {
  //guardar valores de los inputs
  const [inputValues, setInputValues] = useState({
    dato1: "",
    dato2: "",
  });



  //guardar toda la informacion del formulario
  const [dataEnviada, setDataEnviada] = useState("");

  //me va a decir el cambio y de donde viene
  // del evento del objetivo me traigo el valor: evento.target.value
  
  
  const handleChange = (evento, campoNombre) => {
   
    setInputValues({ ...inputValues, [campoNombre]: evento.target.value });
    console.log(inputValues);
  };

  //inputValues: paquete cerrado
  //...inputValues: el contenido del paquete

  //manejar envio de formulario
  const handleSubmit = evento => {
    evento.preventDefault();

    const customEvent = {
      data1: inputValues.dato1,
      data2: inputValues.dato2,
    };

    handleCustomSubmit(customEvent);

    setInputValues({
      dato1: "",
      dato2: "",
    });
  };

  const handleCustomSubmit = (customEvent) => {
    console.log("Se ha enviado el formulario");
    console.log("evento personalizado:", customEvent);
    setDataEnviada(
      `Dato 1: ${customEvent.data1}, Dato 2: ${customEvent.data2}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Dato 1
        <input
          type="text"
          value={inputValues.dato1}
          onChange={e => handleChange(e, "dato1")}
        />
      </label>

      <label>
        Dato 2
        <input
          type="text"
          value={inputValues.dato2}
          onChange={e => handleChange(e, "dato2")}
        />
      </label>

      <button type="submit">enviar</button>

      {dataEnviada && <p>{dataEnviada}</p>}
    </form>
  );
}

export default HandlerForm;