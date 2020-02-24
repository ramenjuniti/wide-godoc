var host = location.hostname

// godoc.org
var gdHeader
var gdMain
var gdFooter

// pkg.go.dev
var pgdHeader
var pgdMainContainer
var pgdMainContent
var pgdFooter

if (host === "godoc.org") {
    gdHeader = document.querySelector("body > nav > div")
    document.querySelector("body > div.container").setAttribute("id", "main")
    gdMain = document.querySelector("body > div#main")
    gdFooter = document.querySelector("body > div#x-footer")
} else {
    pgdHeader = document.querySelector("div.Header")
    pgdMainContainer = document.querySelector("div.Container")
    pgdMainContent = document.querySelector("div.DetailsContent")
    pgdFooter = document.querySelector("div.Footer-links ")
}

function toggle(message) {
    if (message.wide) {
        if (host === "godoc.org") {
            gdHeader.classList.remove("container")
            gdHeader.classList.add("container-fluid")
            gdMain.classList.remove("container")
            gdMain.classList.add("container-fluid")
            gdFooter.classList.remove("container")
            gdFooter.classList.add("container-fluid")
        } else {
            pgdHeader.classList.add("wide-godoc")
            pgdMainContainer.classList.add("wide-godoc")
            pgdMainContent.classList.add("wide-godoc")
            pgdFooter.classList.add("wide-godoc")
        }
    } else {
        if (host === "godoc.org") {
            gdHeader.classList.add("container")
            gdHeader.classList.remove("container-fluid")
            gdMain.classList.add("container")
            gdMain.classList.remove("container-fluid")
            gdFooter.classList.add("container")
            gdFooter.classList.remove("container-fluid")
        } else {
            pgdHeader.classList.remove("wide-godoc")
            pgdMainContainer.classList.remove("wide-godoc")
            pgdMainContent.classList.remove("wide-godoc")
            pgdFooter.classList.remove("wide-godoc")
        }
    }
}

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    toggle(message)
})

chrome.runtime.sendMessage({ reload: true }, toggle)