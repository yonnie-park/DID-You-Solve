function solution(maps) {
  const ROW = maps.length;
  const COL = maps[0].length;
  
  // 상, 하, 좌, 우 이동 방향
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  
  // 시작점 (1, 1), 도착점 (ROW, COL)
  const start = [0, 0];
  const dest = [ROW-1, COL-1];
  
  // 방문 여부를 저장하는 배열
  const visited = Array.from({length: ROW}, () => Array(COL).fill(false));
  
  // BFS를 위한 큐와 시작점을 큐에 추가
  const queue = [[start[0], start[1], 1]];
  visited[start[0]][start[1]] = true;
  
  // BFS 수행
  while (queue.length) {
    const [row, col, count] = queue.shift();
    
    if (row === dest[0] && col === dest[1]) {
      return count;
    }
    
    for (let i = 0; i < 4; i++) {
      const nr = row + dr[i];
      const nc = col + dc[i];
      
      if (nr >= 0 && nr < ROW && nc >= 0 && nc < COL && maps[nr][nc] === 1 && !visited[nr][nc]) {
        visited[nr][nc] = true;
        queue.push([nr, nc, count + 1]);
      }
    }
  }
  
  // 도착점에 도달할 수 없는 경우
  return -1;
}
