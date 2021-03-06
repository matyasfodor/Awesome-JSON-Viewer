## Awesome JSON Viewer

A Chrome browser extension to visualize JSON response in awesome Tree and Chart view with great user experience and options.

---

# ⚠️ IMPORTANT!!!  JSON Viewer Awesome is no longer owned, maintained and developed by me or from this repository.

### But no worries, now I am working hard to publish a new extension similar to that but with more useful and powerful features. Will be posted here.
___

[![](https://raw.githubusercontent.com/rbrahul/Smart-Webpage-Ruler/master/images/chrome.png)](https://chrome.google.com/webstore/detail/awesome-json/iemadiahhbebdklepanmkjenfdebfpfe)

## TODO
 * ✅ Link / cheat sheet for JSONpath syntax
 * ✅ Error message display
 * [ ] (React-based JSON visualizer ?)
 * [ ] Autocomplete for fields

## Features

* ✅ Beautify JSON response from API
* ✅ Visual representation of JSON
* ✅ Depth traversing of JSON property using breadcrumbs
* ✅ Write custom JSON in Input area
* ✅ Import local JSON file
* ✅ Download JSON file using Context Menu
* ✅ URL filters
* ✅ Change Themes
* ✅ Custom CSS
* ✅ Cool User Interface.
* ✅ Copy property and value
* ✅ Access JSON in your console using only `json` keyword

## Screen Shots
![Awesome JSON](https://raw.githubusercontent.com/rbrahul/Awesome-JSON/master/awesome-json-slideshow.gif "Awesome JSON an awesome Chrome extension to assist development")

[Awesome JSON View Online Editor with very limited features](https://rbrahul.github.io/Awesome-JSON-Viewer/# "Awesome JSON Viewer")



## Known Issue/Expected Behaviour:

 * Custom CSS/Style, Theme, Collapsible settings are not applicable on **chrome-extension://iemadiahhbebdklepanmkjenfdebfpfe/index.html** page as **chrome-extension://\*** doesn't allow **conentScript** to be executed.



## Change Log:

### Version 1.1.4 on  24-05-2020
**New Feature**
  * Download as a JSON file using Context Menu.
  * Importing Local JSON file in the Editor - (Contributed by [withT](https://github.com/whthT))

---

### Version 1.1.3 on  22-05-2020
**Bug Fixed**
  * Style is affecting other websites which does not event contain JSON.
---
### Version 1.1.2 on  21-05-2020
**Bug Fixed**
  * Index.html page is not loading because /static/js/main.js and /static/css/main.css was missing.
 ---
### Version 1.1.1 on  20-05-2020
**New Features:**
  * Added option page to control UI and experience.
  * Change Theme - Now we have Dark and MDN Light initially (Many more will come in future)
  * Write your custom CSS to style it.
  * You can toggle expanding childrens in trees.
  * URL blocking to bypass on listed websites.

**Bug Fixed:**
* Color of values were not that visible in the tree view.
* Parsing error if the page used to contain whitespace with JSON

**Important Update:**
> Removed few permissions requests to install and use this extension.
---

**Developed with ♥ using ReactJS, Jquery and D3**
