/**
 * Set of tools to generate quickly DOM elements
 */

var dom = {

  /**
   * Most advanced method (of this object) to
   * create a DOM element
   * @param  {string} nodeName   Node type to create
   * @param  {object} attributes Key/value of attributes to set
   * @param  {*}      content    Text content if string or childnodes if array to include
   * @return {DOMElement} Node generated
   */
  create: (nodeName, attributes = {}, content = null) => {
    var node
    if (dom.SVG_ELEMENTS.indexOf(nodeName) === -1) {
      node = document.createElement(nodeName)
    }
    else {
      node = document.createElementNS(dom.SVG_NAMESPACE, nodeName)
    }

    for (let attrName in attributes) {
      node.setAttribute(attrName, attributes[attrName])
    }

    if (content instanceof Array) {
      for (let i = 0; i < content.length; i++) {
        node.appendChild(content[i])
      }
    }
    else {
      node.textContent = content
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
    return dom.create(nodeName, {class: className})
  },

  SVG_NAMESPACE: 'http://www.w3.org/2000/svg',
  SVG_ELEMENTS: ['svg', 'g', 'circle', 'line', 'path']
}

export default dom
