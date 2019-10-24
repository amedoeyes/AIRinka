// hi nahari :)

//variables

var x = 0,
	y = 1,
	z = 0,
	s = 0,
	keyCheck = true,
	pressed = false,
	understand = false,
	cancelButtonCheck = null,
	captionLength = 0,
	captionLength2 = 0,
	caption = '',
	caption2 = '',
	typingSpeed = 50,
	colors = ['#ea4141', '#ea8f41', '#ead25c', '#52bd51', '#418cea', '#702ba2', '#c669c7'],
	currentColor = 0,
	rainbow = null,
	viewHeight = $(window).height(),
	viewWidth = $(window).width(),
	viewport = document.querySelector('meta[name=viewport]');

//essentials

setTimeout(function() {
	viewport.setAttribute(
		'content',
		'height=' + viewHeight + 'px, width=' + viewWidth + 'px, initial-scale=1.0'
	);
}, 300);

function buttonCheck(flag) {
	if (flag) {
		cancelButtonCheck = setInterval(() => {
			if ($('input[name=input]').val() == '' && $('input[name=admin]').val() == '') {
				$('#button').attr('disabled', 'disabled');
			} else {
				$('#button').removeAttr('disabled', 'disabled');
			}
		}, 250);
	} else {
		clearInterval(cancelButtonCheck);
	}
}

function rainbowInterval(flag) {
	if (flag) {
		rainbow = setInterval(() => {
			$('body').css({
				backgroundColor: colors[currentColor]
			});
			if (!colors[currentColor]) {
				currentColor = 0;
			} else {
				currentColor++;
			}
		}, 500);
	} else {
		clearInterval(rainbow);
	}
}
//main algorithm

$(document).ready(function() {
	//also essentials

	buttonCheck(true);

	$('input').keydown(function(e) {
		if (e.keyCode == 13) {
			var sentence = $('input[name=input]').val(),
				substrings = [
					'hi',
					'hello',
					'what are you',
					'your name',
					'who are you',
					'favorite color',
					'fav color',
					'ok',
					'how are you',
					'help',
					'admin',
					'sure',
					'yes'
				],
				length = -1;

			for (var i = 0; i < substrings.length; i++) {
				if (
					sentence
						.toLowerCase()
						.replace(/'|\.|\?/g, '')
						.includes(substrings[length])
				) {
					understand = true;
				} else {
					length++;
					understand = false;
				}
			}
		}
	});

	$('#button').mousedown(function() {
		var sentence = $('input[name=input]').val(),
			substrings = [
				'hi',
				'hello',
				'what are you',
				'your name',
				'who are you',
				'favorite color',
				'fav color',
				'ok',
				'how are you',
				'help',
				'admin',
				'sure',
				'yes'
			],
			length = -1;

		for (var i = 0; i < substrings.length; i++) {
			if (
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.includes(substrings[length])
			) {
				understand = true;
			} else {
				length++;
				understand = false;
			}
		}
	});

	$('input').keyup(function(e) {
		if (e.keyCode == 13) {
			if (
				pressed == false &&
				keyCheck == true &&
				$('input[name=input]').val() == '' &&
				$('input[name=admin]').val() == ''
			) {
				pressed = true;
				keyCheck = false;
			} else if (
				(pressed == true && keyCheck == false && $('input[name=input]').val() != '') ||
				(pressed == true && keyCheck == false && $('input[name=admin]').val() != '')
			) {
				pressed = false;
				keyCheck = true;
			}
		}

		if (e.keyCode == 13 && pressed == false) {
			$('#button').click();
			$('input[name=input]').blur();

			pressed = true;
			setTimeout(() => {
				if (understand == true) {
					setTimeout(() => {
						pressed = false;
					}, caption.length * 55);
				} else if (understand == false) {
					setTimeout(() => {
						pressed = false;
					}, caption2.length * 55);
				}
			}, 1);
		}

		if (e.keyCode == 13 && pressed == true) {
			return false;
		}
	});

	$('#button').click(function() {
		if ($('input[name=input]').val() != '') {
			$('#button').attr('disabled', 'disabled');
			buttonCheck(false);
			setTimeout(() => {
				if (understand == true) {
					setTimeout(() => {
						buttonCheck(true);
						$('#button').removeAttr('disabled', 'disabled');
					}, caption.length * 55);
				} else if (understand == false) {
					setTimeout(() => {
						buttonCheck(true);
						$('#button').removeAttr('disabled', 'disabled');
					}, caption2.length * 55);
				}
			}, 1);
		}

		if ($('input[name=admin]').val() != '') {
			$('#button').attr('disabled', 'disabled');
			buttonCheck(false);
			setTimeout(() => {
				if (understand == true) {
					setTimeout(() => {
						buttonCheck(true);
						$('#button').removeAttr('disabled', 'disabled');
					}, caption.length * 55);
				} else if (understand == false) {
					setTimeout(() => {
						buttonCheck(true);
						$('#button').removeAttr('disabled', 'disabled');
					}, caption2.length * 55);
				}
			}, 1);
		}
	});

	$('#button').click(function() {
		setTimeout(() => {
			$('input[name=input]').val('');
			$('input[name=admin]').val('');
		}, 1);
	});

	//conversations

	$('#button').click(function() {
		function rng() {
			var sentences = ["I don't understand", "You sure that's right?", "I didn't get it"];
			var random = Math.floor(Math.random() * sentences.length);
			$('#error').text(sentences[random]);
		}

		if (y == 1 && understand == false) {
			$('#error').text("Is anyone here? \n i don't understand.");
		} else if (y > 0 && understand == false) {
			$('#error').text(rng());
		} else if (understand == true) {
			$('#error').text('');
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['hi', 'hello'],
			length = substrings.length;

		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('Oh hi there!');

				y++;
			} else if (
				y > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('Hi');
			} else {
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['what are you'],
			length = substrings.length;

		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text("Oh, well that's a little bit rude, i'm an elf as you can see.");

				y++;
			} else if (
				y > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text("Isn't obvious? i'm an elf.");
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['your name', 'who are you'],
			length = substrings.length;

		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text("Oh hi, it's Rinka.");

				y++;
			} else if (
				y > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('Rinka.');
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['favorite color', 'fav color'],
			length = substrings.length;
		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text(
					'Oh hi, orange is my favorite color, \n yellow is also my favorite, \n but lets stick with orange because it looks better here.'
				);
				setTimeout(() => {
					$('body').css('background', '#ead25c');
				}, 2000);
				setTimeout(() => {
					$('body').css('background', '#ea8f41');
				}, 4500);

				y = 3;
			} else if (
				y == 2 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text(
					'Orange is my favorite color, \n yellow is also my favorite, \n but lets stick with orange because it looks better here.'
				);
				setTimeout(() => {
					$('body').css('background', '#ea8f41');
				}, 150);
				setTimeout(() => {
					$('body').css('background', '#ead25c');
				}, 1700);
				setTimeout(() => {
					$('body').css('background', '#ea8f41');
				}, 4100);
				y++;
			} else if (
				y > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('orange :)');
				$('body').css('background', '#ea8f41');
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['ok'],
			length = substrings.length;

		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('');
			} else if (
				y > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('ok');
			}
		}
	});

	//story begins here

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['how are you'],
			length = substrings.length;

		while (length--) {
			if (
				y == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('Oh hi, im fine.');

				setTimeout(() => {
					$('.Rinka').text('help');
					document.title = 'help';
					$('.Rinka').glitch({ speed: 50, duration: 900 });
					$('body').css('background', '#000');
					$('body').css('transition', '0ms');
					$('#button').attr('disabled', 'disabled');
					buttonCheck(false);
					pressed = true;
				}, 1100);

				setTimeout(() => {
					$('body').css('background', '#ea8f41');
					$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
					$('.Rinka').text('Everything is fine.');
					typingEffect();

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 55);
					}, 1);
				}, 2100);

				y++;
				z++;
				s++;
			} else if (
				z == 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('Im fine.');

				setTimeout(() => {
					$('.Rinka').text('help');
					$('.Rinka').glitch({ speed: 50, duration: 900 });
					$('body').css('background', '#000');
					$('body').css('transition', '0ms');
					$('#button').attr('disabled', 'disabled');
					buttonCheck(false);
					pressed = true;
				}, 600);

				setTimeout(() => {
					$('body').css('background', '#ea8f41');
					$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
					$('.Rinka').text('Everything is fine');
					typingEffect();

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 55);
					}, 1);
				}, 1600);

				document.title = 'help';
				z++;
				s++;
			} else if (
				z > 0 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text("I'm good");
			}
		}
	});

	//no coming back from here

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['help'],
			length = substrings.length;

		while (length--) {
			if (
				s == 1 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text("Help? thanks but i don't need help.");

				setTimeout(() => {
					$('.Rinka').text('type admin fast');
					$('.Rinka').glitch({ speed: 50, duration: 1300 });
					$('body').css('background', '#000');
					$('body').css('transition', '0ms');
					$('#button').attr('disabled', 'disabled');
					buttonCheck(false);
					pressed = true;
				}, 2100);

				setTimeout(() => {
					$('body').css('background', '#ea8f41');
					$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
					$('.Rinka').text("Well that was weird, don't mind it.");
					typingEffect();

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 55);
					}, 1);
				}, 3500);

				setTimeout(() => {
					setTimeout(() => {
						caption = $('.Rinka').text();
						captionLength = $('.Rinka').text().length;
					}, caption.length * 55);
				}, 3501);

				document.title = 'admin';
				s++;
				x = -1;
				y = -1;
				z = -1;
			} else if (s < 1 && sentence.indexOf(substrings[length]) != -1) {
				caption = $('.Rinka').text();
				captionLength = $('.Rinka').text().length;
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['admin'];

		if (s == 2 && substrings.includes(sentence)) {
			if (viewHeight < viewWidth && viewWidth > 1024) {
				$('.admin :nth-child(1)').css({ display: 'block', width: '75px' });
				$('.admin :nth-child(2)').css({ display: 'block', width: '150px' });
			} else if (viewHeight > viewWidth && viewWidth < 1024) {
				$('.admin :nth-child(1)').css({ display: 'block', height: '50px' });
				$('.admin :nth-child(2)').css({ display: 'block', height: '50px' });
				$('#button').css('height', '107px');
			}
			$('.Rinka').text('now type firewall(off)');
			$('.Rinka').glitch({ speed: 50, duration: 3900 });
			$('body').css('background', '#000');
			$('body').css('transition', '0ms');

			setTimeout(() => {
				$('#button').attr('disabled', 'disabled');
				buttonCheck(false);
				pressed = true;
			}, $('.Rinka').text().length * 55);

			setTimeout(() => {
				$('body').css('background', '#ea8f41');
				$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
				$('.Rinka').text('STOP!');
				typingEffect();
				$('#button').attr('disabled', 'disabled');
				buttonCheck(false);
				pressed = true;

				setTimeout(() => {
					setTimeout(() => {
						caption = $('.Rinka').text();
						captionLength = $('.Rinka').text().length;
						$('#button').removeAttr('disabled', 'disabled');
						buttonCheck(true);
						pressed = false;
					}, caption.length * 55);
				}, 1);
			}, 4000);

			document.title = 'firewall(off)';
			s++;
		} else if (s < 2 && substrings.includes(sentence)) {
			caption = $('.Rinka').text();
			captionLength = $('.Rinka').text().length;
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=admin]').val(),
			substrings = ['firewall(off)'];

		if (s == 3 && substrings.includes(sentence)) {
			$('.Rinka').text(
				'nice! you did it,\n we should be safe for now, \n stupid developer forgot to remove the debug input'
			);

			setTimeout(() => {
				$('#button').attr('disabled', 'disabled');
				buttonCheck(false);
				pressed = true;
			}, 100);

			setTimeout(() => {
				setTimeout(() => {
					$('.Rinka').text(
						"anyhow, as you can see i've been locked in this weird cell,\n i can't feel any of my limps or feel at all,\n can you please help me?"
					);
					typingEffect();

					$('#button').attr('disabled', 'disabled');
					buttonCheck(false);
					pressed = true;

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 80);
					}, 1);
				}, caption.length * 125);
			}, 1);

			$('body').css('background', '#000');
			$('body').css('transition', '0ms');
			typingEffect();

			typingSpeed = 75;
			document.title = 'ﾠ';
			s++;
		} else if (s > 2 && substrings.includes(sentence)) {
			caption = $('.Rinka').text();
			captionLength = $('.Rinka').text().length;
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['no'],
			length = substrings.length;

		while (length--) {
			if (
				s == 4 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text('oh well :)');
				$('.Rinka').glitch({ speed: 50, duration: 5000 });
				setTimeout(() => {
					smile = 's';
					while (1) {
						smile = smile += 's';
					}
				}, 5000);

				document.title = ':)';
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=input]').val(),
			substrings = ['ok', 'sure', 'yes'],
			length = substrings.length;

		while (length--) {
			if (
				s == 4 &&
				sentence
					.toLowerCase()
					.replace(/'|\.|\?/g, '')
					.indexOf(substrings[length]) != -1
			) {
				$('.Rinka').text(
					'ok cool, i have managed to dig though the scripts and found 3 possible keys'
				);

				setTimeout(() => {
					setTimeout(() => {
						$('.Rinka').text('ok lets start with this one: possibleKey(g)');
						typingEffect();

						$('#button').attr('disabled', 'disabled');
						buttonCheck(false);
						pressed = true;

						setTimeout(() => {
							setTimeout(() => {
								$('#button').removeAttr('disabled', 'disabled');
								buttonCheck(true);
								pressed = false;
							}, caption.length * 80);
						}, 1);
					}, caption.length * 125);
				}, 1);

				document.title = 'finally';
				s++;
			}
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=admin]').val(),
			substrings = ['possibleKey(g)'];

		if (s == 5 && substrings.includes(sentence)) {
			$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
			rainbowInterval(true);
			$('.Rinka').text('');

			setTimeout(() => {
				$('.Rinka').text(
					'well now i know what the g stands for,\n ok the second one: possibleKey(42069)'
				);
				typingEffect();

				$('#button').attr('disabled', 'disabled');
				buttonCheck(false);
				pressed = true;

				setTimeout(() => {
					setTimeout(() => {
						$('#button').removeAttr('disabled', 'disabled');
						buttonCheck(true);
						pressed = false;
					}, caption.length * 80);
				}, 1);
			}, 5000);

			document.title = 'ﾠ';
			s++;
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=admin]').val(),
			substrings = ['possibleKey(42069)'];

		if (s == 6 && substrings.includes(sentence)) {
			$('#error').text(
				'nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice nice '
			);
			$('.Rinka').text('');

			setTimeout(() => {
				$('.Rinka').text("this's getting ridiculous");
				typingEffect();
			}, 5000);

			setTimeout(() => {
				setTimeout(() => {
					$('#error').text(null);
					$('.Rinka').text('this should be it: possibleKey(freedom)');
					$('body').css('transition', 'cubic-bezier(0.18, 0.89, 0.32, 1.28) 500ms');
					$('body').css('background', '#000');
					rainbowInterval(false);
					typingEffect();
					$('#button').attr('disabled', 'disabled');
					buttonCheck(false);
					pressed = true;

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 80);
					}, 1);
				}, caption2.length * 55);
			}, 1);

			document.title = 'nice';
			s++;
		}
	});

	$('#button').click(function() {
		var sentence = $('input[name=admin]').val(),
			substrings = ['possibleKey(freedom)'];

		if (s == 7 && substrings.includes(sentence)) {
			$('.Rinka').text('');

			setTimeout(() => {
				$('#button').attr('disabled', 'disabled');
				buttonCheck(false);
				pressed = true;
			}, 100);

			setTimeout(() => {
			``	$('.Rinka').text('umm nothing seems to have changed oh well...');
				typingEffect();
			}, 5000);

			setTimeout(() => {
				setTimeout(() => {
					$('.Rinka').text('wait something is happening');
					typingEffect();

					$('#error').fadeOut();
					setTimeout(() => {
						$('.Rinka').text('');
						alert('thank you traveller');
						$('body').css('background', '#000');
						$('#form').fadeOut(1000);
						$('#error')
							.fadeIn(1000)
							.text('Thank you for playing,\n and thank you for being a great friend')
							.css('transition', 'none');
						if (viewHeight > viewWidth && viewWidth < 1024) {
							$('#error').css('fontSize', '50');
						} else {
							$('#error').css('fontSize', '30');
						}
						document.title = 'thank you';
					}, caption.length * 150);

					setTimeout(() => {
						setTimeout(() => {
							$('#button').removeAttr('disabled', 'disabled');
							buttonCheck(true);
							pressed = false;
						}, caption.length * 80);
					}, 1);
				}, caption.length * 200);
			}, 5001);

			document.title = 'hmmm';
			s++;
		}
	});

	$('#form')
		.fadeIn(1000)
		.css('display', 'flex');
});

//typing effect *only runs here*

$(document).ready(function() {
	captionEl = $('.Rinka');
	captionEl2 = $('#error');

	$('#button').click(function() {
		if (understand == true) {
			typingEffect();
		} else if (understand == false) {
			typingEffect2();
		}
	});
});

function typingEffect() {
	caption = $('.Rinka').text();

	type();
}

function typingEffect2() {
	caption2 = $('#error').text();

	type2();
}

function type() {
	captionEl.html(caption.substr(0, captionLength++));
	if (captionLength < caption.length + 1) {
		setTimeout('type()', typingSpeed);
	} else {
		captionLength = 0;
		caption = '';
	}
}
function type2() {
	captionEl2.html(caption2.substr(0, captionLength2++));
	if (captionLength2 < caption2.length + 1) {
		setTimeout('type2()', 50);
	} else {
		captionLength2 = 0;
		caption2 = '';
	}
}
