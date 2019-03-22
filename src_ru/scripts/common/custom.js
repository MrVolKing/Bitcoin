$(document).ready(() => {

    // popap

    body = $('body');

    $('.btn').click(function() {
        // $('.modalDialogCustom').addClass('modalDialogCustom_active');
        $('.modalDialogCustom').show();
        $(body).css('overflow', 'hidden');

        // setTimeout(function(){
        //     $('.shadow_popap').addClass('opasity');
        // }, 500);

    });

    $('.contentpopap__close, .shadow_popap').click(function() {
        // $('.modalDialogCustom').removeClass('modalDialogCustom_active');
        $('.modalDialogCustom').hide();
        $(body).css('overflow', 'visible');
        $('.shadow_popap').removeClass('opasity');
    });


    //counter

    const time = 1000;
    let loadindex = 1;
    
    $(window).scroll( () => {
        $('#counter').each(function(){
            let 
                cPos = $('.sect5').offset().top
                topWindow = $(window).scrollTop();
                if(cPos < topWindow) {
                    if(loadindex < 2) {
                        $('div').each(function(){
                            var 
                            i = 1,
                            num = $(this).data('num'),
                            step = 1 / (num * num * num),
                            that = $(this),
                            int = setInterval(function(){
                            if (i <= num) {
                                that.html(i);
                            }
                            else {
                                loadindex = 2;
                                clearInterval(int);
                            }
                            i++;
                            },0.01);
                        }); 
                    }
                    
                }
            
        });

    });
    


});




// const ready = (selector, callback) => {
// 	window.addEventListener('DOMContentLoaded', function () {
// 		const elems = [...document.querySelectorAll(selector)];
// 		if (elems.length) {
// 			for (let elem of elems) {
// 				callback(elem);
// 			}
// 		}
// 	});
// };

// ready('.counter', (stat) => {
// 	// pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
// 	const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
// 	const time = 1000;
// 	let result = [...patt.exec(stat.textContent)];
// 	let fresh = true;
// 	let ticks;
	
// 	// Remove first full match from result array (we dont need the full match, just the individual match groups).
// 	result.shift();
// 	// Remove undefined values from result array where they didnt have a match in one of the optional regex groups
// 	result = result.filter(res => res != null);

// 	while (stat.firstChild) {
// 		stat.removeChild(stat.firstChild);
// 	}

// 	for (let res of result) {
// 		if (isNaN(res)) {
// 			stat.insertAdjacentHTML('beforeend', `<span>${res}</span>`);
// 		}
// 		else {
// 			for (let i = 0; i < res.length; i++) {
// 				stat.insertAdjacentHTML('beforeend',
// 					`<span data-value="${res[i]}">
// 						<span>0</span>
// 						${Array(parseInt(res[i]) + 1).join(0).split(0).map((x, j) => `
// 							<span>${j}</span>
// 						`).join('')}
// 					</span>`
// 				);
// 			}
// 		}
// 	}

// 	ticks = [...stat.querySelectorAll('span[data-value]')];

// 	let activate = () => {
// 		let top = stat.getBoundingClientRect().top;
// 		let offset = (window.innerHeight * 3 / 4);

// 		setTimeout(() => {
// 			fresh = false;
// 		}, time);

// 		if (top < offset) {
// 			setTimeout(() => {
// 				for (let tick of ticks) {
// 					let dist = parseInt(tick.getAttribute('data-value')) + 1;
// 					tick.style.transform = `translateY(-${(dist) * 100}%)`
// 				}
// 			}, fresh ? time : 0);
// 			window.removeEventListener('scroll', activate);
// 		}
// 	}
// 	window.addEventListener('scroll', activate);
// 	activate();
// });


