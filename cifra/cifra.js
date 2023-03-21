const secret_message = 'minhamensagemsecreta'

function messageCifra (message, move) {
  const mensagemCifrada = message.split('').map( caractere => {
    const codigoCaractere = caractere.charCodeAt(0)
    return String.fromCharCode( codigoCaractere + move)
  })

  return mensagemCifrada.join('')
}

console.log(messageCifra(secret_message, 1))