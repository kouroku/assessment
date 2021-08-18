'user strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子要素をすべて削除する
 * @param {HTMLElement} element HTMLの要素 
 */
function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

userNameInput.onkeydown = event => {
    if(event.key === 'Enter'){
        assessmentButton.onclick();
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {

        return;
    }
    
    removeAllChildren(resultDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-text="診断結果の文章" data-show-count="false">Tweet #あなたのいいところ';
    
    anchor.setAttribute('href',hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text','診断結果の文章');
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);

    const header = document.createElement('h3');
    header.innerText ='診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);



};
const answers = [
    '{userName}のいいところは声です。',
    '{userName}のいいところは眼差しです。',
    '{userName}のいいところは情熱です。',
    '{userName}のいいところは厳しさです。',
    '{userName}のいいところは知識です。',
    '{userName}のいいところはユニークさです。',
    '{userName}のいいところは用心深さです。',
    '{userName}のいいところは見た目です。',
    '{userName}のいいところは決断力です。',
    '{userName}のいいところは思いやりです。',
    '{userName}のいいところは感受性です。',
    '{userName}のいいところは節度です。',
    '{userName}のいいところは好奇心です。',
    '{userName}のいいところは気配りです。',
    '{userName}のいいところはその全てです。',
    '{userName}のいいところは自制心です。',
];

/**
 * 名前の文字列を渡すと検索結果を返す関数
 * @param{string} userName ユーザーの名前
 * @return{string}診断結果
 */
function assessment(userName){
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length ; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g,userName);
    
    return result;
}

console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。',
    '診断結果を置き換える文字列処理でエラー'
);

//console.log(assessment('太郎'));
//console.log(assessment('二郎'));
//console.log(assessment('太郎'));
