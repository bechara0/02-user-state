import React, { useState } from "react";

const gifs = {
	dogs: "https://s.yimg.com/ny/api/res/1.2/vNPrH9LWZeAxvfsI1zEXBQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTQyMDtoPTQxNDtjZj13ZWJw/https://s.yimg.com/os/en/homerun/feed_manager_auto_publish_494/69297bbb01b2e440776b01964654502d",
	cats: "https://img.huffingtonpost.es/uploads/2023/01/13/63c09f8f5dd81.gif",
	cage: "https://akns-images.eonline.com/eol_images/Entire_Site/201506/rs_500x342-150106140304-tumblr_m2y1rgRLCh1r4etbjo1_r1_500.gif?fit=around%7C500:342&output-quality=90&crop=500:342;center,top",
	other: "https://media.tenor.com/rV8mpdXgZpAAAAAd/i-show-speed-speed.gif",
};

export const GifSelector = () => {
	const [image, setImage] = useState(null);

	return (
		<form>
			<h1>GifSelector</h1>
			<div>
				<label>
					<input
						type="radio"
						name="cats"
						onChange={() => setImage(gifs.cats)}
					/>
					Gato
				</label>
				<label>
					<input
						type="radio"
						name="dogs"
						onChange={() => setImage(gifs.dogs)}
					/>
					Perros
				</label>
				<label>
					<input
						type="radio"
						name="cage"
						onChange={() => setImage(gifs.cage)}
					/>
					Nicolas Cage
				</label>
				<label>
					<input
						type="radio"
						name="otro"
						onChange={() => setImage(gifs.other)}
					/>
					Otro
				</label>
			</div>
			{image && <img src={image} alt="" />}
		</form>
	);
};
