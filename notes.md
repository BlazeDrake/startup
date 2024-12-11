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
	
		
### Node.JS
• Frontend vs backend:
		○ It's a framework that combines html and javascript
		○ A modern way to write web apps
		○ So far, everything we've been doing has been running code in your browser
		○ You write the code then push it to the server, and it's then downloaded to the local client
		○ This is what's called frontend code
		○ There's a lot of backend stuff as well
		○ Downloading the info to the user is on the backend
		○ Node is also doing that
		○ Backend stuff can use any language
		○ We can run all of our computation using javascript
	• Modules:
		○ They are something you can use in your browser or backend
		○ It's a way to share code between files
		○ Ex:
			§ Alert.js
				□ Export function alertDisplay(msg){
					® Alert(msg);
				□ }
			§ Main.js
				□ Import {alertDisplay} from './alert.js';
				□ alertDisplay('called from main.js');
	• Debugger:
		○ VsCode has a debugger for js
		○ This is necessary for backend stuff
		○ You can set breakpoints
	• Node.js
		○ To run js outside of a browser, you need node
		○ You need to install node first
		○ Nv, - node version manager
		○ Node - JS runtime
		○ NPM - Node package manager
			§ You can download and import modules
		○ Once installed, you can run code from files and the command line
		○ You can run any javascript with this
		○ This lets you run things locally
		○ The backend will also use it
	• NPM
		○ You need to set it up first
			§ Make a directory for where you're running javascript
			§ Go to it
			§ Run npm init -y
	• Init file:
		○ Contains the main script under `main`
		○ You can include scripts that run to test things
		○ They can test whatever you want
		○ This includes info on all modules you install as well
		○ Installying a module pulls in all dependencies
		○ There are also a bunch of default ones isntalled
		○ You don't need to push the actual modules to github though
			§ It's large
			§ You also only need the package json and loc file, not everything
			§ Npm keeps track of everything
	• Require:
		○ Require is when you use a package and tell npm about it
		○ Needs to exist on pc, and then it uses the variable as the info from that file
		○ Ex:
			§ Const giveMeAJoke = require("give-me-a-joke");
	• Backend
		○ We're going to be implementing queries like the apis we're using
		○ We'll talk about how to do this service stuff
		○ We'll also add listeners
		○ It will be relatively simple
		○ We can do simple things already
		○ Simple example:
			§ Const http = require('http'); //Uses the http package. This creates servers
			§ Const server = http.createServer(function(req,res){
				□ Res.writeHead(200,{'content-type';'text/html'});
				□ Res.write('<h1>Hello Node.js!</h1>');
				□ Res.end();
			§ });
			§ Server.listen(8080,()=>{
				□ Console.log('Web service listening on port 8080');
			§ });
		○ Explanation:
			§ Turns your pc into a server that you can access for information
			§ You can then access the service from localhost on port 8080
			§ This will send the info for the response
			§ Localhost: 1270.0.1 
		○ Grabbing the info:
			§ Fetch(<url>): grabs the info from the service at that url
			§ The information is given as json
	• Server info:
		○ Public folder is what gets delivered
		○ There's also folders for the packages in the server directory
		○ Currently not providing services
		○ You can set it up to provide a service though
	• More service info:
		○ Get(<url>):
			§ Gets information from a specific service
		

### React
*  Web frameworks:
		○ Simplify common patterns
		○ Povide common components
Improve performance
		○ Increase device coverage
		○ They're beyond css
		○ Similar to bootstrap, but more for development
		○ Web frameworks are how people actually write apps
		○ Lots of frameowrks for this, like css
		○ It's the most common one. There are other good ones though
		○ Angula and vue are xommon
	• JSX
		○ Combines javascript and html
		○ CSS is still necessary
		○ We'll still use them
		○ We can write it with react
		○ There is a transpiler called babble, which will convert the jsx to javascript
		○ It's stuff from packages that we'll use
		○ Curly braces mean you need to evalueate a javascript thing
		○ Ex:
			§ <ol class="big">
				□ <li> item {i}</li>
				□ <li> item {i+3}</li>
			§ </ol>
			§ The {i} stays as javascript
	• Components:
		○ This stops you from needing to copy and paste things across pages
		○ This is the same bit of code across every page
		○ They don't need to change
	• Format:
		○ You use a function for each component
		○ These components are like html tags
		○ You return a series of html with the component
		○ This function can have behavior inside of it, making components dynamic
		○ Components must have an uppercase first letter
		○ Use parentheses around the return for multiline html
		○ You don't need to export child components
		○ Ex:
			§ Export default function Test(){
				□ Return(
					® <div>
						◊ React
						◊ <h1>Is cool</h1>
					® </div>
				□ );
			§ }
			§ -----
			§ <Test />
	• Often, the only html used is a div
	• The rest is done in js
		○ ReactDOM.render I sused
		○ Ex:
			§ ReactDOM.render(<p>Hello world</p>,document.querySelector("#root"));
		○ You can insert your react components here
		○ The DOM is slow to change though
		○ If you have a complicated DOM, doing a lot of changes directly on the DOM is slow
		○ Web frameworks are faster as they create virtual copies of the DOM
		○ They're optimized for memory
		○ Once it's done changing, the screen is updated
			§ It figures out's what's changed between the old nad new version
			§ It communicates the diff to the actual tree
			§ Only the things that changed are updated, instead of remaking the tree
			§ This makes things faster
	• Brace destructuring example:
		○ Used in properties
		○ See below
		○ Example:
			§ Let test={food:" apples", number = 7}
			§ Function example({food,number}){
				□ Console.log(food+": "+number);
			§ }
			§ Example(test);
	• Properties:
		○ The function can take a field, which is the object
		○ You can put curly brackets in the function definition to directly take out the parameter you want from that object
			§ This is preferred
			§ It's a form of destructuring
		○ React updates the DOM whenever a compoenn'ts return changes
			§ This allows dynamic html
		○ Ex:
			§ Export default function Prop({content}){
				□ Return <div>content</div>
			§ }
			§ -----
			§ <Prop content="hi" />
	• useState provides interactivity
		○ You can use a function to do this
		○ It returns 2 things: 
			§ A variable for the current state
			§ A method for changing it
			§ This needs destructuring, as an array
			§ Ex:
				□ Const [color,setColor] = React.useState("red");
		○ You can have multiple states
		○ Ex:
			§ Const Hello=()=>{
				□ Const [curColor,setColor] = React.useState("red");
				□ Function changeColor(){
					® setColor(curColor==="red"?"green":"red");
				□ }
				□ Return (
					® <div>
						◊ <pstyle={{color:curColor}}>Hello</p>
						◊ <button onClick={changeColor}>change</button>
					® </div>
				□ );
			§ };
	• Components can be nested
	• useEffect:
		○ Whenever you use this hook, every time the component is updated it does something
		○ It takes a funtion
		○ Inside of the function, you can return a function
		○ This is a function you're telling react to do before the element renders next time
		○ The first function will be called when it's first rendered in additino to changes
		○ Ex (the whole component isn't here, this would go inside:
			§ React.useEffect(()=>{
				□ Console.log("rendered");
			§ });
		○ You can have the effect only happen on some states by passing in a destructured array as a second parameter
		○ An empty array makes it only happen the first render
		○ Ex:
			§ React.useEffect(()=>{
				□ Console.log("rendered");
			§ },[count]);
	• Routing:
		○ Lets you manage all "pages" from a single page
	• State variables:
		○ Keep them as high up as possible
		○ Then pass them in as parameters
  	• Today's focus is on porting what we already made over to react
	• Router:
		○ It determines what path through the application you're taking
		○ It uses this to determine what components are used
		○ Super importatn
		○ This is how it's all on the same page
		○ Css page for the whole thing
		○ We need to import a bunch of things to ge the router to work
			§ Check simon for this
		○ There's the render at the bottom as always
		○ It's sticking in a parent component
		○ It returns a large chunk of JSX
		○ It's one big browerRouter elemtn (special react one fo rit)
		○ navLinks are used
			§ Same as link, but it's to instead of href. These are relative
		○ Ex:
			§ Return(
				□ <BrowserRouter>
					® <div className="app">
						◊ <nav>
							} <NavLink to="/">Home</NavLink>
							} <NavLink to="/users">Users</NavLink>
						◊ </nav?
						◊ <main>
							} <Routes>
								– <Route path="/" elements={<Home />} exact />
								– <Route path="/about" element={<About />} />
							} </Routes>
						◊ </Main>
					® </div>
				□ </BrowserRouter>
			§ );
	• Toolchain:
		○ When you write a real application, a lot needs to happen to be made production level
			§ Optimizatoin
			§ Linting
			§ Back compat
		○ This is done with npm run build:
			§ Babel:
				□ Transpiles jsx to javascript
				□ Super important so our code actually runs
			§ Minify JS
				□ Compress
			§ More under the hood
		○ Vite does it for us
		○ Vs code isn't the end of our pipeline anymore
		○ We now need to run vite to build it
		○ Vite is put into our pipeline, and is called a toolchain
		○ We can also use Vite before we push it to the cloud to test it
			§ We can't just run live servers in vs code anymore due to jsx
			§ Npm run dev runs a local server for us
			§ Just like VSX live server
			§ It won't do all the final compression and optimization, it's just for debugging
		○ We can create a template directory with some commands:
			§ Npm Create Vite#latest DemoVite -- --Template react
			§ Cd Demovite && npm install
			§ Npm run dev
	• Simon react:
		○ Vite uses port 5173
		○ There are commands to get it to be exactly the same while porting it
		○ Routes are now used with the port
		○ Here is the process
			§ Install and configure Vite (NPM)
				□ Create a specific directory for the react
				□ Then install everything in that sepcific directory
			§ Reoganize the code
				□ Add subdirectories for everything
				□ Root:
					® Index.html
						◊ Only has head infromation and the root
					® Index.jsx
						◊ Just loads the app component into the div
						◊ Imports App from the src/app file
					® Deployfiles.sh
					® No code
					® Packages
				□ Public
					® Has resources
					® As well as the icon
					® You don't need to use the publci path, it treats it like the root
				□ Src
					® Contains source code (source)
					® Has an app.jsx and app.css
					® App.css controls css for whole app
					® App.jsx is the app component
						◊ Imports bootstrap(you can still use it)
						◊ Imports app.css so it's used
						◊ Imports browser router
						◊ Imports the root component from each other subdirectory
						◊ Uses export default function for App
							} This need sto be done so ti can be imported
							} Not necessary, but it's good practice if there are multiple functions
						◊ All the app component is a return statement
							} It's a single browser router
							} Has sub paths for each route
							} Each subpath just uses a component of rhta tpage
							} Also has the header and footer
							} The header is slightly different:
								– You can't use class on your path though
								– You need to use className instead
								– Switch class to className
					® Subfolder for each page
						◊ Contains the jsx file for it
			§ Convert to React Bootstrap
			§ Enable React (NPM)
			§ Create app componnet
			§ Create view components
				□ Create the component for each one
				□ Make sure that they are the right one
				□ Get a stub, make sure it works
				□ We still have individual css files
			§ Create the router
			§ Convert HTML to React components
				□ This is where you copy paste it in
				□ We put components in their files
				□ We then deploy it in app.jsx
			§ Replace deployment script
				□ Don't run the old deploy files script once you make these changes
				□ You instead need to grab the new deploy files from the reading or simon react
				□ The script runs npm run build, don't worry about it



### Fetch/protocol layers
 Frontend vs backend:
		○ Frontend is stuff on the browser
		○ Backend is on the server
		○ Caddy is doing the backend for us currently
		○ Soon we'll start writing the backend
		○ Pretty poewrful to say full stack developer
			§ Front end and back end
		○ Front end has a lot of competition, very few that can also do backend
	• Physical layer
		○ MAC layer
			§ Media Access Control
			§ This is generally a 6 byte address
			§ A lot more addresses to allocate
		○ Wi-fi cells
		○ These are the physical medium to access the internet
		○ Computers have a wifi chip with an ipv6 address, which communicate wirelessly with wi-fi hotspots
		○ These are then wired with the ways to get the internet
		○ Ethernet cables are also an option to connect to the router
	• Routers:
		○ There is a protocal called DHCP
		○ When connected to the wifi network, you send a packet to it to get an ip address
		○ Normally the provider has a set of ip addresses that are allocated to you
		○ Your competer configures the internet layer from this
		○ Our computer always talks with the DHCP server for an ip address and router
		○ 10. addresses are for local use only, they aren't routed outside of your network
			§ These addressses can't be used for web services
			§ You need to use an ipv4 address, which is globally routed to get anywhere
			
 Internet layer:
		○ Interet Protocl, or Ipv6/v4
			§ Internet was running out of 32 bit addresses
			§ Went to 128 bit addresses with ipv6 so they don't run out
		○ Other things can be used
			§ In general, any layer can be taken out and replaced with something else, and the other layers still work
		○ DNS:
			§ This translates names like byu.edu to addresses 
			§ These are what your computer ultimately accesses
			§ Dig <domain name> in the console gives this info
			§ When you want to connect, you are first making a query to the DNS service
			§ This is done with machines all over the world to ersolve the url to an ip
			§ Servers for each ending
			§ Ex:
				□ Dig byu.edu gives info on this
				□ Includes both ipv4 and ipv6 addresses
		○ Hops:
			§ This controls packets and stosp them from getting lost running around forever
			§ Can be used to determine where packets go through by limiting the number of hops
			§ When it stops, a packet is sent back giving information about this
			§ Tracert <address> can be used for that
		○ Many routers are connected in a complex web to get the packet from your ip layer to the destination
		○ IP doesn't provide reliable transition though
		○ It's like post office, you give the address and hope it gets there
		○ Some connnections are through undersea cables
			§ This takes a lot of maintenance
	• TCP:
		○ This is the next level up
		○ This is what handles ports
		○ Just typing in the address is the same as port 80 or port 443
			§ 443 for https
		○ TCP has a 16 bit port
		○ When we do backend things, we can use the port to connect to the backend
	• Application layer
		○ This is where http/https live
		○ As well as ssh
		○ All of these applications provide end to end solutions for sent packets
	• Fetch:
		○ You use fetch to get information from an api
		○ It's returned as json
		○ It uses a javascript promise
		○ Ex:
			§ Fetch("https://quote.cs260.click")
				□ .then((response)=>response.json())
				□ .then(text=>console.log(text))
		○ Format:
			§ Fetch(url)
				□ .then(r=>r.text())
				□ .then(text=>console.log(text))
		○ Promises are the async way to do this
		○ You can also do this syncrounously
			§ Const r = await fetch(url);
			§ Const j = await r.json()
			§ Console.log(j.conent)
		○ Promise strategy is generally better
		○ There are differences in talking to normal web services and apis:
			§ Fetching generally helps you change things
		○ Fetches can also work with your databases
		○ Used in many places
		○ Network tab shows information on that
			§ Your web browser controls how you handle the requestss
			§ You can get and send cookies
			§ This tab gives lots of information on what was sent
		○ Requests should be split up so that things load faster
		○ What you want most for web apps are to get people to pay you
		○ This is only done if it loads quickly
	• Cookies:
		○ They allow you to create sessions
		○ If you log in to churchofjesuschrist.org, it saves that you're logged in
		○ You can reliably communicate securely for the length of your interaction
	• APIS:
		○ Remember, they're json object responses
		○ We need CORS headers from apis
		○ They allow us to get thigns from anotehr machine
		○ If they have CORS it makes things much easier
		○ Always good to look at the api to see what it returns first


### Express/web services
 We're focusing on the backend today
	• The front end should be done with react
	• Fetch is used for the backend in addition to the frontend
	• Implementing node JS:
		○ Ex:
			§ Const http = require('http');
			§ Const server = http.createServer(function (req,res){
				□ Res.writeHead(200,{'Content-Type':'text/html'});
				□ Res.write(`<h1>Hellow Node.js! [${req.method}] ${req.url}</h1>`
				□ Res.end();
			§ });
			§ Server.listen(8080,()=>{
				□ Console.log(`Web serbice listening on port 8080`)
			§ }
		○ Res is the response
		○ Req is the resquest
		○ writeHead says you're sending htlm text
		○ The write then has some variables with some basic html
		○ It then finishes it up with res.end();
		○ ${} means that you'er inserting javascript into the string
		○ This is evaluated and put into the html string
		○ Req parameters:
			§ Method: This is what used with fetch to get it
				□ Usually GET
				□ GET is the default
			§ Url: The url it's requesting from, everything after port and host name
	 You can also run node from vscode to debug your backend code
		○ This is important to do
		○ Debugging lets the service stop at breakpoints as it's being loaded
		○ It runs like normal, just with breakpoints
		○ Still needs to be requested by a page
		○ You can look at all of the variables with debugging in vs code
	• Express:
		○ We can write our backend stuff like this
		○ We'll use a module that is much more functional
		○ This is similar to a router from react
		○ Features:
			§ Express: constructure and default
			§ App: express app
			§ Req: request
			§ Res: response
			§ Router: routes between childs
		○ Needs to be installed with npm install express
		○ Simple example:
			§ Const express= require('express');
			§ Const app=express(); //This is an app object
			§ App.get('*' (req,res)=>{
				□ Res.send('<h1>Hello Express!</h1>');
			§ });
			§ App.listen(8080);
		○ The express object helps route things around
		○ Lets you use different methods for different things
		○ Middleware:
			§ The reason express was written was to be a powerful middleware package
			§ It handles stuff between the request coming in and the response going out
			§ We're doing a simple thing, but you could do a lot in the database
			§ Flow:
				□ Http request -> req -> middleware -> next -> req -> middleware -> res -> http response
		○ App.ues:
			§ It does something between steps on the chain
			§ Lots of built in things for this:
				□ App.use(logger('dev')); //Logs things
				□ App.use(express.json());//Parses json
				□ App.use(cookieParser());//Handles cookies
				□ App.ues(expess.static('public'));
		○ Cookies:
			§ They are info for the backend
			§ They're stored on the frontend though
			§ Useful for info like remembering you for login ingfo
			§ Cookies store a little thing on your browser rather than constantly communicating info with the server
		○ Static:
			§ What this does is it tries to find a webpage for information
			§ It can also include a router for getting subpages
		○ Routing
			§ Ex:
				□ App.get("/store/:ID/:Time'.(req,res)=>{
					® Res.send({iD:req.params.id,time:req.params.time});
				□ }
				□ App.Put("/*/:ID',(req.res)=>{
					® Res.send({Update: req.params.id});
				□ });
			§ The parameters are the parts of the url with a colon before them
		○ If you have a lot of subfields that all have a common beginning, you can ues a sub router
			§ Ex:
				□ Const userrouter = express.router():
				□ App.use('/user',userrouter);
				□ Makes it faster to make routers only for the subdomains that start with user
		○ Order matters:
			§ App.get('/store/:id',(req,res,next)=>{
				□ Console.log(req.params.id)
			§ });
			§ App.get("/*",(req,res)=>{
				□ Console.log('burger');
			§ });
			§ By default, it will not do  the wildcard at the bottom if the url has store in it
		○ Next:
			§ Calls the thing you do after it
			§ It puts it in the order you put below it
			§ Ex:
				□ App.use(cookieParser());
				□ App.post
				□ App.get
				□ App.use((req,res,next)=>{
					® Console.llog("hi");
					® Next();
				□ });
				□ App.use(expres.sstatic('public'));
			§ If no cookies, it would go to post
			§ If it's not a post express, it goes to  the get
			§ If the url isn't right, it will go down to the next use
			§ That use was successful, so would stop if not for the next
			§ Because it says next, it says to look for the requested file in the url
			§ Because there's no next in the file, it's done
			§ It would go to the next line if the file isn't on the local web environment
				• Endpoint:
		○ It's part of your server the browser can talk through
		○ Think of it as the api calls you can make
	• Middleware:
		○ It is what happens in between getting the request, and sending the response
		○ Can be anything you want it to be
	• Next:
		○ You need to include it as the third parameter of the lambda used
		○ Unless you explicitly put next, it generally stops
		○ The built in middleware things we use call next
			§ CookieParser
			§ Static
			§ Etc.
	• Simon service
		○ We will need a new deployment script again
			§ Because we're changing the web service, we're changing what's done on port 3000
			§ What we're currently running doesn't know
			§ We have to stop and restart it currently
		○ Before we upload it, aws is already using express
		○ All it does is send our static files though
		○ What we'll do with it depends
		○ For simon, it serves quotes, stores scores, and authenticates
		○ It receives requests for an api
		○ Most hardcoded things are gone, replaced with services
		○ This transitions from storing in local storage to the service
		○ Doing this makes this save across browsers and pc
		○ The database is more persistent, stored in the database when it stops
		○ For now though, it will be stored in transient variables in the backend
			§ They're reset if the service goes down
		○ Code:
			§ App.use(express.json());
			§ App.use(express.static('public'));
§ Var apiRouter=express.Router();
			§ App.use(`/api`,apiRouter);
			§ apiRouter.post(stuff);
		○ What this does is that it first parses any json
		○ It will then try to serve the static files
			§ Both of these are next
		○ Next, it uses a router
		○ After that, the posts handle any calls to the api, with a prefix of /api
		○ What we're doing isn't safe, but that's not the point of this class
		○ Create:
			§ Backend
				□ It sees if the data is sending a suer that doesn't exist
				□ If it already does, it sends an error message
				□ Otherwise, it creates a unique token with uuid.v4()
					® Node package to make uuid strings
				□ Puts the id, email, and password into a javascript object
			§ Frontend:
				□ Uses fetch api to access it
		○ Login:
			§ Backend:
				□ Checks if the sent password matches the one stored for the username
				□ If it does, it logs in
				□ Otherwise it sends an error
			§ Frontend:
		○ Frontend getters:
			§ Uses react hooks to set things based on what the backend does
		○ JUST STEAL THE SIMON AUTHENTICATION
		○ It's important to put the gets before the posts
		○ Put more specific before general
			§ Scores before score
			§ Score would be matched for both
		○ Services:
			§ It also uses fetch to get external features
			§ It randomizes a number, and then goes into it
   	• Pm2
		○ It shows what programs are running
		○ You have to keep things running even after you close the console
		○ You don't need to know about it in theory, but it's still important to still know it's there
		○ It keeps your service running
		○ Commands:
		○ These all automatically start running when you load up a service
		○ We need to change the express file, and then restart the service
		○ This is automatically done in the deploy services script
		○ Uses what's called a daemon
		○ Pages may stop working if pm2 isn't running
		○ Do pm2 ls to test it
		○ Starting: 
			§ Pm2 ls
			§ Cd ~/services/appname
			§ Pm2 start index.js -n appname -- 5501
			§ Pm2 save
	• Important to have a good mental model for probramming
	• Debugginb backend code:
		○ Use npm run dev to get everything running
		○ The frontend code will be run by vite like normal
		○ This week, though, we need the services to run for testing
		○ They are running on the backend
		○ But, when in the dev environment, it's not running
		○ Prod
			§ Port 3000 is a node js service
			§ It tries to do things with requests using express
			§ It's listening for any services because of the express stack
			§ Anyone going through port 3000 can reach the port
		○ Dev debugging:
			§ 5173 uses the vite debug service
			§ If we ask for something else from the service, vite needs to take that request and send it to 3000
			§ The vite.config.js file is for this
			§ It needs a proxy for this
			§ Vite knows to run the backend
			§ This automatically makes it run
			§ We will add extra info to it to handle websockets
	• Login:
		○ The overall structure is fairly similar
		○ Still has the properties of userName and authState
	• Cross site request forgery
		○ This is where there's a similar site that uses requests to actual servers
		○ It is a phishing link, which requests the auth data for confirmation of stolen info
		○ Many sites don't let you in with whitelists
		○ There are lots that are out there
### Mongo DB
• Overview
		○ This is what we want to save and persist across interactions
		○ Currently on backend, next needs to be elsewhere
		○ Many database services
		○ In the past was with SQL
		○ Most in the past are with SQL
		○ SQL is relational, each one has different ways
			§ MySql	Relational queries
			Redis	Memory cached objects
			Mongo	Json
			ElasticSearch	Ranked free text
			Dynamo DB	Key value pairs
			§ More
		○ We're using mongo db
			§ Familiar with Json, which it uses
			§ Is free
	• Mongo info:
		○ Has a database, a set of collections
		○ You store things in a collection, sub piece of the database
		○ Like different tables in sql
		○ Collections are schema free
			§ No hard defined types you need
	• Using Mongo DB
		○ Example:
			§ Consot (MongoClient) = require('mongodb');
			§ Const userName='example'
			§ Const password='badidea';
			§ Const hostname='yourdb.mongodb.com'
			§ Const url = `mongodb+srv://${userName}:${password}@${hostName}`
			§ Const client=new MongoClient(url);
			§ Const db=client.db('startup');
			§ Client
				□ .connect()
				□ .then(()=>db.command({ping:1});
				□ .catch((ex)=>{
					® Console.log(`Error with ${url} because ${ex.message}`);
				□ });
		○ The format of url matters
		○ This is just an example, should not actually be used
		○ Only a few reasons that client.connect will fail:
			§ Bad username/password
			§ Internet is down
	• We need an account to be able to use it
	• How to set up:
		○ You want a file called dbCnofig.json
		○ Put it where your database code will be
		○ Make this file have one json object which has the fields you need
		○ Url with the config file:
			§ Const cfg = require('./dbConfig.json');
			§ Url = `mongodb+srv://${cfg/userName}:${cfg.password}@${cfg.hostName};
	• Inserting data:
		○ We can create a collection and name it whatever we want once we do this
		○ Ex:
			§ Const collection=db.collection('score');
			§ Collection.insertOne({field: "value"});
	• Object based queries:
		○ We can search the collection
		○ Ex:
			§ Db.house.find()//All objects
			§ Db.house.find({beds:{$gt3:2}})//Anything with beds field >=2
			§ Db.house.find({status:"open",beds{$lt:3}})//Status=open and beds<3
			§ Db.house.find({$or<conditions>) //Or search
	• You can also add options:
		○ Find(query,options);
		○ Option params:
			§ Sort: What element you're sortnig by
				□ Ex: sort: {scores:-1}
			§ Limit: Max limit
				□ Ex: maxlimit: 10
	• Authentication services:
		○ Same idea as databases
		○ Gives a toekn based on the authentication
		○ The token controls what you can access
	• Storing passwords: Cleartext
		○ The database should not store the actual password in plain text
		○ This is too risky
		○ If anyone gets through the defenses, they have your password
	• Instead, we need to store it hashed
		○ We use a hash algorithm in our end
			§ Function that turns a data into gibberish, but unique gibberish
			§ They are one way functions, you can put something in and get something out, but you can't go the other way
		○ We then store the hashed code
		○ People can still hack in
		○ They can also dehash it
			§ "rainbow table"
			§ Pull all commonly used passwords, map it through a hash function
			§ This is much harder though
		○ Salting:
			§ You add a bunch of random stuff to the password
			§ This is called "salt"
			§ You then hash with the salt added to the password
	• Auth extras:
		○ Similar to mongo db
		○ We add uuid and bcrypt
		○ Also express and cookie parser still

### Websocket
• Intro
		○ We've done everything in the big picture so far
		○ We're adding another component to allow peer to peer communication though
		○ Peer to peer communication
			§ The server and web browser can talk without the web browser asking
			§ This makes it much faster
			§ We'll fudge web browsers talking through this
	• Http:
		○ So far, all communication we've done has been over http
		○ Http works by responding with info when the client asks for it
		○ This works great for many things, especially when the web was focused on documents
		○ As it grew though, this becomes clunky
		○ Ex chess:
			§ If you're playing chess and move, everyone else needs to know about it as well
			§ This would take constant requests with http
	• Websockets:
		○ They're a new protocol on top o fhttp
		○ It changes a client server protocol to a peer to peer one
		○ This makes it so either side can initiate and receive
		○ Rides on top of http
		○ We can either automatically or manually update the http protocol to do this
		○ Importan tnotes:
			§ There's still a client and server underneath
			§ We're faking that they're both at equal levels, but underneath it's still client server
			§ In particular, our code won't look symmetric
			§ There is still the notion of a server and client in code, even though they pretend to be peers
	• Peers:
		○ They can talk back and forth until the connection closes
		○ Anyone can initiate or respond
		○ You can initiate without responses multiple times
		○ If the connection isn't used for a time, I twill automatically closed
		○ It's pretty expensive
	• Live server from vs code is an example of web sockets, the pc acts as a server to the browser
		○ Lets it automatically update the browser based on new code
	• Server side of websocket:
		○ We need a module for it
		○ We can declarea  server object with it
		○ In the example, wss is the server, ws is the client 
			§ It makes it so that when the client gets a message, it logs it, and sends it back to the server
		○ This is similar to the onClicks for buttons
		○ These are event listeners
		○ What you put after is the function that's called when the event happens
			§ Wss.on says to make a listerner for when a client connects
			§ This passes ws in as a data, which means the client for connection events
			§ This runs code on the server when ever a message is received from the web socket server
			§ It's an event listener
		○ Example:
			§ Const {WebSocketServer } = require('ws');
			§ Const wss = new WebSocketServer({port:9900});
			§ 
			§ wss.on('connection',(ws)=>{
				□ Ws.on('message',(data)=>{
					® Ws.on('message',(data)=>{
						◊ Const msg=String.fromCharCode(…data);
						◊ Console.log('received %s',msg);
						◊ Ws.send(`I heard you say"${msg}"`);
					® }
				□ }
				□ Ws.send('Hello webSocket');
			§ }
	• Browser
		○ In here, ws means the protocol being used. Independent of wss in the server
		○ You need to know the right port for both
		○ Socket.send triggers messages on the server
		○ Uses event listeners
		○ Example
			§ Const socket =new WebSocket('ws://localhost:9900');
			§ Socket.onmessage = (event) =>{
				□ Console.log('received: ',event.data);
			§ }
			§ Socket.send('I am listening');
	• Upgrading to use websockets:
		○ The client and the server both need to run websocket code for it to work
		○ You can look at the websocket in the network tab of websocket
	• This is all there is to understand about websockets at a basic level
	• Chat example:
		○ Uses websockets
		○ Still needs the server to be up, the clients can't communicate without it
		○ Code is on github, simiplified version of simon's websocket
		○ Readme has the wrong port
		○ Frontend analysis:
			§ Has an on open message for it
			§ Wouldn't work to deploy
		○ Backend analysis:
			§ Index .js both uses the express and the websockets
			§ Websocket is after th express
			§ It uses server from the app listening to port 3000
			§ Set noServer to true in the web socket server,as we'rea lready listening to a port
				□ New WebSocketServer({noServer: true});
				□ This says to not upgrade it
			§ You need to manually handle the websocket upgrade:
				□ Server.on('upgrade',(request,socket,head)=>{
					® Wss.handleUpgrade(request,socket,head,function done(ws){
						◊ Wss.emit('connnection',ws,request);
					® });
				□ });
			§ This makes it so we want it to only work as a websocket when we're using web socket, otherwise just to do http
			§ We also usse an event listener for a connection,
				□ It listens for when the client sends a message so that it sends the message to each connected user
					® It stores the connection in an array, so that it can send it out to each connection
					® Uses a for each loop in each one
					® Also stores an id so that it doesn't send the message to the one that sends it
				□ There's also a listener to close events in it
					® This will trigger whenever the connection closes
					® It removes the current connection from the list
				□ Finally, there's a listener for pong events:
					® This is for when the client "pings"
					® This sets the connection to alive
					® Pings happen to check if the connection is alive
		○ Frontend analysis:
			§ Html just contains a button that sends the message
			§ It also contains a div that will contain the texts
			§ We use ws for if it's insecure, wss if it is secure
			§ Javascript:
				□ There's a protocol variable set on start that decides whether to use ws or wss
				□ It also creates a new websocket
				□ It appends a message on open and on close
					® This is why the websocket says connected first
				□ It also appends a message whenever a message is sent to it
				□ Append message function:
					® Creates a div element to srecieve
					® It prepends it ot the chat element
				□ Sending a message:
					® Whenever you press the send message it looks at the data in the message input field
					® It then appends the value with "me" as the sender
					® It then tells the websocket to send the message, creating a json string to send
					
### Security
• Intro
		○ Data breaches cost companies a ton o fmoney
		○ Things have gotten worse and worse over time
		○ Security problems aren't completely solvable; it's always an arms race
			§ The only truly secure system is unusable
		○ There are still ways to mitigate breaches though
		○ We do want to minimize it
	• Common attacks
		○ Injection
		○ Cross-site scripting
		○ DDOS
		○ Credential stuffing
		○ Social engineering
			§ This one is the most dangerous
	• The line of death
		○ Think of browsers as having a "line of death" under the information that's a part of the browser
		○ Back buttons, tab names, refresh, and subfolders can be faked
		○ Ultimately, the only thing you can trust is the domani name
		○ They can't fake this, so examine that closely
		○ A
	• OWASP 10
		○ Open Worldwide Application Security Project
		○ They're trying to help keep things secure
		○ They have a top 10 list of security problems (possibly outdated, but still good)
			§ Broken access control
			§ Cryptographic failure
			§ Injection
			§ Insecure design
			§ Single layer of defense
			§ Security misconfiguration
			§ Vulnerable components
				□ One important way is locking the version of your package
				□ If a node package isn't in their properly, anything can be installed later which hyou don't know
				□ In general, understand what you're downloading
			§ Id and lauth failure
			§ Software integrity
			§ Logging failure
				□ Log critical request
				□ Check your logs
			§ Server side request forgery
	• What to do about it:
		○ You need to be a white hat hacker
		○ You look for problems, but don't exploit them
		○ Share them or fix them
		○ Lots of things you can do with this
		○ Also lots of security testing you can do
	• Juice Shop
		○ This is an open source project built by OWASP
		○ It's a fake website that is set up as a place to buy juices
		○ It includes many tasks to find and fix problems with it
		○ Once you install it, it will keep track of your progress
		○ Even iff you kill and restart it
		


