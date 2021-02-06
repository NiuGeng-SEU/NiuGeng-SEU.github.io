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

## 课程记录

210201-JS导读 - P5
210202-字符串长度以及拼接 -P26
210203-switch ifelse区别 -P68
210204-通过榨汁机看透函数 -P125
210205-函数的两种声明方式 -P133
210206-倒计时 -P168

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