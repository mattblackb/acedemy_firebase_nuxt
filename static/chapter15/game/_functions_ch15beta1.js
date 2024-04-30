function hideShowButton() {
  let showcontinue = checkAvailable('15BETA1_TANGERINE_30-04-24')
  if (showcontinue) {
    document.getElementById('buybutton').style.display = 'none'
    document.getElementById('availableButton').style.display = 'block'
    document.getElementById('buybuttonImage').style.display = 'none'
    document.getElementById('availableButtonImage').style.display = 'block'
  } else {
    document.getElementById('buybutton').style.display = 'block'
    document.getElementById('availableButton').style.display = 'none'
    document.getElementById('buybuttonImage').style.display = 'block'
    document.getElementById('availableButtonImage').style.display = 'none'
  }
  function moduleAvailable(state) {
    if (state) {
      document.getElementById('buybutton').style.display = 'none'
      document.getElementById('availableButton').style.display = 'block'
      document.getElementById('buybuttonImage').style.display = 'none'
      document.getElementById('availableButtonimage').style.display = 'block'
    }
  }
}
function hideShowButton2() {
  let showcontinue = checkAvailable('15BETA1_TANGERINE_30-04-24')
  if (showcontinue) {
    document.getElementById('buybutton').style.display = 'none'
    document.getElementById('availableButton').style.display = 'block'
    document.getElementById('buybuttonImage').style.display = 'none'
    document.getElementById('availableButtonImage').style.display = 'block'
  } else {
    document.getElementById('buybutton').style.display = 'block'
    document.getElementById('availableButton').style.display = 'none'
    document.getElementById('buybuttonImage').style.display = 'block'
    document.getElementById('availableButtonImage').style.display = 'none'
  }
  function moduleAvailable(state) {
    if (state) {
      document.getElementById('buybutton').style.display = 'none'
      document.getElementById('availableButton').style.display = 'block'
      document.getElementById('buybuttonImage').style.display = 'none'
      document.getElementById('availableButtonimage').style.display = 'block'
    }
  }
}

function checkAvailable(method) {
  let returnedState = parent.c_1.checkAvailable(method)
  return returnedState
}

//Send a message to the parent window to show the dialog box
function emitCheck(method) {
  console.log('method', method)
  parent.c_1.greet(method)
}

const myTimeout = setInterval(hideShowButton, 1000)
