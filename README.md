# Fuck Your Logs!

Literally!  Add profanity to your logs and make debugging a little more bearable.

## Usage

It's easy (though totally unfinished right now)!  Just include log_fuck's JS file and start using it!

````javascript
console.fuck(); // => fuck (at <anonymous>:2:9)
````

Just like `log`, you can pass arguments to `fuck` and those will be printed.

````javascript
console.fuck(1,2,3); // => fuck (at <anonymous>:2:9)
                     // => 1 2 3
````

## Todo

- [ ] Test in other browsers (currently, only tested in Chrome)
- [ ] Make it a real NPM module that you can drop in
  - it should work in Node (maybe?)
