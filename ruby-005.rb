# 編號：005
# 程式語言：Ruby
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起
# 範例：

def squareDigits(num)                  # 使用&:符號將block再簡化
  num = num.to_s.split("").map(&:to_i) #  "3212" => ["3", "2", "1", "2"] => [3, 2, 1, 2]
  num.map{ |elm| elm**2 }.join().to_i  #  [9, 4, 1, 4] => "9414" => 9414
end 
  
  p (squareDigits(3212));  # 印出 9414
  p (squareDigits(2112));  # 印出 4114
  p (squareDigits(387));   # 印出 96449