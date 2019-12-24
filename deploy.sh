#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
git status
git add -A
git commit -m $1
git push origin master
echo '自动发布完成'