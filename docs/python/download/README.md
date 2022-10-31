# 下载
``` py
import time
import requests

# 读取txt
file1 = open('downloadurl.txt','r')
url = file1.readlines()
# print(len(url))

file2 = open('newname.txt',encoding='utf-8')
name = file2.readlines()
# print(name[0][:-1])

# 下载
def download(url,name):
     r = requests.get(url)
     with open('./video/'+name+'.mp4', "wb") as code:
          code.write(r.content)


i = 0
for i in range(len(url)):
     print(i)
     download(url[i][:-1], name[i][:-1])
```