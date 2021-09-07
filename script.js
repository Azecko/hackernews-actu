const userAction = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    const body = await response.json(); //extract JSON from the http response

    let data = ""

    for (let i = 0; i != 3; i++) {
      const three = await fetch(`https://hacker-news.firebaseio.com/v0/item/${body[i]}.json?print=pretty`)
      const threebody = await three.json()
      data = data + `[${threebody.title}](${threebody.url})\n\n`
  }

    console.log(data)
  }