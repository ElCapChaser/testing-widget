(function() {
    const myWidget = document.getElementById('my-widget');
    console.log('widget',myWidget)
    var iDiv = document.createElement('div');
    iDiv.id = "input-box"
    iDiv.class = "input-box"
    myWidget.appendChild(iDiv)

    const input = document.createElement('input');
    input.id = "botting-label"
    input.type = "checkbox"
    myWidget.appendChild(input)

    console.log('getting loaded correctly')
    const button = document.getElementById('botting-label');
    console.log('button', button)
})();