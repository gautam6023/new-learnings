//When function a which returns an Object

function createUser(name: string, age: number): { name: string; age: number } {
  return { name: name, age: age };
}

createUser("Gautam", 23);
