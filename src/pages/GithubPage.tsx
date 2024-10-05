import {useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

// Страница открываемая по адресу /github. Если адрес другой, то нужно сообщить мне.
function GithubPage() {
	const [searchParams] = useSearchParams()

	useEffect(function () {
		// Получить из адреса соде и строку состояния
		const code = searchParams.get('code')!
		const state = searchParams.get('state')!

		// Если строка состояния не равна строке, которую сохранили в LS,
		// то значит запрос перехвачен злоумышленником и нужно отказаться от дальнейших действий.
		if (state !== localStorage.getItem("latestCSRFToken")) {
			return
		}

		// Если всё в порядке, то дальше передать на наш сервер полученный код чтобы сервер мог по нему получить токен доступа к данным пользователя.
		// А по токену доступа получить сами данные.
		// const url = `http://localhost:5001/api/v1/auth/registration/by-provider?provider=github&code=${code}`
		const url = `https://main.sociable-people.com/api/v1/auth/registration/by-provider?provider=github&code=${code}`

		makeRequest(url).then(data => {
			// Обработать данные пользователя: поставить в Хранилище, забрать токен доступа. То есть сделать пользователя авторизованным.
			// После можно перебросить обратно на главную страницу.
			console.log(data)
		})
	}, [])

	// Можно отрисовать загрузчик чтобы показать процесс выполнения...
	return null
}

export default GithubPage

// Для себя написал такую функцию, можно заменить Аксиосом или другим инструментом
export async function makeRequest(url: string): Promise<string> {
	return await new Promise((resolve) => {
		fetch(url, {
			method: 'GET',
		})
			.then((res) => {
				if(!res.ok) return null
				return res.json()
			})
			.then((data) => {
				resolve(data)
			})
	})
}
