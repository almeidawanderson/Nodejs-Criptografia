import {generateKeyPairSync, createSign, createVerify} from 'crypto'

const {privateKey, publicKey} = generateKeyPairSync('rsa', {

  modulusLength: 2048,

  publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
  },
  privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  }
)

let data = 'Essa string vai ser assinada!'

 