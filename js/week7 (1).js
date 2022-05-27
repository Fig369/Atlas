try {
    foo();
  } catch (err) {
    console.error(err.message);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

function fizz () {
    throw new Error("my error message")
}

function buzz () {
    try {
        fizz()
    } catch  (err) {
        console.log(err.message)
    }
}