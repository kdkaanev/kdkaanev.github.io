function solve(){
    const btn = document.getElementById('subscribe')
    const input = document.getElementById('email')
    const divEmail = document.getElementById('email-mess')
    let errEmail = document.createElement('h4')
    const card = document.getElementById('card')
    const succes = document.getElementById('succes')
  
    errEmail.setAttribute('class','err')
    btn.addEventListener('click', btnHandler)
    function isEmailValid(emailAdress) {
       
        var EMAIL_REGEXP = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$', 'i');
        return EMAIL_REGEXP.test(emailAdress)
    }
    function btnHandler(e){
        errEmail.textContent = ''
        let input_value = input.value
        if (!isEmailValid(input_value)){
            errEmail.textContent = 'Valid email required'
            divEmail.appendChild(errEmail)
            input.setAttribute('class', 'input')
            
        }else{
            card.style.display = 'none';
            succes.style.display = 'block'
        }
        
    }
    
}
