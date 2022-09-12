import {NodePlopAPI} from "plop"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({helpers: true})

    plop.setHelper("includes", (array, string, options) => {
        if (array.includes(string)) {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    })
}

export = generator
