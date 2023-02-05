function getOptimalPath(path){
    return path.reduceRight((acc, curr) => {
        return curr.map((val, i) => {
            
            return val + Math.min(acc[i], acc[i + 1])
        })
    })[0]
}


/*function getOptimalPath(path) {
  let i = 0,a= 0;


  const camino = path.map((_, index, arr) => {
    if (index > 0 && arr[index][i] > arr[index][i + 1]) {
      a = i
      i = i + 1
      return arr[index][a + 1];
      
    } else {
      return arr[index][i]
    }
    
  });
  console.log(camino)
  let camino_Su = camino.reduce((a, b) => a + b, 0);
  return camino_Su;
}*/
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]]))
