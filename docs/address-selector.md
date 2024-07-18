# TurboFrames: 階層メニュー

## インタラクティブなフォームを作成する

インタラクティブなフォームを作る場合は細かい単位で画面の部分更新をしていく必要がある。ここではTurboFramesを使ったやり方を紹介するが、他に

## ネスト化されたForm対策としてJavaScriptでリクエスト送信

Hotwireはなるべく`a`タグや`form`タグを使ってリクエストを送信するようになっているが、インタラクティブな`form`を作る時に、これが障害となることがある。なぜならば HTMLでは`form`タグをネストかできないため、フォームの一部部分を更新するためのリクエストが送信できない。したがってformの一部分だけを更新するためのリクエストを送る際は、`form`タグを使わずにJavaScriptでリクエストを送信する必要がある。

TurboのリクエストをJavaScriptで送信するためのライブラリはRail GitHub公式アカウントのレポジトリに`request.js`が用意されているが、これは別ライブラリになっていることからも分かるように、奨励された方法ではない。奨励されているのは[Turbo.visit](https://turbo.hotwired.dev/reference/drive#turbo.visit)を使う方法である。




`acceptsStreamResponse`
Turboのソースコード src/core/drive/visit.js:74
...

## ほげ
