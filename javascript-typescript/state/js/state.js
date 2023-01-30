class DocumentContext {
    constructor() {
        this.context = "";
        this.state = new BlankState();
    }

    setState(state) {
        this.state = state;
    }

    write(text) {
        this.state.write(this, text);
    }
}


class BlankState {
    write(documentContext, text) {
        documentContext.context = text;
        documentContext.setState(new WithContentState());
    }
}

class WithContentState {
    write(documentContext, text) {
        documentContext.context += " " + text;
    }
}

class ApprovedState {
    write(documentContext, text) {
        console.log("Document aprobado, ya no se modifica");
    }
}

const document = new DocumentContext();
document.write('pato')
console.log(document.state)
document.write('pato')
console.log(document.context)
