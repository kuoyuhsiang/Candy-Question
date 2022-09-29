# 編號：CANDY-015
# 程式語言：Ruby
# 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
# 範例：
#      "abcdef" -> ['ab', 'cd', 'ef']
#      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

def splitString(str)
  str = (str + "_").split("")               # ["a", "b", "c", "d", "e", "f", "_"]
  arr = []
  str.each_slice(2) do |n|
    arr.push(n)                             # [["a", "b"], ["c", "d"], ["e", "f"], ["_"]]
  end
  arr.select{ |n| n.length > 1}.map(&:join) # [["a", "b"], ["c", "d"], ["e", "f"]] => ["ab", "cd", "ef", "g_"]
end 
  
  p (splitString("abcdef")) # ["ab", "cd", "ef"]
  p (splitString("abcdefg")) # ["ab", "cd", "ef", "g_"]
  p (splitString("")) # []

  