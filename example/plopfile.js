const config = async plop => {
    await plop.load("../.")

    plop.setGenerator("example", {
        description: "example generator",
        prompts: [
            {
                type: "checkbox",
                name: "toppings",
                message: "pizza toppings",
                choices: ["pepperoni", "onions"],
            },
        ],
        actions: [
            {
                type: "add",
                path: "order.txt",
                templateFile: "order.hbs",
            },
        ],
    })
}

module.exports = config
