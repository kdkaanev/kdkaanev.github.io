

function solve(){
    
    BASE_URL = 'https://api.github.com/users/'
    const searchBtn = document.querySelector('#js-search')
    const searchUser = document.querySelector('#js-user')
    const avatar = document.querySelector('#js-avatar')
    const nameUser = document.querySelector('#js-name')
    const loginUser = document.querySelector('#js-login')
    const bioUser = document.querySelector('#js-bio')
    const joinedUser = document.querySelector('#js-joined')
    const repos = document.querySelector('#js-repos')
    const folls = document.querySelector('#js-fols')
    const follg = document.querySelector('#js-follg')
    const locationUser = document.querySelector('#js-location')
    const webUser = document.querySelector('#js-web')
    const twittUser = document.querySelector('#js-twitter')
    const companyUser = document.querySelector('#js-company')
    const noUser = document.querySelector('#err')
    const sun = document.querySelector('#js-sun')
    const main = document.querySelector('#main')
    const them = document.querySelector('#color')
    const moon = document.querySelector('#js-moon')
    searchUser.value = 'octocat'
    
   
    
   
    searchBtn.addEventListener('click', searchHandler)

    
    sun.addEventListener('click', changeTeme)
    moon.addEventListener('click',reset, searchHandler)
  
      
    
    function reset(){
        
        window.location.reload()
        
        
    }
    function changeTeme(){
        
        
     
        them.textContent = 'DARK'
        sun.style.display = 'none'
        moon.style.display = 'inline'
        main.style.backgroundColor = "#f6f8ff";
        main.style.color = 'black'
        document.body.style.backgroundColor = '#f6f8ff'
        
        document.querySelector('#search').style.backgroundColor = '#fefefe'
        let user = document.querySelector('#js-user')
        user.style.backgroundColor = '#fefefe'
        user.style.color = 'black'
        user.style.border = '#fefefe'
        document.querySelector('#search > div > svg > path').style.fill = 'rgb(0 121 254)'
        document.querySelector('#card').style.backgroundColor = '#fefefe'
        document.querySelector('#card-data').style.backgroundColor = '#f6f8ff'
        document.querySelector('#card-contact').style.color = 'black'
        
      
                                    
    }

    function searchHandler(){
        user = searchUser.value
       
        fetch(BASE_URL+user)
            .then((resp) =>resp.json())
            .then((data) =>{
                
                
               if(data.message === 'Not Found'){
                noUser.textContent = 'No results'
               }
                let{avatar_url,
                    bio,
                    name,
                    login,
                    created_at,
                    public_repos,
                    followers,
                    following,
                    location,
                    blog,
                    twitter_username,
                    company
                } = data
                avatar.setAttribute('src', avatar_url)
                nameUser.textContent = showName(name, login)
                loginUser.textContent = '@' + login
                biography(bio, bioUser)
                date(created_at,joinedUser)
                repos.textContent = public_repos
                folls.textContent = followers
                follg .textContent = following
                is_available(location, blog, twitter_username,company)
                
               
               
              
            })
            .catch(err => console.log(err.message))
            
    }
   
    function showName(userName, loginName){
        if(userName === null){
            return loginName
        }
        return userName
    }
    function biography(b,user){
        if(b !== null){
            user.textContent = b
            user.style.opacity = 1
        }
    }
    function date(join_date,userJoin){
        options = {day: 'numeric', month: 'short', year: 'numeric' }
        let date = new Date(join_date).toLocaleDateString("en-GB", options)
        return userJoin.textContent = 'Joined ' + date
 
        }
    
        function is_available(loc, blog, tw, comp){
      
          

          
            if(loc === null){
                locationUser.textContent = 'Not Available'
                locationUser.style.opacity = 0.5
            }else{
                locationUser.textContent = loc
                
            }
            if(blog === ""){
                
                webUser.textContent = 'Not Available'
                webUser.style.opacity = 0.5
                    
            }else{
                webUser.textContent = ''
                let aWeb = document.createElement('a')
                aWeb.textContent = blog
                aWeb.setAttribute('href', blog)
                webUser.appendChild(aWeb)
                webUser.style.opacity = 1
                if(them.textContent === 'DARK'){
                    aWeb.style.color = 'black'
                }
            }
            if(tw === null){
                twittUser.textContent = 'Not Available'
                twittUser.style.opacity = 0.5
            }else{
                twittUser.textContent = ''
                let aTwit = document.createElement('a')
                aTwit.textContent = `https://twitter.com/${tw}`
                aTwit.setAttribute('href',`https://twitter.com/${tw}`)
                twittUser.style.opacity = 1
                twittUser.appendChild(aTwit)
                if(them.textContent === 'DARK'){
                    aTwit.style.color = 'black'
                }
                
                
            }
            if(comp === null){
                companyUser.textContent = 'Not Available'
                companyUser.style.opacity = 0.5
            }else{
                
                companyUser.textContent = ''
                let companyLink = document.createElement('a')
                let companyName = comp.substring(1)
                companyLink.textContent = comp
                companyLink.href = `https://github.com/${companyName}`
                companyName.textContent = comp
                companyUser.appendChild(companyLink)
                if(them.textContent === 'DARK'){
                    companyLink.style.color = 'black'
                }
            }
        }
    // window.addEventListener('load', searchHandler())
    
}

solve()
