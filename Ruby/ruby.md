Ruby
tutorials

# 文字列の表示
puts "hello taguchi again!"

name = "Miyaji"
puts name

puts "hello #{name}"
puts "hello #{name} again!"

# 入力を受け取る
print "Your name? "
name = gets.chomp

puts "hello #{name}"
puts "hello #{name} again!"

## 制御

# while / until

  next, break, redo


#  if case

if  foo == 0   # unless は if not のほうがよい（elifのため）
  ...
elsif foo == 1
  ...
end

ワンライナー  dd  = 9 if a < 4
三項　dd = a > 0 ? b : c

case foo
  when 1
    ...
  when 2
    ...
  else
    ...
end

# for , each

for name in names
  ...
end

names.each do |name|  # よみやすい
  ...
end


## 例外 (begin/raise)

raise "something"  であげて

begin  
  ...
rescue   こちらで捕捉
  ...
  retry で begin から再スタートできる
ensure
  must_to_do before quit
end




## 配列とハッシュ

Array =  [ a, b, c, ... ]
  型バラバラでもいい、[0] [1] でアクセス

Hash = { 'a' => b , :sym => c ... } 
  print hash['a'] , hash[:sym]
    文字列もシンボルも使える（両者は違う）
    シンボルが一般


##
class  Foo  < 親クラス
   @@classvar = DEFINE     # クラス変数

   def initialize(arg)     # new 
       @var = arg          # インスタンス変数
   end 

   def func
       ...
   end
end

foo = Foo.new



