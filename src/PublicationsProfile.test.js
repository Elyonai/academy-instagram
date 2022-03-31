import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { prettyDOM } from "@testing-library/react";
import { Photography } from "./components/Photo";

/*hook de jest para ejecutar antes de cada prueba
beforeEach(() => {
  const component = render(<Photography />);
});*/

test("Encontrar cards", () => {
  const component = render(<Photography />);

  //Encontrar si hay Card usadas
  const Card = component.container.querySelector("Card");
  console.log(prettyDOM(Card));
});

test("Encontrar container", () => {
  const component = render(<Photography />);

  //Encontrar si hay Box usados
  const Container = component.container.querySelector("Container");
  console.log(prettyDOM(Container));
});

test("Encontrar button", () => {
  const component = render(<Photography />);

  //Encontrar si hay Box usados
  const Button = component.container.querySelector("Button");
  console.log(prettyDOM(Button));
});

/*test("Encontrar boton modal", () => {

    //Encontrar boton modal
    const btn = screen.getByRole('button', {name: /modal/i})
    expect(btn).toBeInTheDocument()
  })*/
