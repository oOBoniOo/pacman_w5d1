let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`;
mapa = pacmanMap.split("\n").filter((x) => {
  return x != "";
});
let columns = mapa[0].length;
let rows = mapa.length;

class Map {
  constructor(ctx) {
    this.canvasWidth = ctx.canvas.width;
    this.canvasHeight = ctx.canvas.height;
    /* Fill the code */
  }

  keyboard_event() {}
  update() {}

  drawBloq(ctx, fillColor = "lightgrey", x, y, bW, bH) {
    ctx.fillStyle = fillColor;

    ctx.fillRect(x, y, bW, bH);

    ctx.strokeStyle = fillColor;

    ctx.strokeRect(x, y, bW, bH);
  }
  drawBall(ctx, fillColor = "red", x, y, bW, bH) {
    ctx.fillStyle = fillColor;

    ctx.beginPath();

    ctx.arc(x + bW / 2, y + bH / 2, 3, 0, Math.PI * 2, true);

    ctx.fill();
  }

  draw(delta, ctx) {
    let spacing = 10;
    let sizex = this.canvasWidth / columns;
    let sizey = this.canvasHeight / rows;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.lineWidth = 1;
        switch (mapa[i][j]) {
          case "W":
            this.drawBloq(ctx, "blue", j * sizex, i * sizey, sizex, sizey);
            break;

          case "o":
            this.drawBloq(ctx, "white", j * sizex, i * sizey, sizex, sizey);
            break;

          case ".":
            this.drawBall(ctx, "purple", j * sizex, i * sizey, sizex, sizey);
            break;

          case "*":
            this.drawBall(ctx, "green", j * sizex, i * sizey, sizex, sizey);
            break;
        }
      }
    }
    /* Fill the code */
  }
}
