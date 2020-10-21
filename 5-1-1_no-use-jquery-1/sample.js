function getByClassName(className) {
    // 変数の準備
    var element;
    var result = [];

    // すべての要素を取得
    var elements = document.getElementsByTagName('*');

    // すべての要素を調べる
    for (var i = 0, len = elements.length; i < len; i++) {
        element = elements[i];

        // class名が指定したものだったらresultに追加
        if (element.className === className) {
            result.push(element);
        }
    }

    // 結果を返す
    return result;
}

window.onload = function() {
    // class名から要素を取得
    var elems = getByClassName('box');

    // テキスト色を赤くする
    for (var i = 0, len = elems.length; i < len; i++) {
        elems[i].style.color = 'red';
    }
};
