import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../utils/helpers";
import { TGridType, TTileType } from "../../../utils/types";

export function djikstra(
  grid: TGridType,
  startTile: TTileType,
  endTile: TTileType
) {
  const traversedTiles = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;

  const unTraversedTiles = [base];
  while (unTraversedTiles.length > 0) {
    unTraversedTiles.sort((a, b) => a.distance - b.distance);
    const currentTile = unTraversedTiles.shift();
    if (currentTile) {
      if (currentTile.isWall) continue;
      if (currentTile.distance === Infinity) break;
      currentTile.isTraversed = true;
      traversedTiles.push(currentTile);
      if (isEqual(currentTile, endTile)) break;
      const neighbors = getUntraversedNeighbors(grid, currentTile);

      for (let i = 0; i < neighbors.length; i++) {
        if (currentTile.distance + 1 < neighbors[i].distance) {
          dropFromQueue(neighbors[i], unTraversedTiles);
          neighbors[i].distance = currentTile.distance + 1;
          neighbors[i].parent = currentTile;
          unTraversedTiles.push(neighbors[i]);
        }
      }
    }
  }
  const path = [];
  let current = grid[endTile.row][endTile.col];
  while (current !== null) {
    current.isPath = true;
    path.unshift(current);
    current = current.parent!;
  }
  return { traversedTiles, path };
}
