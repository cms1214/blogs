# 写在前面
## 又为什么要写Python呢
如你所见，这里只是一些Python的零散代码。

我在工作中总能遇到很多简单而重复的事情问题，Python能为我很好的解决他。

一些实用的代码被我记录在这里，仅供参考。

## 记录
+ 事务一

老师叫我帮个小忙：~~下载几个视频~~。

他给我发了一个压缩包，里面有五十多个二维码。扫描后会打开一个网页，按照老师的意思，是要下载这个网页内的视频。

脑海里过一遍，首先需要扫描二维码，然后`F12`查找元素，找到视频的下载链接，然后下载那个视频，为了方便后续整理，还要重命名并编上序号。

但一个个扫描并处理是重复且枯燥的，于是我开始捣鼓起了Python脚本。