var tabContents = document.getElementsByClassName("swtch_container_full");
tabContents[0].style.display = "flex";
tabContents[1].style.display = "none";
tabContents[2].style.display = "none";

var ageButtons = document.getElementsByClassName("button_age");
ageButtons[0].className = "button_age_active";
ageButtons[1].className = "button_age";
ageButtons[2].className = "button_age";

function showTab(tabId, textId) {    
    var tabContents = document.getElementsByClassName("swtch_container_full");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.style.display = "flex";
    }

    var ageButtons = document.getElementsByClassName("button_age_active");
    for (var i = 0; i < ageButtons.length; i++) {
        ageButtons[i].className = "button_age";
    }

    var selectedButton = document.getElementById(textId);
    if (selectedButton) {
        selectedButton.className = "button_age_active";
    }
}