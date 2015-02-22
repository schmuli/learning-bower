# Learning Bower
A repository for learning how to work with Bower

## Bower and Git(Hub)

Bower works by looking for version tags in the requested Git repository.

In order to publish a Bower component, there are two important requirements:

1. The Git repository must be publicly accessible, with Tags used to mark versions
2. The Git repository must contain the component files

This means that any required files need to be committed to the repository, even if they are generated by transpiling, concating, minifying, or other tools, which is something that is generally avoided.

## Existing Solutions

There are two solutions being used:

1. Use one repository, tell bower to ignore any files not part of the component (sources, tests, etc.), and commit the built files into the repository. Doing so means that the built files are part of the developement repository even though they are updated at different times. Additionally, the bower.json configuration file has to be updated to indicate which files to ignore.

2. Use a seperate repository specifically for Bower, that contains only the built files and a bower.json configuration file. Doing so means managing two repositories for one component, which doesn't scale very well when managing a number of components. It is also more difficult to manage when using build tools, such as Gulp.

## The Challenge

To find a way to use a release branch and tags to manage built files, withough requiring a separate repository.

