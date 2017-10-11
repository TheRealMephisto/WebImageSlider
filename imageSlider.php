<div class="imageSliderDiv">
	<button class="imageSliderButton" id="imageSlideLeftButton" onclick="prev()"><h1><</h1></button>
	<ul class="imageSliderUl">
		<?php
		$pictureDir = "./WebImageSlider/Images/";
		$pictureFilenames = preg_grep('~\.(jpeg|jpg|png|JPG)$~', scandir($pictureDir));
		foreach ($pictureFilenames as $pictureFilename) {
			echo '<li><img src="'.$pictureDir.$pictureFilename.'" class="sliderImg"/></li>';
		}
		?>
	</ul>
	<button class="imageSliderButton" id="imageSlideRightButton" onclick="next()"><h1>></h1></button>
</div>