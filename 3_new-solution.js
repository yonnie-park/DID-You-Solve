function solution(N, trees) {
    let count = 0
    for (let i = 0; i < trees.length; i++) {
        let coord = trees[i][0]
        trees[i][0] = N - trees[i][1] - 1
        trees[i][1] = coord
    }
    trees.sort()
    for (let i = 0; i < trees.length; i++) {
        if (i + 1 < trees.length) {
            if (trees[i][0] < trees[i + 1][0] && trees[i][1] < trees[i + 1][1]) {
                count++
            }
        }

    }
    return count + 1
}

console.log(solution(5, [
    [4, 3],
    [3, 1],
    [2, 2],
    [1, 4]
]))
