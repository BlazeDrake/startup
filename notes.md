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


Random html tags:
<center>: deprecated, but used for formatting in the center when you have no css like me!
