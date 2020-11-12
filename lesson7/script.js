const printWanko = () => {
    console.log("にんじゃわんこ");
};

const printHitsuji = () => {
    console.log("ひつじ仙人");
};

const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    callback();
};

// 引数をprintHitsujiに書き換えて出力を確認しましょう
call(printHitsuji);
const printWanko = () => {
    console.log("にんじゃわんこ");
};

// 関数callにcallbackという名前の引数を追加してください
const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    // 引数に渡したcallbackを呼び出してください
    callback();
};

// 関数printWankoを引数に渡して関数callを実行してください
call(printWanko);