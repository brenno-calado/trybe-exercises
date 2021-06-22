function addAndMult(a, b, c) {
  const promise = new Promise((res, rej) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') return rej(Error('Informe apenas números'));
    const result = (a + b) * c;
    if (result < 50) return rej(Error('Valor muito baixo'));
    if (result > 50) return res(result);
  });
  return promise;
}

let params = [...Array(3)];
params = params.map(() => Math.floor(Math.random() * 100 + 1));

addAndMult(...params)
  .then(res => console.log(res))
  .catch(rej => console.error(rej))

