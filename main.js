var left = document.getElementById('left');
var right = document.getElementById('right');
var content = document.querySelectorAll('.content');
var slideHead = document.querySelectorAll('.slide-head');
var current = 0;

// Clear Contents
function reset() {
	for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'none';
		slideHead[i].style.display = 'none';
	}
}

function startSlide() {
    reset();
    content[0].style.display = 'block';
	slideHead[0].style.display = 'block';
}

// declaring function for left and right slide
function slideLeft() {
    reset();
	content[current - 1].style.display = 'block';
	slideHead[current - 1].style.display = 'block';
	current--;
}

function slideRight() {
    reset();
	content[current + 1].style.display = 'block';
	slideHead[current + 1].style.display = 'block';
	current++;
}

// click event listeners
left.addEventListener('click', function() {
    if (current === 0) {
		current = content.length;
	}
	slideLeft();
});

right.addEventListener('click', function() {
    if (current === content.length - 1) {
		current = -1;
	}
	slideRight();
});

// set automatic slider
function automatic() {
	reset();
	if (current >= content.length) {
		current = 0;
	}
	content[current].style.display = 'block';
	slideHead[current].style.display = 'block';
	current++;
}

startSlide();
setInterval(automatic, 10000);
