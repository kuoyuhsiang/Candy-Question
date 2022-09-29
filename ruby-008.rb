# 編號：008
# 程式語言：Ruby
# 題目：傳入一字串，計算得分最高的字
#      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
#      所有傳入的字都是小寫。

def highestScoreWord(input)
  words = input.split(" ")                      # ["lorem", "ipsum", "dolor", "sit", "amet"]
  letter = words.map{ |elm| elm.split("")}      # [["l", "o", "r", "e", "m"],...]
  score = letter.map{ |x| 
            x.map{ |y| 
              y.ord - 96}.sum}                  # [12, 15, 18, 5, 13] => [63, 78, 64, 48, 39]
  index = score.index(score.max)                # 最大值單字的索引位置
  words[index]
end 
   
p (highestScoreWord("lorem ipsum dolor sit amet")) # 印出 ipsum
p (highestScoreWord("heyn i need a rubygem up to build this")) # 印出 rubygem
p (highestScoreWord("in time machine there are some bugs")) # 印出 there