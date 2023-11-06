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
        const showDay = document.getElementById('num-day')
        const showMonth = document.getElementById('num-month')
        const showYear = document.getElementById('num-year')
        let spanDay = document.createElement('span')
        let spanMonth = document.createElement('span')
        let spanYear = document.createElement('span')
        let funcDay = correctDay(dayValue, monthValue, emptyDay)
        let funcMonth = correctMonth(monthValue,emptyMonth)
        let funcYear = correctYear(yearValue, emptyYear)
        if (funcDay&& funcMonth && funcYear){
            emptyMonth.style.display = 'none'
            emptyDay.style.display = 'none'
            emptyYear.style.display = 'none'
            invalid.style.display ='none'
            
            let[d, m ,y] = solve(dayValue, monthValue, yearValue)
            
            showDay.textContent = d 
            showDay.appendChild(spanDay).textContent = ' days'
            showMonth.textContent = m 
            showMonth.appendChild(spanMonth).textContent = ' months'
            showYear.textContent = y
            showYear.appendChild(spanYear).textContent = ' years'
            
            
        }else if(dayValue === '' || monthValue === '' || yearValue == ''){
            return funcDay,funcMonth,funcYear
            
            }
            else{
             
                showDay.textContent = '- - '
                showDay.appendChild(spanDay).textContent = ' days'
                showMonth.textContent = '- - ' 
                showMonth.appendChild(spanMonth).textContent = ' months'
                showYear.textContent = '- - '
                showYear.appendChild(spanYear).textContent = ' years'
    
                invalid.style.display ='block'

            }
        
            function solve(d,m,y){
                // let d1= Date.parse(dateNow); 
                // let d2= Date.parse(`${d}/${m}/${y}`);
               
                let currentDate = new Date()
                let day = currentDate.getDate();
                let month = currentDate.getMonth();
                let year = currentDate.getFullYear();
                
                
                let d1 = new Date(year, month, day);                // April 5, 2014
                let d2 = new Date(y, m, d);            // February 22, 2013
                const february = (d1 % 4 === 0 && d1 % 100 !== 0) || d1 % 400 === 0 ? 29 : 28;
                const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
                let yearDiff =  d1.getYear()-d2.getYear()
        
                let monthDiff = d1.getMonth() - d2.getMonth();
                    if (monthDiff < 0) {
                        yearDiff--;
                        monthDiff += 12;
                    }
                
        
                    let dayDiff = d1.getDate() - d2.getDate();
                    if (dayDiff < 0) {
                      if (monthDiff > 0) {
                        monthDiff--;
                      } else {
                        yearDiff--;
                        monthDiff = 11;
                      }
                      dayDiff += daysInMonth[d1.getMonth()];
                    }
        
                    result = [dayDiff, monthDiff, yearDiff]
                return result
            
                
            }
       
        
    }

    function correctMonth(m,e){
       
        if(m === ''){
           e.style.display = 'block'
        }
        if(m in MONTH){
            return true
        }
        return false

    }
    function correctDay(d, m,e){
        if(d === ''){
           e.style.display = 'block'
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
            e.style.display = 'block'
       }
        if(y <= new Date().getFullYear()){
            return true
        }
    }

   
    
}

date()