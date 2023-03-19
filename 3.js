function solution(N, trees) {
    let board = []
    for (let i = 0; i < N; i++) {
        board.push([])
        for (let j = 0; j < N; j++) {
            board[i].push(0)
        }
    }
    board[N - 1][0] = 2

    for (let i = 0; i < trees.length; i++) {
        const [x, y] = trees[i]
        board[N - y - 1][x] = 1
    }

    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[0].length - 1; j++) {
            if (board[i][j] == 1) {
                for (let k = j + 1; k < board[0].length; k++) {
                    board[i][k] = 1
                }
                for (let k = 0; k < i; k++) {
                    board[k][j] = 1
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        let found = false
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] == 1) {
                board[i][j] = 2
                found = true
                break
            }
        }
        if (!found) {
            continue
        }
    }
    let count = 0
    for (let i = 0; i < trees.length; i++) {
        const [x, y] = trees[i]
        if (board[N - y - 1][x] == 2) count++
    }

    return count
}
