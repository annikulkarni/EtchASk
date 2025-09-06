var submit = document.querySelector(".submit").addEventListener("click", (e) => {
    var inputVal = document.querySelector("#input");
    console.log(inputVal.value);
    const container = document.querySelector(".sketch");
    const row = document.createElement("div");
    row.classList.add("row");
    var sketchArray = [];
    for (let i = 0; i < inputVal.value; i++)
    {
        console.log(i);
        const mainPiece = document.createElement("div");
        const piece = document.createElement("div");
        piece.classList.add("piece");
        mainPiece.classList.add("mainPiece");
        if (inputVal.value <= 10)
        {
            piece.classList.add("gridElementBig");
        }
        if (inputVal.value >10&&inputVal.value<=20)
        {
            piece.classList.add("gridElementSmall");
        }
        if (inputVal.value >20&&inputVal.value<=35)
        {
            piece.classList.add("gridElementSmaller");
        }
        if(inputVal.value>35)
        {
            piece.classList.add("gridElementSmallest");
        }
        mainPiece.appendChild(piece);
        row.appendChild(mainPiece);
    }
    
    for (let i = 0; i < inputVal.value; i++)
    {
        const newRow = row.cloneNode(true);
        container.appendChild(newRow);
        sketchArray[i] = newRow;
    }
  
    for (let i = 0; i < inputVal.value; i++)
    {
        var nodes = sketchArray[i].childNodes;
        for (let j = 0; j < inputVal.value; j++)
        {
            nodes[j].childNodes[0].style.backgroundColor = "black";
            nodes[j].childNodes[0].style.opacity = 0;
        }
    }
        
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains('piece')&& e.ctrlKey) {
        }
        else if (e.target.classList.contains('piece')&& e.shiftKey) {
            const cS = window.getComputedStyle(e.target);
            const oP = cS.getPropertyValue('opacity');
            e.target.style.opacity = 1;
        }
        else if (e.target.classList.contains('piece')) {
            const cS = window.getComputedStyle(e.target);
            const oP = cS.getPropertyValue('opacity');
            e.target.style.opacity =  parseFloat(oP) + 0.1;
            let opacity = 1;
            const intervalId = setInterval(() => {
                if (e.target.style.opacity > 0) {
                    opacity -= 0.05;
                    e.target.style.opacity = opacity;
                }else {
                    clearInterval(intervalId); 
                    element.style.display = 'none'; 
                }
                
            }, 50);
        }
    })
        
});
