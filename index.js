console.log("Hey I am JS")

const makeHtml = (data) => {
    return `<div>
    <h3>From <span class="place">${data.ORIGIN_DESC}</span> to <span class="place">${data.DEST_DESC}</span></h3>
    </div>`
}

const getPostButtonClick = () => {
    console.log("button clicked!")
    const searchNum = document.getElementById("searchNum").value
    console.log(searchNum)
    // get data from api
    fetch(`http://localhost:5005/routes/${searchNum}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            const dataHtml = makeHtml(json)
            console.log(dataHtml)
            const node = document.getElementById("data")
            node.innerHTML = "<h2>Data</h2>" + dataHtml
        })
        .catch(err => console.log(err))
}