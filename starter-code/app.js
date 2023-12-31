

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
            aWeb =document.querySelector('#js-web > a')
            console.log(aWeb)
            if(loc === null){
                locationUser.textContent = 'Not Available'
                locationUser.style.opacity = 0.5
            }else{
                locationUser.textContent = loc
            }
            if(blog === ""){
                webUser.removeChild(aWeb)
                webUser.textContent = 'Not Available'
                webUser.style.opacity = 0.5
                    
            }else{
                aWeb.textContent = blog
            }
        }
}
solve()