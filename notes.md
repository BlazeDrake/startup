# Server info:
IP: 34.233.139.189

URL: http://cs260-profile.click/

## Commands to access
cd ~

ssh -i [file path to keys, format of ~/keys/production.pem] ubuntu@34.233.139.189


## Deploy commands

cd ~/source/repos/CS_BYU/simon-html


Simon:
./deployService.sh -k <yourpemkey> -h cs260-profile.click -s simon

Startup:
 cd C:/Users/blaze/source/repos/CS_BYU/startup

 ./deployService.sh -k <yourpemkey> -h cs260-profile.click -s startup


## startup notes

Random html tags:
`<center>`: deprecated, but used for formatting in the center when you have no css like me!
`<button>`: For button like elements. Useful for placeholders

html startup notes:
* Helpful to clear cache when editing icons

CSS startup notes:
Bootstrap docs: https://getbootstrap.com/docs/5.2/getting-started/introduction/

Demo codepen: https://codepen.io/leesjensen/pen/JjZavjW

Tag to use bootstrap:  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">`


React notes:
* Will need to make sure it's installed
* Also install vite
* Once boht are installed with npm, use npm run dev to test it locally



## Class notes

### Linux commands
* echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual

### Essentials
	• Environments:
		○ Development (localhost)
			§ Do all testing here
			§ Test it here, and then push it once it's good and working
		○ Github
			§ Save your code here regularly
			§ Version control is the big thing this year
			§ Make lots of small pushes to make sure they know its yours
		○ Production (your domain)
			§ Don't change things here
	• There are other methods of development
		○ Fancier with multiple staging
		○ We won't worry about that in this class
		○ We're using the simplest good practice you can
	• Learning web services:
		○ It's important to be able to learn the console

### Github & servers
	• Github:
		○ Helpful to know both command line and git apps
		○ Commit often
			§ They must represetn all work
		○ Large binary files
			§ Those eat up lots of space, and are pushed every time
			§ Use .gitignore for that
		○ Sensitive information
			§ This is very important
			§ Don't put sensitive information in github
			§ If you do upload stuff, you need to delete the repo
			§ It can be easy for people to find that information only
	• Servers and AWS/EC2
		○ Web app has many pieces
		○ Some (React, html, js, css) are on the user's device
		○ There's a bunch in the cloud, on the server.
		○ HTTPS lets the server and browser takl
		○ There are files that are sent to the browser
		○ There are also secure files that run on the backend and then give results
		○ Websockets can be used to give information to the backend info
		○ All of this code in the backend can be written in any number of languages
		○ We're using javascript in this class
		○ Node js is what we're using
		○ It's the interpreter stuff for js without the browse
		○ Many layers to internet:
			§ Link: physical connections
			§ Internet: Establishing connections(IP addresses)
			§ Transport: moving connection info (TCP/UDP)
			§ Application: Functionality like web browsign (HTTPS)
		○ The secure information goes through HTTPS to the website
		○ Each machine uses port 443 by default
		○ Each machine has many ports, which are like doors to the internet
		○ Only https can go through 443
		○ If you don't open up port 443, no http traffic can enter
		○ You manually choose which ones to open
		○ You can then make requests through https
			§ Get files
			§ Request it to get more info
		○ Https is an encrypted connection, so hackers can't get it
		○ Example:
			§ The device securely connects to the website with port 443 securely
			§ It then connects through the gateway, caddy. This routes it to various ports
			§ Each port is associated with a different service
		○ AWS lets you rent the server with ec2
		○ It simulates a computer, and you can choose to switch to a more powerful virtual machine later if you want
		○ You choose where to allow ssh traffic from.
			§ More restrictive ip addresses is more secure
			§ Allow anywhere for now as this isn't a real business
		○ There is a public and private ipv4 address for the server
			§ Don't give this out
		○ EC2 on its own doesn't make it secure
		○ The server needs to be running to give info
		○ Stopping and starting the instance will change the ip address unless you have an elastic ip
			§ Elastic ips cost money when your server is stopped
			§ This is super important for associating the ip address with a domain
		○ SSH connection allows you to change info on it for changing things from git bash
			§ Important to use the login key!
		○ The AMI file of the virtual machine determines how it works
			
		
	• DNS and AWS/Route53
		○ The internet originally only used IP addresses for sites
		○ They represented a physical location
		○ There's an upper limit on the number of unique IP addresses there could be
		○ 4 gigabytes of addresses are possible
		○ We ran out a while ago, there are more things that need an address in the world than 4 billion
		○ We need to do fancier things to handle it
			§ IPV6 is a solution with more numbers, but most of the world doesn't use it yet
		○ The domain name system (DNS) his one of those things that helps with this
		○ We need to get an actual server
			§ Can be any computer, or a virtual server in the cloud
		○ Then it needs an address
		○ We then pay a little bit to associate a name with the address
		○ EC2 Gets us the ip, route53 gets us a url
		○ Localhost
			§ Localhost allows us to run stuff on our computer
		○ DNS links a domain name to an ip, so you can type a url into the internet
		○ Domain name structure:
			§ [subdomain.]*secondary.top
			§ Top is the tld
				□ This is the part that costs money
				□ There are only limited options for them
			§ Secondary:
				□ You can use any available url
				□ Combiend with the tld, it's the root
				□ The root is the main domain for giving things to users
			§ Subdomains:
				□ There can be multiple chains of subdomains
				□ Ex: react.simon.cs260.click
		○ DNS record types:
			§ A/aaaa: Address. Specific IP addresses. IPv4 and ipv6
				□ Should include a *. at the front to handle subdomains
			§ Cname: Canonical name. Alias
			§ NS: Name server. Authority for queries and proof of ownership
			§ TEXT: metadata
			§ SOA: Start of authority. Propogation info
		○ DNS info:
			§ Managed by the IANA - internety assigned numbers authority
			§ Breaks the world up into various regions
		
	• Caddy, HTTPS, TLS, certs
		○ Caddy gateway is going to do a few things
			§ Serves static file to the front end
			§ Handle web authentication and certification to make sure things are legit
			§ Allows us to run other services, route are requests to the right services
		○ Caddy starts with port 80, the unsercured http one
		○ It also allows port 443, https, once you set up records
		○ Caddy can't work with just an ip address
		○ It starts using ports once you are hooked up
		○ Caddy won't let you use port 80 once https is set up
		○ Config:
			§ The firs little bit contains what port your getting info from
			§ There is then setup to handle the startup and simon subdomains
			§ The 80 for port 80 need sto be changed to the domain root
			§ No colons for this!
			§ Then, add the full domain for all sections allowed

### HTML
• HTML
	• You don't need to manually touch the html with vi
	• We only need the basics here
	• It's really simple and old
	• Many resources for it
	• Ex: Hello world:
		○ <!DOCTYPE html>
		○ <html lang="en">
		○ <heaad>
			§ <title>First HTML</title>
		○ </head>
		○ 
		○ <body>
		○ Hello World
		○ </body>
		○ </html>
	• The head of the html generally has a lot of metadata
	• Most important thing:
		○ HTML is building a tree
		○ This is called a DOM (document object model)
		○ The browser understands this data structure
	• One way to show the structure is put frames around the parts of the tree
	• Code pen:
		○ Often you'll make a copy of a base assignment
		○ Then you'll svae it, and can submit the url
	• Html handles the main boddy
	• CSS handles formatting
	• We call html different things as it makes sense to call them that thing
	• HTML doesn't tell it how it works, just what's there
	• CSS also just controls how things work
	• Alt text in image tags is important for if the image can't load and for accessibility
	• Input tags:
		○ <input type="text" id="text" name="varText" placeholder="text here">
	• Codepen is useful for finding examples of html, which can be used in assignments
	• 2eschools and stackexchange are good resources
	• Escape characters:
		○ Character	Enitty
		&	&amp;
		<	&lt;
		>	&gt;
		"	&quot;
		'	&apos;
		emojis	&#128512;
		
	• Many types of elements for html
	• You need a form for html input to work
		○ It doesn't automatically send the info
		○ Javascript will be needed for that
	• Most important thing is to fully understand html
	• Use simon to learn
	• Media tags:
		○ Audio
			§ Controls attribute gives a visual representation of it
			§ Autoplay attribute means it starts playing automatically
			§ Loop attribute keeps it playing over and over
			§ Ex: <audio controls src="testAudio.mp3"></audio>
		○ Video tags:
			§ Crossorigin="anonymous" attribute necessary if using external media
			§ Has autoplay and controls like audio
			§ Ex:
				□ <video controls width="300" crossorigin="anonymous">
					®   <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
				□ </video>
		○ Svg: 
			§ Allows you to create simple graphics
			§ Especailly useful with js
		○ Canvas:
			§ Simple format: <canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
			§ Needs javascript to function

### Forms
	• Form tag:
		○ Used mainly for a reminder of where the form is now
		○ Was necessary before javascript, but isn't required anymore
	• Input:
		○ Many types:
			§ text	Single line textual value
			§ password	Obscured password
			§ email	Email address
			§ tel	Telephone number
			§ url	URL address
			§ number	Numerical value
			§ checkbox	Inclusive selection
			§ radio	Exclusive selection
			§ range	Range limited number
			§ date	Year, month, day
			§ datetime-local	Date and time
			§ month	Year, month
			§ week	Week of year
			§ color	Color
			§ file	Local file
			§ submit	button to trigger form submission
		○ Ex: <label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
		○ Common attributes:
			§ name	The name of the input. This is submitted as the name of the input if used in a form
			§ disabled	Disables the ability for the user to interact with the input
			§ value	The initial value of the input
			§ required	Signifies that a value is required in order to be valid
	• Validation:
		○ Possible through html (using regex)
		○ Javascript should be used to validate as well, ensuring good data
		○ There should be feedback on why the input is wrong

### Debug & DOM

	• Virtual servers:
		○ It was more difficult to create web servers earlier on
		○ There is much more infastructure for it now
	• Document Object Model (DOM):
		○ It's a tree structure
		○ It's made up of the tags for html
		○ It's used for programs that parse html
		○ It's also a good visual representation of it
		○ Ultimately, it's used to render what you're doing with html
	• Main info for web server:
		○ Index.html is the main page
		○ The first page people will see
		○ Browsers are interpreters of the DOM
	• Debugging html
		○ It doesn't give any feedback when you do something wrong
		○ Different browsers break in different ways
		○ You need to get good at looking for things that look wrong
		○ You can also comment stuff out to see where stuff starts to work, to find the error

### CSS

	• Overview:
		○ CSS is simple
		○ There is a lot you can learn from it still though
		○ It may be kind of frustrating, as you might be limited by not doing as much as you want
		○ You can spend months getting your website to look cool, but only do enough for the assignment
	• History:
		○ HTML was originally about displaying things
		○ CSS was then used to make htem look prettier
	• Intro:
		○ HTML has a lot of attributes you can add to tags
		○ This can also be done with css
	• Css rules:
		○ All of css can be boiled down to rules
		○ Format:
			§ <selector>{   <declaration>
			§ <rule> ->   <property>: <value>;
			§ }                   
		○ Ex:
			§ P {
				□ Color: green;
			§ }
		○ This would add the green color style to all p tags
	• Applying css:
		○ Stick it right in the element (kind of difficult)
			§ Ex:
				□ <p style="color:red">CSS</p?
			§ Means you need lots of copy pasting code
		○ Put the css in the heat:
			§ Put it inside of style tags
			§ Ex:
				□ <head><style>
					® P {
						◊ Color: green;
					® }
				□ </style></head>
			§ This applies the rule to all matching selectors in the document
		○ Most common/best practice: Have a link to a separate file
		○ Ex:
			§ <head>
				□ <link rel="stylesheet" href="styles.css"/>
			§ </head>
		○ Rel="stylesheet" means the document will look for a css file
		○ The href can be relative or absolute
	• Precedence:
		○ Because there are 3 ways, you can have all 3 of them in one file
		○ Element specific css style has highest precedence
		○ Header css style (with style element) comes nex
		○ External css (from linking) is last
	• Selectors:
		○ This is where cascading comes from
		○ The element closest to the text takes precedence
		○ Ex:
			§ <body><p><span>CSS></span></p></body>
			§ Css rules selecting span would 
		○ Debugging tools show superseded rules as crossed out
	• List of selectors:
		○ Selector	Meaning	Example	Description
		Element	All elements of a specific name	div	Any div element
		ID	The element with the given ID (should be unique)	#root	The element with the attribute id='root'
		class	All elements with the given class	.highlight	All elements with the attribute class='highlight'
		Element class	Any elements with the specific name and class	p.highlight	Any p element with the attribute class='highlight'
		List	Any of the given selectors	Body, section	Body or section elements
		Descendant	A list of descendants	Body section	Any section that is a descendant of a body
		Child	A list of direct children	Body>Section	Any section that is a direct child of body
		Pseudo	State based	p:hover	A p element that's bein hovered
	• Many declarations:
		○ Check ou tmdn WebDocs or w3Schools.com for more info!
	• Box model:
		○ Every element is a box
		○ The element contents is the center box
		○ Around that, is the element's padding
		○ Then there's the border space
			§ Might be invisible, or might be visible
		○ Finally, on the outside is the margin
			§ Nothing can inhinge on this
		○ Debugging tools show the size of each one, or a dash if it doesn't exist
	• Fonts:
		○ There are many kinds of fonts
		○ Choosing fonts makes a big difference on what your page looks like
		○ Css lets you choose your font because of thise
		○ Bad idea to do a lot of different fonts
		○ You can also use custom fonts with @font-face
		○ Ex:
			§ @font-face{
				□ Font-family: 'quicksand';
				□ Src: <source>;
			§ }
		○ It would then be useable with the font-family declaration
	• Animation:
		○ In the declaration, you need to give an animation name and a duration
		○ Ex:
			§ p{
				□ Animation-name: demo;
				□ Animation-duration: 3s;
			§ }
		○ The animation needs to be defined at the top, with different keyframes
		○ There are a few ways, the main was is a from and a to
		○ Ex:
			§ @keyframes demo{
				□ From{
					® Font-size: 0vh;
				□ }
				□ 50%{
					® Font-size: 30vh;
				□ }
				□ To{
					® Font-size: 20vh;
				□ }
			§ }
		○ You don't need the percentage, all you need is from and to

	• General:
		○ Html is generally a lot simpler than CSS
		○ HTML is to help think of structural features of a project
	• Responisve design
		○ Display intr
			§ There are lots of different kinds of screens out there currently
			§ You need to think about how things will look like on multiple screens
			§ You don't want to think about different screens individually though
			§ Modern CSS lets us fold htat into our responsive design
			§ There are css rules that let you alter the display in multiple ways
		○ Manual displaying (important):
			§ Lots of things will try to automatically handle things
			§ You often want to do it yourself
			§ Include this to do so: 
				□ <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		○ Display rule:
			§ This associates them with a specific display mode
			§ Valid options:
				□ None
					® Hides it
					® Useful for temporarily hiding things
					® Also useful if the screen is too small
				□ Block
					® Stretches it across the whole display
					® If it's just a few letters of text, it won't visibly fill it up
					® But the background would stretch across the whole display
				□ Inline
					® This means that it will stay the same regardless of screen size
				□ Flex
					® A fancier versin of grid(more info later)
				□ Grid
					® Things stay in a grid(more info later)
			§ Example:
				□ p{
					® Display: none;
				□ }
		○ Media Queries:
			§ Transforms things based on parts of the query
			§ Has a question at the top, and then includes one or more rules inside
			§ Ex:
				□ @media (orientation: portrait){
					® Div{
						◊ Transform: rotate(270deg);
					® }
				□ }
			§ Use "and"/"or" to combine with multiple queries together
		○ Float rule:
			§ This is a rule for elements that are aside
			§ There are 4 parts:
				□ Float: the direction it floats
					® Ex float: right;
				□ Padding: the padding inside of the border
				□ Margin: the margin outside of the border
				□ Border; The border of it
			§ This lets it stay in the same relative postiion is it's scaled
		○ Units:
			§ Good to use em, which is a relative size. This helps things work better than % or px
		○ Grid:
			§ Nested divs are the main way of this
			§ You call the outside a container, the insides a card generally
			§ Containers:
				□ Rule for them:
				□ .container{
					® Display: grid;
					® Grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
					® Grid-auto-rows: 300px;
					® Grid-gap: 1em;
				□ }
				□ What this does is make the rows 300 px tall, a space of 1 em between cards
				□ The width of the columns will grow from 300 to 600, and always be equal. They won't be smaller than 300
				□ This is how the grid display works
			§ A lot of the time Bootstrap automatically handles this
		○ Flex:
			§ This is probably going to be used
			§ This is what makes websites really responsive
			§ Lets you nest things in ways that make a lot of sense
			§ The main thing is set display to flex, which means that you can control how it moves
			§ It applies to the children of the node that the rule effects
			§ Each child needs a flex attribute to work properly
			§ You'll always want it to be 100% of the screen
			§ Flex-direction specifies how it moves:
				□ Column: moves up and down
				□ Row: moves left and right;
			§ Flex attribute:
				□ If you set it to 0, it stays a specific size. Add that size afterwards
					® Ex: flex: 0 80 px; S
					® Always stays at 80 px
				□ 1 means It will stretch normally
				□ Higher values gives it a higher weight
					® Ex with a value of 1 and 3, the one with 3 would be 3 times as wide as the one with 1
				□ You can choose values in between
			§ Children can choose to display as flex as well, creating their own flex area within them. The size of it will be the size of the parent element
			§ Section children with this:
				□ Sectoin:nth-child(x) effects the ith section
				□ Classes are generally better though
			§ Example:
				□ You have a header, a footer, and then a main area with 2 sections
				□ Each is shaped differently
				□ You'd want them to all relatively stay the same
				□ That's what flex does
			§ HTML example:
				□ <body>
					® <header>
						◊ <h1>CSS Flex and Media Query</h1>
					® </header>
					® <main>
						◊ <section>
							} <h2>Controls></h2>
						◊ </section>
						◊ <section>
							} <h2>Content></h2>
						◊ </section>
					® </main>
					® <footer>
						◊ <h2>footer</h2>
					® </footer>
				□ </body>
			§ Flex example:
				□ Body{
					® Display: flex
					® Flex-direction: column;
					® Mragin: 0;
					® Height: 100vh;
				□ }
				□ Note: There's no margin around the body, it fills up the whole viewport, and all children of body move up and down
				□ Header{
					® Flex: 0 80 px;
				□ }
				□ Footer{
					® Flex 0 30px;
				□ }
				□ Main{
					® Flex: 1;
					® Display: flex;
					® Flex-direction: row;
				□ }
				□ Note: Main's children will flex right to left. This overrides the column flex of the othe rones
				□ @media(max-height: 700px){
					® Header{
						◊ Dipslay: none;
					® }
					® Footer{
						◊ Display: none;
					® }
				□ }
				□ Note: this hides the header and footer if the window is less than 700 px tall
				□ @media (orientation: portrait){
					® Main{
						◊ Flex-direction: column;
					® }
				□ }
				□ Note: this changes how the flex is if you make it portrait
		○ Align-content can be used in a subtag to make the content inside of it behave with that rule
		○ Ex:
			main{
			  flex: 1;
			  align-content: center;
			}
			
			
			
						
			
	• Debugging CSS:
		○ Start by changing the values to see if the rule is being used
		○ Then, after that see if any child rules are superseding your rule
	• Bootstrap
		○ It's a framework for doing CSS
		○ Is the current way of doing it
		○ The main idea is to make it so we use less css manually, as javascript will be modifying the css a lot of the time
		○ There are other frameworks, but bootstrap is the most popular
		○ Things are super repetitive, and frameworks can help with this
			§ Color design
			§ Buttons
			§ Etc.
		○ How to use it:
			§ At the top, you put a link
			§ It's an absolute link to where bootstrap is
			§ There are different versions, so you might need to change the numbers
			§ Some parts of bootscript use js, others don't
			§ Add a script to the bottom of your body for the js section too
			§ You then add a class from bootstrap
			§ When you use the class, there are rules for it within the bootstrap filesheet
			§ The class that handles it uses things based on default color palletes
		○ You need to look at bootstrap and it's docks to figure out what classes exist
		○ Don't overwrite things

	• Deployment
		○ Many ways to do this
		○ We're using a simple version
		○ The important idea is that there are multiple copies in the dev environment
		○ In the deployed area, there's only one
	• Frameworks:
		○ They're done in multiple ways
		○ All that matters is that it's readable and maintainable
	• Padding:
		○ You can have any number of padding arguments from 1 to 4
			§ For 1, it's universal
			§ For 2, the first is right left, the second is top down
			§ For 3, it's right, left, up down
	• More css tags:
		○ Justify-content: Changes how it justifies the child tags
		○ Border-radius: makes part of it circular
			§ You can use any unit for this
			§ The higher it is, the curvier
			§ Same syntax as padding
		○ Float: makes it so that it moves to a certain side
			§ Right, left, or center
		○ Max-width:
			§ You can use a function, like min, fo rthis
			§ Ex. Max-width: min(80vm, 1000px)
			§ It will always be between 80vm and 1000px
	• Units:
		○ Em is based on font size for the parent tag font
			§ Largest possible letter size
		○ Rem is based on the font at the root of the dom
		
	• Learning more:
		○ Hover over a tag, and it will give you a link to the mdn docs
	• Browser debugger:
		○ Look at it with inspect element
		○ Especially useful for css
		○ It shows elements at the top
		○ CSSbelow that
			§ You can tab over to the box model
	• Pseudo elemnets:
		○ You can use this to add fake elements before real elements with <selector>::before{}
		○ You can also do a pseudo after element
		○ Ex:
			§ .author::before{
				□ Content: "-";
			§ }
That will add some content before every element with class author 

### Regex
* Includes / around it
* i at the end means it ignores case

### JS

Arrays:
* push	Add an item to the end of the array	a.push(4)
* pop	Remove an item from the end of the array	x = a.pop()
* slice	Return a sub-array	a.slice(1,-1)
* sort	Run a function to sort an array in place	a.sort((a,b) => b-a)
  * The function sorts by if it's negative, it goes earlier. Positive goes later.
* values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
* find	Find the first item satisfied by a test function	a.find(i => i < 2)
* forEach	Run a function on each array item	a.forEach(console.log)
* reduce	Run a function to reduce each array item to a single item	a.reduce((a, c) => a + c)
* map	Run a function to map an array to a new array	a.map(i => i+i)
* filter	Run a function to remove items	a.filter(i => i%2)
* every	Run a function to test if all items match	a.every(i => i < 3)
* some	Run a function to test if any items match	a.some(i => i < 1)


DOM:
* Accessed with the `document` global variable
* `document.querySelectorAll` uses a css selector as a filter
* textContent contains the text of the element
* use `appendChild` to add to the dom
* Every attribute of an element is a field in an object, which is returned when you get the element
* getElementsByClassName(<class>):
	Returns all elements with class class![image](https://github.com/user-attachments/assets/47a909a9-2ad7-4c0e-b07c-a68f1c3723d7)

* getElementById(<id>):
	Returns first element with id id![image](https://github.com/user-attachments/assets/a300e3d9-d6c0-4783-be78-371cb8f9d677)

		○ Manipulating elements
			§ innerText:
				□ Is the text inside of the document, including html within
				□ You can directly write any string to it
				□ Useful for "prefab" type things where you insert premade html
				□ Note that injection like this can be used for viruses, so be aware of it
				□ This can also be used for creating the app
				□ Modern webapps are normally a single page, and use code injection to travel
				□ This means you don't need to duplicate code as much
				
			§ tagName
				□ Returns what type of tag the element is
			§ Children:
				□ All elements that are direct children of this tag (branches of the tree)
textContent:![image](https://github.com/user-attachments/assets/b46e8c79-3a61-49c5-ba28-d0893c6b1a14)



* Example use:

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```


Event listeners:
Let's you make things interactive!

Ex:
```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```
Listener types: 
* Clipboard	Cut, copied, pasted
* Focus	An element gets focus
* Keyboard	Keys are pressed
* Mouse	Click events
* Text selection	When text is selected

	• Exceptions:
		○ Try, then catch block
		○ Similar to most langugaes
		○ You can also include a finally block, which always runs, whether an error is thrown of not
		○ Don't use it a lot, only when there may truly be exceptions
		○ Not for user errors
		○ Ex:
			§ Try{
				Throw "trouble in river ctiy";
			§ }
			§ Catch(error){
				□ Console.log(error);
			§ }
			§ Finally{
				□ Console.log("always");
			§ }
	• Spread
		○ Spread is a way to take arrays and pull it into it's pices
		○ You do this with 3 dots before the name
		○ Instead of using the array, it uses each element
		○ Ex:
			§ Let input=[1,2,3];
			§ Input=[…input,4,5,6];
		○ You can also do this with objects
	• Rest
		○ You also use the same syntax to take a bunch of variables and move them into an array
		○ Called rest as it's the rest of the parameters
		○ Only used in function declaration
			§ Function sumAndMultiply = (multiplier, …numbers){
				□ Return numbers.size;
			§ }
	• Destructuring:
		○ Lets you take pieces out of an array
		○ Kind of complicated
		○ Syntax:
			§ [x]=a
			§ [x,y]=a;
		○ Takes a piece of x and y for a
		○ They're a js specific thing
	• Websockets:
		○ Push things to the client even though it didn't ask
	• Interacting with the DOM
		○ You can manipulate the DOM with js. Very useful
		○ Directly modifies the html
		○ Dynamic manipulation of the DOM only happens client sid
		○ It doesn't change the server code
		○ Root:
			§ Document points to the root of the tree
			§ It has all of the fields and methods of other tags
			§ Also has unique methods:
				□ createElement(type):
					® Creates an element of type
		○ Methods:
			§ querySelector(<element>):
				□ Returns the first element of type <element>
				□ You can then manipulate the element
				□ You can use any selector from css
			§ querySelectorAll(<element>):
				□ Returns an array of all elements of type <element>
			§ appendChild(<element>)
				□ Adds a child to the element it's ran from
				□ Uses a preexisting element
			§ setAttribute(type,value)
				□ Sets the attribute of type type to value
				□ Will add it if it doesn't exist
			§ removeChild(element)
				□ Removes element elemtn from it
			§ addEventListener(type,func)
				□ Runs func every time vent of type type is called
		○ Manipulating elements
			§ innerText:
				□ Is the text inside of the document, including html within
				□ You can directly write any string to it
				□ Useful for "prefab" type things where you insert premade html
				□ Note that injection like this can be used for viruses, so be aware of it
				□ This can also be used for creating the app
				□ Modern webapps are normally a single page, and use code injection to travel
				□ This means you don't need to duplicate code as much
				
			§ tagName
				□ Returns what type of tag the element is
			§ Children:
				□ All elements that are direct children of this tag (branches of the tree)
			§ textContent:
				□ A string that is the exact text content of it, excluding elements
		○ Event handlers
			§ You can add listeners to any events
			§ You can put them in the html directly as an attribute
			§ You can also use the method to do so
			§ Give a function that's called when the even thappens
			§ Ex:
				□ Element.addEventListener('click',function(event){
					® Console.log("clicked");
				□ });
			§ Event categories 
				□ Clipboard (cut copied, pasted)
				□ Focus (en element gets focus)
				□ Keyboard (keys are pressed)
				□ Mouse (click events)
				□ Text selection (when text is selected)
			§ W3 schools has the events you can use
	• Local storage
		○ You use this to store persistent data client side
		○ Databases are better, but local storage is useful when you don't have it
		○ Local storage is also useful for if the data base is offline
		○ It's stored in the browser
		○ Methods
			§ setItem(key,value)
				□ Key is a string that you reference
				□ Value is what you're storing there
				□ You can only store primitives like strings and ints
				□ Use json.stringify to store objects
			§ getItem(key)
				□ Returns what's stored at the shown value
	
		
![image](https://github.com/user-attachments/assets/068d0f17-5758-4508-9cd3-5a3af9d6e42a)

