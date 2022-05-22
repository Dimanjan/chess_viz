let VIZCOLORS={
    "attacked": "#ff0000",
    "defended": "#00ff00",
    "neutral": "#ffffff",

}
function SqAttackedFreq(sq, side) {
	var pce;
	var t_sq;
	var index;
    var count=0;

    // check if sq lies outside the board
	if (FilesBrd[sq] == SQUARES.OFFBOARD || sq<0 || sq>=SQUARES.NUM_SQUARES){
        console.log("SqAttackedFreq: invalid sq");
        return 0;
    }

    // Pawns
	if(side == COLOURS.WHITE) {
		if(GameBoard.pieces[sq - 11] == PIECES.wP){
            count+=1;
        } 
        if (GameBoard.pieces[sq - 9] == PIECES.wP) {
			count+=1;
		}
	} else {
		if(GameBoard.pieces[sq + 11] == PIECES.bP){
            count+=1;
        } 
        if (GameBoard.pieces[sq + 9] == PIECES.bP) {
			count+=1;
		}
	}
	
    // Knights
	for(index = 0; index < 8; index++) {
		pce = GameBoard.pieces[sq + KnDir[index]];
		if(pce != SQUARES.OFFBOARD && PieceCol[pce] == side && PieceKnight[pce] == BOOL.TRUE) {
			count+=1;
		}
	}
	// Rooks and Queens
	for(index = 0; index < 4; ++index) {		
		dir = RkDir[index];
		t_sq = sq + dir;
		pce = GameBoard.pieces[t_sq];
		while(pce != SQUARES.OFFBOARD) {
			if(pce != PIECES.EMPTY) {
				if(PieceRookQueen[pce] == BOOL.TRUE && PieceCol[pce] == side) {
					count+=1;
				}
			}
			t_sq += dir;
			pce = GameBoard.pieces[t_sq];
		}
	}
    // Bishops and Queens
	
	for(index = 0; index < 4; ++index) {		
		dir = BiDir[index];
		t_sq = sq + dir;
		pce = GameBoard.pieces[t_sq];
		while(pce != SQUARES.OFFBOARD) {
			if(pce != PIECES.EMPTY) {
				if(PieceBishopQueen[pce] == BOOL.TRUE && PieceCol[pce] == side) {
					count+=1;
				}
			}
			t_sq += dir;
			pce = GameBoard.pieces[t_sq];
		}
	}
	
    // King
	for(index = 0; index < 8; index++) {
		pce = GameBoard.pieces[sq + KiDir[index]];
		if(pce != SQUARES.OFFBOARD && PieceCol[pce] == side && PieceKing[pce] == BOOL.TRUE) {
			count+=1;
		}
	}
	
	return count;
	

}
function no_of_attackers(square){
    if (GameBoard.side == COLOURS.WHITE){
        
    }
}

function no_of_defenders(square){
    let noOfDefenders = square.getAttribute("noOfDefenders");
    square.innerHTML=noOfDefenders;
}

function coloring_square(square){
    let noOfAttacks = no_of_attackers(square);
    let noOfDefenders= no_of_defenders(square);
    square.style.backgroundColor=color;
}