import generarBisiesto from "./bisiesto.js";

describe("AñoBisiesto", () => {
  it("generar bisiesto", () => {
    expect(generarBisiesto(1)).toEqual("Bisiesto");
  
});
});
