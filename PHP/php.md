php
tutorials:https://www.php.net/
https://php.net/manual/ja/index.php


改行 - PHP_EOL
PHPには予め定義されている定数があり、改行を表現するには、PHP_EOLという定数を使います。

#条件分岐
## if

<?php
    $number = mt_rand() % 10;

    if ($number < 3) {
        print $number . 'は3より小さい数' . PHP_EOL;
    }
    elseif ($number < 6) {
        print $number . 'は3以上で6より小さい数' . PHP_EOL;
    }
    elseif ($number < 8) {
        print $number . 'は6以上で8より小さい数' . PHP_EOL;
    }
    else {
        print $number . 'は8か9しか来ません' . PHP_EOL;
    }
?>

##switch
?php
    $num1 = 8;
    $num2 = 4;
    $opr = '*';
    
    switch($opr) {
        case '+':
            print $num1 . '+' . $num2 . '=' . ($num1 + $num2) . PHP_EOL;
            break;
        case '-':
            print $num1 . '-' . $num2 . '=' . ($num1 - $num2) . PHP_EOL;
            break;
        case '*':
            print $num1 . '*' . $num2 . '=' . ($num1 * $num2) . PHP_EOL;
            break;
        case '/':
            print $num1 . '/' . $num2 . '=' . ($num1 / $num2) . PHP_EOL;
            break;
        default:
            print 'エラーです' . PHP_EOL;
    }
?>

#繰り返し
for文
<?php
    $fruits = ['リンゴ', 'バナナ', 'オレンジ', 'ぶどう', '桃'];
    $count = count($fruits);         // 配列の中身の数を$countへ代入
    for ($i = 0; $i < $count; $i++) {
        print $i . '番目: ' . $fruits[$i] . PHP_EOL;
    }
?>

while文
<?php
    $count = 0;
    $number = 0;

    while ($number != 9) {
        $number = mt_rand() % 10;
        print $number . PHP_EOL;
        $count++;
    }

    print '9が出るまで' . $count . '回かかった。' . PHP_EOL;
?>

foreach文

<?php
    $fruits = ['リンゴ', 'バナナ', 'オレンジ', 'ぶどう', '桃'];
    foreach ($fruits as $fruit) {
        print $fruit . PHP_EOL;
    }
?>

break文とcontinue文
繰り返し処理を強制的に終了したいときは break文、ある回の繰り返し処理で「以降の処理はスキップして次の回を実行する」ことをしたい場合は continue文 を使います。if文と組み合わせて使います。

test.php

<?php
    $i = 0;
    while(true) {
        $i++;
        if ($i > 20) {        // $i が 20を超えていたら繰り返し終了
            break;
        }
        
        if ($i % 2 == 1) {    // $i が奇数なら以降の処理はスキップ
            continue;
        }
        
        print $i . PHP_EOL;
    }
?>
ここでは while(true) とすることで、強制的に終了しない限り永遠と繰り返し処理が実行されるようにしています。このようなものを 無限ループ と言います。あえて無限ループで処理を定義することもありますが、ループを抜ける処理を書き忘れるとプログラムが終了しなくなり、Cloud9のシステムに大きな負荷がかかるので気をつけましょう（無限ループが終わらない場合は Control + c (Windowsの方は Ctrl + c）キーで処理をストップできます）。

#関数
<?php
    // 関数を定義
    function sum() {
        $result = 0;
        for ($i = 1; $i <= 9; $i++) {
            $result = $result + $i;
        }
        print $result . PHP_EOL;
    }

    // 関数を呼び出し
    sum();            // ここで関数が実行され1~9の足し算結果が表示される
?>



