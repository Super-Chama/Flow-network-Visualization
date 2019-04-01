import { Graph } from './graph';
document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;


// Using the above implemented graph class 
let g = new Graph(6);

let graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0]
];

// console.log('graph:', graph)

// console.log(g.fordFulkerson(graph, 0, 5));
console.log(g.fordFulkerson(RandomGraph(15), 0, 5));
g.parseGraph(RandomGraph(5));
function RandomGraph(verticesCount: any) {
  let rGraph = Array.from(Array(verticesCount), () => new Array(verticesCount));

  for (let u = 0; u < verticesCount; u++) {
    for (let v = 0; v < verticesCount; v++) {
      rGraph[u][v] = Math.floor(Math.random() * 20);
    }
  }

  return rGraph;

}
