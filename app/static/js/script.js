const leaderBoardDiv = document.querySelector(".leaderboard-list");
const url = `https://gist.githubusercontent.com/dhatGuy/5638e191aceb026df01f08e1c1674d86/raw/e00a27889ff5bb0402111187d76b3cbdf98b6b4f/data.json`

const shareScore = (name, points) => {
  return `Hey guys, check out my score on HNGi7 Leaderboard. \n Name: ${name} with ${points} points`
}

const sortByPoints = (a, b) => {
  return b.score-a.score
}

const leaderBoard = () => {
  let loader = `<div id="loader"></div>`
  leaderBoardDiv.innerHTML = loader;
  fetch(url).then(
    response => response.json()
  ).then(results => {
    let list = ""
    results.sort(sortByPoints).forEach((result, index) => {
      list +=
       `<div class="individual">
        <p>
          <img src=${result.image} />
          <span class="position">${index + 1}. ${result.first_name} ${result.last_name}  </span>
            <span class="score-value">${result.score}</span>
            <span class="share-score fa fa-share-alt">
                
                <a href="http://facebook.com/sharer/sharer.php?u=https://www.leaderboard-hng.herokuapp.com" target="_blank" class="fa fa-facebook"></a>
                <a href="https://twitter.com/intent/tweet?text=${shareScore(result.first_name,result.score)}&url=https://www.leaderboard-hng.herokuapp.com&hashtags=hng,hngIntership" target="_blank" class="fa fa-twitter"></a>
          </span>
        </p>
      </div>`
      leaderBoardDiv.innerHTML = list;
    })
  })
}

leaderBoard()
