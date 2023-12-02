let screen = vec(800, 600);

let titleFont = load_font("Arial", 30, "#F09D28");

let assets = {};

let images = [
	"data/slime1.png"
];
let sounds = [
	"data/plink.ogg"
];

document.addEventListener("DOMContentLoaded", function()
{
	canvas.width = screen.x;
	canvas.height = screen.y;

	scale_canvas(screen);

	// title/loading screen
	let title = new Thing();
	let load_progress = 0;
	let load_file = "";

	title.listen( "draw_4", () => {
		if( load_progress < 1.0 ) {
			draw_text( "Tidepool", screen.x * 0.5, screen.y * 0.5 - 15, titleFont, "center", 0.4 );
			draw_text( "Loading: "+round(load_progress * 100)+"% "+load_file, screen.x * 0.5 + 15, screen.y * 0.4, titleFont, "center", 0.5 );
		} else  {
			draw_text( "Tidepool", screen.x * 0.5, screen.y * 0.5 - 15, titleFont, "center", 1 );
			draw_text( "Click to Start ", screen.x * 0.5, screen.y * 0.5 + 15, titleFont, "center", 1 );

			load_file = "";
		}
	} );

	load_assets( images, sounds, ( prog, file, asst, type ) => {

		load_progress = prog;
		load_file = file;
		assets[ file ] = asst;

		log( load_progress+"% "+type+" "+file );
		if (load_progress >= 1.0) {
			debug = true;
			title.destroy();	// destroy the title page
			slime();
			/*
			title.listen( "mousedown", () => {
				//debug = true;
			} )
			 */
		}
	}, console.error );

	tick( true ); // turn on ticking; tick handlers will be called
});

// helpers
