class Accordion {
    constructor(tiles){
	this.activeTile = null;
	for (const tile of tiles){
	    tile.addEventListener("click", (ev) => this.setActive(ev))
	}
    }

    setActive(event){
	if (this.activeTile){
	    this.activeTile.classList.toggle("active");
	    if (this.activeTile == event.target){
		this.activeTile = null;
		return;
	    }
	}
	this.activeTile = event.target;
	this.activeTile.classList.toggle("active");
    }
}


const tiles = document.getElementsByClassName("tile");
const Acc = new Accordion(tiles);
