const url = 'https://api.mangadex.org/'

export async function login(data) {

    const response = await fetch(`${url}auth/login`, {
        //still need to figure out how to send user and password properly to receive token
        username: 'zortro',
        password: '092961DlG',
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })

    const user = await response.json()
    console.log(user)
    return user
}