const sass = require('node-sass')
const { writeFileSync } = require('fs')
const sassPromise = (fileName) => new Promise((resolve, reject) => {
    const file = `${fileName}.scss`
    sass.render({file}, (err, res) => {
        if (err == null) {
            resolve(res.css)
        } else {
            reject(err)
        }
    })
})

if (process.argv.length == 3) {
    console.log("starting to compile scss file")
    sassPromise(process.argv[2]).then((res) => {
        const output = `${process.argv[2]}.css`
        writeFileSync(output, res)
        console.log(`scss file has been converted to css and saved as ${output}`)
               
    }).catch(console.log)
}