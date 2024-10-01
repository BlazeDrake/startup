# Server info:
IP: 34.233.139.189

URL: http://cs260-profile.click/

## Commands to access
cd ~

ssh -i [file path to keys, format of ~/keys/production.pem] ubuntu@34.233.139.189


## Deploy commands

cd ~/source/repos/CS_BYU/simon-html


Simon:
./deployFiles.sh -k <yourpemkey> -h cs260-profile.click -s simon

Startup:
 cd C:/Users/blaze/source/repos/CS_BYU/startup

 ./deployFiles.sh -k <yourpemkey> -h cs260-profile.click -s startup


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
