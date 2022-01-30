class Piece{
    constructor(ctx,color,posX,posY,src){
        this.ctx = ctx;
        this.color = color;
        this.src = src;
        this.img = new Image();
        
        // this.posX = (this.img.width - posX) / 2;
        this.posX = posX;
        this.posY = posY;
    }
    drawPiece(){
        this.img.onload = () => {
            this.ctx.drawImage(this.img,this.posX,this.posY);
        }
        this.img.src = this.src;
    }
}

class Pawn extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

class Horse extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

class Bishop extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

class Rook extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

class Queen extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

class King extends Piece{
    constructor(ctx,color,posX,posY,src){
        super(ctx,color,posX,posY,src)
    }
}

export {Pawn,Horse,Bishop,Rook,Queen,King};