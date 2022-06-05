let VIZCOLORS={
    "attacked": "#ff0000",
    "defended": "#00ff00",
    "neutral": "#ffffff",

}




function LegalMoves() {

	var index;
	var move;

	let lst=[];

	for(index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply+1]; ++index) {
		move = GameBoard.moveList[index];
		lst.push(move)
		
	}
	return lst;
}
function PrLegalMoves() {

	var index;
	var move;

	let lst=[];

	for(index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply+1]; ++index) {
		move = GameBoard.moveList[index];
		lst.push(PrMove(move))
		
	}
	return lst;

}

function area_of_influence(){
	let moves=LegalMoves()
	let lst=[]
	for(let i=0;i<moves.length;i++){
		lst.push(TOSQ(moves[i]))
	}
	return lst;	
}

function color_square(sq=41,color=VIZCOLORS.attacked){
	var file = FilesBrd[sq];
	var rank = RanksBrd[sq];
	var rankName = "rank" + (rank+1);
	var	fileName = "file" + (file+1);

	// select square with both classes
	var squareGUI = document.querySelector("." + rankName + "." + fileName);

	// set color
	squareGUI.style.backgroundColor = color;
}
function color_toSquares(moves,color=VIZCOLORS.defended){
	for(let i=0;i<moves.length;i++){
		let to=TOSQ(moves[i])
		color_square(to,color)
	}
}

function color_area_of_influence(){
	let moves=LegalMoves()
	color_toSquares(moves)
}