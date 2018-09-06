/*
  AJAX/XHR/JSON Review:

  JSON:
    Javascript Object Notation

    Follows most of the same rules for building javascript objects

    The differences: 
      In JSON, property names/keys must go in quotations
      Strings should always be in double quotes, for consistency across languages

    Why does JSON exist?
      To provide a standardized method of passing data between applications

    Example of Javascript object and its JSON representation:

    Javascript:
    {
      name: 'Jeff Patton',
      hobbies: ['programming', 'music', 'games'],
      occupation: 'web developer'
    }

    JSON:
    {
      "name": "Jeff Patton",
      "hobbies": ["programming", "music", "games"],
      "occupation": "web developer"
    }

    To convert from an Object/Array to a JSON String, use JSON.stringify(objectToConvert)

    let me = {
      name: 'Jeff Patton',
      hobbies: ['programming', 'music', 'games'],
      occupation: 'web developer'
    }

    let jsonMe = JSON.stringify(me); // This will give us a string representation of the object

    To convert from JSON to a javascript array/object, user JSON.parse(jsonString)

    let meCopy = JSON.parse(jsonMe);


  XHR: XMLHttpRequest

    A wrapper for making http requests

    HTTP: HyperText Transfer Protocol
    Http is a web standard to standardize how web applications transfer data

    HTTP Messages:
      Consists of the content as well as some additional fields to let the servers know how to handle the message

      Methods:
        GET - Retrieve data
        POST - Create a record WITH data
        PUT - Update a record with new data
        DELETE - Remove a record

      Status Codes:
        1xx (Informational): The request was received, continuing process
        2xx (Successful): The request was successfully received, understood, and accepted
        3xx (Redirection): Further action needs to be taken in order to complete the request
        4xx (Client Error): The request contains bad syntax or cannot be fulfilled
        5xx (Server Error): The server failed to fulfill an apparently valid request

        200: OK, Everything went fine
        400: Bad Request, something was wrong with what you provided
        403: Forbidden, you don't have permission to do that
        404: Didn't find what you're looking for
      

  XHR/XMLHttpRequest
    The vanilla way to send HTTP requests in javascript

    The XMLHttpRequest object is a wrapper for all of the methods relating to the message

    4 Steps:
      Create the object
      Define the handler for the request
      Open the request
      Send the request

    const xhr = new XMLHttpRequest();

    // readyState has values from 0-4 depending on the current state in the request lifecycle
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4 && xhr.status === 200){
        // do something with received data
      }else if(xhr.readyState === 4 && xhr.status >= 400){
        // let user know the response failed
      }
    }

    // open takes 3 parameters:
    // The the HTTP method, the URL, and whether it should be synchronous or asynchronous as a boolean
    xhr.open(method, url, async)

    // send takes 0+ parameters, you can add in additional content with a body in the parameters
    xhr.send();

    // grab user array from jsonplaceholder:

    const xhr = new XMLHttpRequest();
    const userArray = [];
    xhr.onreadystatechange = function(){
	    if(xhr.readyState === 4 && xhr.status === 200){
	    	userArray = JSON.parse(xhr.response);
       }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.send();


*/
