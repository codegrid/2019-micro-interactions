// 遷移ボタンを取得
const linkButtons = document.querySelectorAll('button.open');
for (const linkButton of linkButtons) {
  // ボタンをクリックしたら
  linkButton.addEventListener('click', (event) => {
    // クリックされた要素
    const element = event.currentTarget;
    // 対象のIDをdata-target属性から取得
    const target = element.dataset.target;

    // 遷移リンクのshowクラスを追加
    const link = document.querySelector(`.link-${target}`);
    link.classList.add('show');

    // 遷移先画面のshowクラスを追加
    const detail = document.querySelector(`.detail-${target}`);
    detail.classList.add('show');
  });
}

// 閉じるボタンを取得
const closeButtons = document.querySelectorAll('button.close');
for (const button of closeButtons) {
  // ボタンをクリックしたら
  button.addEventListener('click', () => {

    // 遷移リンクのshowクラスを除去
    const links = document.querySelectorAll('.link');
    for (const link of links) {
      link.classList.remove('show');
    }

    // 遷移先画面のshowクラスを除去
    const details = document.querySelectorAll('.detail');
    for (const detail of details) {
      detail.classList.remove('show');
    }
  });
}
