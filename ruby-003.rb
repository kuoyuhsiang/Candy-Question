# 編號：003
# 程式語言：Ruby
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面
# 範例

list = [false, 1, 0, -1, 2, 0, 1, 3, "a"] 

def moveZerosToEnd(arr)
  arr.select { |i| i != 0} + arr.select { |i| i == 0}
end

p moveZerosToEnd(list)