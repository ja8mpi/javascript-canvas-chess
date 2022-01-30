const fillRow = (ctx,i,width,height,primaryColor,secondaryColor) => {
    for (let j = 0; j < canvas.width;j++) {
      if(j % 2 === 0) {
        ctx.fillStyle = primaryColor;
      }else{
        ctx.fillStyle = secondaryColor;
      }
    ctx.fillRect((j-width)*width,i*height,width,height);  
    }
  }

const generateChessBoard =  (ctx,width,height)=>{
   for (let i =0; i < canvas.height; i++) {
      if((i) % 2 === 0){
        fillRow(ctx,i,width,height,"#753b00","#e0bc99");
      }else{
        fillRow(ctx,i,width,height,"#e0bc99","#753b00");
        }
    }
  }
  
export default generateChessBoard;