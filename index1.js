/*
  DOM Manipulation with Javascript:
  

  getElementById <-- Works off the ID and the ID only
  querySelector <-- Works off the CSS rules for selecting items

  Example:
    const responseDiv = document.querySelector('#responseDiv');

  After you have the item:
    Changing the text within: innerHTML, innerText, value
    Change the attributes using properties like className, classList, and some have href/src attributes
    Changing the style: .style properties, as well as cssText
    Add events/interactivity to our dom elements using addEventListener
    Add children to the item using appendChild

  Create elements:
    document.createElement('Element Name')
    document.createElement('div')
    document.createElement('img')
    document.createElement('a')

  Form validation
    test that your data is valid before sending it to a backend/API



  HTML Attribute names vs using them in Javascript
    Some HTML attributes already have pre-existing meanings in Javascript so cannot be used by the same name when working with them in Javascript

    Some examples:
      htmlFor instead of for
      className instead of class
      
    Another way to get around this is to use .setAttribute('attribute name', 'attribute value')

    so to set a class of container:
    element.setAttribute('class', 'container');

    Or to set the for attribute on a label:
    element.setAttribute('for', 'inputField');





*/
