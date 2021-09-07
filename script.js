async function createHacker(title, url, author, created) {

  const date = new Date(created * 1000);
  const humandate = date.toLocaleString("fr-FR")

  var content = document.getElementById(`content`)

  var atitle = document.createElement('a');
  var pauthor = document.createElement('p')
  var aauthor = document.createElement('a')
  var dateelement = document.createElement('p')

  var titletext = document.createTextNode(title)
  var ptext = document.createTextNode(`Author: `)
  var authortext = document.createTextNode(`${author}`)
  var datetext = document.createTextNode(`Created at: ${humandate}`)
  
  atitle.appendChild(titletext)
  atitle.href = url
  atitle.target = "_blank"
  content.appendChild(atitle)
  
  var br = document.createElement("br")
  content.appendChild(br)
  
  pauthor.appendChild(ptext)
  content.appendChild(pauthor)
  
  aauthor.appendChild(authortext)
  aauthor.href = `https://news.ycombinator.com/user?id=${author}`
  aauthor.target = "_blank"
  pauthor.appendChild(aauthor)

  dateelement.appendChild(datetext)
  content.appendChild(dateelement)

  var hr = document.createElement("hr")
  content.appendChild(hr)

}

window.onload = async function() {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const body = await response.json(); //extract JSON from the http response

    let data = []

    for (let i = 0; i != 3; i++) {
      const three = await fetch(`https://hacker-news.firebaseio.com/v0/item/${body[i]}.json?print=pretty`)
      const threebody = await three.json()

      createHacker(threebody.title, threebody.url, threebody.by, threebody.time)
  }
    return data
  }