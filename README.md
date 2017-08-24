<h1>Password Rules API</h1>
<hr>
<p>
  This is the API used by the Password Rules website (Link provided below). The url for the API is:
  <br><br>
  <b>api.password-rules.myrandomcode.com/(route)</b>
  <br><br>
  This is only the current implementation of the API. It is subject to change over time and more routes to be added. It is being worked on in parallel
  to the website and the chrome extension. Links to the other two projects are provided below.
</p>
<h2>Routes</h2>
<hr>
<h3><b>GET</b></h3>
<p>
  <h4>/site</h4>
  Grabs all the site entries from the database.
  <br>
  <h4>/site/:siteName</h4>
  <i>siteName</i> - The name of website which entry should be grabbed from the database.
  <br><br>
  Grabs the entry matching the site name provided.
  <h4>/search/:query</h4>
  <i>query</i> - The search string to query the database with.
  <br><br>
  Returns all sites which site name contains the query string. For example, searching "<i>game</i>" will return the entry for gamefaqs.com
  or any other entry that might contain "<i>game</i>" in their site name.
  <br>
  <h4>/valid/:siteName</h4>
  <i>siteName</i> - The name of the site to check.
  <br><br>
  Pings the website provided to see if it is valid and alive. Returns an object with a key <i>alive</i> with a value of true or false, indicating if
  the website is alive or not.
</p>
<h3><b>POST</b></h3>
<p>
  <h4>/site</h4>
  Adds a new site entry to the database. This route expects a JSON object in the body of the request. The format of the JSON object should be as follows:
  <br><br>
  <i>site</i> - A string indicating the name of the web site.
  <br>
  <i>rules</i> - An array of rule objects.
  <br><br>
  Rule objects have the following format.
  <br><br>
  <i>rule</i> - The requirement for the rule. For example, "Minimum"/"Maximum"/"Range"/"No".
  <br>
  <i>category</i> - The category that the rule pertains to. For example, "Letters", "Numbers", "Characters" and more.
  <br>
  <i>quantity</i> - An array of size two that contains the minimum and/or maximum amounts for the rule. For example, a value of
  <br>
  [8, 30] - Range with a minimum of 8 and a maximum of 30.
  <br>
  [undefined, 16] - A maximum of 16.
  <br>
  [1, undefined] - A minimum of 1.
  <br><br>
  The "No" rule does not utilize the quantity array. So any values in the array will be ignored even if provided.
</p>
<hr>
<p>
  <b>PUT</b> and <b>DELETE</b> routes have not been implemented yet. They will be worked on in parallel with the website and the chrome extension.
  When a feature is implemented in one of the parts, it will be implemented throughout the stack. If you want to learn more about the other parts
  of the project, follow the links below.
  <br><br>
  Want to check out the web front end for Password Rules? Click <a href="https://github.com/mingtungwong/password-rules-web-frontend">here</a>.
  <br>
  Interested in the chrome extension? Click <a href="https://github.com/mingtungwong/password-rules-chrome-extension">here</a>.
</p>
