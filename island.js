function getNeighbors(row, col, graph) {
  const neighs = [];

  // Check top
  if (row - 1 >= 0 && graph[row - 1][col] === 1) {
    neighs.push([row - 1, col]);
  }

  // Check bottom
  if (row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighs.push([row + 1, col]);
  }

  // Check left
  if (col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighs.push([row, col - 1]);
  }


  // Check right
  if (col + 1 <= graph[row].length && graph[row][col + 1] === 1) {
    neighs.push([row, col + 1]);
  }

  // Return neighbors
  return neighs;

  // Your code here
}

function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  const v = new Set();
  // Create a stack, put the starting node in the stack
  const s = [[row, col]];
  // Put the stringified starting node in visited
  v.add(`${row},${col}`);
  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (s.length) {
    // Pop the first node
    const curr = s.pop;

    // DO THE THING (increment size by 1)
    size++;

    // Then get neighs
    const neighs = getNeighbors(curr[0], curr[1], graph);

    for (let neigh of neighs) {

      if (!v.has(`${neigh[0]},${neigh[1]}`)) {
        // push all the UNVISITED neighbors on top of the stack
        s.push(neigh);
        // and mark them as visited
        v.add(`${neigh[0]},${neigh[1]}`);
      }
      console.log("s: ", s);

    }
  }
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!

  // return size
  console.log("size: ", size);
  return size;
}

// matrix = [
//   [1,1,1,0,0],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
// ]

// let row = 2;
// let col = 4;
// let cl = 5;
// console.log(col + 1 <= matrix[row].length);
// islandSize(1, 1, matrix);

module.exports = [getNeighbors, islandSize];
