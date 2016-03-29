function isEven(num) {
  return num%2 === 0;
}

function Cow(name) {
  this.name = name || 'Anon cow';
}

Cow.prototype =  {
  greets(): (target) {
    if (!target) {
      throw new Error("missing target");
    }
    return `${this.name} greets ${target}`;
  },
};
