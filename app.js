const arrows = document.querySelectorAll(".arrow");

const movieLists = document.querySelectorAll(".movie-list");

console.log(movieLists)

arrows.forEach((arrow,i) => {

    const itemNumber= movieLists[i].querySelectorAll("img").length;
    let clickCounter=0;
    arrow.addEventListener("click", () =>{
        clickCounter++;
        if(itemNumber-(5+clickCounter)>0){
            movieLists[i].style.transform=`translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
                -300}px)`;
        }
        else{
            movieLists[i].style.transform="translateX(0)";
            clickCounter = 0;
        }
    });
});