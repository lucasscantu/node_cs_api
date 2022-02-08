const criarCep = () => {
    let newCep = ""
    for(let i = 0; i < 8; i++) {
        newCep += Math.floor(Math.random()*10) //---> Cria um valor aleatório de 0 até 9!!!
    } return newCep
}; const criarCompl = () => {
    let compl = ""
    for(let i = 0; i < 3; i++) {
        compl += Math.floor(Math.random()*10) //---> Cria um valor aleatório de 0 até 9!!!
    } return compl
}
export default { criarCep, criarCompl }