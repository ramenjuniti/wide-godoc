var header = document.querySelector("body > nav > div")

document.querySelector("body > div.container").setAttribute("id", "main")
var main = document.querySelector("body > div#main")

var footer = document.querySelector("body > div#x-footer")

function toggle(message) {
    if (message.wide) {
        header.classList.remove("container")
        header.classList.add("container-fluid")

        main.classList.remove("container")
        main.classList.add("container-fluid")

        footer.classList.remove("container")
        footer.classList.add("container-fluid")
    } else {
        header.classList.add("container")
        header.classList.remove("container-fluid")

        main.classList.add("container")
        main.classList.remove("container-fluid")

        footer.classList.add("container")
        footer.classList.remove("container-fluid")
    }
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    toggle(message)
})

chrome.runtime.sendMessage({ reload: true }, toggle)