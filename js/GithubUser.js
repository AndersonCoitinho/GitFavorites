export class GithubUser {
    static search(username) {
        const endpoin = `https://api.github.com/users/${username}`

        return fetch(endpoin)
            .then(data => data.json()) //transforma em json
            .then(({ login, name, public_repos, followers }) => ({    //retorna objeto
                login,
                name,
                public_repos,
                followers
            }))
    }
}