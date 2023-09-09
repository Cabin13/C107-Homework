function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fIDkeG5uN/model.json", modelLoaded)
}

function modelLoaded() {
    console.log("model loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
    }
}