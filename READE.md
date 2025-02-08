# 概要
React ハンズオンのために Docker を使用した環境構築ガイドです。

# ディレクトリ構成  
``` 
react-docker-app
├── Dockerfile                # Docker イメージの設定ファイル
├── docker-compose.yml        # Docker Compose 設定ファイル
├── app                       # React アプリケーションのルートディレクトリ
│   ├── node_modules          # 依存パッケージがインストールされるディレクトリ
│   ├── package-lock.json     # インストールされたパッケージのロックファイル
│   ├── package.json          # プロジェクトの依存関係とスクリプトを管理
│   ├── react-app             # React アプリケーションのディレクトリ
│   │   ├── src               # アプリケーションのソースコード
│   │   ├── tsconfig.json     # TypeScript 設定ファイル
```

# 利用方法　: React アプリを Docker で起動する
以下の手順に従って、React アプリケーションを Docker で起動します。

### 1. Dockerのインストール

MAC
Docker Desktop のインストール
```
brew install --cask docker
```
<br>
WIN
Docker Desktop のインストール 公式サイトからインストールしてください： Docker Desktop for Windows
- インストール中の注意
 - WSL 2 の有効化（推奨設定）
 - インストール時に Enable the WSL 2 feature を選択。
Docker Desktop を起動 インストール後、「Docker Desktop」を起動してください。

### 2. 依存関係のインストール
Docker を使って必要な依存関係をインストールします。
 ```
docker-compose run --rm app sh -c 'npm install --legacy-peer-deps'
 ```
 ### 2. アプリケーションの起動
 以下のコマンドでアプリケーションを起動します。

bash
コピーする
編集する

 ```
docker-compose up --build
 ```

 ### 2.  アプリケーションの停止
 アプリケーションを停止するには以下のコマンドを実行します。
 ```
docker-compose down
 ```