const person = () => {
    let saveName = "Name"
    return {
        getName : () =>  saveName,
        setName : (name) => saveName = name
    }
}

let newPerson = person()
console.log("🚀 ~ file: private.js ~ line 10 ~ newPerson.getName()", newPerson.getName())
newPerson.setName('DuviDuvi')
console.log("🚀 ~ file: private.js ~ line 10 ~ newPerson.getName()", newPerson.getName())