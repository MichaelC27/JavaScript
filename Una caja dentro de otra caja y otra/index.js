const boxes = [
  { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
];
function fitsInOneBox(boxes) {
  boxes.sort((a, b) => b.l - a.l || b.w - a.w || b.h - a.h);
  for (let i = 1; i < boxes.length; i++) {
    
      if (boxes[i].l < boxes[i-1].l && 
        boxes[i].w <  boxes[i-1].w && 
        boxes[i].h < boxes[i-1].h ) {
        continue;
      }else{
        
        return false 
        break;}
  }
  return true;
}

console.log(fitsInOneBox(boxes)); 
