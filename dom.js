const vnodeType = {
    HTML: 'HTML',
    TEXT: 'TEXT',
    
    COMPONENT: "COMPONENT",
    CLASS_COMPONENT: "CLASS_COMPONENT"
}

const childType = {
    EMPTY: 'EMPTY',
    SINGLE: 'SINGLE',
    MULTIPLE:'MULTIPLE'
}
//1.创建虚拟dom
function createElement(tag, data, children=null) {
    let flag;
    if (typeof tag == "string") {
        flag = vnodeType.HTML;
    } else if(typeof tag == "function") {
        flag = vnodeType.COMPONENT;
    } else {
        flag = vnodeType.TEXT;
    }
    let childrenFlag;
    if (children == null) {
        childrenFlag = childType.EMPTY;
    } else if (Array.isArray(children)) {
        let len = children.length;
        if (len === 0) {
            childrenFlag = childType.EMPTY;
        } else {
            childrenFlag = childType.MULTIPLE;
        }
    } else {
        //其他情况文本
        childrenFlag = childType.SINGLE;
        children = createTextNode(children + '');
    }
    // 返回vnode
    return {
        flag, //vnode 类型
        tag, // 标签 div 文本没有tag 组件就是函数
        data,
        children,
        childrenFlag
   }
}

//2.渲染
function render() {
    
}

//新建文本类型的vnode
function createTextNode() {
    return {
        flag: vnodeType.TEXT,
        tag: null,
        data: null,
        children: text,
        childrean: childType.EMPTY
    } 
}

