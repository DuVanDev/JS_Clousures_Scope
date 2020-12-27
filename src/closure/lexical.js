
const buildCount = (i) => {
    let count = i
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount
}

const myBuildCount = buildCount(1)
myBuildCount()
myBuildCount()
myBuildCount()
myBuildCount()
myBuildCount()