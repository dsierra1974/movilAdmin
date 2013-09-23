// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {
            // Core Libraries
            "jquery": "libs/jquery",
            "jquerymobile": "libs/jquerymobile",
            "underscore": "libs/lodash",
            "backbone": "libs/backbone",
            "jqueryMigrate": "jquery-migrate",
            "jqueryUI": "jquery-ui-min",
            "fastClick": "libs/fastclick"
      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

            "backbone": {
                  "deps": [ "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            }

      } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "routers/mobileRouter" , "fastClick" ], function( $, Backbone, Mobile, FastClick) {

    window.addEventListener('load', function () {
        new FastClick(document.body);
    }, false);

	$( document ).on( "mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function() {
			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
		}
	)

    //window.utils.loadTemplate(['JqtView' ],  function() {
        require( [ "jquerymobile" ], function() {
            // Instantiates a new Backbone.js Mobile Router

            this.router = new Mobile();
        });
    //});
} );