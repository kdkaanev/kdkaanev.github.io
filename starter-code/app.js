function solve(){
    BASE_URL = 'https://api.github.com/users/'
    const searchBtn = document.querySelector('#js-search')
    const searchUser = document.querySelector('#js-user')
    const avatar = document.querySelector('#avatar')
    const name = document.querySelector('#js-name')
    const login = document.querySelector('#js-login')
    const bio = document.querySelector('#js-bio')
    const joined = document.querySelector('#js-joined')
    const repos = document.querySelector('#repos')
    const folls = document.querySelector('#fols')
    const follg = document.querySelector('#follg')
    const location = document.querySelector('#js-location')
    const web = document.querySelector('#js-web')
    const twitt = document.querySelector('#js-twitter')
    const company = document.querySelector('#js-company')
    searchBtn.addEventListener('click', searchHandler)


    function searchHandler(){
        let user = searchUser.value
        fetch(BASE_URL+user)
            .then((resp) =>resp.json())
            .then((data) =>{
                console.log(data)
            })
    }
}
solve()