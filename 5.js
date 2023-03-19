function solution(total_sp, skills) {
    let answer = [];

    let max = 0;
    for (let i = 0; i < skills.length; i++) {
        if (skills[i][1] > max) {
            max = skills[i][1];
        }
    }

    const skillArraySize = max;
    let skillTree = new Array(skillArraySize + 1);
    for (let i = 0; i < skillTree.length; i++) {
        skillTree[i] = [];
    }

    for (let i = 0; i < skills.length; i++) {
        skillTree[skills[i][0]].push(skills[i][1]);
    }

    let adjacnetCnt = 0;
    for (let i = 0; i < skillTree.length; i++) {
        adjacnetCnt += skillTree[i].length;
    }

    const sp = Math.floor(total_sp / (skillArraySize + adjacnetCnt));

    let costTree = new Array(skillArraySize + 1);

    DepthFirstSearch(skillTree, costTree, 1, sp);

    for (let i = 1; i < costTree.length; i++) {
        answer.push(costTree[i]);
    }

    return answer;
}

function DepthFirstSearch(skillTree, costTree, rootIndex, skillPoint) {
    let sumSp = 0;
    if (skillTree[rootIndex].length === 0) {
        return (costTree[rootIndex] = skillPoint);
    }

    for (let i = 0; i < skillTree[rootIndex].length; i++) {
        sumSp += DepthFirstSearch(skillTree, costTree, skillTree[rootIndex][i], skillPoint);
    }
    return (costTree[rootIndex] = sumSp);
}
