import { User } from './models/user';

let utenti: User[] = [
  {
    id: 1,
    email: 'blabla@prova.com',
    name: 'Peppe',
    role: 'admin'
  },
  {
    id: 2,
    email: 'lalala@prova.com',
    name: 'Fausto',
    role: 'user'
  }

]
export function getUtenti(){
  return utenti;
}

export function getUtente(idPost:number){
  return utenti.find((utente:User)=> utente.id === idPost)
}


