# 編號：CANDY-019
# 程式語言：Ruby
# 題目：檢查是否為某個數字的平方數

def isSquare(num) 
  num >= 0 and Math.sqrt(num) % 1 == 0  
end 

p (isSquare(0)) # true
p (isSquare(4)) # true
p (isSquare(5)) # false
p (isSquare(100)) # true
p (isSquare(-4)) # false
p (isSquare(-1)) # false