const leaderBoardDiv = document.querySelector(".leaderboard-list");
const url = `https://gist.githubusercontent.com/dhatGuy/5638e191aceb026df01f08e1c1674d86/raw/e00a27889ff5bb0402111187d76b3cbdf98b6b4f/data.json`

const leaderBoard = () => {
  fetch(url).then(
    response => response.json()
  ).then(results => {
    results.forEach(result => {
      console.log(result)
      leaderBoardDiv.innerHTML +=`<div class="individual">
        <p><span class="position">${result.id}. ${result.first_name} ${result.last_name}  </span>
            <span class="score-value">${result.score}</span>
            <span class="share-score">
                share:
                <a href="http://facebook.com" class="fa fa-facebook"></a>
                <a href="http://twitter.com" class="fa fa-twitter"></a>
            </span>
        </p>
      </div>`
    })
  })
}

leaderBoard()
