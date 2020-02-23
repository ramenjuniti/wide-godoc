var toggle = true

chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle
    chrome.browserAction.setIcon({ path: (toggle ? "icon.png" : "icon-disabled.png") });
    chrome.tabs.sendMessage(tab.id, { wide: toggle })
})

chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message.reload) {
        callback({ wide: toggle })
    }
})