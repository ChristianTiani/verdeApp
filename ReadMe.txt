
resume at minute: 3:07:00 10/4/2022  -- We stopped at the hosting portion of the video

Tutorial Link and Title:
https://www.youtube.com/watch?v=Wn_Kb3MR_cU
Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto

VITE 

* This is React application.  It leverages Vite: Vite helps install, build, and start a React Application

For a step-by-step instruction on how to setup and configure Vite and Tailwinf CSS go to: https://javascript.plainenglish.io/set-up-your-environment-for-vite-react-and-tailwind-css-1cac0e3fbf96

- To install Vite: Make sure you are on the client root folder
>> npm init vite@latest
>> ./  (enter projet name: "./" this specifies the project your are alredy in, ie client)
>> verdeapp (enter package name, we use the project name)
>> react (choose a framework)
>> react (choose a variant)
>> npm install
>> npm run dev (To run the application, this will initialize the application and run it)
 

TAILWIND CSS
Tailwind CSS allow to build modern website without leaving the jsx pages
It is a utility CSS framework that allows to shape and style the webpage design having to write a line of CSS

Steps by step found at : https://tailwindcss.com/docs/guides/create-react-app
- To install Tailwind CSS
>> npm install -D tailwindcss postcss autoprefixer
>> npx tailwindcss init -p


SMART CONTRACT FOLDER
* First run the following command
>> npm init -y


TO DEPLOY THE SMART CONTRACT INTO THE BLOCKCHAINE
* Run the following command  (NOTE: Goerli is the new network faucet to test on the Etheruem blockchain)
>> npx hardhat run scripts/deploy.js --network goerli

** When transaction delpoyed suucessfully, The network will return the address of the transaction constract:
Transactions with 1 ETH deployed to:  0x6e37800972541F50fC0FEbBFefb5ba5c788181Ba


TRANSACTION CONTEXT
review around 1:35:00 in the Web3.0 Video tutorial (Build and Deploy a Modern Web 3.0 Blockchain App)
The Transaction context allow to pass the data between the files in the projet


PASSING DATA FROM THE FORM TO THE APPLICATION AND BLOCKCHAIN
* Review start at 1:50:00 espcially in minute 1:56:00 explain the data flow circle
data flow is: from the transactioncontext the formData and setFormData, and handlechange are create, and then, pass to the TransactionContext Provider, Then in the Welcom window, the formData and setFormData, and handlechange are accepted

 