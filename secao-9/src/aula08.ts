// Tipo never
function createError(): never {
  throw new Error('Erro Qualquer')
}

createError()
