// Размеры экранов
export const specialSizes = {
    screenSize: {w: window.screen.width, h: window.screen.height},
    availableScreenSize: {w: window.screen.availWidth, h: window.screen.availHeight},
    outerSize: {w: window.outerWidth, h: window.outerHeight},
    innerSize: {w: window.innerWidth, h: window.innerHeight},
    pageSize: {w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight},
}

// lineJoins типы
export const lineJoins = {
    miter: "miter",
    round: "round",
    bevel: "bevel",
}