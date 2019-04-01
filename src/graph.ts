export class Graph {

    noOfVertices: number;

    constructor(noOfVertices: number) {
        this.noOfVertices = noOfVertices;
    }

    breathFirstSearch(rGraph: any, s: any, t: any, parent: any) {
        let visited = [];
        for (let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        let queue = [];
        queue.push(s);
        visited[s] = true;
        parent[s] = -1;

        while (queue.length != 0) {
            let u = queue.shift();
            for (let i = 0; i < this.noOfVertices; i++) {
                if (visited[i] == false && rGraph[u][i] > 0) {
                    queue.push(i);
                    parent[i] = u;
                    visited[i] = true;
                }
            }
        }

        return (visited[t] == true) ? true : false;
    }

    fordFulkerson(graph: any, s: any, t: any) {
        let u;
        let rGraph = Array.from(Array(this.noOfVertices), () => new Array(this.noOfVertices));

        for (let u = 0; u < this.noOfVertices; u++) {
            for (let v = 0; v < this.noOfVertices; v++) {
                rGraph[u][v] = graph[u][v];
            }
        }

        let parent: any = [];
        let maxFlow = 0;
        while (this.breathFirstSearch(rGraph, s, t, parent)) {
            let pathFlow = Number.MAX_VALUE;
            for (let v = t; v != s; v = parent[v]) {
                u = parent[v];
                pathFlow = Math.min(pathFlow, rGraph[u][v]);
            }

            for (let v = t; v != s; v = parent[v]) {
                u = parent[v];
                rGraph[u][v] -= pathFlow;
                rGraph[v][u] += pathFlow;
            }

            maxFlow += pathFlow;

        }
        return maxFlow;

    }

    parseGraph(graph:any){
        for (let u = 0; u < graph.length; u++) {
            let toPrint = '';
            for (let v = 0; v < graph.length; v++) {
                const node = graph[u][v];
                toPrint += (node<10)?'0'+node:node;
                toPrint += ' ';
            }
            console.log(toPrint);
        }
    }


}