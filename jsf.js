window.onload = function () 
{
	
	var windows = document.querySelector('#window');
	var links = document.querySelector('#link');
	var closes = document.querySelector('#close');
	var overlay = document.querySelector('#overlay');
	links.onclick = function () {
		windows.className = ('window showing');//поменяли класс
		overlay.style.opacity = '0.3';
		windows.style.position = 'static';
		links.style.display = 'none';
	}
	closes.onclick = function () {
		windows.className = ('window');//поменяли класс
		overlay.style.opacity = '0';
		links.style.display = '';
		windows.style.position = 'absolute';
	}
}		