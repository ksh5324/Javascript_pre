const strObj = new String();
console.log(strObj);

// --------------------------------------

const str = "Hello world";
str.search(/o/); // 4
str.search(/x/); // -1

// --------------------------------------

const str = "Hello world";
str.startsWith("He");
str.endsWith("ld");

// --------------------------------------

const str = "Hello";
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
  console.log(str[i]);
}

// --------------------------------------

const str = "Hello World";
str.substring(1, 4);
str.substring(1);

// --------------------------------------
