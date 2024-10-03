import { MAX_COLS, MAX_ROWS } from "./constants";
import { TGridType, TTileType } from "./types";

export function getUntraversedNeighbors(grid: TGridType, tile: TTileType) {
  const { row, col } = tile;
  const neighbors = [];
  if (row > 0) {
    neighbors.push(grid[row - 1][col]);
  }
  if (row < MAX_ROWS - 1) {
    neighbors.push(grid[row + 1][col]);
  }
  if (col > 0) {
    neighbors.push(grid[row][col - 1]);
  }
  if (col < MAX_COLS - 1) {
    neighbors.push(grid[row][col + 1]);
  }
  return neighbors.filter((n) => !n.isTraversed);
}
