# NiuGeng-SEU.github.io

## 学习路线

PC端网站布局
精通网页布局，前端人员必备技能，为后面学习JavaScript打下基础

HTML5基础：常见没有兼容性的HTML标签
CSS3基础：没有兼容性的CSS样式，完成传统PC端网页布局
H5C3提高：学习HTML5新增标签、CSS3样式，有一定兼容性，与未来更好地接轨
项目：实际开发，制作流程规范

## 工作进程

https://www.bilibili.com/video/BV14J4114768
P22 目标文件夹和根文件夹 - 210109
P46 input之type文本框和密码框 -210110
P56 综合案例 - 210111
P68 使用类选择器画盒子 - 210112
P83 css文本属性总结- 210113
P107 块元素 -210114
P131 行高的继承 -210116
P170 传统网页布局三种方式 -210119
P222 为什么需要定位 -210120
P252 精灵图的使用 -210124
p274 HTML5 CSS3 提高导读

## 学习内容

### HTML简介

网页基本组成
什么是HTML，超文本标记语言（Hyper Text Markup Language），适用于描述网页的一种语言。
HTML不是一种编程语言，而是一种标记语言（markup language）
标记语言是一套标记标签（markup tag）
所谓超文本：1. 可以放入图片、声音、动画。2. 可以从一个文件跳转到另一个文件，与世界各地主机文件连接。
网页即网页元素构成，利用html标签描述出来，然后通过浏览器解析来显示给用户。
常用的浏览器
浏览器是网页显示、运行的平台。
浏览器内核即渲染引擎，负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。
Web标准的三大组成部分
W3C(万维网联盟)是世界上最著名的标准化组织。
为什么需要标准：浏览器不同，显示页面或者排版有些许差异。
组成：三个方面，结构、表现和行为，Structure, Presentation, Behavior.
结构-》网页元素进行整理和分类，主要学HTML
表现-》用于设计网页元素的版式、颜色、大小等外观样式，主要CSS
行为-》网页模型的定义及交互的编写，主要学习Javascript

HTML语法规范
由尖括号包围的关键词，例如<html>
通常是成对出现的，成为双标签。标签中第一个标签是开始标签，第二个是结束标签。
单独出现的标签称为单标签
标签关系：
双标签关系可以分为两类：包含关系和并列关系。

基本结构标签
html:html标签，称为根标签
head：头部必须设置标签title
title：标题，网页标题
body：主体标签，网页内容都是放到body里面的

开发工具
Dw/S/WebStorm/Huilder/VS

常用标签
<!DOCTYPE html>文档类型声明，作用告诉浏览器使用哪种html版本来显示网页，位置必须在第一行。
lang语言类型，用来定义当前文档显示的语言，en为英语，zh-CN为中文
字符集以便能够识别和存储各种文字。万国码 UTF-8
标签语义
标题标签<h1>-<h6> html提供了6个等级的网页标题。
作为标题使用，并且根据重要性递减。
<p>paragraph<p>

<br/>强制换行，简单地另起一行，同一段落

<strong></strong>
<b></b>
<em></em>
<i></i>
<del></del>
<s></s>
<ins></ins>
<u></u>

无语义，是一个盒子，用于装内容
<div> division 分割分区
<span> 跨度，跨距

<img src="图像URL">
用于定义HTML页面中的图像，src是img标签的必须属性，用于指定图像文件的路径和文件名
alt 文本 替换文本，图像不能显示的文字
title 文本 提示文本，鼠标放到图像上，显示的文字
width 像素 设置图像的宽度
height 像素 设置图像的高度
border 像素 设置图像的边框粗细
所有属性必须放在img标签名后面 属性之间不分前后顺序 属性之间保留空格 属性键值对格式

图片标签和路径
1. 目录文件夹和根目录
2. VScode打开目录文件夹

相对路径、绝对路径
同一级相对路径 <img src="img.jpg" />
上一级相对路径 <img src="images/img.jpg" />
下一级相对路径 <img src="../img.jpg" />

绝对路径：<img src="C:users\apple\Desktop\img.jpg">

超链接标签
1. 语法格式 <a href="跳转目标" target="目标窗口的弹出方式">文本或图像</a> 
2. 两个属性的作用如下：href用于指定连接目标的url地址，当为标签应用href，就具有了超链接的功能
3. target 指定代开方式，_self为默认值 _blank为在新窗口中打开方式

联接分类
外部联接
内部联接

锚点联接：快速跳转页面中的某个位置

注释和特殊字符
<!--注释语句-->
&nbsp;空格字符
&lt;小于
&gt;大于

html标签
表格、无序列表、表单标签、查阅文档
表格用于显示、展示数据，使得数据十分规整，可读性好。
table表格
tr行 必须嵌套在table标签中
td单元格 嵌套在tr中
th表头table head 加粗 居中
属性设置主要通过css来设置 写在table里面去
align left center right 表格的对齐方式
border 裱框
cellpadding 像素值 元素距离边框距离
cellspacing 单元格之间的距离
width 宽度
height 高度

表格结构标签
合并单元格 跨行合并 rowspan 跨列合并 colspan =合并的单元格数量
目标单元格 写合并代码 跨行:最上侧 跨列：最左侧
合并单元格步骤:三部曲，跨行、跨列\合并方式\删除多余代码

列表标签
用于布局
无须列表、有序列表、自定义列表
<ul></ul> 里面只能有li标签 li里面都可以放

有序列表
<ol>
    <li></li>
</ol>

自定义列表
常用于术语或者名词进行解释和描述，定义列表的列表项前没有任何项目符号。
<dl>
    <dt></dt>
    <dd><dd>
</dl>
dl里面只能由dtdd，经常一个dt对应多个dd 但是并没有限制

表单标签
为什么需要表单 用于收集用户信息
表单组成，三个，表单域，表单控件，提示信息 组成。
表单域 包含表单元素的区域
<form action="url地址" method="提交方式" name="表单域名称">
各种表单元素控件
</form>
表单元素
<input type="">
type属性值 
radio单选

查阅文档

### CSS简介

css主要用于场景美化，布局页面。
html,只关注内容的语义，并不关注外观。html可以修改样式，但是非常麻烦。
css是网页的美容师。css是层叠样式表，Cascading style sheets,简称css样式表。是一种标记语言，用于设置HTML页面中的文本内容（字体、大小、对齐方式，图片的外观（宽高、边框样式、边距等）以及版面的布局和外观显示样式。
最大价值，结构html样式css相分离。

css规则主要由两个部分构成：选择器以及一条或多条声明。
css代码风格：不是强制规范，而是符合实际开发过程中的书写方式.
1. 样式格式书写
   1. 紧凑型格式 h3{color:deeppink;font-size:20px;}
   2. 展开格式 h3 {
                    color:pink;
                    font-size:20px;
                }
    展开性格式比较还看。
2. 一半使用小写
3. 空格规范 属性值前，冒号后面，保留一个空格。选择器和大括号中间也保留一个空格。

h3 {
    color: pink;
}

css基础选择器

css选择器的作用
根据不同需求把不同的标签选择出来就是选择器的作用，简单来说，就是选择标签用的。

h1 { color: red; font-size: 25px; }
以上css做了两件事：
1.找到所有的h1标签，选择器。
2.设置这些标签的样式，比如颜色为红色。

选择器分为基础选择器和复合选择器.
基础选择器是由单个选择器组成的。
基础选择器又包括：标签选择器、类选择器、id选择器和通配符选择器。

类选择器
单独选择一个或者某几个标签，可以使用类选择器。
语法
.类名 {
    属性1：属性值1；
    ……
}

类选择器-多类名
我们可以给一个标签指定多个类名，从而达到更多的选择目的。
1. 多类名使用方式
使用场景 更灵活

id选择器
用#定义，用id来设置
样式使用#定义，结构通过id调用。与类区别，只能调用一次，别人切勿使用。
#id名 {
    属性1： 属性值1；
    ……
}

#nav {
    color：red;
}

通配符选择器
在CSS中，通配符选择器使用“*”定义，它表示选取页面中所有元素，（标签）。
通配符选择器不需要调用，自动就给所有元素使用样式。
特殊情况下才使用，后面讲解使用场景，比如消除所有元素标签的内外边距。权重较低。

css字体属性
css fonts 属性用于定义字体系列，大小，粗细和文字样式。
font-size 字体大小；默认大小为16px；可以给body指定整个页面的文字大小。标题标签特殊，需要指定文字大小。
font-family：字体选择；
font-weight: 字体粗细选择。
复合属性：简写的方式
font; fony-style;fonr-weight;font-size/line-height; font-family;
四个字体属性和字体连写。

CSS文本属性
css text属性可以定义文本的外观，比如文本的颜色、对齐文本、装饰文本、文本缩进、行间距等。
文本颜色
div {
    color: red;
    <!-- 预定义的颜色值 red，green，blue -->
    <!-- 十六位进制 #FF0000 -->
    <!-- RGB代码 rgb(255,0,0) -->
}

对齐文本 text-align 属性用于设置元素内文本内容的水平对齐方式。

装饰文本 text-decoration 属性规定添加到文本的修饰，可以给文本添加下划线、删除线、上划线等。

默认值 none 默认没有 underline 下划线 overline 上划线 line-through 删除线

文本缩进 text-indent 属性用来指定文本的第一行的缩进，通常是将段落的首行缩进。

行间距 Line-height 设置行间距，控制行与行之间的高度。

css的引入方式
三种样式表：1.行内样式表（行内式）2. 内部样式表（嵌入式） 3. 外部样式表（链接式）
内部样式表 是写道html页面内部，将所有的CSS代码抽取出来，单独放到一个《STYLE》标签中
内部样式表理论上可以放到html页面的任何地方，通常放在head标签内部
通过这种方式，可以方便地控制当前整个页面的元素样式设置
代码结构清洗，但是并没有实现结构与样式的完全分离。称为嵌入式
行内样式表，style, style其实就是标签的属性，在双引号中间，写法要复合CSS规范，可以控制当前的标签设置样式。
外部样式表 实际开发都是外部样式表，适用于样式比较多的情况，核心是：样式单独写到单独的CSS文件中，之后把CSS文件引入到html页面中使用。
引入外部样式表分为两步：
在html页面中，使用link标签引入这个文件
<link rel="stylesheet" href="css文件路径">

综合案例：新闻页面

制作页面整体可以分为两个部分：
1. 搭建html结构页面。
2. 修改css样式

chrome 调试工具 用于调试我们的html和css结构样式
使用调试工具
ctrl+滚轮 可以放大开发者工具代码大小
左面是html元素结构，右边是css样式
右边css样式可以改动数值和查看颜色
ctrl+0复原浏览器大小
如果点击元素，发现右侧没有样式引入，极有可能是类名或者样式引入错误。
如果有样式，但是样式前面有黄色叹号提示，则是样式属性书写错误。

emmet语法
使用缩写，提高编写速度。
快速生成html结构语法

css复合选择器
css后代选择器
又称为包含选择器，

css元素显示模式
css背景
css三大特性
css注释

子选择器
只能选择某元素最近的一级元素，不选择下下代。

并集选择器
可以选择多组标签，
div, p{
    color: pink;
}

伪类选择器
用于向某些选择器添加特殊的效果，比如给链接添加特殊效果，或选择第一个，第n个元素。
伪类选择器最大特点使用：表示。
链接伪类选择器。
a:link 选择所有未被访问过的链接
a.visited 选择所有已被访问过的链接
a.hover 选择鼠标指针位于其上的链接
a.active 选择活动链接 鼠标安下未弹起的链接

链接伪类选择器
1. 链接伪类选择器注意事项
2. 链接伪类选择器实际开发中的写法
链接伪类选择器注意事项
1. 为了确保生效，请按照LVHA的循顺序声明：link-：visited-：hover-：active。

focus伪类选择器
:focus 伪类选择器用于选取获得焦点的表单元素。
焦点就是光标，一般情况《input》类表单元素才能获取，因此这个选择器也主要针对于表单元素来说。

css的元素显示模式
了解元素的显示模式可以更好地让我们布局页面

1. 什么是元素的显示模式
2. 元素显示模式的分类
3. 元素显示模式的转换

块元素、行内元素

块体元素特点：

1. 独占一行
2. 高度，宽度，外边距以及内边距都可以控制
3. 宽度默认是容器的100%
4. 是一个容器及盒子，里面可以放行内或者块级元素。

注意:

1. 文字类的元素内不能使用块体元素
2. 《p》标签主要用于存放文字，因此，《p》里面不能放块体元素，特别是不能放《div》。
3. 同理，《h1》~《h6》等都是文字类块体标签，里面也不能存放其他块级元素。

行内元素
常见行内元素，<a> <strong> ...
行内元素特点：

1. 相邻行内元素一行上可以显示多个。
2. 高、宽直接设置是无效的。
3. 默认宽度就是它本身内容的宽度。
4. 行内元素只能容纳文本或其他行内元素。

链接内不能再放链接
特殊情况下链接内可以放块体元素，但是转换一下块级模式最安全。

行内块元素
同时具有块体元素和行内元素的特点
特点：

1. 和相邻行内元素（行内块）再一行上，但是他们之间会有空白缝隙，一行可以显示多个（行内元素特点）。
2. 默认宽度就是它本身内容的宽度（行内元素的特点）。
3. 高度、行高、外边距以及内边距都是可以控制的（块级元素特点）。

元素显示模式转换 特殊情况下，我们需要元素模式的转换，简单理解：一个模式的元素需要另一种模式的特性。比如想要增加链接<a>的触发范围。
转换为块体元素：display：block；

css背景
通过css背景属性，可以给页面元素添加背景
背景属性可以通过设置背景颜色、背景图片、背景平铺、背景图位置、背景图像固定等。
3.1 背景颜色
3.2 背景图片
常见于logo或者一些装饰性的小图片或者超大的背景图片，优点是非常便于控制位置。
background: none|image url；
背景图片位置
参数是方位名词，如果指定的两个值都是方位名词，则两个值前后顺序无关，比如left top和top left效果一致。
参数是精确单位，第一个单位x坐标，第二个单位y坐标.
参数也可以是混合单位.
背景图像固定(背景附着)
背景复合写法：
约定方式：background：背景颜色、背景图片、背景图片地址、背景平铺、背景图像滚动、背景图片位置。

背景颜色半透明
background rgba(0,0,0,0.3)
0.3-透明度 0-1选择。

CSS 三大特性：层叠性、继承性、优先级。
1.1 层叠性
根据选择器给设置相同的样式，此时一个样式就会覆盖一个冲突的样式，层叠行主要解决样式冲突的问题。就近原则。

1.2 继承性
主要继承某些样式，字体、颜色等。
行高继承性 行高可以跟单位 可以不跟单位。当前文字大小的1.5倍 

1.3 CSS优先级
选择器相同，则执行层叠性
选择器不同，则根据选择器权重执行。
继承或* 0000
元素选择器 0001
类选择器，伪类选择器 0010
ID选择器 0100
行内样式 style=“” 1000
！important 无穷大

注意事项：

1. 权重有4组书资组成，不会有进位。
2. 可以理解为类选择器永远大于元素选择器，id选择器永远大于类选择器，依次类推。
3. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。

权重叠加：如果是复合选择器，则会有计算权重的问题。

CSS盒子模型

能够准确描述盒子模型的4个组成部分
能够利用边框复合写法给元素添加边框
能够计算盒子的实际大小
能够利用盒子模型布局模块案例
能够给盒子设置圆角边框
能够给盒子添加阴影
能够给文字添加阴影

盒子模型
页面布局学习三大核心：盒子模型、浮动和定位。学习好盒子模型能够非常好地帮助我们布局页面。

1.1 看透网页布局的本质
网页布局过程：

1. 先准备好相关的网页元素，网页元素基本都是盒子box
2. 用CSS布局样式,然后放到相应的位置。
3. 往盒子里面装内容。

网页布局的核心本质就是利用CSS摆盒子

Ｂｏｘ　Ｍｏｄｅｌ
盒子模型包括，边框、外边距、内边距和实际内容。

border　边框
content 内容
padding 内边距
margin 外边距

边框
border可以设置元素的边框，边框有三部分内容组成，宽度，样式，颜色
border: border-width || border-style || border-color
边框简写 border：1px solid red； 无先后顺序。

边框分开写法：
border-top
border-bottom

边框合并：
border-collpse 合并相邻边框。

padding 属性用于设置内边距，即边框与内容的距离。

如果盒子本身没有指定width、height属性，则此时padding不会撑开盒子大小.


margin 外边距
用于设置盒子之间的距离。

外边距典型应用
外边距可以让块级盒子水平居中

1. 盒子必须指定了宽度
2. 盒子左右的外边距都视设置为auto
3. margin: 0 auto;
4. 嵌套款元素

P152

行内元素或者行内块元素水平居中给其父元素添加text-align：center即可。
外边距合并
使用margin定义块元素的垂直外边距时，可能会出现外边距的个兵。
相邻块元素垂直外边距的合并
当上下相邻的两个块怨怒苏相遇时，如果上米娜的元素有下边距margin-bottom，下面的元素有上外边距margin-top，则它们之间的垂直间距不是margin-bottom与margin-top之和，取两个值中较大者这种现象称为相邻块元素垂直外边距的合并。
解决王法：
尽量只给一个盒子添加margin值。

嵌套块元素垂直外边距
对于两个嵌套关系的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。

解决方案：
可以为父元素定义上边框。 border： 1px solid transparent;
可以为父元素定义上内距。
可以为父亲添加一个overflow：hidden。

外边距合并
使用margin定义块元素的垂直外边距时，可能会出现外边距的合并。

嵌套快元素垂直外边距的塌陷
对于两个嵌套关系的块元素，父元素的上边距同时子元素也有上外边距，此时父元素

清除内外边距，不同的元素带有不同的值。
网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致，因此我们在布局前，首先要清除下内外边距。
这句话也是CSS第一行代码。
* { margin：0; padding:0; }

行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距，但是转换为块级和行内元素就可以了。

网页大部分效果图都是利用ps来做的。大部分切图工作都是ps做的。

圆角边框，
在css3中，新增了圆角边框的样式，这样我们的盒子就可以变成圆角了，
语法：
border-radius: 10px;

盒子阴影
box-shadow属性 为盒子添加阴影
盒子阴影不占空间。

文字阴影
text-shadow 应用于文本。


css浮动
为什么需要浮动
浮动的排列特性
3中最常见的布局方式
为什么需要清除浮动
至少两种清除浮动的方法
利用ps实现基本的切图
完成学成在线的页面布局

传统网页布局的三种方式：
网页布局的本质：用CSS来摆放盒子，把盒子拜访到相应位置上。
CSS提供了三种传统布局方式（简单说，就是盒子如何进行排列顺序）

* 普通流（标准流）:就是标签按照规定好默认方式进行排列
* 浮动
* 定位

三种布局方式都是用来摆动盒子的，盒子放到合适的位置，布局自然就完成了。
在实际开发中，一个页面基本包含了这三种布局方式，后面移动端学习新的布局方式。

浮动可以改变元素标签默认的排列方式。
浮动最典型的应用：可以让多个块级元素一行内排列显示。
网页布局第一准则：多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动。

什么是浮动。
float：属性值；
浮动特性（重难点）
加了浮动之后的元素会具有很多特性，需要我们掌握：

1. 脱离标准普通的控制，移动到指定位置。俗称脱标。
2. 浮动的盒子不再保留原先的位置。
3. 如果多个盒子都设置了浮动，则它们会按照属性值一行内显示并且顶端对齐排列。
4. 浮动元素会具有行内块元素特性。

常见的网页布局
top
banner
main
footer

清除浮动的本质

1. 清除浮动的本质是清除浮动元素造成的影响
2. 如果父盒子本身有高度，则不需要清除浮动

clear left right both;
清除浮动 闭合浮动

四种方法：

1. 额外标签法 也称为隔墙法
2. 父级添加overflow属性
3. 父级添加after伪属性
4. 父级添加双伪元素

采用结构与样式相分离的思想

1. 创建study学习文件夹
2. 在文件夹中新建images文件夹，用于保存图片，
3. 首页文件命名为index。html
4. css为外链

css属性书写顺序（重点）
建议遵循以下顺序：

1. 布局定位属性：display\position\float\clear\visibility\overflow
2. 自身属性：width\height\margin\padding\border\background
3. 文本属性：color\font\text-decoration\text-align\vertical-align\whtie-sapce\break-word
4. 其他属性（css3）：content\cursor\border-radius\box-shadow\background:linear-gradient

页面布局整体思路

为了提高页面制作的效率，布局时通常有以下的整体思路：

1. 必须确定页面的版心（可视区），我们测量可得只
2. 分析页面中的行模块，以及每个行模块中的列模块，其实页面布局第一准则。
3. 一行中列模块经常浮动布局，先确定每个列的大小，之后确定列的位置，页面布局第二准则。
4. 制作html结构，先结构，后样式，结构永远都是最重要的。
5. 先理清楚布局结构，再写代码。

定位
为什么需要定位

1. 浮动可以让多个块级盒子一行没有缝隙排列显示，经常用于横向排列盒子。
2. 定位则是可以让盒子自由在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。

定位的组成
定位：将盒子定在某一个位置上，所以定位也是在摆放盒子，按照定位的方式移动盒子。
定位=定位模式+边偏移。

定位模式用于指定一个元素在文档中的定位方式。边偏移则决定了该元素的最终位置。

1. 定位模式
   1. 定位模式决定元素的定位方式，它通过CSS的postion属性来设置，其值可以分为四个：
      1. static 静态定位
      2. relative 相对定位
      3. absolute 绝对定位
      4. fixed 固定定位
   2. 边偏移
      1. 边偏移就是定位盒子移动到最终位置，有top、bottom、left和right四个属性。 

静态定位static（了解）
静态定位是元素的默认定位方式，无定位的意思。
选择器 {
    position: static;
}
静态定位按照标准流特性摆放位置，它没有边偏移。
静态定位在布局时很少用到。

相对定位 relative 
相对定位是元素在移动位置的时候，是相对于它原来的位置来说的。
选择器 {
    postion: relative;
}

相对定位的特点：1.总是相对自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置。2. 原来在标准流的位置继续占有，后面的盒子仍然以标准流的方式对待它。（不脱标，继续保留原来的位置）

绝对定位 absolute 绝对定位是元素在移动位置的时候，是相对于它祖先元素来说的。：absolute
特点： 1. 如果没有祖先元素或者祖先元素没有定位，则以浏览器位准定位。2. 如果祖先元素有定位，则以最近一级的有定位祖先元素为参考点移动位置。3. 绝对定位不再占有原来的位置。（脱标）

子绝父相的由来
子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。
父盒子需要加定位才能

固定定位fixed （重要）
固定定位是元素固定于浏览器可视区的位置，主要使用场景：可以在浏览器页面滚动时元素的位置不会改变。

选择器 {position: fixed;}
固定定位的特点：1.以浏览器的可视窗口为参考点移动元素。 跟父元素没有任何关系 不随着滚动条滚动。 2. 固定定位不在占有原来的位置。

固定定位小技巧：固定到版心的右侧。
让固定位置的盒子 left: 50%, 走到浏览器可视区的一半位置。让固定定位的盒子margin-left版心宽度的一半距离，夺走版心宽度的一半位置。\

粘性定位 sticky
粘性定位可以被认为是相对定位和绝对定位的混合。
选择器 { position： sticky; top: 10px;}
粘性定位的特点：1. 以浏览器的可视窗口为参考点移动元素（固定定位特点）2. 粘性定位占有原先的位置（相对定位特点）3. 必须添加top、left、right、bottom其中一个才有效。

定位的叠放次序 z-index
在使用定位布局时，可能会出现盒子重叠的情况。此时，可以使用z-index来控制盒子的前后次序（Z-轴）
语法：选择器{z-index：1；}
如果属性值相同，则按照书写顺序，后来者居上。数字必须是整数。只有定位的盒子才有z-index属性。

定位的拓展

绝对定位的盒子居中
绝对定位无法使用margin：auto居中
可以使用left：50%，margin负值进行居中。

定位特殊特性
绝对定位和固定定位也和浮动类似 1. 行内元素添加绝对或者固定定位，可以直接设置高度和宽度。2. 块级元素添加绝对定位或者相对定位，如果不给宽度或者高度，默认大小是内容的大小。
浮动元素、绝对定位元素都不会触发外边距合并的问题。
浮动的元素不会压住下面标准流的文字。但绝对定位会压住下面标准流所有内容。
浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。文字会围绕浮动元素。
如果一个盒子既有left属性也有right属性，则默认会执行left属性。同理，top.

标准流 可以让盒子上下排列或者左右排列，垂直的块级盒子显示就用标准流布局。
浮动 可以让多个块级元素一行显示或者左右对齐盒子，多个块级盒子水平显示就用浮动布局。
定位 定位最大的特点是有层叠的概念，就是可以让多个盒子前后层叠来显示，如果元素自由在某个盒子内移动就可以用定位布局。

元素的显示与隐藏
本质：让一个元素在页面中隐藏或者显示出来。1. display 显示隐藏， 2. visbility 显示隐藏 3. overflow 溢出显示隐藏
display 隐藏元素之后，不再占有原来的位置。
visbility 隐藏元素后，继续占有原来的位置。
overflow 溢出隐藏 visible hidden scroll auto
如果有定位的盒子，请慎用overflow：hidden，因为它会隐藏多余的部分。

精灵图:有效减少服务器接收和发送请求的次数，提高页面的加载速度
原理：移动背景图片位置:background-position
字体图标
CSS三角

字体图标的产生
字体图标使用场景：主要用于显示网页中通用、常用的一些小图标。
精灵图是有诸多优点的，但是缺点很明显。1. 图片文件还是比较大的。2. 图片本身放大和缩小会失真。3. 一旦图片制作完毕想要更换非常复杂。
字体图标 iconfont。本质是字体
轻量级：一个图标字体要比一些列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器的请求。
灵活性：本质其实是文字，可以很随意地改变颜色、产生阴影、透明效果、旋转等。
兼容性：几乎支持所有的浏览器，请放心使用。

字体图标网站：
icomoon: http://icomoon.io
阿里iconfont  http://www.iconfont.cn/
.ttf文件
把下载包中fonts文件夹放入页面根目录下。
在CSS样式中全局声明字体：简单理解把这些字体文件通过CSS引入到我们的页面中。
一定注意字体文件路径的问题。
@font-face {
    font-family:'icomoon';
    src: url();
    src: url();
    url ^^^
}
字体声明
从css文件中复制到 block
使用html标签内添加小图标 icon 后面的小框框。
使用过程： 1. 字体声明 2. 复制小框框 3. span等类中声明 font-family：‘icomoon'

字体图标的追加 
把压缩包里面的selection.json从新上传，然后选中自己想要的新图标，从新下载压缩包，并替换原来的文件即可。

css三角做法
盒子模型，长宽为0，设置边框，其他三个边为透明色。

什么是界面样式
所谓界面样式，就是更改一些用户操作样式，以便提高更好的用户使用体验。1. 更改用户的鼠标样式 2. 表单轮廓 3. 防止表单域拖拽

鼠标样式 cursor
li {cursor: pointer;}
表单轮廓线 outline: 0 /none;
文本域防止拖拽 resize: none;
垂直居中 vertical -align 只针对行内元素或者行内块元素；默认使用基线对齐。bottom middle top；

图片底侧有空白缝隙解决方案: 1. 添加底线对齐 2. 将图片转换为块体元素。

溢出的文字用省略号显示
单行文本溢出显示省略号 -- 三个条件
1.先强制一行内显示文本
white-space：nowrap；（默认normal自动换行）
2.超出的部分隐藏
overflow：hidden；
3.文字用省略号代替超出的部分
text-overflow：ellipsis；

多行文本溢出显示省略号 -- 有较大的兼容性问题，适用于webkit浏览器或者移动端（移动端大部分是webkit内核）
1.超出的部分隐藏
overflow：hidden；
2.文字用省略号代替超出的部分
text-overflow：ellipsis；
3.使用webkit
弹性伸缩盒子模型显示
display: -webkit-box;
限制在一个块元素显示的文本的行数
-webkit-line-clamp:2;
设置或检索伸缩盒对象的子元素的排列方式
-webkit-box-orient: vertical;

常见布局技巧，巧妙利用一个激素和更快更好的布局
1.margin负值的运用 表格细线 改为相对定位或者提高层级
2.文字围绕浮动元素 float
3.行内块的巧妙运用 
4.CSS三角强化

CSS初始化 照顾浏览器的兼容性，需要对CSS初始化。
