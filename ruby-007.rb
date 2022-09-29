# 編號：007
# 程式語言：Ruby
# 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！
# 範例：

def findSomeDifferent(numbers)
  odd = numbers.select{ |n| n.odd?}
  if odd.length === 1
    odd.first
  else
    numbers.select{ |n| n.even?}.first
  end
end  
  
  p (findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) # 印出 11
  p (findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) # 印出 160