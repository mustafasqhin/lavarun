var creditsState = {
    create: function() {
        background = new Background(game);
        background.create();
        this.returnButton = game.add.button(64, 64, 'back_button', this.goToMenu, this);

        this.creator = game.add.text(game.world.centerX, 200, 'programlama, tasarım:', {
            fill: '#424242'
        });
        this.creator.anchor.setTo(0.5, 0.5);
        this.creatorName = game.add.text(game.world.centerX, 230, 'Mustafa Şahin', {
            fill: '#fff',
            fontSize: 48
        });
        this.creatorName.anchor.setTo(0.5, 0.5);

        this.musicCreator = game.add.text(game.world.centerX, 400, 'Müzik ve ses:', {
            fill: '#424242'
        });
        this.musicCreator.anchor.setTo(0.5, 0.5);
        this.musicCreatorName = game.add.text(game.world.centerX, 430, 'Lava run ltd', {
            fill: '#fff',
            fontSize: 48
        });
        this.musicCreatorName.anchor.setTo(0.5, 0.5);

    },

    goToMenu: function() {
        game.state.start('menu');
    }
};