// import { createHash} from 'crypto'
const { createHash} = await import('node:crypto')

function hash(password) {
   return createHash('sha256').update(password).digest('hex')
}

console.log(hash('uma String Qualquer'))

class User {
  constructor(name, password) {
    this.name = name,
    this.hash = hash(password)
  }

  auth(name, password) {
    if(name === this.name && this.hash === hash(password)) {
      console.log("Usuario cadastrado com sucesso!")
      return true;
    }

    console.log("Usuario e senha incorretas")
    return false
  }
}

const usuario = new User('Wanderson Almeida', 'minhaSenha')
console.log(usuario);

usuario.auth('Wanderson Almeida', 'minhaSenha')