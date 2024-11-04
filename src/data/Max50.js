const RangedFifty = (Score, NumberOfOptions, Total_Questions) => {
    const constant = (Total_Questions * NumberOfOptions)/50;
    const Result = Score / constant;
    return Math.floor(Result);
}

export {RangedFifty};