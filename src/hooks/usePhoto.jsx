import { useEffect, useState } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

const imageCache = {};

const usePhoto = photoName => {
	const [photoURL, setPhotoURL] = useState(null);

	useEffect(() => {
		if (imageCache[photoName]) {
			setPhotoURL(imageCache[photoName])
			return;
		}


		async function fetchPhoto() {
			try {
				const photoRef = ref(storage, photoName);
				const url = await getDownloadURL(photoRef);
				setPhotoURL(url);
			} catch (error) {
				console.error('Error fetching photo', error);
			}
		}
		fetchPhoto();
	}, [photoName]);
	return photoURL;
};

export default usePhoto;
