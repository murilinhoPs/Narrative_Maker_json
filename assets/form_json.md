# Get form data into JSON

- #### fullName
  
```
  <!-- simple attribute -->
  <input type="text" name="fullName" value="Mario" />

=> {
    fullName: "Mario Izquierdo",
   }
```

### Example json

> $('#my-profile').serializeJSON();
my-profile = form id
>{
  fullName: "Mario Izquierdo",
  address: {
    city: "San Francisco",
    state: {
      name: "California",
      abbr: "CA"
    }
  },
  jobbies: ["code", "climbing"],
  projects: {
    '0': { name: "serializeJSON", language: "javascript", popular: "1" },
    '1': { name: "tinytest.js",   language: "javascript", popular: "0" }
  },
  selectOne: "rock",
  selectMultiple: ["red", "blue"]
}
