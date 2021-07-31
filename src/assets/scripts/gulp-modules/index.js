@@include('./libs.js');
gsap.registerPlugin(ScrollTrigger);

class Tabs {
    constructor(tabs, content, activeClassName) {
        this.tabs = $(tabs)
        this.content = $(content)
        this.activeClassName = activeClassName

        this.init()
    }

    showActiveTab(idxTab) {
        this.tabs.removeClass(this.activeClassName)
        this.content.hide()

        this.tabs.filter((_, item) =>  $(item).data().tab === idxTab)
            .addClass(this.activeClassName)
        this.content.filter((_, item) => $(item).data().tabContent === idxTab)
            .fadeIn(300)
    }

    init() {
        this.tabs.on('click', e => {
            e.preventDefault()
            const idxTab = $(e.currentTarget).data().tab

            this.showActiveTab(idxTab)
        })

        this.showActiveTab(0)
    }
}

$(document).ready(() => {
    new Tabs('[data-tab]', '[data-tab-content]', 'active')
})