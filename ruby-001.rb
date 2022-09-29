#  編號：CANDY-001
#  程式語言：JavaScript
#  題目：找出陣列裡最小的兩個值的總和
#  例如：
#   [15, 28, 4, 2, 43] 印出 6
#   [23, 71, 33, 82, 1] 印出 24

def sumOfSmallestValues(numbers)
    numbers.min(2).sum
end

puts sumOfSmallestValues([15, 28, 4, 2, 43])
puts sumOfSmallestValues([23, 71, 33, 82, 1])

