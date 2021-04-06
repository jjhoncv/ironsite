#!/bin/bash

#give permission for everything in the ironsite-lab-static-web directory
sudo chmod -R 777 /home/ubuntu/ironsite-lab-static-web

cd /home/ubuntu/ironsite-lab-static-web

#navigate into our working directory where we have all our github files
cd /home/ubuntu/ironsite-lab-static-web/app

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install node modules
npm install

#start our node app in the background
npm run start  > app.out.log 2> app.err.log < /dev/null & 