import {createCipheriv, randomBytes, createDecipheriv} from 'crypto'


// dado para ser encriptografado:
const mensage = 'Demonstração do curso';

// o valor da chave é a geração de dados pseudoaleatórios criptograficamente fortes.
const chave = randomBytes(32);

// vetor de inicialização que cria uma certa aleatoriedade na criação de senhas:
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi)

const mensageCifrada = cifra.update(mensage, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensageCifrada)

// Transmissão --------------- chave, vi, mensage

// Decifrar a mensagem:


const decifra = createDecipheriv('aes256', chave, vi);

const mensageDecifrada = decifra.update(mensageCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(mensageDecifrada);