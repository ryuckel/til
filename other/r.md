R言語

# 概要
- 統計解析

# 公式サイト
https://www.r-project.org/
Rコンソールをインストールする

# 起動と終了

#help
help()

# 変数とデータ型

数値 + - * / %/% %% ^

x <- 5 代入
x
x + 3
ls()　実行環境にある変数の値の表示
rm()　削除




NULL
TRUE/FALSE
NA(欠損値)
NaN(非数)
Inf(無限大)

# 文字列
"abbccccc"
paste("a", "b", "c")　連結
paste("a", "b", "c", sep="")　から文字列で連結


# ベクトル
演算　 > < <= >= == != 　因子ベクトル

v <- c(1, 3, 5)
v
v[2]
v[2] <- 10
v
v <- c("abc", "bdee")
v
v <- c(TRUE, FALSE)
v
length(v)
v <- 1:10
v
v <- 1:-10
v
v <- seq(1, 10)
v
v <- seq(1, 10, by=2)
v
v <- seq(1, 10, length=5)
v
v <- rep(1:5, times=3)
v
v <- rep(1:5, length=10)
v

#行列
x[, 1]
x[2, ]
x[1, 2]
x[1, 1:2]
x[1, c(1,2)]
x[1, c(1,3)]
x[1, 2] <- 10
x
edit(x)
x
x2 <- edit(x)
x2
fix(x)
x

#リスト

x <- list(5:10, "abc", matrix(1:6, nrow=2, ncol=3))
x
x[1]
x[[1]]
x[[3]][1, 2]


#データフレーム
x <- data.frame(SIZE=c("M","L","S","L","M"), SALES=c(1,2,1,3,1))
x
x[1,2]
x$SIZE
x$SALES
x <- read.table("sales.txt", header=TRUE, sep=",", na.strings="*")
x


#データの集計
sum(x$SALES)
max(x$SALES)
min(x$SALES)
mean(x$SALES)
median(x$SALES)
sd(x$SALES)
mean(x$DISTANCE)
mean(x$DISTANCE, na.rm=TRUE)
summary(x$SALES)
summary(x)
str(x)

#グラフ化data()
data(cars)
cars
str(cars)
summary(cars)
hist(cars$speed)
barplot(cars$speed)
plot(cars$speed, cars$dist)
cor(cars$speed, cars$dist)
