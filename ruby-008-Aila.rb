# 編號：008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highestScoreWord(input)  
  words = input.split(" ") 
  scoreArray = ("a".."z").to_a
  score = words.map { |n| n.split("").map { |n| scoreArray.find_index(n) + 1 }.sum} 
  # ["lorem", "ipsum", "dolor", "sit", "amet"] => [["l", "o", "r", "e", "m"],...] => [["12", "15", "18", "5", "13"],...] => [63, 78, 64, 48, 39]
  words[score.index(score.max)] 
end
   
p (highestScoreWord("lorem ipsum dolor sit amet")) # 印出 ipsum
p (highestScoreWord("heyn i need a rubygem up to build this")) # 印出 rubygem
p (highestScoreWord("in time machine there are some bugs")) # 印出 there