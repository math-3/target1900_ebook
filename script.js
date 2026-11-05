// HTML上の画像要素を取得
const image = document.getElementById('target-image');

// キーボードが押された時のイベント
window.addEventListener('keydown', (event) => {
    // 押されたのが「左矢印キー」か判定
    if (event.key === 'ArrowLeft') {
        // 画像を表示する (displayプロパティをblockに変更)
        image.style.display = 'block';
        
        // メッセージを更新（任意）
        document.getElementById('message').textContent = '左キーが押されました！';
    }
});