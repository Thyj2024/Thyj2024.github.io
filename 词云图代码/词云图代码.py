from collections import Counter
from PIL import Image
import jieba
import numpy as np
from matplotlib import pyplot as plt
from wordcloud import WordCloud
import random

# 读取文件内容
with open(r"contents.txt", "r", encoding="utf-8") as t:
    text = t.read().replace("\n","")


# 使用jieba进行分词
words_list_jieba = jieba.lcut(text)


# 新增函数：从文件中增加jieba词库
def load_add_words(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return set(line.strip() for line in file)

# 增加词库文件路径
add_words_file_path = 'add.txt'
add_words = load_add_words(add_words_file_path)

# 加载新增词库
for word in add_words:
    jieba.add_word(word)


# 新增函数：从文件中读取屏蔽词
def load_excluded_words(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return set(line.strip() for line in file)

# 屏蔽词库文件路径
excluded_words_file_path = 'stopwords.txt'
excluded_words = load_excluded_words(excluded_words_file_path)
excluded_words.add(" ")


# 过滤排除的词语
words_list = [x for x in words_list_jieba if x not in excluded_words]

# 使用Counter进行词频统计,只保留词频前70的内容
word_counter = Counter(words_list)
sorted_file = word_counter.most_common(70)

print(sorted_file)

def random_color():
    r = random.randint(0, 255)
    g = random.randint(0, 255)
    b = random.randint(0, 255)
    return f"rgb({r}, {g}, {b})"



# 加载图像作为遮罩
mask = np.array(Image.open(r"star.png"))

# 生成词云时指定遮罩
wordcloud = WordCloud(
    font_path="simhei.ttf", background_color="white", mask=mask
).generate_from_frequencies(dict(sorted_file))

# 保存词云图
wordcloud_image_path = "contents.png"
wordcloud.to_file(wordcloud_image_path)

# 显示词云图
plt.figure(figsize=(10, 8),num="词云图2")
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")

plt.show()