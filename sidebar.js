let sidebarItemOnClick = function(id) {
    const sidebarItem = document.getElementById(id);

    if("sidebar__item--inactive" in sidebarItem.classList) {
        activateSidebarItem(sidebarItem);
    } else {
        deactivateSidebarItem(sidebarItem);
    }
}

function activateSidebarItem(sidebarItem) {
    console.log("activate");
    const sidebarItems = Array.from(document.getElementsByClassName("sidebar__item"));

    sidebarItems.forEach(item => item.value = "inactive");

    sidebarItem.classList.remove("sidebar__item--inactive");
    sidebarItem.classList.add("sidebar__item--active");

    const sidebarSubitems = document.querySelector(`#${sidebarItem.id}__subitems`)
    sidebarSubitems.style.maxHeight = "100vmax";
}

function deactivateSidebarItem(sidebarItem) {
    console.log("deactivate");
    sidebarItem.classList.remove("sidebar__item--active");
    sidebarItem.classList.add("sidebar__item--inactive");

    const sidebarSubitems = document.querySelector(`#${sidebarItem.id}__subitems`)
    sidebarSubitems.style.maxHeight = "0";
}

// const teste = document.getElementById("sidebar__item-services");
// teste.addEventListener("click", function() { sidebarItemOnClick("sidebar__item-services") });