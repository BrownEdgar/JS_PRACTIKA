const imageContainer = document.getElementById('image-container');
const cols = document.querySelectorAll('.grid-col');
const loader = document.getElementById('loader');
const errorMessage = document.getElementById('error-message');
let colShownNum = 0;
let photos = [];
let imagesLoaded;
let totalImages;
let loadDone = false;


const UNSPLASH_API_KEY = 'OiC-yMMbU34U-QoesdWGn8JIGKVhYb53D5InbGCCcks';
const api_url = `https://api.unsplash.com/photos/?client_id=${UNSPLASH_API_KEY}`;

const count = 20;

const randomPhotosUrl = `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_API_KEY}&count=${count}`



async function getPhotos() {
	loadDone = false;
	loader.hidden = false;
	errorMessage.style.display = 'none'
	try {
		const response = await fetch(randomPhotosUrl);
		photos = await response.json();
		displayPhotos();
	} catch (error) {
		errorMessage.textContent = "50 limit is eceeded please try after an hour";
		errorMessage.style.display = 'block';
		loadDone = true;
		loader.hidden = true;
	}
}


const hasImageLoaded = () => {
	imagesLoaded++;
	if (imagesLoaded === totalImages) {
		loadDone = true;
		loader.hidden = true;
	}
}

const setAttributes = (el, attr) => {
	for (const key in attr) {
		el.setAttribute(key, attr[key])
	}
}


const getColHeights = () => {
	const colHeights = [cols[0].clientHeight, cols[1].clientHeight, cols[2].clientHeight];
	console.log(colHeights);
	const visibleColHeight = colHeights.filter(height => height);
	return visibleColHeight;
}

const findShorterCol = () => {
	const heights = getColHeights();
	return heights.indexOf(Math.min(...heights))
}

const displayPhotos = () => {
	imagesLoaded = 0;
	totalImages = photos.length;
	photos.forEach((photo,index) => {
		const link = document.createElement('a');
		link.className = `grid-item-${index}`;
		setAttributes(link, { href: photo.links.html,target: '_blank' });

		const image = document.createElement('img');
		setAttributes(image, { 
			src: photo.urls.regular, 
			alt: photo.alt_description,
			title: photo.description	
		})
		image.addEventListener('load', hasImageLoaded);
		link.append(image);
		setTimeout(() => {
			if (colShownNum === 3) {
				//append image in shorter column
				const shoterColIndex = findShorterCol();
				cols[shoterColIndex].append(link);
			} else {
				cols[index % 3].append(link);
			}
		}, 100 * index);
	})
}



window.addEventListener('scroll', (e) => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight && loadDone) {
		checkScrollBottomAfter1Sec()
	 }
})

function checkScrollBottomAfter1Sec() {
	setTimeout(() => { 
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight && loadDone) {
			getPhotos()
		}
	 }, 1000)
}
getPhotos()