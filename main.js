const LinksSocialMedia = {
  github: 'xHateCreation',
  youtube: 'UCvgWIstrLM9TyvRt3yQYRwQ',
  facebook: 'xhatecreation',
  instagram: 'xhatecreation',
  twitter: 'XhateC'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
;(function () {
  // Init
  var container = document.getElementById('main')
  var inner = document.getElementById('container')
  var faixa = document.getElementById('faixa')

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event

      this.x = e.clientX - this._x * 1.5
      this.y = e.clientY - this._y * 1
    },
    setOrigin: function (event) {
      var e = event || window.event
      this._x = e.offsetLeft + e.offsetWidth / 2
      this._y = e.offsetTop + e.offsetHeight / 2
    },
    show: function () {
      return '(' + this.x + ', ' + this.y + ')'
    }
  }

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container)

  //----------------------------------------------------

  var counter = 0
  var refreshRate = 10
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0
  }

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event)
  }

  var onMouseLeaveHandler = function () {
    inner.style = ''
    faixa.style = ''
  }

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event)
    }
  }

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event)
    updateTransformStyle(
      ((mouse.x + inner.offsetHeight) / 20).toFixed(2),
      ((mouse.y + inner.offsetWidth) / 20).toFixed(2)
    )
  }

  var updateTransformStyle = function (x, y) {
    var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
    inner.style.transform = style
    inner.style.webkitTransform = style
    inner.style.mozTranform = style
    inner.style.msTransform = style
    inner.style.oTransform = style
  }

  //--------------------------------------------------------

  inner.onmousemove = onMouseMoveHandler
  inner.onmouseleave = onMouseLeaveHandler
  inner.onmouseenter = onMouseEnterHandler
})()
