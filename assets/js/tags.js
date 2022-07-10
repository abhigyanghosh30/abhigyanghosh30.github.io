
function toggleElement(element, show) {
    var target = document.getElementById(element.getAttribute('aria-controls'));

    if (target) {
        element.setAttribute('aria-expanded', show);
        target.setAttribute('aria-hidden', !show);
    }
}

function setupListTreeToggle(listTreeToggle) {
    listTreeToggle.addEventListener('click', function (event) {
        event.preventDefault();
        var expand = this.getAttribute('aria-expanded') === 'true' ? false : true;
        toggleElement(listTreeToggle, expand);
    });
}

// Set up all list trees on the page.
var listTreeToggles = document.querySelectorAll('.p-list-tree__toggle');
for (var i = 0, l = listTreeToggles.length; i < l; i++) {
    setupListTreeToggle(listTreeToggles[i]);
}
