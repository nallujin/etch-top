createGrid(50, 50)
resetGrid();
customizeGrid();



function createGrid(yAxis, xAxis) {
    const mainContainer = document.querySelector(".main");
    for (let i = 0; i < yAxis; i++) {
        const containerBlock = document.createElement("div");
        containerBlock.classList.add("container-block");
        for (let i = 0; i < xAxis; i++) {
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("grid-block");
            gridBlock.addEventListener("mouseover", () => {
                gridBlock.classList.add("when-hover");
            });
            containerBlock.appendChild(gridBlock);
        }
        mainContainer.appendChild(containerBlock);
    }
}

function resetGrid() {
    const gridBlocks = document.querySelectorAll(".grid-block");
    gridBlocks.forEach((gridBlock) => {
        gridBlock.classList.remove("when-hover");
    });

    const resetBtn = document.querySelector("#reset");
    resetBtn.addEventListener("click", resetGrid);
}

function customizeGrid() {
    const customBtn = document.querySelector("#customValue");
    customBtn.addEventListener("click", () => {
        const customValue = Number(prompt("Please enter a value (5-60)!"));
        if (isNaN(customValue) === true) {
            alert("Please input numbers only!");
        } else if (customValue < 5 || customValue > 60) {
            alert("Please input a number between 5-60!");
        } else {
            removeGrid();
            createGrid(customValue, customValue);
        }
    });
}

function removeGrid() {
    const gridBlocks = document.querySelectorAll(".grid-block");
    gridBlocks.forEach(gridBlock => {
        gridBlock.remove();
    });
}