/**
 * Set of tools to generate quickly DOM elements
 */

var dom = {

  /**
   * Most advanced method (of this object) to
   * create a DOM element
   * @param  {string} nodeName   Node type to create
   * @param  {string} content    Text content to include
   * @param  {object} attributes Key/value of attributes to set
   * @param  {array}  childrens  List of childrem to appendChild
   * @return {DOMElement} Node generated
   */
  create: (nodeName, content = null, attributes = {}, childrens = []) => {
    var node
    if (dom.SVG_ELEMENTS.indexOf(nodeName) === -1) {
      node = document.createElement(nodeName)
    }
    else {
      node = document.createElementNS(dom.SVG_NAMESPACE, nodeName)
    }

    if (content) {
      node.textContent = content
    }

    for (let attrName in attributes.length) {
      node.setAttribute(attrName, attributes[attrName])
    }

    for (let i = 0; i < childrens.length; i++) {
      node.appendChild(childrens[i])
    }

    return node
  },

  /**
   * Stripped down method to make DOM Elements
   * @param  {string} nodeName  Node type to create
   * @param  {string} className Class to set
   * @return {DOMElement} Node generated
   */
  quickNode: (nodeName, className) => {
    return dom.create(nodeName, null, {class: className})
  },

  SVG_NAMESPACE: 'http://www.w3.org/2000/svg',
  SVG_ELEMENTS: ['svg', 'g', 'circle', 'line', 'path']
}

export default dom
