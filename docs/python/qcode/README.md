# 二维码

``` py
from PIL import Image
import pyzbar.pyzbar as pyzbar
import os

def qrcode_parse_content(img_path):
    '''
    单张图片的二维码解析
    '''
    img = Image.open(img_path)

    #使用pyzbar解析二维码图片内容
    barcodes = pyzbar.decode(img)

    #打印解析结果，从结果上可以看出，data是识别到的二维码内容，rect是二维码所在的位置
    # print(barcodes)

    result = []
    for barcode in barcodes:
        barcode_content = barcode.data.decode('utf-8')
        result.append(barcode_content)

    return result

def load_imgs(folder):
    '''
    加载文件夹下的图片
    '''
    imgs = []
    for img_path in os.listdir(folder):
        ext = os.path.splitext(img_path)
        if len(ext) > 1 and is_img(ext[1]):
            imgs.append(img_path)

    return imgs

def is_img(ext):
    '''
    判断文件后缀是否是图片
    '''
    ext = ext.lower()
    if ext == '.jpg':
        return True
    elif ext == '.png':
        return True
    elif ext == '.jpeg':
        return True
    elif ext == '.bmp':
        return True
    else:
        return False

if __name__ == "__main__":

    imgs = load_imgs('./data') # 打开图片文件夹，我这里是当前程序运行目录
    contents = []
    for img in imgs:
        contents.extend(qrcode_parse_content(img))

    file = './result.txt' # 写入文件路径，我这里程序当前运行目录下的result.txt
    with open(file,'w') as f:
        for c in contents:
            f.write(c + '\n')
```