import generateChessBoard from "./board.js"
import {Pawn,Horse,Bishop,Rook,Queen,King} from "./pieces.js"


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let cellWidth = 75;
let cellHeight = 75;


generateChessBoard(ctx,cellWidth,cellHeight);

let blackPieces = []
let whitePieces = []

const drawPawns = () =>{
    for (let i = 0; i < canvas.width; i+=cellWidth) {
        
        //Create rooks
        if(i === 0 || i === canvas.width-cellWidth) {
           
            //Create black piece
        let blackRook = new Rook(ctx,'black',i+((cellWidth-60)/2),0,"./pieces/black-rook.png");
           blackRook.drawPiece();
           blackPieces.push(blackRook);

           //Create white piece
           let whiteRook = new Rook(ctx,'white',i+((cellWidth-60)/2),canvas.height-cellHeight,"./pieces/white-rook.png");
           whiteRook.drawPiece();
           whitePieces.push(whiteRook);
        }

        //Create horses
        if(i === cellWidth || i === canvas.width-(2*cellWidth)) {
            
            //Create black piece
            let blackHorse = new Horse(ctx,'black',i+((cellWidth-60)/2),0,"./pieces/black-Horse.png");
            blackHorse.drawPiece();
            blackPieces.push(blackHorse);

            //Create white piece
           let whiteHorse = new Horse(ctx,'white',i+((cellWidth-60)/2),canvas.height-cellHeight,"./pieces/white-horse.png");
           whiteHorse.drawPiece();
           whitePieces.push(whiteHorse);
        }

        //Create bishops
        if(i === (2*cellWidth) || i === canvas.width-(3*cellWidth)) {
    
            //Create black piece
            let blackBishop = new Bishop(ctx,'black',i+((cellWidth-60)/2),0,"./pieces/black-bishop.png");
            blackBishop.drawPiece();
            blackPieces.push(blackBishop);

            //Create white piece
           let whiteBishop = new Bishop(ctx,'white',i+((cellWidth-60)/2),canvas.height-cellHeight,"./pieces/white-bishop.png");
           whiteBishop.drawPiece();
           whitePieces.push(whiteBishop);
        }

        //Create queens
        if(i === (3*cellWidth)){
            
            //Create black piece
            let blackQueen = new Queen(ctx,'black',i+((cellWidth-60)/2),0,"./pieces/black-queen.png");
            blackQueen.drawPiece();
            blackPieces.push(blackQueen);
            
            //Create white piece
            let whiteQueen = new Queen(ctx,'white',i+((cellWidth-60)/2),canvas.height-cellHeight,"./pieces/white-queen.png");
            whiteQueen.drawPiece();
            whitePieces.push(whiteQueen);
        }

        //Create kings
        if(i === (4*cellWidth)){

            //Create black piece
            let blackKing = new King(ctx,'black',i+((cellWidth-60)/2),0,"./pieces/black-king.png");
            blackKing.drawPiece();
            blackPieces.push(blackKing);
        
            //Create white piece
            let whiteKing = new King(ctx,'white',i+((cellWidth-60)/2),canvas.height-cellHeight,"./pieces/white-king.png");
            whiteKing.drawPiece();
            whitePieces.push(whiteKing);
            
        }

        //Create pawns

        //create black piece
        let blackPawn = new Pawn(ctx,'black',i+((cellWidth-60)/2),cellHeight,"./pieces/black-pawn.png")
        blackPawn.drawPiece();
        blackPieces.push(blackPawn);

        //create white piece
        let whitePawn = new Pawn(ctx,'white',i+((cellWidth-60)/2),canvas.height-(2*cellHeight),"./pieces/white-pawn.png")
        whitePawn.drawPiece();
        whitePieces.push(whitePawn);
    }
} 

const populateBoard = () => {
    drawPawns();
}

populateBoard();

