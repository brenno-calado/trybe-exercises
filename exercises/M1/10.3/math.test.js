const math = require('./math');

describe('testando funções da calculadora', () => {
  test('#subtrair', () => {
    // testando a implementação original, o mock e a restauração da função original
  
    // implementação original
    expect(math.subtrair(2, 2)).toBe(0);
  
    // criando o mock e substituindo a implementação para uma subtração
    const mockSubtrair = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a - b);
  
    math.subtrair(5, 1);
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair(5, 1)).toBe(4);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);
    expect(mockSubtrair).toHaveBeenLastCalledWith(5, 1);
  
    // restaurando a implementação original
    math.subtrair.mockRestore();
    expect(math.subtrair(3, 2)).toBe(1);
  });

  test('#Multiplicar', () => {
    const mockMultiplicar = jest
      .spyOn(math, 'multiplicar')
      .mockImplementation((a, b) => a * b)
      .mockReturnValueOnce(10);
    math.multiplicar(5, 3);
    expect(mockMultiplicar(5, 1)).toBe(5);
    expect(mockMultiplicar).toHaveBeenCalledTimes(2);
    expect(mockMultiplicar).toHaveBeenCalledWith(5, 1);
  })
});
