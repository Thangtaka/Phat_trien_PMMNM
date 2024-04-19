var updateBtns = document.getElementsByClassName('update-cart');

for (var i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId, 'action', action)
        console.log('user:', user)
        
        
        if (user === "AnonymousUser") {
            console.log('user not')
        } else {
            console.log('user logged in, success add')
            updateUserOrder(productId, action)
        }
    });
}

function updateUserOrder(productId, action) {
    var url = 'http://127.0.0.1:8000/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log('data', data)
        location.reload()
    });
}
