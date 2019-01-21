function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
 return monitorCount(rows, columns)  * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

/*  console: 4000. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks */
