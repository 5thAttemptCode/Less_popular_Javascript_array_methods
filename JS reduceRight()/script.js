const logActions = [
    "login",
    "click_products_mnenu",
    "select_products_item",
    "add_to_cart",
    "checkout",
    "logout"
]

 const logList = document.getElementById("log-list")

//logActions.reduceRight((action) => {
//We are not using the accumulator in this case so we use "_" below
//We could also do it like in line 12
 logActions.reduceRight((_, action) => {
    let listItem = document.createElement("li")
    listItem.textContent = `Action performed: ${action}`
    logList.appendChild(listItem)
 }, "")

//The empty string, "", is the initial value of the accumulator, but we dont
// use one, thats why its empty. We could also remove them in this case