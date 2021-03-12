// Inspired by source #4

class Debouncer extends Function {
  constructor(duration, callback) {
    super();

    this.callback = callback;
    this.duration = duration;
    this.timeout = -1;
    
    // The value returned by this constructor is a callable
    // proxy which when called will instead call `this._call`
    return new Proxy(this, {
      apply: (target, thisArg, args) => target._call(...args)
    });
  }
  
  // Creates a promise that calls the user's function
  // promise resolves once user's function resolves
  // promise will not resolve if the timeout never runs
  // so calling this again will delete the old timeout
  // so it can only run with the latest every this.duration
  _call(...args) {
    window.clearTimeout(this.timeout);
    this.timeout = -1;
    return new Promise((resolve, reject) => {
      this.timeout = window.setTimeout(() => {
          resolve(this.callback(...args))
        },
        this.duration
      );
    });
  }
}

export default Debouncer;