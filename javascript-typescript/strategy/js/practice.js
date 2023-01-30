const data = [
    {
        name: 'Cerveza 1',
        country: 'Alemania',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://store-images.s-microsoft.com/image/apps.46843.14441313028680125.a948ab5f-0301-46af-9084-d956159457b9.cb7769b4-ef5e-43b3-9b6e-f7657a1790d8'
    },
    {
        name: 'Cerveza 1',
        country: 'Alemania',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://store-images.s-microsoft.com/image/apps.46843.14441313028680125.a948ab5f-0301-46af-9084-d956159457b9.cb7769b4-ef5e-43b3-9b6e-f7657a1790d8'
    },
    {
        name: 'Cerveza 1',
        country: 'Alemania',
        info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        image: 'http://store-images.s-microsoft.com/image/apps.46843.14441313028680125.a948ab5f-0301-46af-9084-d956159457b9.cb7769b4-ef5e-43b3-9b6e-f7657a1790d8'
    }
];

class InfoContext {
    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, i) => {
            return ac + `
                <div>
                    <h2>${i.name}</h2>
                    <p>${i.country}</p>
                </div>
                <hr>
            `
        }, "")
    }
}

class DetailListStrategy {
    show(data, element) {
        element.innerHTML = data.reduce((ac, i) => {
            return ac + `
                <div>
                    <h2>${i.name}</h2>
                    <p>${i.country}</p>
                    <p>${i.info}</p>
                </div>
                <hr>
            `
        }, "")
    }
}

const strategies = [
    new ListStrategy(),
    new DetailListStrategy()
]

const info = new InfoContext(
    new ListStrategy(),
    data,
    content
)

info.show();

slcOptions.addEventListener('change', (event) => {
    const op = event.target.value;
    console.log(event)
    info.setStrategy(strategies[op]);
    info.show()
})