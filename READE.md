# 概要
Reactハンズオンのために、Dockerを使用した環境構築

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

MAC
Docker Desktop のインストール
```
brew install --cask docker
```

WIN
Docker Desktop のインストール 公式サイトからインストールしてください： Docker Desktop for Windows
- インストール中の注意
 - WSL 2 の有効化（推奨設定）
 - インストール時に Enable the WSL 2 feature を選択。
Docker Desktop を起動 インストール後、「Docker Desktop」を起動してください。

 依存関係のインストール
 ```
docker-compose run --rm app sh -c 'npm install --legacy-peer-deps'

 ```

 アプリケーションの起動
 ```
docker-compose up --build
 ```

 * 以下でアプリケーションを停止できる
 ```
docker-compose down
 ```