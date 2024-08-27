import generarBisiesto from "./bisiesto.js";

describe("AñoBisiesto", () => {
  it("generar no bisiesto", () => {
    expect(generarBisiesto(1)).toEqual("No bisiesto");
});
it("generar bisiesto", () => {
    expect(generarBisiesto(400)).toEqual("Bisiesto");
});
it("Año divisible por 100 pero no 400", () => {
    expect(generarBisiesto(1700)).toEqual("No bisiesto");
});
it("Año divisible por 100 pero no 400", () => {
    expect(generarBisiesto(1800)).toEqual("No bisiesto");
});
it("Año divisible por 100 pero no 400", () => {
    expect(generarBisiesto(1900)).toEqual("No bisiesto");
});
it("Año divisibles por 4 pero no por 100", () => {
    expect(generarBisiesto(2008)).toEqual("Bisiesto");
});
it("Año divisibles por 4 pero no por 100", () => {
    expect(generarBisiesto(2012)).toEqual("Bisiesto");
});
it("Año divisibles por 4 pero no por 100", () => {
    expect(generarBisiesto(2016)).toEqual("Bisiesto");
});
it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
    expect(generarBisiesto(2017)).toEqual("No bisiesto");
});
it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
    expect(generarBisiesto(2018)).toEqual("No bisiesto");
});
it("Todos los años que no son divisibles por 4 NO son años bisiestos", () => {
    expect(generarBisiesto(2019)).toEqual("No bisiesto");
});
});
