
    for (let i = 2; i <= n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res[n];