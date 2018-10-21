

let defclass = (...o) => (...k) => (...v) => {
    let x = {};
    const len = k.length;
    for(let i in o)
    {
        Object.assign(x, o[i]);
    }
    for(let i=0; i < len; i++) {
        x[k[i]]=v[i];
    }
    return x;
}
