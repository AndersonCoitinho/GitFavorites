export class Favorites {
    constructor(root) { /*root é a div app*/
        this.root = document.querySelector(root)
    }
}



export class FavoritesView extends Favorites {
    constructor(root) {
        super(root) /*vai criar o root pegando da class favorites*/

        this.update()
    }

    update() {
        this.removeAllTr()



    }

    createRow() {
        const tr = document.createElement('tr')

        tr.innerHTML = `
                    <td class="user">
                        <img src="https://github.com/AndersonCoitinho.png" alt="Imagem do GitHub">
                        <a href="https://github.com/AndersonCoitinho" target="_blank">
                            <p>Anderson Coitinho</p>
                            <span>AndersonCoitinho</span>
                        </a>
                    </td>
                    <td class="repositories">
                        95
                    </td>
                    <td class="followers">
                        135
                    </td>
                    <td>
                        <button class="remove">&times;</button>
                    </td>
        `

        return tr
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
            .forEach((tr) => { /*para cada "tr" ele vai executar*/
                tr.remove()
            })
    }
}