//top-page:使っているSNSアイコンデータを記述
const snsIcons = [
  {
    type: 'twitter-icon', //css用のclassとbinding
    path: 'https://twitter.com/sukeo_sukeo',
    icon: 'devicon-twitter-plain colored'
  },
  {
    type: 'git-icon', //css用のclassとbinding
    path: 'https://github.com/sukeo-sukeo',
    icon: 'devicon-github-plain colored'
  },
  {
    type: 'blog-icon', //css用のclassとbinding
    path: 'https://kichintodqmsl.wordpress.com',
    icon: 'devicon-wordpress-plain colored'
  },
  {
    type: 'qiita-icon', //css用のclassとbinding
    path: 'https://qiita.com/sukeo-sukeo',
    icon: ''
  }
]

const qiitaToken = 'f3e944699be7e1b9890a12cffebe9c7e308daaaf'

const profileData = {
  from: ' 岐阜',
  message: `
  こんにちは！ポートフォリオをご覧頂きありがとうございます！
  プログラミングを０から独学で学習。
  コードからモノを生み出す事に楽しさを見出し、
  今後も極めるべく日々成長中。
  デザインも勉強中です。
  `,
  favoriteWord: ` 今の自分が残りの人生で一番若い`
}


//study-page:学んだスキルのアイコンデータを記述 {id:path:since}
//Nomalとcalorで対に記述
const deviconNomal = [
  {id: 1, path: 'devicon-html5-plain-wordmark', since: '2019.12'},
  {id: 2, path: 'devicon-css3-plain-wordmark', since: '2019.12'},
  {id: 3, path: 'devicon-javascript-plain', since: '2020.02'},
  {id: 4, path: 'devicon-jquery-plain-wordmark', since: '2020.02'},
  {id: 5, path: 'devicon-nodejs-plain-wordmark', since: '2020.06'},
  {id: 6, path: 'devicon-express-original-wordmark', since: '2020.06'},
  {id: 7, path: 'devicon-mongodb-plain-wordmark', since: '2020.06'},
  {id: 8, path: 'devicon-vuejs-plain-wordmark', since: '2020.07'}
]
const deviconColor = [
  {id: 100, path: 'devicon-html5-plain-wordmark colored', since: '2019.12'},
  {id: 102, path: 'devicon-css3-plain-wordmark colored', since: '2019.12'},
  {id: 105, path: 'devicon-javascript-plain colored', since: '2020.02'},
  {id: 106, path: 'devicon-jquery-plain-wordmark colored', since: '2020.02'},
  {id: 107, path: 'devicon-nodejs-plain-wordmark colored', since: '2020.06'},
  {id: 108, path: 'devicon-express-original-wordmark colored', since: '2020.06'},
  {id: 109, path: 'devicon-mongodb-plain-wordmark colored', since: '2020.06'},
  {id: 110, path: 'devicon-vuejs-plain-wordmark colored', since: '2020.07'}
]
// 追加スキルはここに記述（画面サイズ５００px以上のときに追加されます）
const deviconOtherNomal = [
  {id: 201, path: 'devicon-sass-original', since: '2020.02'}
]
const deviconOtherColor = [
  {id: 202, path: 'devicon-sass-original colored', since: '2020.02'}
]



//made-page:制作物のデータ記述
const madeItemData = [
  {
    id: 1,
    path: "./assets/image-nest.png",
    path2: "./assets/minify/image-nest.png",
    title: "模写サイト①",
    link: "https://sukeo-sukeo.github.io/NESTcafe-copysite/NESTcafe/cafe.html",
    // './mades/NESTcafe/cafe.html'
    description: `
    学習開始２ヶ月目、始めて最後まで作りきれた模写サイトです。ようやくHTMLタグがスッと出てきて模写が進むようになった頃でした。floatやclearfixの理解がうっすらと。
    `,
  },
  {
    id: 2,
    path: "./assets/image-designleaker.png",
    path2: "./assets/minify/image-designleaker.png",
    title: "模写サイト②",
    link:
      "https://sukeo-sukeo.github.io/DsignLeaker-copysite/DsignLeaker/index.html",
    // './mades/DsignLeaker/index.html'
    description: `
    学習開始３ヶ月目、float、clearfixの動きを完全に掴みレイアウトが組めるようになる。親と子、inlineとblock。点と点が繋がり始め、flexboxに興味が湧く。
    `,
  },
  {
    id: 3,
    path: "./assets/image-kibiru.png",
    path2: "./assets/minify/image-kibiru.png",
    title: "模写サイト③",
    link:
      "https://sukeo-sukeo.github.io/kibiru_cafe-copysite/kibiru_cafe/index.html",
    // './mades/kibiru_cafe/index.html',
    description: `
    学習開始３ヶ月目、flexboxを学ぶ際に作成したサイトです。emmetの理解と併せて模写スピードが一段回アップした感覚を得た事を覚えています。
    `,
  },
  {
    id: 4,
    path: "./assets/image-isara.png",
    path2: "./assets/minify/image-isara.png",
    title: "模写サイト④",
    link: "https://sukeo-sukeo.github.io/iSara-copysite/iSara/index.html",
    // './mades/iSara/index.html',
    description: `
    学習開始３ヶ月目、flexboxの学習を終えたあとに着手。ボリュームがあるページなので日々夢中になってコーディングを進めていました。これまで学んだことの集大成的な作業となりました。レスポンシブデザインに興味が湧く。
    `,
  },
  {
    id: 5,
    path: "./assets/image-airbnb.png",
    path2: "./assets/minify/image-airbnb.png",
    title: "模写サイト⑤",
    link: "https://sukeo-sukeo.github.io/airbnb-copysite/airbnb/index.html",
    // './mades/airbnb/index.html',
    description: `
    学習開始３ヶ月目終盤、HTMLでの枠組みつくりは２時間で完成。分からない知識が明確になり、ググり力の明らかな向上を実感。メディアクエリをインプットしながら、６日間でレスポンシブまで完成。
    `,
  },
  {
    id: 6,
    path: "./assets/portfolio.png",
    path2: "./assets/minify/portfolio.png",
    title: "ポートフォリオサイト",
    link: "https://sukeo-sukeo.github.io/my-portfolio/",
    description: `
    プログラミング学習開始８ヶ月目でようやく形にできたマイページです。
    vue.jsの学習を兼ねて作成しました。掲載の制作物はgithubにアップロードしています。
    `,
  },
  {
    id: 7,
    path: "./assets/todo.jpg",
    path2: "./assets/todo.jpg",
    title: "シンプルなTODOアプリ",
    link: "https://whispering-temple-91855.herokuapp.com/",
    description: `
    ログイン機能自作。シンプルなTODOリストWEBアプリケーションです。サーバーとクライアントの通信の仕方や、データベースのCRUD操作の学習を念頭に制作しました。vue.js、express、mongodbを使用しています。また、シンプルかつ洗練された見た目を作るためCSSフレームワークにvuetifyを使用しました。gitの使用やターミナルコマンドの活用など、この制作を通して非常に多くのことを学ぶことができました。herokuにて公開しています。
    `,
  },
  {
    id: 8,
    path: "./assets/linebot.JPG",
    path2: "./assets/linebot.JPG",
    title: "モンハン弱点bot",
    link: "https://github.com/sukeo-sukeo/mylinebot",
    description: `
    モンスターハンターワールドのモンスター名を投げると弱点が返ってくるLINEbotです。プレイするときに弱点を調べる時間を短縮できると思い制作しました。ユーザーからのリクエストに対してオブジェクトや配列を操作、漏れなく適切なレスポンスを返します。herokuにて稼働中。QRコードからLINE友達登録にて使用可能です！
    `,
  },
  {
    id: 9,
    path: "./assets/flagcollection.JPG",
    path2: "./assets/flagcollection.JPG",
    title: "FlagCollectionApp",
    link: "https://sukeo-sukeo.github.io/FlagCollectionApp/index.html",
    description: `
    「leaflet」というグーグルマップに似た地図APIと「REST COUNTRIES」という国データを返してくれるAPIを組み合わせた国旗当てゲームです。国旗のコレクションを楽しみながら世界の国の勉強をしてもらえるアプリです。成績の保存はローカルストレージを使っています。cssフレームワークにはbootstrapを使用しています。また、実際のフロントエンド開発に近づけるためWebpackの導入によるモジュール化を意識して作成しましたが、実際にはファイル分割がうまくいかず次の制作への課題となりました。デザインやアニメーションなどやりたかったですが時間が足りませんので割愛としました。
    `,
  },
];

const madeItemDataMov = [
  {
    id: 101,
    path: "https://sukeo-sukeo.github.io/original-browsgame-movie-1/made1.mov",
    // './mades/made1.mov',
    title: "ブラウザゲーム①",
    link: "https://sukeo-sukeo.github.io/js_game_learning/",
    description: `
    ドットインストール等で一ヶ月のインプット後、javascriptを用いてゼロからつくったゲームです。完成までは２週間ほどでした。動作するゲームが作れたことに、感動したことを覚えています。
    `,
    imgPath: "assets/minify/made1-image1.png",
  },
  {
    id: 102,
    path: "https://sukeo-sukeo.github.io/original-browsgame-movie-2/made2.mov",
    // './mades/made2.mov',
    title: "ブラウザゲーム②",
    link: "https://sukeo-sukeo.github.io/js_game_practice_2/",
    description: `
    小学２年生の娘の掛け算学習用に作成。各画面をclass構文を用いての管理にチャレンジ。かなりコードになり、エラーとの戦い方を学びました。冗長なコーディング内容となっていますが、ある程度javascriptの基本的な動きを理解するとともに、DOMの概念の理解や、最初の設計の大切さ、リファクタリングの重要性を学びました。サーバーやPCの仕組み自体に興味が湧く。
    `,
    imgPath: "assets/minify/made2_image5_battle.png",
  },
];

//contactPageのデータ
const lastMessage = `
最後までご覧頂きありがとうございました。
まだまだ勉強中の身ですが、お役に立てることがあればぜひお手伝いさせてください!
`
const twitterDmURL = `https://twitter.com/messages/compose?recipient_id=987213746056474624&text=`


//cssアニメーションクラスの整理
const animationClass = {
  left: [
    'inview-from-the-left'
  ],
  right: [

  ],
  top: [

  ],
  bottom: [
    'inview-from-the-bottom',
    'inview-from-the-bottom-delay',
  ]
}
