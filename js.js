const pc_site = document.querySelector(".pc");
const mobile_site = document.querySelector(".mobile");

<!-- 一画面スクロール -->
$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 800, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {
    var ref = panels[i].attr("data-section-name");
    $(".pagination .active").removeClass("active");
    $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
    var pagination = "<ul class=\"pagination\">";
    var activeClass = "";
    $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
    activeClass = "";
    if(i===$.scrollify.currentIndex()) {
    activeClass = "active";
    }
    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });
    pagination += "</ul>";
    
    $("#box1").append(pagination);//はじめのエリアにページネーションを表示
    $(".pagination a").on("click",$.scrollify.move);
    }
    
});

<!-- httpsダイレクト -->
  if (location.protocol == 'http:')
  { location.replace(location.href.replace(/http:/, 'https:'));
}

<!-- ロード画面 -->
window.onload = ()=>{
    setTimeout(load_c, 3000);
}
function load_c() {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
}


<!-- 100vh 修正 -->
const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // ここからリサイズの対応
  let vw = window.innerWidth;
  window.addEventListener('resize', () => {
    if (vw === window.innerWidth) {
    // 画面の横幅にサイズ変動がないので処理を終える
      return;
    }
  
    // 画面の横幅のサイズ変動があった時のみ高さを再計算する
    vw = window.innerWidth;
    setFillHeight();
  });
  
  // 実行
  setFillHeight();