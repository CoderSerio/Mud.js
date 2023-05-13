export const createCommentNode = (node,oldnode) => {
   if(oldnode){
    oldnode.parentNode ? {}:node.parentNode.replaceChild(oldnode, node)
    return oldnode;
   }
   else{
    const cmt = document.createComment('m-if');
    node.parentNode.replaceChild(cmt, node);
    return cmt;
   }
};
export const returnNode = (node,oldnode)=>{
    oldnode.parentNode.replaceChild(node, oldnode);
}

export const addifNodeList = (node,name,value)=>{
    let nodeList = []
    nodeList.push({
        node:node,
        name:name,
        value:value
      })
    function add(node) {
    const { name, value } = node.nextElementSibling.attributes[0]
    if(name==="else-if"){
      nodeList.push({
        node:node.nextElementSibling,
        name:name,
        value:value
      })
      return add(node.nextElementSibling)
    }else if(name==="else"){
        nodeList.push({
            node:node.nextElementSibling,
            name:name,
            value:value
          })
      return nodeList
    }
    else{
      return nodeList
    }
    }
    return add(node)
    
  }