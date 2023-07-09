export const util = {
    toggle: function(views, name) {
        for (let i = 0; i < views.length; i++) {
            if (views[i].id == name) {
                views[i].style.display = "block";
            } else {
                views[i].style.display = "none";
            }
        }
    },
    register: function(key, value) {
        if (!sessionStorage.getItem(key)) {
            sessionStorage.setItem(key, value);
        }
    },
    attach: function(key, controllers, views) {
        for (let i = 0; i < controllers.length; i++) {
            controllers[i].addEventListener("click", () => {
                this.toggle(views, controllers[i].name);
                sessionStorage.setItem(key, controllers[i].name);
            });

            if (controllers[i].name == sessionStorage.getItem(key)) {
                controllers[i].click();
            }
        }
    },
};
