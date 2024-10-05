// Страница где есть кнопки авторизации по соцсетям
function App() {
  return (
      <div>
          <p onClick={onGitHubClick}>Authorize by GitHub</p>
          <p onClick={onGoogleClick}>Authorize by Google</p>
      </div>

  )
}

export default App

function onGitHubClick() {
    const {hostname} = location

    // The client id from github
    const clientId = hostname === 'localhost' ? "Ov23lix6EdcGrBfP7Bee" : 'Ov23liO3kDzrbnr2fXKK'
    // На какой адрес клиента ГитХаб должен сделать переадресацию после того,
    // как пользователь разрешит использовать его данные на нашем сайте
    const redirectUri = hostname === 'localhost' ? "http://localhost:3000/github" : 'https://sociable-people.com/github'

    // Затем нужно сгенерировать случайную строку.
    // Например используйте uuid()
    // Для демонстрации используют обычную.
    const state = '50c45fc5314190fc5d117c09dc9ebadf'
    // Сохранить в LocalStorage. Потом потребуется при получении ответа от ГитХаба.
    localStorage.setItem("latestCSRFToken", state)

    // Адрес ГитХаба, на который перенаправить пользователя для авторизации через ГитХаб.
    const link = `https://github.com/login/oauth/authorize?client_id=${clientId}&response_type=code&scope=user&redirect_uri=${redirectUri}&state=${state}`

    // Автоматический переход на страницу авторизации при загрузке страницы.
    window.location.assign(link)
}

// Для Гугла всё по аналогии.
function onGoogleClick() {
    const {hostname} = location

    const client_id = "792546249106-u5of55jk4hus635kpd936g5968b62a1c.apps.googleusercontent.com"
    // На какой адрес клиента Гугла должен сделать переадресацию после того,
    // как пользователь разрешит использовать его данные на нашем сайте
    const redirectUri = hostname === 'localhost' ? "http://localhost:3000/google" : 'https://sociable-people.com/google'

    // Затем нужно сгенерировать случайную строку.
    // Например используйте uuid()
    // Для демонстрации используют обычную.
    const state = '50c45fc5314190fc5d117c09d9eb'
    localStorage.setItem("latestCSRFToken", state)

    // Адрес Гугла, на который перенаправить пользователя для авторизации через Гугл.
    const link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=code&scope=email profile&redirect_uri=${redirectUri}&state=${state}`

    window.location.assign(link)
}