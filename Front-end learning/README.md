# NiuGeng-SEU.github.io

## JavaScript 目录
- [NiuGeng-SEU.github.io](#niugeng-seugithubio)
  - [JavaScript 目录](#javascript-目录)
  - [课程记录](#课程记录)
  - [编程语言](#编程语言)
  - [流程控制-分支](#流程控制-分支)
  - [数组](#数组)
  - [函数](#函数)
  - [内置对象](#内置对象)
  - [Web APIs](#web-apis)
    - [如何获取网页元素](#如何获取网页元素)
    - [排他思想](#排他思想)
  - [PC网页特效](#pc网页特效)

## 课程记录

210201-JS导读 - P5
210202-字符串长度以及拼接 -P26
210203-switch ifelse区别 -P68
210204-通过榨汁机看透函数 -P125
210205-函数的两种声明方式 -P133
210206-倒计时 -P168
210207-DOM借鉴 -P195
210208-发布留言案例节点添加 -p234

## 编程语言

编程就是让计算机为解决某个问题而使用某种程序设计语言编写程序代码。

计算机语言指用于人与计算机之间通讯的语言，他是人与计算机之间传递信息的媒介。
分类：机器语言、汇编语言和高级语言。

高级语言相对于低级语言而言，并不特指一种语言，常用有C、Ｃ＋＋、Java, C#, Python, PHO, JavaScript, Go, Objective-C, Swift等。

翻译器
将所编写的源代码转换为机器语言，也被称为二进制化。

编程语言和标记语言的区别
编程语言有很强的逻辑和行为能力，再编程语言中，你会看到很多if else，for，while等具有逻辑性和行为能力的指令，这是主动的。
标记语言，不用于向计算机发出指令，常用于格式化和链接。标记语言的存在是用来被读取的，他是被动的。

计算机基础
组成

初始JS
布兰奇 艾奇 发明
10d完成了JS的设计

JS是什么
JS是世界上最流行的语言之一，是一种运行在客户端的脚本语言。
脚本语言：不需要编译，运行程序由JS解释器（JS引擎）逐行来进行解释并执行。
现在也可以基于Node.js技术进行服务器端编程

JS的作用
表单动态校验（密码强度检测）（js产生最初的目的）
网页特效
服务端卡法（node.js)
桌面程序(Electron)
App(cordova)
控制硬件-物联网(Ruff)
游戏开发(cocos3d-js)

HTML/CSS/JS 关系

浏览器执行JS过程

浏览器分成两个部分，渲染引擎和JS引擎
宣言引擎：用来解析HTML与CSS，俗称内核，比如ｃｈｒｏｍｅ浏览器的ｂｌｉｎｋ，老版本的ｗｅｂｋｉｔ。
ＪＳ引擎：也成为ＪＳ解释器，用来读取网页中的ＪＳ代码，对其处理后运行，比如ｃｈｒｏｍｅ浏览器的Ｖ８。

JS的组成
ECMAScript DOM BOM 
JS语法 页面文档对象模型 浏览器对象模型

ECMA 规定了JS的编程语法和基础核心知识,是所有浏览器厂商共同遵守的一套JS语法工业标准.
DOM - 文档对象模型 是W3C组织推荐的处理可扩展你标记语言的标准编程接口.通过DOM提供的接口可以对页面上的各种元素进行操作(大小\位置\颜色等)
BOM - 浏览器对象模型 提供了独立于内容\可以与浏览器窗口进行互动的对象结构.通过BOM可以操作浏览器窗口,比如弹出框\控制浏览器跳转\获取分辨率等.

JS初体验
JS有三种书写位置.
行内式\内嵌式\外部式
<script></script>

行内式
可以将单行或者少量JS代码写在HTML标签的事件属性中,如onclick
注意单双引号的使用:在html中我们推荐使用双引号,JS中推荐使用单引号
可读性查,在html中编写大量JS代码时,不方便阅读.
引号易错,引号多层嵌套匹配时,非常容易混淆.
特殊情况下使用

内嵌式
可以将多行JS代码写在<script></script>标签中
内嵌JS是学习时常用的方式

外部JS文件
利于HTML页面代码结构化,将大段JS代码独立于HTML页面之外,既美观,也方便文件级别的复用.
引用外部JS文件的Script标签中间不可以写代码
适用于JS代码量比较大的情况

JS注释
单行注释
//
多行注释
/* */

输入输出语句
alert(msg)浏览器弹出警示框
console.log(msg)浏览器控制台打印输出信息
prompt(info)浏览器弹出输入框,用户可以输入

变量
使用 1. 声明变量 2. 赋值
//声明变量
var age; 声明一个名称为age的变量
var是js关键字,用来声明变量的意思.使用该关键字声明变量后,计算机会自动为变量分配内存空间,不需要程序员管.
负值
age = 18;
var age =18;

命名规范
不能以数字开头,不能是关键字,保留字。

为什么需要数据类型
不同数据所需要的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。
js的变量数据类型是只有程序在运行过程中，根据等号右边的值来确定的。

JS拥有动态类型，同时也意味着相同的变量可用作不同的类型

JS中数据类型分为两类:1. 简单数据类型，Number Boolean， String， Undefined， Null
Number数字型 
程序中数字前加0表示八进制。
010 = 8
十六进制 0x 表示16进制
0x9 = 9， 0xa = 10;

JS中数值最大值和最小值
alert(Number.MAX_VALUE);1.7976+308
alert(Number.MIN_VALUE);5e-324

数字型三个特殊值
Infinity 无穷大 大于任何值
-Infinity 无穷小，小于任何数值
NaN 代表一个非数值

字符串嵌套
单双号嵌套，外单内双 外双内单

转义符
\n 换行符
\\ 斜杠
\'单引号
\" 双引号
\t tab缩进
\b 空格

名称.length 字符串长度
字符串拼接
+ 必须有一个为字符值
  
经常会将字符串和变量来拼接，因为变量可以很方便地修改里面的值。
变量引用不添加引号

Boolean 布尔型 true false
undefined和数字相加得到NaN

获取变量数据类型
typeof 获取变量数据类型

数字型 蓝色
字符型 黑色
unde null 灰色
字面量 源代码中一个固定值的表示法，就是字面量表示如何表达这个值。

数据类型转换
三种：转换为字符串 转换为数字 转换为布尔

字符串：toString();String();加合拼接字符串
num.toString()
String(num)
num+''

转换为数字型（重点）
四种方法：
parseInt(string)转换为整数型
parseFloat(string)转化为浮点数数值型
Number()强制转换函数 转换为数值型
js隐式转换（- * /）

转换为布尔型
Boolean() ''\0\NaN\null\undefined 会被转换为false 剩下都是true

标识符
就是指开发人员为变量、函属性、函数、参数取得名字。

运算符
operator 实现赋值、比价和执行运算等功能的符号
常用运算符有
算数运算符 + - * / %取余数
递增和递减运算符 ++ --
比较运算符 < > >= <= == != === !===
逻辑运算符 && || ！
赋值运算符 = += -= *= /= %=

浮点数的精度问题
浮点数的最高精度是17位小数，但在进行算数计算时精确度远远不如整数。
不要直接判断两个浮点数是否相等
运算符也有优先级

表达式 和 返回值 
表达式：由数字、运算符、变量等能求得数值的有意义排列方法所得的组合。
简单理解：由数字、运算符、变量等组成的式子。

递增递减 运算符 ++ --
既可以放在变量前、也可后，前时，称为前置，反之后置。
后置递增，先返回原值，再自加1。

比较运算符 对两个数据相比较所使用的运算符，运算后，返回一个布尔值作为比较运算的结果。
=== !== 要求数值和数据类型都一致

逻辑运算符
用于进行布尔值运算的运算符，其返回值也是布尔值。后面开发中经常用于多个条件的判断。
&& 逻辑与 || 逻辑或 ! 逻辑非

值或者表达式参与逻辑运算
短路运算 （逻辑中断）
当有多个表达式时，左边的表达式值可以确定结果时，就不再继续运算右边的表达式的值。

逻辑与
表达式1 && 表达式2
如果第一个表达式的值为真，则返回表达式2
如果第一个表达式的值为假，则返回表达式1

逻辑或
与与相反
表达式1 || 表达式2
如果第一个表达式的值为真，则返回表达式1
如果第一个表达式的值为假，则返回表达式2

赋值运算符
num+=2 == num=num+2；

运算符优先级
小括号 （）
一元运算符 ++ -- ！
算数运算符 先 * / % 后 + - 
关系运算符 > >= < <=
相等运算符 == != === !==
逻辑运算符 先&& 后||
赋值运算符 =
逗号运算符 ，

## 流程控制-分支

if switch 三元表达式

流程控制
在一个程序执行的过程中，各条代码的执行顺序对程序的结果是由直接影响的，很多时候需要通过控制代码的执行顺序来实现我们要完成的功能。
简单：控制我们的代码按照什么结构顺序来执行。

**三种结构**：
顺序结构、分支结构和循环结构。  

分支流程控制 if根据不同的条件，执行不同的代码路径，从而得到不同的结果。
JS提供两种分支结构语句
if switch

if(条件表达式) {
  执行语句
}else {
  否则 执行的代码
}

多分支语句
if else if
if(1) {
  //1
} else if (2) {
  //2
} else if (3) {
  //3
} else {
  //4
}

三元表达式
能够做一些简单的条件选择，有三元运算符组成的式子称为三元表达式
？ ：
条件表达式？表达式1：表达式2
执行思路：如果为真 返回表达式1值，否则返回表达式2的值。

switch语句
也是多分支语句，用于基于不同的条件来执行不同的代码，当要针对变量设置一系列的特定值选项时，就可以使用switch。

switch（表达式）{
  case value1：
  执行语句1；
  break;
  case value2:
  执行语句2；
  break;
  ...
  default:
  执行最后的语句；
}

switch注意事项
开发表达式经常写成变量
判断条件为===

switch ifelse区别
一般情况下，两个语句可以相互替换。
switch case语句通常处理case比较确定值得情况，而ifelse常用于范围判断
switch语句进行条件判断后直接执行到程序得条件语句，效率更高，而ifelse语句有几种条件，就要判断多少次。
分支较少，ifelse执行效率高。
分支较多，switch执行效率高 而且结构清晰。

循环结构
循环的目的：可以重复执行某些代码。
循环三种类型循环语句
for循环
while循环
do……while循环

循环体 终止条件 循环语句

语法体系
for(初始化变量；条件表达式；操作表达式) {
  //循环体
}
初始化变量 就是用var声明一个普通变量，通常用于作为计数器使用
for (var i = 1; i <= 100; i++ ) {

}

断点调试
帮助我们观察程序的运行过程

双重for循环
语法结构
for(外层的初始化变量；外层的条件表达式；外层的操作表达式){
  for(里层的初始化变量；里层的条件表达式；里层的操作表达式){
    //循环语句；
  }
}

重复执行某些重复的代码或者不同的代码。

while循环
while（条件表达式）{
  //循环体
}

do while 循环
do {
  //循环体
} while(条件表达式)
先执行一次循环体 再判断条件，如果为真，则继续执行。

循环更常用for

contine break
 contine 立即跳出本循环，继续进行下一次循环
 break 退出整个循环

JS命名规范 有意义，不是关键字保留字
变量用名词，函数用动词
操作符规范 
操作符左右两侧有动词
单行注释规范
//后加一个空格

## 数组

JS创建数组
new创建数组 
var 数组名 =new Array();
利用数组字面量创建数组
var 数组名 = []; // 创建空数组
使用数组字面量方式创建带初始值的数组
var 数组名 = ['1','2','3'];可以放任意数据类型

访问数组元素
数组的索引
索引（下标）：用来访问数组元素的序号（数组下标从0开始）。
0，1，2，3
格式
数组名[索引号]
console.log(arr[3]);

遍历数组
获得数组长度
arr.length 有几个元素就返回几

数组中新增元素
修改length长度 以及 索引号增加数组元素
不要直接给数组名赋值，否则里面的数组元素都没有了

## 函数

大量重复使用的代码
函数，就是封装了一段可被重复调用执行的代码块，通过代码块可以实现大量代码的重复使用。

声明函数 调用函数
function 函数名（） {
    //函数体
}
函数名（）；

函数的参数
function 函数名 （形参1，形参2，……）{

}

函数名（实参1，实参2，……）；

JS 其形参和实参个数不匹配问题
多参数，不会使用
少参数 参数可以看作不用声明的变量，是一个变量但是没有接受值，结果就是undefined

函数返回值
return语句
希望函数把值返回给调用者。
return终止函数，遇到return便不再执行。
return只能返回一个值。可以输出数组从而获得数据。
如果没有return 返回defined。

arguments的使用
不确定有多少个参数传递时，可以用arguments来获取。在JS中，arguments实际上是当前函数的一个内置对象。所有函数都内置了一个arguments对象，存储了传递的所有实参。
arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：具有length属性，按照索引方式存储数据，不具有数组的push，pop等方法。
伪数组 并不是真正意义上的数组
//1. 具有数组的length属性
//2. 按照缩影的方式进行储存
//3. 没有真正数组的一些方法 pop() push()等等
只有函数才有arguments对象，而且只有函数才内置好了这个arguments
函数可以调用另一个函数
每个函数都是独立的代码块，用于完成特殊任务。

函数的两种声明方式
利用函数关键字自定义函数（命名函数）
函数表达式方法
var 变量名 =function（）{}；
此处变量名不是函数名，为匿名函数。

作用域
变量的作用域
作用域接

限定代码名字在某个范围内起作用和效果。
目的是为了提高程序的可靠性和减少命名冲突
js作用域（es6）
全局作用域 局部作用域
全局作用域 整个script标签，或者单独一个js文件
局部作用域 在函数内部就是局部作用域，这个代码的名字只在函数内部起效果和作用

变量的作用域分类
根据作用域的不同 变量分为全局变量和局部变量
全局变量：在全局作用域下都有效。
局部变量 只能在函数里使用
如果**在函数内部**，没有声明直接赋值的变量也属于全局变量
函数的形参也可以看作局部变量
从执行效率来看全局变量只有在浏览器关闭的时候才会销毁，比较占用内存资源。
局部变量当程序执行完毕就会销毁，比较节约内存资源。

JS现阶段　没有块级作用域
块级作用域　｛｝　

作用域链 

预解析

console.log(num);
var num=10;
 out:undefined;

函数定义 var定义 不能在下面定义

JS引擎 运行JS分为两步：预解析 代码执行
预解析 JS引擎会把JS里面所有的var 还有function提升到当前作用域的最前面。
代码执行 代码按照书写的顺序从上往下执行
预解析 分为 变量预解析（变量提升） 和 函数预解析 （函数提升）
变量提升 只提升 声明 但不提升 赋值。
函数提升 就是把所有的函数声明提升到当前作用域的最前面 不调用函数。

JS对象
对象是一个具体的事物
对象是一组无序的相关属性和方法的集合，所有的事物都是对象，例如字符串，数值，数组，函数等。
对象是由属性和方法组成的。
属性：事物的特征，在对象中用属性来表示（常用名词）
方法：事物的行为，在对象中用方法来表示(常用动词)

保存一个值时，可以使用变量，保存多个值时，可以使用数组。保存一个人的完整星系，使用JS对象。

创建对象的三种方法：
字面量
new object


对象字面量 就是花括号{}里面包含了表达这个具体事物的属性和方法。
var obg = {};
var obj = {
  uname:'Zhang sanfeng'，
  age: 18，
  sex: 'Male'，
  sayHi:function(){
    console.log('Hi');
  }
}
创建方法 里面的属性或者方法我们采用键值对的方法，键 属性名：值 属性名
多个属性或者方法之间用逗号分开
方法冒号后跟一个匿名函数

使用对象方法
调用对象的属性 我们采取 对象名.属性名
console.log(obj.uname);
console.log(obj['age'])
obj.sayHi();

变量 单独声明并赋值 使用的时候直接写变量名 单独存在
属性 在对象里面不需要声明 使用的时候必须 对象。属性

new object
var obj = new Objcet();
obj.uname = 'Zhang';
obj.age = 18;
obj.sayHi = function () {
  console.log('Hi~');
}

利用构造函数创建对象
前面两种创建对象的方式一次只能创建一个对象。
构造函数 就是 我们把对象里面一些相同的属性和方法抽象出来封装到函数里面

利用构造函数创建
function 构造函数名（）{
  this.属性=值；
  this.方法=function（）{}；
  this.sing = funciton() {
    console.log();
  }
}
ldh.sing();
构造函数的首字母要大写。
构造函数不需要return就可以返回结果
我们只要new Star（） 调用函数就创建了一个对象

构造函数和对象
对象是一个具体的事物，而构造函数 泛指某一大类。
对象时特指某一个具体的事物。
我们利用构造函数创建对象的过程 我们也称为对象的实例化。

new关键字执行过程
new构造函数 
在内存中创建一个空的对象
this指向创建的空对象
执行构造函数里面的代码 给这个空对象添加属性和方法
返回这个对象（所以构造函数不需要return）

如何遍历对象属性
for in语句  用于对数组或者对象的属性进行循环操作。
for (变量 in 对象) {

}

for (var k in obj) {
  console.log(k); 输出属性名
  console.log(obj[k]); 输出属性值
}
for in里面的变量 一般写k 或者 key

## 内置对象

JS中的对象分为3种，自定义对象，内置对象，浏览器对象
前两种对象时JS基础内容，属于ECMAScript，第三个浏览器对象属于JS独有。
内置对象就是JS语言自带的一些对象，提供给开发者使用，并提供了一些常用的或者最基本而必要的功能（属性和方法）
内置对象最大的优点就是帮助我们快速开发
JS提供了多个内置对象Math\Date\Array\String。

查阅文档
MDN/W3C
MDN提供了有关网络技术（openweb）的信息，包括html、css和王伟王及HTML5应用的API。 

学习方法：
//1. 查阅该方法的功能 2. 查看里面参数的意义和类型 3. 查看返回值的意义和类型。 4. 通过demo进行测试。

Math数学对象
不是一个构造函数 不需要new来调用
封装自己的数学对象
利用对象封装自己的数学对象 里面有PI最大值和最小值
var myMath= {
  PI: 3.1415,
  max: function(){
    var max = arguments[0];
  }
}

Math.random(); 返回一个浮点数，伪随机数在范围【0，1）之间，

Date是一个构造函数，必须使用new来调用创建我们的日期对象
var arr = new Array();
var obj = new Object();

var date1 = +new Date(); 最常用的写法
返回的就是总的毫秒数；
H5新增 获得总的毫秒数
console.log(Date.now());
时间戳

数组内置对象
数组创建方式：1. 字面量方式 2. new Array()创建 

var arr = [1,2,3];
console.log(arr[0]);

var arr1 = new Array(2);
2为数组长度

var arr2 = new Array(2,3);
里面有两个数组元素 是2和3.

判断参数是否为数组
instanceof 运算符 可以用来检测是否为数组

arr instanceof Array -> return true.

Array.isArray(arr); -> return true.

添加删除数组元素的方法
push() 在数组末尾，添加一个或者多个数组元素
arr.push();
push 返回结果为新数组的长度
原数组也会发生变化
arr.unshift();
unshift 在数组开头添加一个或多个数组元素。
返回值也是新数组长度

删除 pop() 删除数组的最后一个元素
arr.pop();
其返回值为删除元素值，不跟参数

shift() 删除数组的第一个元素
arr.shift();
其返回值为删除元素值，不跟参数

作业：筛选数组 把超过2000的删除，剩余的放到新数组里面。

数组排序
反转数组
arr.reverse();
数组排序（冒泡排序）
arr.sort();

数组索引方法
arr.indexOf('blue'); 返回元素索引号，只返回首个元素。找不到返回-1.
lastIndexOf(); 从后往前查找.

数组去重

数组转换为字符串
toString()
arr.toString();
join(分隔符)
arr.join();

基本包装类型 把简单数据类型包装成复杂数据类型.
使得简单数据类型有了属性和方法.

字数串不可变
是里面的值不可变,地址改变,在内存中新开辟了一个内存空间.所以不要大量凭借字符串.

str.indexOf(要查找的字符,起始的位置)

根据位置返回字符
charAt(index) 根据位置返回字符
charCodeAt(index) 返回字符ASCII码
str[index] 获得指定位置处字符

concat('a','b'); 链接两个字符串
截取字符串
substr(start,length)
slice(start,end)
substring(start,end)

替换字符 replace ("被替换字符',;替换为的字符');
只替换第一个字符

split 把字符转换为数组 split ('分隔符')

toUpperCase() 转换为大写
toLowerCase() 转化为小写

JS简单数据类型 复杂数据类型
简单数据类型叫做 基本数据类型或者值类型
复杂数据类型又叫做引用数据类型
值类型:简单数据类型/基本数据类型,在存储时,变量种存储的是值本身,因此叫做值类型.
string number boolean undefined null
引用类型:复杂数据类型,在存储时变量中存储的仅仅是地址(引用),因此叫做引用数据类型
通过new关键字创建的对象(系统对象,自定义对象),如object,array,date等

堆栈
//1. 栈 由操作系统自动分配释放存放函数的参数值,局部变量的值等.其操作方式类似于数据结构中的栈,简单数据类型都存放在栈里面
//2. 堆 存储复杂数据类型,一般由程序员分配释放,若程序员释放,由垃圾回收机制回收.复杂数据类型存放在堆里面
内存分配
JS中没有堆栈的概念

传参
函数里的形参也可看做一个变量,当我们把一个值类型变量作为参数传给函数的形参时,其实是把变量在栈空间中的值复制一份给了形参,在方法内部对形参做任何修改,都不会影响到外部变量.
复杂数据类型是把地址给了形参.

## Web APIs

JS组成
JS基础 - ECMAScript
Web APIs - DOM 页面文档对象模型 BOM 浏览器对象模型

JS基础 不能做常用的网页交互效果 目的是为了JS后面的课程打基础

主要写页面交互功能
API application programming interface 应用程序编程接口 是一些预先定义的函数,目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力,而又无需访问源码,或理解内部工作机制的细节.
简单理解:API是给程序员提供一种工具,以便能更轻松地实现能过完成的功能.

Web API 是浏览器提供的一套操作 浏览器功能和页面元素的API (BOM和DOM)

现阶段主要针对浏览器讲解常用的API,主要针对浏览器做交互效果.

DOM document object model 是处理可扩展标记语言的标准编程接口

Dom中 一个页面就是一个文档 document 所有标签都是元素 element 网页中所有内容都是节点(标签\属性\文本\注释等),DOM中使用node表示

### 如何获取网页元素

DOM在实际开发中主要用来操作元素。方式：1. 根据ID获取 2. 根据标签名获取 3. 通过HTML5新增方法获取 4. 特殊元素获取
getElementByid()方法获取ID元素对象
可以返回匹配的特定的ID元素
文档页面从上往下加载，所以先得有标签，所以我们的script写在标签的下面
get获得elemet元素by通过 驼峰命名法
参数 字符串
document.getElementById("time");
返回的是一个DOM的element**对象**，如果没有，则返回null
返回值类型都是对象
console.dir('') 打印对象

根据标签名获取
使用getElementsByTagName() 返回带有标签名的对象集合
var lis = document.getElementsByTagName('li')
返回的是 获取过来元素对象的集合 以伪数组的形式存储的
console.log(lis[0]);
得到的是对象的集合，所以我们想要操作里面的元素就需要遍历。
得到的对象是动态的。
如果页面中只有一个li 返回的还是伪数组
如果页面中没有，返回的是未定义的伪数组
伪数组形式不能作为父元素 父元素必须是单个对象（必须指明是哪一个元素对象），获取的时候不包括父元素自己。

getElementsByClassName 根据类名获得某些元素的集合
querySelector('选择器'); 根据指定选择器返回第一个元素对象 **类.box ID #nav 标签 li**且只能得到第一个

querySelectorAll('选择器'); 根据指定选择器返回

获取特定元素 body html
获取body document.body;
获取html document.documentElement;

事件基础
事件概述
JS使得我们有能力创建动态页面，而事件是可以被JS侦测到的行为。
简单理解：触发--响应机制。
网页中每个元素都可以产生某些可以触发JS的事件，例如，我们呢可以在用户点击某一个按钮时产生一个事件，然后去执行某些操作。

事件由三个部分组成 事件源 事件类型 事件处理程序 也成为事件三要素。
事件源 事件被触发的对象 谁 按钮
var btn = document.getElementById('btn');
事件类型 如何触发 什么事件 比如 鼠标点击（onclick）还是鼠标经过 还是键盘按下
事件处理程序 通过一个函数赋值的方式 完成
btn.onclick = function(){
  alert('qiuxiang');
}

执行事件步骤
// 1. 获取事件源
var div = document.querySelector('div');
// 2. 绑定事件 注册事件
// div.onclick 
// 3. 添加事件处理程序
div.onclick = function() {
  console.log('I have been selected');
}

操作元素
DOM可以改变网页内容、结构和样式。

innerText 与 inerHTML区别
innerText 不识别html标签 ie 非标准 去除换行和空格
innerHTML 识别HTML标签 w3c标准 不去除换行和空格
这两个属性是可读写的，可以获取元素里里面的内容。

常用元素的属性操作
//1. innerText innerHTML src href id alt title 
zxy.onclick = function() {
  img.src = 'images/zxy.jpg';
}
idh.onclick = function() {
  img.src = 'image/ldh.jpg';
}

表单元素的属性操作
利用DOM可以操作如下表单元素的属性 
type value checked selected disabled 
this指函数调用者  

样式属性操作
可以通过JS修改元素的大小、颜色、位置等信息
//1. element.style 行内样式操作
//2. element.calssName 类名样式操作
注意：1. JS里面的样式采取驼峰命名法 2. JS修改style样式操作，产生的是行内样式，css权重比较高

display:none; 隐藏二维码
重点是HTML和CSS JS不难

循环精灵图
//1.首先精灵图要有规律 2. 核心：利用for循环，修改精灵图片的背景位置 bcg-p 
让索引号乘44 就是每个li的背景y坐标 index就是我们的y坐标
减少css写入次数。

显示隐藏文本框内容
表单两个事件 获得焦点 onfocus 失去焦点 onblur

this.className = 'change';
当前元素的类名改为了change
//1. 如果样式修改比较多，可以采取操作类名方式更改元素样式。2. class应为是个保留字，因此使用className来操作类名属性 3. className会直接更改元素的类名，会覆盖原先的类名。

操作元素是DOM核心内容
操作元素 ：操作元素内容 innerText innnerHTML
操作常见元素属性 src\href\title\alt等
操作表单元素属性 type\value\disabled等
操作元素样式属性 element.style className

### 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法。
//1. 所有元素全部清除样式 2. 给当前元素设置样式 

//1. 获取按钮元素 2. 利用for循环写入事件 得到的是伪数组 使用数组绑定事件

获取元素可嵌套
var imgs =documnt.querySelector('.baidu').querySelectorAll('img'); 父类 子类

鼠标事件 鼠标经过 onmouseover 鼠标立开 onmouseut

element.属性值
element.getAttribute('属性值')

第一种方法获得内置属性值 即元素本身自带的属性
第二种方法 主要获得自定义的属性

element.属性值=
element.setAttribute('属性','值')
第二种主要针对自定义属性

removeAttribute(属性) 移除属性

H5自定义属性
目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存在数据库中。

自定义属性容易引起歧义，不容易判断是元素的内置属性还是自定义属性
H5规定自定义属性data作为开头为属性名并且进行赋值。

节点操作
利用父子兄节点关系获取元素 逻辑性强 但是兼容性较差 这两种方式都可以获取元素节点，节点操作更加简单。
节点概述
一般节点至少拥有nodeType节点类型 nodeName 节点名称 nodeValue 节点值 这三个基本属性

节点层次
利用DOM树可以把节点划分为不同的层次结构，常用的是父子兄层次关系

子节点
ul.childNodes
文本节点nodeType是3 元素结点为1 
ul.children()

firstElementChild()
lastElementChild()
返回最后一个子节点

.nextSibling 下一个兄弟节点 包含元素节点或者文本节点
.previousSibling 上一个兄弟节点

.nextElementSibling 下一个兄弟元素节
.previousElementSibling 

创建节点和添加节点
document.creatElement('tagName');
添加节点
node.appendChild(child)
将一个节点添加到指定node是父级 child是子级

node.removeChild(child);

复制节点
node.cloneNode()
返回调用该方法的节点的另一个副本，也成为克隆节点/拷贝节点。
如何括号内容为空或者false，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点。

三种动态创建元素方式区别
//1. document.write() 是直接将内容写入页面的内容流，但是文档流执行完毕，则会导致页面全部重绘。
//2. innerHTML 
//3. document.createElement()
23两者效率不同 createElemnent效率较高。innerHTML使用拼接字符串 效率较低。
innerHTML是将内容写入某个DOM节点，不会导致页面全部重绘
innderHTML创建多个元素效率更高（不要拼接字符串，采取数组形式凭借），结构稍微复杂。createElement()创建多个元素效率较低，但是结构更加清晰。

DOM重点核心
通过DOM接口可以改变页面的内容、结构和样式
对于JS，为了能够使得JS操作HTML、JS有自己的DOM编程接口。
对于HTML，DOM使得HTML形成一棵DOM树，包含文档、元素、节点。
我们获取过来的DOM元素是一个对象（object），所以称为文档对象模型

针对元素的操作，主要有创建、增、删、改、查、属性操作、事件操作。

创建
document.write
innerHTML
createElement

增加
appendChild
insertBefore

删
removeChild

改
主要修改DOM元素属性，DOM元素的内容、属性、表单的值等
修改元素属性 src\href\title
修改普通元素内容 innerHTML innerText
修改表单元素 value type disabled
修改元素样式 style className

查
主要获取查询DOM元素
DOM提供的API方法：getElementById\getElementsByTagName 古老用法 不推荐
H5提供新方法 querySelector querySelectorAll 提倡
利用节点操作获取元素 父 parentNode 子 children 兄 previousElementSibling next ElementSibling 提倡

事件操作
给元素注册事件，采取事件源*事件类型=事件处理程序

事件高级技巧
注册事件概述
给元素添加事件，称为注册事件或者绑定事件。
两种方式：传统方式和方法监听注册方式

传统注册方式：
利用on开头的事件onclick
//<button onclick="alert('hi!~')"></button>
btn.onclick = function(){}
特点：注册事件的唯一性
同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数会覆盖掉前面注册的处理函数

方法监听注册方式
w3c 标准 推荐方式
addEventListener() 它是一个方法
IE9 之前的 IE 不支持此方法，可使用 attachEvent() 代替
特点：同一个元素同一个事件可以注册多个监听器
按注册顺序依次执行

addEventListener 事件监听方式 
eventTarget.addEventListener(type, listener[, useCapture])

eventTarget.addEventListener()方法将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。
该方法接收三个参数：
type：事件类型字符串，比如 click 、mouseover ，注意这里不要带 on
listener：事件处理函数，事件发生时，会调用该监听函数
useCapture：可选参数，是一个布尔值，默认是 false。学完 DOM 事件流后

attachEvent 事件监听方式 
eventTarget.attachEvent(eventNameWithOn, callback)
eventTarget.attachEvent()方法将指定的监听器注册到 eventTarget（目标对象） 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
该方法接收两个参数：
eventNameWithOn：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on
callback： 事件处理函数，当目标触发事件时回调函数被调用

删除事件（解绑事件）
删除事件的方式 
传统注册方式eventTarget.onclick = null;
方法监听注册方式
①	eventTarget.removeEventListener(type, listener[, useCapture]);
②	eventTarget.detachEvent(eventNameWithOn, callback);

DOM事件流
事件流描述的是从页面中接收事件的顺序。
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。比如我们给一个div 注册了点击事件：
DOM 事件流分为3个阶段： 

1. 捕获阶段
2. 当前目标阶段
3. 冒泡阶段

事件冒泡： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。
事件捕获： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。

我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡。 

事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程即 DOM 事件流。

1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。
2. onclick 和 attachEvent 只能得到冒泡阶段。
3. addEventListener(type, listener[, useCapture])第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。
4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡。
5. 有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave
6. 事件冒泡有时候会带来麻烦，有时候又会帮助很巧妙的做某些事件，我们后面讲解。

什么是事件对象
eventTarget.onclick = function(event) {}
eventTarget.addEventListener('click', function(event) {}） // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt

官方解释：event 对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态。
简单理解：事件发生后，跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象 event，它有很多属性和方法。
比如： 

1. 谁绑定了这个事件。
2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。
3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

事件对象的常见属性和方法
e.target 和 this 的区别：
this 是事件绑定的元素，这个函数的调用者（绑定这个事件的元素）
e.target 是事件触发的元素。

5.1 阻止事件冒泡的两种方式
事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点。事件冒泡本身的特性，会带来的坏处，也会带来的好处，需要我们灵活掌握。
阻止事件冒泡

事件委托
事件委托也称为事件代理， 在 jQuery 里面称为事件委派。
事件委托的原理
不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点。
以上案例：给 ul 注册点击事件，然后利用事件对象的 target 来找到当前点击的 li，因为点击 li，事件会冒泡到 ul 上， ul 有注册事件，就会触发事件监听器。
事件委托的作用
我们只操作了一次 DOM ，提高了程序的性能。

常用键盘事件
事件除了使用鼠标触发，还可以使用键盘触发。
1.如果使用addEventListener 不需要加 on
2.onkeypress 和前面2个的区别是，它不识别功能键，比如左右箭头，shift 等。
3.三个事件的执行顺序是： keydown --  keypress  --- keyup

注意：  onkeydown 和 onkeyup  不区分字母大小写，onkeypress 区分字母大小写。
在我们实际开发中，我们更多的使用keydown和keyup， 它能识别所有的键（包括功能键） Keypress 不识别功能键，但是keyCode属性能区分大小写，返回不同的ASCII值

BOM概述
BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。
BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。
BOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C，BOM 最初是Netscape 浏览器标准的一部分。

DOM
文档对象模型
DOM 就是把「文档」当做一个「对象」来看待
DOM 的顶级对象是 document
DOM 主要学习的是操作页面元素
DOM 是 W3C 标准规范

BOM
浏览器对象模型
把「浏览器」当做一个「对象」来看待
BOM 的顶级对象是 window
BOM 学习的是浏览器窗口交互的一些对象
BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差

BOM > DOM
window = document + location + navigation + screen + history

window 对象是浏览器的顶级对象，它具有双重角色。
1.它是 JS 访问浏览器窗口的一个接口。
2.它是一个全局对象。定义在全局作用域中的变量、函数都会变成 window 对象的属性和方法。
在调用的时候可以省略 window，前面学习的对话框都属于 window 对象方法，如 alert()、prompt() 等。注意：window下的一个特殊属性 window.name

窗口加载事件
window.onload = function(){}
或者 
window.addEventListener("load",function(){});

window.onload 是窗口 (页面）加载事件,当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等), 就调用的处理函数。
注意：
1.有了 window.onload 就可以把 JS 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数。
2.window.onload 传统注册事件方式 只能写一次，如果有多个，会以最后一个 window.onload 为准。
3.如果使用 addEventListener 则没有限制

document.addEventListener('DOMContentLoaded',function(){})
DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等。
Ie9以上才支持
如果页面的图片很多的话, 从用户访问到onload触发可能需要较长的时间, 交互效果就不能实现，必然影响用户的体验，此时用 DOMContentLoaded 事件比较合适。

调整窗口大小事件
window.onresize = function(){}
window.addEventListener("resize",function(){});
window.onresize 是调整窗口大小加载事件,  当触发时就调用的处理函数。注意：
1.只要窗口大小发生像素变化，就会触发这个事件。
2.我们经常利用这个事件完成响应式布局。 window.innerWidth 当前屏幕的宽度

两种定时器
window 对象给我们提供了 2 个非常好用的方法-定时器。
setTimeout()
setInterval()

window.setTimeout(调用函数, [延迟的毫秒数]);
setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。注意：
1.window 可以省略。
2.这个调用函数可以直接写函数，或者写函数名或者采取字符串‘函数名()'三种形式。第三种不推荐
3.延迟的毫秒数省略默认是 0，如果写，必须是毫秒。
4.因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。

setTimeout()  这个调用函数我们也称为回调函数 callback
普通函数是按照代码顺序直接调用。
而这个函数，需要等待时间，时间到了才去调用这个函数，因此称为回调函数。
简单理解： 回调，就是回头调用的意思。上一件事干完，再回头再调用这个函数。
以前我们讲的   element.onclick = function(){}   或者  element.addEventListener(“click”, fn);   里面的 函数也是回调函数。

停止 setTimeout() 定时器
window.clearTimeout(timeoutID)
clearTimeout()方法取消了先前通过调用 setTimeout() 建立的定时器。注意：
1.window 可以省略。
2.里面的参数就是定时器的标识符 。

window.setInterval(回调函数, [间隔的毫秒数]);
setInterval() 方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。注意：
1.window 可以省略。
2.这个调用函数可以直接写函数，或者写函数名或者采取字符串 '函数名()'  三种形式。
3.间隔的毫秒数省略默认是 0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。
4.因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。
5.第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次

window.clearInterval(intervalID);
clearInterval()方法取消了先前通过调用 setInterval()建立的定时器。注意：
1.window 可以省略。
2.里面的参数就是定时器的标识符 。

this
this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，一般情况下this的最终指向的是那个调用它的对象
现阶段，我们先了解一下几个this指向
1.全局作用域或者普通函数中this指向全局对象window（注意定时器里面的this指向window）
2.方法调用中谁调用this指向谁
3.构造函数中this指向构造函数的实例

JS 是单线程
JavaScript 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。这是因为 Javascript 这门脚本语言诞生的使命所致——JavaScript 是为处理页面中用户的交互，以及操作 DOM 而诞生的。比如我们对某个 DOM 元素进行添加和删除操作，不能同时进行。 应该先进行添加，之后再删除。
单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是： 如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞的感觉。

同步和异步
为了解决这个问题，利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程。于是，JS 中出现了同步和异步。
同步
前一个任务结束后再执行后一个任务，程序的执行顺序与任务的排列顺序是一致的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10分钟之后），再去切菜，炒菜。
异步
你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法，我们在烧水的同时，利用这10分钟，去切菜，炒菜。
他们的本质区别： 这条流水线上各个流程的执行顺序不同。

同步任务
同步任务都在主线程上执行，形成一个执行栈。
异步任务
JS 的异步是通过回调函数实现的。
一般而言，异步任务有以下三种类型:
1、普通事件，如 click、resize 等
2、资源加载，如 load、error 等
3、定时器，包括 setInterval、setTimeout 等
异步任务相关回调函数添加到任务队列中（任务队列也称为消息队列）。

JS 执行机制
1.先执行执行栈中的同步任务。
2.异步任务（回调函数）放入任务队列中。
3.一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。

locaton 对象
window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL 。 因为这个属性返回的是一个对象，所以我们将这个属性也称为 location 对象。

统一资源定位符 (Uniform Resource Locator, URL) 是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的 URL，它包含的信息指出文件的位置以及浏览器应该怎么处理它。
URL 的一般语法格式为：
protocol://host[:port]/path/[?query]#fragment http://www.itcast.cn/index.html?name=andy&age=18#link

navigator 对象包含有关浏览器的信息，它有很多属性，我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。
下面前端代码可以判断用户那个终端打开页面，实现跳转
if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS |Symbian|Windows Phone)/i))) {
  window.location.href = "";     //手机 } else {
    window.location.href = "";     //电脑 }

window 对象给我们提供了一个 history 对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的 URL。

## PC网页特效

元素偏移量 offset 系列
offset 翻译过来就是偏移量， 我们使用 offset 系列相关属性可以动态的得到该元素的位置（偏移）、大小等。
获得元素距离带有定位父元素的位置
获得元素自身的大小（宽度高度）
注意： 返回的数值都不带单位

offset 与 style 区别

offset 可以得到任意样式表中的样式值
offset 系列获得的数值是没有单位的
offsetWidth 包含padding+border+width
offsetWidth 等属性是只读属性，只能获取不能赋值
所以，我们想要获取元素大小位置，用offset更合适

style 只能得到行内样式表中的样式值
style.width 获得的是带有单位的字符串
style.width 获得不包含padding和border 的值
style.width 是可读写属性，可以获取也可以赋值
所以，我们想要给元素更改值，则需要用style改变

获得元素距离带有定位父元素的位置
获得元素自身的大小（宽度高度）

元素可视区 client 系列
client 翻译过来就是客户端，我们使用 client 系列的相关属性来获取元素可视区的相关信息。通过 client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。

元素 scroll 系列属性
scroll 翻译过来就是滚动的，我们使用 scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。

页面被卷去的头部
如果浏览器的高（或宽）度不足以显示整个页面时，会自动出现滚动条。当滚动条向下滚动时，页面上面被隐藏掉的高度，我们就称为页面被卷去的头部。滚动条在滚动时会触发 onscroll 事件。

他们主要用法：
1.	offset系列 经常用于获得元素位置    offsetLeft  offsetTop
2.	client 经常用于获取元素大小  clientWidth  clientHeight
3.	scroll 经常用于获取滚动距离  scrollTop  scrollLeft
4.	注意页面滚动的距离通过 window.pageXOffset  获得

mouseenter 和mouseover的区别

mouseenter 鼠标事件
	当鼠标移动到元素上时就会触发 mouseenter 事件
	类似 mouseover，它们两者之间的差别是
	mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。 mouseenter  只会经过自身盒子触发
	之所以这样，就是因为mouseenter不会冒泡
	跟mouseenter搭配 鼠标离开 mouseleave  同样不会冒泡

动画函数封装
动画实现原理 
核心原理：通过定时器 setInterval() 不断移动盒子位置。实现步骤：
1.	获得盒子当前位置
2.	让盒子在当前位置加上1个移动距离
3.	利用定时器不断重复这个操作
4.	加一个结束定时器的条件
5.	注意此元素需要添加定位，才能使用element.style.left

注意函数需要传递2个参数，动画对象和移动到的距离。

动画函数给不同元素记录不同定时器 
如果多个元素都使用这个动画函数，每次都要var 声明定时器。我们可以给不同的元素使用不同的定时器（自己专门用自己的定时器）。
核心原理：利用 JS 是一门动态语言，可以很方便的给当前对象添加属性。

缓动效果原理
缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来思路：
1.	让盒子每次移动的距离慢慢变小，速度就会慢慢落下来。
2.	核心算法： (目标值 - 现在的位置 )   /   10    做为每次移动的距离 步长
3.	停止的条件是： 让当前盒子位置等于目标位置就停止定时器
4.	注意步长值需要取整

动画函数多个目标值之间移动 
可以让动画函数从 800 移动到 500。
当我们点击按钮时候，判断步长是正值还是负值

1.	如果是正值，则步长 往大了取整
2.	如果是负值，则步长 向小了取整

动画函数添加回调函数 
回调函数原理：函数可以作为一个参数。将这个函数作为参数传到另一个函数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做回调。
回调函数写的位置：定时器结束的位置。

节流阀
防止轮播图按钮连续点击造成播放过快。
节流阀目的：当上一个函数动画内容执行完毕，再去执行下一个函数动画，让事件无法连续触发。核心实现思路：利用回调函数，添加一个变量来控制，锁住函数和解锁函数。 
 开始设置一个变量 var flag = true;
If(flag) {flag = false; do something}       关闭水龙头
利用回调函数 动画执行完毕， flag = true     打开水龙头