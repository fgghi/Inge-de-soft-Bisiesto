import generarBisiesto from "./bisiesto.js";

describe("AñoBisiesto", () => {
  it("generar no bisiesto", () => {
    expect(generarBisiesto(1)).toEqual("No bisiesto");
});
it("generar bisiesto", () => {
    expect(generarBisiesto(400)).toEqual("Bisiesto");
});
it("generar no bisiesto", () => {
    expect(generarBisiesto(1700)).toEqual("No bisiesto");
});
it("generar no bisiesto", () => {
    expect(generarBisiesto(1800)).toEqual("No bisiesto");
});
it("generar no bisiesto", () => {
    expect(generarBisiesto(1900)).toEqual("No bisiesto");
});
});
