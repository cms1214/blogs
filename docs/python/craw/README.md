# 爬取

``` py
import re

import requests  # 数据请求模块
import os
from bs4 import BeautifulSoup

# 读取txt
file = open('url.txt','r')
array = file.readlines()


# 爬取函数
def bugs(url):
    r = requests.get(url)
    # print(r.text)
    soup = BeautifulSoup(r.text, 'html.parser')
    # print(soup.select('#title')[0].text)
    script = soup.find_all('script')[10]

    content = script.text.splitlines()[6]

    reg = re.compile(r'"(.*?)"')
    result = re.findall(reg, content)
    print(result[1])

# 开爬
i = 0
for fields in array:
    i = i + 1
    bugs(fields)
```