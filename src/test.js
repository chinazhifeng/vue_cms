//这是Node中向外暴露成员的形式
/* module.exports={} */

//在ES6中，使用export default和export向外暴露成员

var info={
    name:'zs',
    age:20
}


/* export default向外暴露的成员，可以使用任意变量接收 
在一个模块中，export default只允许向外暴露一次
在一个模块中，可以使用export default 和export向外暴露成员
*/
export default info

/* 使用export向外暴露的成员，只能使用{}的形式接收，
    export可以向外暴露多个成员，同时如果某些成员，在import时，不需要，则可以不在{}中定义
    使用export导出的成员，必须严格按照导出时候的名称，使用{}按需接收
    使用exprot导出的成员，如果想改名称，使用as 起别名
*/
export var titile='和哈哈'
export var content='i艰苦艰苦艰苦艰苦就'
