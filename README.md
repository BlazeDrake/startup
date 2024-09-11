# Profile tracker

## Specification Deliverable

### Elevator pitch
Have you ever wanted to keep track of the various profile pictures you use across different services? Or do you want to keep a consistent profile picture for each username you use, but forgot one of the services you used that username for when changing it? Well, profile tracker is for you! In it, you can create a list of usernames which you use. Then, under each username, you can add a profile picture for it and all services which you use that persona for. You can even generate a random profile picture from a few different sets! This makes it easy to keep yourself consistent across different platorms, or what username to use for a new platform which you want to be recognizable to people from a specific other platform you're already on.

### Design
![image](https://github.com/user-attachments/assets/5b19dd27-6edd-4432-8c3e-3eea4b7e250b)


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
		* [DiceBear](https://www.dicebear.com/how-to-use/http-api)
		* [Met Museum Of Art](https://metmuseum.github.io/)
* DB/Login - Store users, and created profiles in database. Register and login users. Credentials securely stored in database. Authentication required to view and manage profiles
* WebSocket - When a new profile is created, it is broadcast to all online users
