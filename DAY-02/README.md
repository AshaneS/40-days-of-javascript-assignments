<!-- scernario 1 - script in the <head> tags -->

# scernario 1 - script in the <head> tags

- the browser will parse html line by line and see the script and it will stop parsing html and execute script.js.

## output

### Browser Console

- console.log("Hello, JavaScript!");
- console.log("Welcome to 40 Days of JavaScript!");

### on the page

- Check the browser console for a message!

<!-- scernario 2 - script at the end of the body tag -->

# scernario 2 - script at the end of the body tag

- the browser will parse html line by line and reaches the script and it will stop parsing html and execute script.js.
- script runs console.log() messages
- then runs the document.write(). since the html parsing has not yet fully completed, this will print "Check the browser console for a message!"

## output

### Browser Console

- console.log("Hello, JavaScript!");
- console.log("Welcome to 40 Days of JavaScript!");

### on the page

- Check the browser console for a message!

<!-- scernario 3 - script with async -->

# scernario 3 - script with async

- The browser will download the HTML and script simultaneously, but once the script is downloaded, it will execute immediately, blocking further HTML parsing until the script finishes executing.

## output

### Browser Console

- console.log("Hello, JavaScript!");
- console.log("Welcome to 40 Days of JavaScript!");
- ### on the page
- nothing!

## My Investigations

- the HTML parsing might finished before the script download. so when the script is exceuted, it runs the line, document.write()
- since document.write() has called after the parsing has done, it cannot append to the existing document. so a blank page

<!-- scernario 4 - script with defer -->

# scernario 4 - script with defer

- the browser will download the html and script simultaniously but the script will execute after html has parsed.

## output

### Browser Console

- console.log("Hello, JavaScript!");
- console.log("Welcome to 40 Days of JavaScript!");
- ### on the page
- nothing!

  ## My Investigations

- the HTML parsing finished before the script execution. then the script is exceuted and runs the line,
  document.write("Check the browser console for a message!").
  since document.write() has called after the parsing has done, it cannot append to the existing document. so a blank page
