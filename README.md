This minimal setup has only five files: three configuation, one html and one javascript.

Rename index.js to app.js

Before writing boilerplate for our React app, let's quickly go over what happens when we visit a website with front-end developed using React. When

Before diving into setup, let's take some time to understand how a react app works. When a user enters url a GET request is sent. The GET request returns a skeleton HTML page with a hook to mount React components.Generally, this hook is a div tag with id set to"root". A javascript file with all the react code is supplied to this hook.The react app is mounted on this hook, a div tag with id "root", and renders its components.

Web browsers take time to implement latest Javascript features. I you do not want to wait till every major browser has implemented the feature you want to use, try Babel. Babel ensures compatibility across browsers by converting ES6, ES7 and later features into ES5 code. ES5 Since, all web browsers can run ES5 specification,which came out in 2009.

# Next,create 'app' directory inside application root and add 'app.js'. ReactDOM.render method will put 'App' component as direct child of 'root' div element. If we open 'index.html', we will se title tag in web browser 'Pray this works'. But our react component is not yet active. Let's work to make it happen.

Like most people, I started out with create-react-app to learn react. It is easy to setup and hides a lot of complexity that would impede learning during early days. Yet, it makes me a little uncomfortable. It has too many moving parts and when something does go wrong, I have no idea where to look. And there goes my weekend.

    			This minimal setup has only five files: three configuation, one html and one javascript.

===================================================================================================
Starting Point
====

Like most people, I started out with create-react-app to learn react. Create-react-app was easy to setup and hid a lot of complexity that would have impedes learning during early days. Yet, it made me a little uncomfortable. It had too many moving parts and when something went wrong, I took me a lot of time. Simply because I had no idea where to look for errors. So, began my quest to find a simple react project setup that would be easy to debug. I read several articles, studied webpack documentation and cloned many git repositories. The guide presented below is an amalgamation of ideas from several sources. < Let's dive in.>

Before diving into setup, let's take some time to understand how a react app works. When a user enters url a GET request is sent. The GET request returns a skeleton HTML page with a hook to mount React components. Generally, this hook is a div tag with id set to "root". A javascript file with all the react code is rendered at this mount point.

===========================
Webpack
===========================

First of all, create a new project directory. Then, initialize project by running 'npm init' or 'yarn init'. This will create a package.json file.

Install the following webpack modules as development dependencies: webpack, webpack-cli and webpack-dev-server.

Create webpack.config.js in root folder.

Now, we are going to specify entry file for our bundler, which will serve as starting point for building dependency graph.

================
Dist and index.html
================
Now, we will create directory named 'dist' and add index.html file. <div id="root"/> will serve as mounting point for our React application.

=================
Finally
=================
Install 'react' and 'react-dom' packages.

Next,create 'app' directory inside application root and add 'app.js'. ReactDOM.render method will put 'App' component as direct child of 'root' div element.

Finally, our app works.

==============================================
Bundle.js
======================================
We can split our front-end into a hundred different files in as many folders or dump everything into a single monolithic block. React does not care about how we organise code. All it needs to know is an entry point. It will traverse the entire code, compile it, resolve namespaces and build its dependency graph into a javascript file, which will be called 'bundle.js'.

Notice that this 'bundle.js' is not initially present in 'dist' directory. It will be generated automatically. Once you have started your React app, go back to 'dist' folder, you will find it there.

But our React app does not know where to find 'bundle.js'. Therefore, we are going to add this script tag just before closing body tag to include 'bundle.js' file.

============================================
CSS Loader
====================================
Webpack only understands javascript. It disregards anything that is not javascript code. Therefore, it cannot process css or image file on its own. It needs special functions to handle external filetypes. This is where webpack Loaders come into picture. These loaders extend the functionality of React by handling html, css, image, etc files. To handle css file,install 'css-loader' and 'style-loader' and the following lines to webpack.config.js.

This tells webpack that Whenever it encounters .css file, run 'css-loader' followed by 'style-loader'.

==================================
Babel
==================================
Significant portion of internet users still use old Web browsers that do not understand latest Javascript features. If you do not want to wait till every single one of them has migrated to latest browser, try Babel. Babel is a javascript compliler that converts ES6, ES7 and later features into ES5 code. ES5 specification is very stable and available on all browsers as it has been around for a long time, since 2009.

First of all install these packages as dev dependencies : babel-core, babel-loader, babel-preset-env and babel-preset-react.
Next, we will tell webpack that we will be using babel-loader on all .js and .jsx files.

Finally create .babelrc file and add the following lines.

'env' preset tells babel to use 'ES6' language features. Second line ' "targets": { "browsers": ["last 2 versions"] ' directs babel to use only that features that are needed for last two versions of all web browsers. This will help in reducing the size of our 'bundle.js'. Lastly, 'react' preset allows us to use 'JSX' in React.

======================
Hot module reloading
======================
Lastly, with four lines of code we are going to save tens, maybe even hundreds, of hours worth of developer's time. I am talking about 'Hot Module Reloading'. With HMR, any change we make in React app would be visible in our browser immediately. There is no need to restart server and recompile our code. All dependencies would be resolved and modules reloaded without human intervention.

First, install 'react-hot-loader' with npm/yarn.

Then, require 'react-hot-loader/patch' to be run before entry file 'app.js'. After that, create new instance of webpack plugin 'HotModuleReplacementPlugin().

Finally, add this line 'module.hot.accept()' to 'app.js' file.

Now fire up and start developing your React app.

In the next article, I am going to discuss how to setup MERN app.
