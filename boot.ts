module CityDefender{
    export class Boot extends Phaser.State {
	preload() {

	    this.load.image('preloadBar', 'assets/loader.png"');
	}

	create() {
	    this.input.maxPointers = 1;//maximum mice or fingers

	    this.stage.disableVisabilityChange = true;

	    if(this.game.device.desktop) {
		this.stage.scale.pageAlignHorizontally = true;
	    }

	    else {
		//mobile settings
	    }

	    this.game.start('Preloader', true, false);
	}

    }
}
