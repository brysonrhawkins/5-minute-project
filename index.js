console.log("howdy");

function newEnvelope(){
    var envName = document.getElementById('envName').value;
    var envAmmount = document.getElementById('envAmmount').value;
    var envCategory = document.getElementById('envCategory').value;
    var envDescription = document.getElementById('envDescription').value;

    document.getElementById('message').innerHTML = envName + ' has successfully been created! enjoy saving!'

    document.getElementById('envInfo').innerHTML = envName + ' currently has ' + envAmmount + ' to only be used for ' + envCategory;
    document.getElementById('envDesc').innerHTML = envDescription
    console.log('Now storing: ' + envName);
    alert(document.getElementById('message').innerHTML = envName + ' has successfully been created! enjoy saving!')
}

class envelopeTemplate {
    constructor(envelope) {
        this.envelopeName = envelname;
        this.evnelopeAmmount = ammount;
        this.envelopeCategory = category;
        this.envelopeDescription = description;
    }
    updateName(envelopeName){

    }
}