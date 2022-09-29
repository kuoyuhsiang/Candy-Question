#  編號：002
#  程式語言： Ruby
#  題目：請寫一小段程式，印出連續陣列裡缺少的字元
#  範例：

chars1 = ["a", "b", "c", "d", "f", "g"] 
chars2 = ["O","Q","R","S"]

def missingChar(chars)
  ((chars.first..chars.last).to_a - chars).first
end

p missingChar(chars1)
p missingChar(chars2)