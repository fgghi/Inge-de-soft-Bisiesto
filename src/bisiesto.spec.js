import generarBisiesto from "./bisiesto.js";

describe("AñoBisiesto", () => {
  it("generar no bisiesto", () => {
    expect(generarBisiesto(1)).toEqual("No bisiesto");
});
it("generar bisiesto", () => {
    expect(generarBisiesto(400)).toEqual("Bisiesto");
});
});
