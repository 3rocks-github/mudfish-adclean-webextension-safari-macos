function show(enabled, useSettingsInsteadOfPreferences) {
    if (useSettingsInsteadOfPreferences) {
        document.getElementsByClassName('state-on')[0].innerText = "Mudfish Adclean for macOS 확장 프로그램이 활성화되어 있습니다. 확장 프로그램 설정에서 비활성화할 수 있습니다.";
        document.getElementsByClassName('state-off')[0].innerText = "Mudfish Adclean for macOS 확장 프로그램이 비활성화되어 있습니다. 확장 프로그램 설정에서 활성화할 수 있습니다.";
        document.getElementsByClassName('state-unknown')[0].innerText = "Safari 확장 프로그램 설정에서 Mudfish Adclean for macOS 기능을 활성화 할 수 있습니다.";
        document.getElementsByClassName('open-preferences')[0].innerText = "종료 및 Safari 확장 프로그램 설정 열기";
    }

    if (typeof enabled === "boolean") {
        document.body.classList.toggle(`state-on`, enabled);
        document.body.classList.toggle(`state-off`, !enabled);
    } else {
        document.body.classList.remove(`state-on`);
        document.body.classList.remove(`state-off`);
    }
}

function openPreferences() {
    webkit.messageHandlers.controller.postMessage("open-preferences");
}

document.querySelector("button.open-preferences").addEventListener("click", openPreferences);
