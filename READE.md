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

# 利用方法
以下のコマンドを実行して、React アプリを Docker コンテナで実行する。
```
docker-compose up --build
```
