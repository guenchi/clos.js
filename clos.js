
let make = (...s) => (...k) => (...v) => {
    let o = {};
    const l = k.length;
    for(let i in s) {
        Object.assign(o, s[i]);
    }
    for(let i=0; i < l; i++) {
        o[k[i]]=v[i];
    }
    return o;
}
