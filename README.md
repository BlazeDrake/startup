# Profile tracker

## Specification Deliverable

### Elevator pitch
Have you ever wanted to keep track of the various profile pictures you use across different services? Or do you want to keep a consistent profile picture for each username you use, but forgot one of the services you used that username for when changing it? Well, profile tracker is for you! In it, you can create a list of usernames which you use. Then, under each username, you can add a profile picture for it and all services which you use that persona for. You can even generate a random profile picture from a few different sets! This makes it easy to keep yourself consistent across different platorms, or what username to use for a new platform which you want to be recognizable to people from a specific other platform you're already on.

### Design
![Mock UI](https://github.com/user-attachments/assets/5b19dd27-6edd-4432-8c3e-3eea4b7e250b)

Here is a diagram shows the client server connection for logging in. It also shows both the client server and peer to peer connections when updating your info.
![Diagram of user connection](https://github.com/user-attachments/assets/1632b258-c02c-4815-9bd7-0d685c7cf2ae)



### Key Features
* Secure login over HTTPS
* Ability to create a tracked profile, with a set username
* Ability to associate a list of service names with the profile (ex. Xbox, Discord, etc.)
* Ability to upload or generate a profile picture for the username
* Information is persistently stored

### Technologies
I am going to use the required technologies in the following ways.

* HTML - Uses correct HTML structure for application. Two HTML pages. One for login and one for profile management. Hyperlinks between the pages.
* CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
* React - Provides login, profile list, the ability to modify the profile picture, the ability to add services to it, the ability to change a profile's username, and use of React for routing and components.
* Service - Backend service with endpoints for:
	* Login
	* Generating profile pictures. The following apis will be used for this:
		* [DiceBear](https://www.dicebear.com/how-to-use/http-api) (8 bit profile pictures)
		* [Met Museum Of Art](https://metmuseum.github.io/) (api to grab pieces of art from the MET)
* DB/Login - Store users, and created profiles in database. Register and login users. Credentials securely stored in database. Authentication required to view and manage profiles
* WebSocket - When a new profile is created, it is broadcast to all online users

## HTML Deliverable

I built up a mock-up of the website using html. 

* HTML pages - Two HTML page that represent the ability to login and manage profiles.
* Links - The login page links to the profile page when you hit "login" or "create". You can then press "log out" to go out.
* Text - I put placeholder text for the profiles, as well as in the input sections.
* Images - I used SVG images as placeholders for the profile pictures you can select.
* DB/Login - Input box and submit button for login. The profile details represent information that is stored and pulled from the database.
* WebSocket - The message in the top left corner saying "ExampleUser updated their profile!" represents websocket notifications.

## CSS Deliverable

For this deliverable I properly styled the application into its final appearance.

* Header, footer, and main content body
* Navigation elements - No navigation elements at the top necessary, as there are only 2 pages. I did stylize the login and logout buttons though
* Responsive to window resizing - My app looks great on all window sizes and devices
* Application elements - Used good contrast and whitespace
* Application text content - Consistent fonts
* Application images - They are static still, but float is used to ensure they are in the right segment of the box.
