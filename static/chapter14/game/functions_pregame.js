function deleteVar(name) {
  document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT' + '; path=/'
}

// Creates cookie

function setVar(name, value, expires) {
  document.cookie =
    name +
    '=' +
    escape(value) +
    '; path=/' +
    (expires == null ? '' : '; expires=' + expires.toGMTString())
  location.reload()
}

// Checks cookie

function readVar(name) {
  var fullName = name + '='

  var val = 0

  var strings = document.cookie.split(';')

  for (var i = 0; i < strings.length; i++) {
    var str = strings[i]

    while (str.charAt(0) == ' ') str = str.substring(1, str.length)

    if (str.indexOf(fullName) == 0)
      val = parseInt(str.substring(fullName.length, str.length))

    if (isNaN(val)) val = 0
  }

  return val
}

// Increase cookie value

//adds 1 to cookie value

function varPlus1(name) {
  var val = readVar(name)

  val = 1

  setVar(name, val)
}
