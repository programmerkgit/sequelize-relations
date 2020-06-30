# Self join relations ships

## 1. 1 to 1
夫婦関係

## 1:n
親子関係

## n:m
フォロー関係


# Script
リレーションシップの例

## DB定義
`src/db/migrations/20200519000005-create-user.ts`
`src/db/migrations/20200519000006-create-follow.ts`

## モデル定義
`src/db/models/user.model.ts`
`src/db/models/follow-relation.model.ts`

## 実行スクリプト
`ts-node src/snippets/relations.ts`
