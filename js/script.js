
const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let dados = {nome, email,};
    let convert = JSON.stringify(dados);
    localStorage.setItem('lead', convert);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
})