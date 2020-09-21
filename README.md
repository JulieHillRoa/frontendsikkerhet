# Frontend security
This is a collection of exercises to learn about front-end security.

## Basic setup
Before we get started with the tasks, we will prepare a minimal setup that we can use to see security vulnerabilities in practice.

Make sure you have node and npm installed (https://nodejs.org/en/download/) and clone this project:

```
git clone https://github.com/JulieHillRoa/frontendsikkerhet.git
```

Install the npm packages and start the application:

```
cd frontendsikkerhet
npm install
npm start
```

[Presentation can be found here](https://docs.google.com/presentation/d/12WlGY49Ycj4tZOwHrRAaDTMVd8okkMXZCL7BHFW7XOM/edit?usp=sharing)

## Development of modern web applications
In this section, you will explore some of the risks involved in developing a web application.
The tasks will be based on React, but the security issues are not necessarily restricted to the React library.

Just by using a library like React, we have prevented many common XSS attacks. Several measures are taken to prevent attacks,
such as escaping string variables in views by default.
```js
HTML: 
<button onclick="onButtonClick()">Klikk her</button>

JSX:
<button onClick={ onButtonClick }>Klikk her</button>
```

We will now go through 5 tasks related to security risks that web developers should know about.

### 🏆 Assignments
The code can be found in `src / webapp`. Use Chrome for these tasks:

1. Open [/webapp/](http://localhost:3000/webapp) in your browser, click on Oppgave1 and follow the instructions.
2. Open [/webapp/](http://localhost:3000/webapp) in your browser, click on Oppgave2 and follow the instructions. 
3. Open [/webapp/](http://localhost:3000/webapp) in your browser, click on Oppgave3. Click the link and follow the instructions.
Look at the source code in `/webapp/Oppgave3.jsx` – here it's your job to fix the security hole.
4. Open [/webapp/](http://localhost:3000/webapp) in your browser, click on Oppgave4 and follow the instructions. 
5. Open [/webapp/](http://localhost:3000/webapp) in your browser, click on Oppgave5. 
Try to see if you can get the page to execute a snippet `alert("Hacked")`.

<details>
  <summary>:bulb: Hint 1 </summary>
  
  Do not expect the alert code to be executed until the link is clicked. Is there any way to run javascript code by manipulating an a tags href attribute?
  
</details>
<details>
  <summary>🚨 Solution 1 </summary>
  Enter `javascript:alert("Hacked!")` into the `href` attribute.
</details>
<br/>
<details>
  <summary>:bulb: Hint 2 </summary>
  
  Observe that [dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml) is used to
  render user provided content. 

  Fortunately, script tags will not be executed if you insert them with this attribute. That was the first thing I tried too.
  But there are attributes that can execute code when certain events happen, could that be possible in this case?
</details>
<details>
  <summary>🚨 Solution 2 </summary>
  
  Enter `<img onerror=alert("Hacked!") src="feil">` into the text area.
</details>
<br/>
<details>
  <summary>:bulb: Hint 3 </summary>
  Here you use target = "_ blank" to open the link in a new tab. This gives the website you are linking to the opportunity
  to run code on the page that linked to it using the window.opener method. Is it possible to define the relationship
  between the page and the website it is linked to in a way that prevents this feature?
</details>
<details>
  <summary>🚨 Solution 3 </summary>
  
  The `rel` attribute defines the relationship between a linked resource and the current document. To disable the `window.opener`
  feature, you can add `rel="noopener"` to the `a` tag. In addition to `noopener`, you may want to look into other values such as
  `noreferrer` to further restrict the relationship.

  Ref: https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#tabnabbing
</details>
<br/>
<details>
  <summary>:bulb: Hint 4.1 </summary>
  
  Eval is used to extract the values of an object.

  
  ```js
  const getSvaret = () => {
      input && setSvar(eval('gjest.' + input ))
  };
  ```

  Can you submit something in the input field so that it continues to read code after it has found
  or not found the guest's property?
</details>
</details>
<br/>
<details>
  <summary>:bulb: Hint 4.2 </summary>
  
  [Logical operators in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) are executed from left to right. 
</details>
<details>
  <summary>🚨 Solution 4 </summary>
  
If you choose a property that exists, you use the AND operator: `navn && alert("hacked!")`, otherwise you can use the OR operator: `hvaduvil || alert("hacked!")`.
    
  Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
</details>
<br/>
<details>
  <summary>:bulb: Hint 5 </summary>
  
  It looks like the text field is loading data from `localStorage`. The text field is also very dynamic, it almost looks like you
  can submit completely arbitrary props. The developer is very proud of a certain feature, would it be possible to render a `div`
  instead of an input field? If so, maybe you can borrow some tricks from previous tasks?
</details>
<details>
  <summary>🚨 Solution 5 </summary>

There is no validation of props stored in local storage, we can use the dev console to save the following in local storage:

```json
{  
    "value": "Oops",
    "element": "div",
    "dangerouslySetInnerHTML": { "__html": "<img src='asdfasdf' onerror='alert(\"Hacked\")'>" }
}
```

Ref. https://medium.com/dailyjs/exploiting-script-injection-flaws-in-reactjs-883fb1fe36c1
</details>

### Bonus assignment 1
Go through one of your own projects and see if you can find any of these vunlerabilities.

### Bonus assignment 2
Go to [Hacker101](https://ctf.hacker101.com/ctf) and work with a CTF appropriate for your level (select assignments marked with skills *web*).


**Kilder:**

- [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) 
- [CSRF cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#javascript-guidance-for-auto-inclusion-of-csrf-tokens-as-an-ajax-request-header)
- [HTML5 security cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html)


## NPM og tredjepart biblioteker

This section is structured so that each step will give you more information that eventually will lead you to two vulnerabilities that we have added to the application. Both holes allow users to perform stored XSS attacks. Keep track of your time, do not spend too long on step 1 or any other step, jump to the next step if you get stuck. Each step can be regarded as a hint, making the task of finding these vulnerabilities easier as you progress.

### 🏆 Assignments

1. Open [/npm/] (http://localhost:3000/npm) in your browser, try out the solution, experiment to see if you can trick the site to run a code snippet
2. Browse the source code at `/src/npm /` to find potential security holes
3. Run `npm outdated` to see if there are packages that should be updated (do not update the packages)
4. Run `npm audit` to see if get any useful information that may help you carry out an XSS attack.
5. Go to https://snyk.io/vuln/ and search for the packages used in this project (or install `snyk` and run` snyk monitor`)
6. Fix the issaues you found and activate the audit so that it runs at `npm install`

<details>
  <summary>:bulb: Hint 1</summary>

  You can use the information from  https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 to inject HTML code into the message field.
</details>

<details>
  <summary>:bulb: Hint 2</summary>

It is possible to add a field (e.g. `href`) to the prototype of all objects using a weakness in lodash. Click on the link you get from `npm audit` to see
an example. 
</details>

<details>
  <summary>:bulb: Hint 3</summary>

It is rumored that the backend of this application is lacking a good validation strategy. It is allowed to call the API from using curl (or a gui-tool like postman).
</details>

<details>
  <summary>🚨 Solution 1</summary>

Pakke: markdown-to-jsx

Find reported vulnerabilities https://snyk.io/vuln/SNYK-JS-MARKDOWNTOJSX-174624 .

When this task was first created, the vulnerability was not reported by `npm audit` but it was available at snyk. One of the
main points of this task was that vulnerabilites may not be detected by your preferred vulnerability database, even if they are
reported elsewhere. If you worked on this task before `npm` updated their databse, `npm audit` would not have given you
any useful information.

Solution: Enter `<SCRIPT>alert(1)</SCRIPT>` into the text area.
</details>

<details>
  <summary>🚨 Solution 2</summary>
Pakke: lodash

Find reported vulnerability using `npm audit` and use prototype pollution to add the `href` attribute to all objects.

```Shell
    curl 'http://localhost:3000/api/message' \
        --data '{"content": "Trykk på hjelp","constructor":{"prototype":{"href": "javascript:alert(1)"}}}' \
        --header 'Content-Type: application/json'
```
</details>

### Bonus assignment 1

Run `npm audit` on your own project and evaluate the result.

### Bonus assignment 2

Search for packages at https://snyk.io/vuln/ to see if you find something exciting.