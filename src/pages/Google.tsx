import {useEffect} from 'react'

function Google() {
    let link = ''

    // GitHub
    useEffect(function () {
        // The client id from github
        const client_id = "Ov23lix6EdcGrBfP7Bee"
        // На какой адрес нашего сервера ГитХаб должен сделать переадресацию после того,
        // как пользователь резрешит использовать его данные на нашем сайте
        const redirect_uri = "http://localhost:3000/api/v1/auth/registration/github"

        // Затем нужно сгенерировать какой-то токен CSRF. Про это можно почитать тут:
        // https://www.synopsys.com/glossary/what-is-csrf.html
        // И он генерируется через crypto.randomBytes(16).toString("hex")
        // Но модуль crypto есть только на Ноде. Поэтому сгенерировал его там и тут вставляю как обычную строку.
        const state = '50c45fc5314190fc5d117c09dc9ebadf'
        // Это сохраняется в LocalStorage. Пока не понимаю для чего.
        localStorage.setItem("latestCSRFToken", state)

        // Адрес ГитХаба, на который перенаправить пользователя для авторизации через ГитХаб.
        // В response_type написано, что ГитХаб должен прислать какой-то код в ответе.
        // А в scope написано какие разрешения мой сайт запрашивает у ГитХаба. Написано repo, не знаю что это обозначает.
        // И в redirect_url заносится адрес страницы на который ГитХаб должен переадресовать пользователя, который согласится авторизоваться через ГитХаб.
        // И в state как раз сгенерированный токен CSRF.
        link = `https://github.com/login/oauth/authorize?client_id=${client_id}&response_type=code&scope=user&redirect_uri=${redirect_uri}&state=${state}`

        // По какой-то причине при нажатии на ссылку перехода нет.
        // Поэтому я делаю автоматический переход на страницу авторизации при загрузке страницы.
        window.location.assign(link)
    }, [])

    // Google
    useEffect(function () {
        const client_id = "792546249106-u5of55jk4hus635kpd936g5968b62a1c.apps.googleusercontent.com"
        const redirect_uri = "http://localhost:3000/api/v1/auth/registration/google"

        const state = '50c45fc5314190fc5d117c09dc9ebadf'
        localStorage.setItem("latestCSRFToken", state)

        // Адрес ГитХаба, на который перенаправить пользователя для авторизации через ГитХаб.
        // В response_type написано, что ГитХаб должен прислать какой-то код в ответе.
        // А в scope написано какие разрешения мой сайт запрашивает у ГитХаба. Написано repo, не знаю что это обозначает.
        // И в redirect_url заносится адрес страницы на который ГитХаб должен переадресовать пользователя, который согласится авторизоваться через ГитХаб.
        // И в state как раз сгенерированный токен CSRF.
        link = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=code&scope=email profile&redirect_uri=${redirect_uri}&state=${state}`

        // По какой-то причине при нажатии на ссылку перехода нет.
        // Поэтому я делаю автоматический переход на страницу авторизации при загрузке страницы.
        window.location.assign(link)
    }, [])

  return (
    <a href={link}>
      GitHub
    </a>
  )
}

export default Google
