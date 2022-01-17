export default function createEl(name, options={}, ...children ){
  const dom = document.createElement(name);

  for(let child of children){
    if(typeof child === 'string'){
      dom.appendChild(document.createTextNode(child))
    } else {
      dom.appendChild(child)
    }
  }

  if(options?.attrs){
    for(let attr of Object.keys(options?.attrs)){
      dom.setAttribute(attr, options.attrs[attr])
    }
  }

  return dom;
}
