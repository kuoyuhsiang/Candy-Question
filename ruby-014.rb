# 編號：CANDY-014
# 程式語言：Ruby
# 題目：把鄰近的重複值去除，但仍照原本的順序排序
# 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

def uniqueOrder(sequence)
  if sequence.is_a? String
    sequence = sequence.split("")  # "AABCC" => ["A", "A", "B", "C", "C"]
  end
  sequence.select.with_index do |letter, index|  # .with_index 可攜帶索引值參數
    if sequence[index] != sequence[index + 1]
      sequence[index]
    end
  end
end  
  
  p (uniqueOrder("AABCC")) # [ 'A', 'B', 'C']
  p (uniqueOrder("AAABBBCCBCC")) # [ 'A', 'B', 'C', 'B', 'C']
  p (uniqueOrder([1, 2, 1, 2, 1])) # [ 1, 2, 1, 2, 1 ]
  p (uniqueOrder([1, 1, 1, 2, 2, 2, 1])) # [1, 2, 1]