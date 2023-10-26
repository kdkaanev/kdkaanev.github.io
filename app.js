function date(){

    const MONTH = {
        '01': 31,
        '02': [28, 29],
        '03': 31,
        '04': 30,
        '05': 31,
        '06': 30,
        '07': 31,
        '08': 31,
        '09': 30,
        '10': 31,
        '11': 30,
        '12': 31
    }
    const button =document.getElementById('btn')
    button.addEventListener('click', dateHandler)
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    
    

    function dateHandler(){
        let dayValue = day.value
        let monthValue = month.value
        let yearValue = year.value
        const emptyMonth = document.getElementById('b')
        const emptyDay = document.getElementById('a')
        const emptyYear = document.getElementById('c')
        const invalid = document.getElementById('invalid')
        let funcDay = correctDay(dayValue, monthValue, emptyDay)
        let funcMonth = correctMonth(monthValue,emptyMonth)
        let funcYear = correctYear(yearValue, emptyYear)
        if (funcDay&& funcMonth && funcYear){
            console.log('kyp')
        }else if(dayValue === '' || monthValue === '' || yearValue == ''){
            return funcDay,funcMonth,funcYear
            
            }
            else{
    
            invalid.style.display ='block'
            }
        
    }

    function correctMonth(m,e){
       
        if(m === ''){
           return e.style.display = 'block'
        }
        if(m in MONTH){
            return true
        }
        return false

    }
    function correctDay(d, m,e){
        if(d === ''){
           return e.style.display = 'block'
         }
        if(m === '02'){
            MONTH[m].forEach(day => {
                if(day <= d){
                    return true
                }
            });
                };
                if(d <= MONTH[m]){
                    return true
            }
        }
    

    function correctYear(y,e){
       if(y === ''){
       return e.style.display = 'block'
       }
        if(y <= new Date().getFullYear()){
            return true
        }
    }
    
}

date()