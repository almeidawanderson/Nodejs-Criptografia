import {scrypt, randomBytes, timingSafeEqual, scryptSync} from 'crypto'

function hashWithSalt(password) {

  //randomBytes = gerador de dados aleatórios artificiais criptograficamente bem construídos e o número de bytes a serem gerados no código
  const salt = randomBytes(16).toString('hex')

  // função de derivação de chave baseada em senha.
  // Destina-se a ser caro computacionalmente e em termos de memória.
  // Portanto, os ataques de força bruta são infrutiferos:
  
  const passwordHash = scryptSync(password, salt, 64).toString('hex')

  return `${salt}:${passwordHash}`
}

class User {
  constructor(name, password) {
    this.name = name;
    // a senha não vai ser armazenada, separar e receber cada um dos valores:
    [this.salt, this.hash] = hashWithSalt(password).split(':')

  }
}

const jm = new User('Joao Manoel', 'senhaSecreta')
console.log(jm);