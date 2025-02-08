# ベースイメージの指定
FROM node:lts

# 作業ディレクトリの設定
WORKDIR /usr/src/app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを開始
CMD ["npm", "start"]
