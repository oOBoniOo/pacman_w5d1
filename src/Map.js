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

  draw(delta, ctx) {
    let spacing = 10;
    let sizex = this.canvasWidth / columns;
    let sizey = this.canvasHeight / rows;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        switch (mapa[i][j]) {
          case "W":
            ctx.fillStyle = "black";
            ctx.fillRect(j * sizex, i * sizey, sizex + 1, sizey + 1);

          case "o":
            ctx.fillRect(j * sizex, i * sizey, sizex + 1, sizey + 1);

          case ".":
            ctx.arc(
              j * sizex + sizex / 2,
              i * sizey + sizey / 2,
              3,
              1,
              2 * Math.PI
            );

          case "*":
            ctx.arc(
              j * sizex + sizex / 2,
              i * sizey + sizey / 2,
              5,
              0,
              2 * Math.PI
            );
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    /* Fill the code */
  }
}
