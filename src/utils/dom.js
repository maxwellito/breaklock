/**
 * Set of tools to generate quickly DOM elements
 */

var dom = {

  /**
   * Most advanced method (of this object) to
   * create a DOM element
   * @param  {String}        nodeName Node type to create
   * @param  {Object|String} props    Key/value of attributes to set
   * @param  {Array|String}  content  Text content if string or childnodes if array to include
   * @return {DOMElement}             Node generated
   */
  create: (nodeName, props = {}, content = null) => {
    var node

    // Create the node
    if (dom.SVG_ELEMENTS.indexOf(nodeName) === -1)
      node = document.createElement(nodeName)
    else
      node = document.createElementNS(dom.SVG_NAMESPACE, nodeName)

    // Set class or attributes
    if (props.constructor === String)
      node.setAttribute('class', props)
    else
      for (let propName in props)
        node.setAttribute(propName, props[propName])

    // Set content or child
    if (content instanceof Array)
      for (let i = 0; i < content.length; i++) {
        node.appendChild(content[i])
      }
    else
      node.textContent = content

    return node
  },

  /**
   * Generate SVG icon dom, using 'use' tags
   * and the definitions in the index.html
   * @param  {String} name Icon name (cf. definitions in index.html)
   * @return {SVGDOMElement}
   */
  icon: (name) => {
    let use = dom.create('use')
    use.setAttributeNS(dom.XLINK_NAMESPACE, 'href', '#icon-' + name)
    return dom.create('svg', {class: 'icon'}, [use])
  },

  /**
   * Clear the content of an element
   * @param  {DOMElement} element Element to clear
   */
  clear: (element) => {
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      element.childNodes[i].remove()
    }
  },

  SVG_NAMESPACE: 'http://www.w3.org/2000/svg',
  XLINK_NAMESPACE: 'http://www.w3.org/1999/xlink',
  SVG_ELEMENTS: ['svg', 'g', 'circle', 'line', 'path', 'use', 'rect']
}

export default dom
