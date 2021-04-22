let row = 100
let day = 0
let main = document.getElementById("main")
let row_submit = document.getElementById("submit_row")
let presence = []
let neighbor = []

row_submit.onclick = (e)=>{
    let row_elts = document.getElementById("row")
    row = Math.abs(parseInt(row_elts.value))
    init()
}


const updateNeighbor = () => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {

            let val = 0


            if ((i - 1) >= 0 && (j - 1) >= 0) {
                if (presence[i - 1][j - 1] == 1)
                    val++
            }
            if ((i - 1) >= 0) {
                if (presence[i - 1][j] == 1)
                    val++
            }
            if ((i - 1) >= 0 && (j + 1) < row) {
                if (presence[i - 1][j + 1] == 1)
                    val++
            }
            if ((j - 1) >= 0) {
                if (presence[i][j - 1] == 1)
                    val++
            }
            /*
            if(presence[i][j]){

            }
            */
            if ((j + 1) < row) {
                if (presence[i][j + 1] == 1)
                    val++
            }
            if ((i + 1) < row && (j - 1) >= 0) {
                if (presence[i + 1][j - 1] == 1)
                    val++
            }
            if ((i + 1) < row) {
                if (presence[i + 1][j] == 1)
                    val++
            }
            if ((i + 1) < row && (j + 1) < row) {
                if (presence[i + 1][j + 1] == 1)
                    val++
            }
            neighbor[i][j] = val

            //document.getElementById(i + "_" + j).innerHTML = neighbor[i][j]

        }
    }
}

const init = () => {
    main.innerHTML = ''
    presence = []
    neighbor = []
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr')
        presence.push([])
        neighbor.push([])
        for (let j = 0; j < row; j++) {
            let td = document.createElement('td')
            td.id = i + '_' + j
            tr.appendChild(td)
            presence[i].push(0)
            neighbor[i].push(0)
            td.className = presence[i][j] ? 'cell' : 'noCell'
            //td.innerHTML = neighbor[i][j]
            td.onclick = (e) => {
                /*let x = e.target.id[0]
                let y = e.target.id[2]*/
                presence[i][j] = presence[i][j] ? 0 : 1
                e.target.className = presence[i][j] ? 'cell' : 'noCell'

                updateNeighbor()

            }
        }
        day = 0
        document.getElementById("day").innerHTML = day
        main.appendChild(tr)
    }
}

const iterate = () => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row; j++) {
            switch (neighbor[i][j]) {
                case 0:
                    presence[i][j] = 0
                    break
                case 1:
                    presence[i][j] = 0
                    break
                case 2:
                    presence[i][j] == 1 ? presence[i][j] = 1 : presence[i][j] = 0
                    break
                case 3:
                    presence[i][j] = 1
                    break
                case 4:
                    presence[i][j] = 0
                    break
                case 5:
                    presence[i][j] = 0
                    break
                case 5:
                    presence[i][j] = 0
                    break
                case 7:
                    presence[i][j] = 0
                    break
                case 8:
                    presence[i][j] = 0
                    break

                default:
                    console.error("Erreur")
                    break
            }



            document.getElementById(i + "_" + j).className = presence[i][j] ? 'cell' : 'noCell'
        }
    }
    day++
    document.getElementById("day").innerHTML = day
    updateNeighbor()
}




init()

document.onkeypress = (e) => {

    if (e.code == "KeyR") init()
    if (e.code == "KeyI") iterate()

}



