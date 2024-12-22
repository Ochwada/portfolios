To achieve automatic detection of changes in build or dist directory, you can use tools like nodemon or chokidar-cli.

Using nodemon:

1. Install nodemon globally with npm install -g nodemon.
2. Run nodemon on build command with something like nodemon --exec npm run build --watch src.


In this command, --exec npm run build tells nodemon to run your build command whenever it detects a change, and --watch src tells it to watch the src directory for changes.