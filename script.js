let character = $("#character");
let block = $("#block");
let score = $("#score");
let gameOver = $("#gameOver");
let _score = 0;
// character.css.background
let scoreInterval = null;
document.addEventListener("keyup", (event) =>
{
    if (event.keyCode != 38) return;
    if (!character.classList.contains("animate"))
    {
        character.classList.add("animate");
    }
    setTimeout(() =>
    {
        character.classList.remove("animate");
    }, 500)
})
let checkGameOver = setInterval(()=>{
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
  if (blockLeft < 75 && blockLeft > 50 && characterTop >= 130) {
    gameOver.classList.add("show");
    clearInterval(scoreInterval);
    character.remove();
    block.remove()
  }
},10)

setTimeout(()=>{
    scoreInterval=setInterval(()=>{
        _score++;
        score.innerHTML = _score;
    },100)
},1000)

function $(element)
{
    return document.querySelector(element);
}