function solution(n) {
    let n_3 = n.toString(3)
    let reverse = n_3.split("").reverse().join("")
    let ans = parseInt(reverse, 3)

    return ans
}

console.log(solution(45))