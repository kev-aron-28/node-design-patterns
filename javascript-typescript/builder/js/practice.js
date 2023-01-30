class Form {
    constructor(controls, actions) {
        this.controls = controls;
        this.actions = actions;
    }

    getContent() {
        return `<form 
            method="post" 
            action="${this.action}"
            ${this.controls.reduce((ac, c) => {
            return ac + `<div>
                    ${this.getLabel(c)}
                    ${this.getInput(c)}
                </div>`
        }, "")}
        >`
    }

    getLabel(control) {
        return `<label>${control.text}</label>`;
    }

    getInput(control) {
        return `<input 
            type="${control.type}"
            id="${control.name}"
            name="${control.name}">`
    }
}

class FormBuilder {
    constructor() {
        this.reset()
    }

    reset() {
        this.action = "";
        this.controls = [];
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({
            name,
            text,
            type: "text"
        })
        return this;
    }

    build() {
        const frm = new Form(this.controls, this.action);
        this.reset();
        return frm;
    }
}

class FormDirector {
    constructor(formBuilder) {
        this.setBuilder(formBuilder);
    }

    setBuilder(formBuilder) {
        this.formBuilder = formBuilder;
    }

    createPeopleForm() {
        this.formBuilder.reset();
        this.formBuilder
            .setText('firstName', 'Nombre')
            .setText('lastName', 'Apellido');
    }
}

const frmBuilder = new FormBuilder();
const personForm = frmBuilder
    .setAction("add.php")
    .setText("firstName", "Nombre")
    .build();

form1.innerHTML = personForm.getContent();

const director = new FormDirector(frmBuilder);
director.createPeopleForm();
form3.innerHTML = frmBuilder.build().getContent();
