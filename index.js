module.exports = function flexy(string) {
  if (typeof string !== "string") throw new TypeError("Flexy wants a string!");
  return string.replace(/\s/g, "");
};
