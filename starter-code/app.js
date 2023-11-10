function solve(){
    BASE_URL = 'https://api.github.com/users/'
    const searchBtn = document.querySelector('#js-search')
    const searchUser = document.querySelector('#js-user')
    const avatar = document.querySelector('#js-avatar')
    const nameUser = document.querySelector('#js-name')
    const loginUser = document.querySelector('#js-login')
    const bioUser = document.querySelector('#js-bio')
    const joinedUser = document.querySelector('#js-joined')
    const repos = document.querySelector('#repos')
    const folls = document.querySelector('#fols')
    const follg = document.querySelector('#follg')
    const location = document.querySelector('#js-location')
    const web = document.querySelector('#js-web')
    const twitt = document.querySelector('#js-twitter')
    const company = document.querySelector('#js-company')
    const noUser = document.querySelector('#err')
    searchBtn.addEventListener('click', searchHandler)


    function searchHandler(){
        let user = searchUser.value
        fetch(BASE_URL+user)
            .then((resp) =>resp.json())
            .then((data) =>{
                console.log(data)
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
                console.log(created_at)
               
              
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
 
        
    }
solve()