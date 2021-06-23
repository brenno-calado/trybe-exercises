const { expect } = require("chai");
const integerValue = require("../integerValue");

describe("A função integerValue retorna", () => {
  it("o texto 'positivo' quando o parâmetro for maior que 0", () => {
    const positivo = integerValue(6);
    expect(positivo).to.be.a("string");
    expect(positivo).to.be.equals("positivo");
  });

  it("o texto 'negativo' quando o parâmetro for menor que 0", () => {
    const negativo = integerValue(-6);
    expect(negativo).to.be.a("string");
    expect(negativo).to.be.equals("negativo");
  });

  it("o texto 'neutro' quando o parâmetro for 0", () => {
    const neutro = integerValue(0);
    expect(neutro).to.be.a("string");
    expect(neutro).to.be.equals("neutro");
  });
});

