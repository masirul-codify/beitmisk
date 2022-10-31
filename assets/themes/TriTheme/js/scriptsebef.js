/*
 * Default scripts file
 *
 * @package  TriTheme
 * @company  Triangle Mena <http://trianglemena.com>
 * @developer  Maroun Melhem <http://maroun.me>
 * @developer  _REPLACE_WITH_DEV_NAME_
 */
jQuery(window).load(function () {
//    var footer_height = jQuery('.footer').height();
//    jQuery('.components_holder .sub_component').last().css('margin-bottom', footer_height);
});
jQuery(document).ready(function ($) {
    var width = jQuery(window).width();
    jQuery(window).scroll(function () {
        if (jQuery(".top_menu_wrapper.scrolled")) {
            if (jQuery(document).scrollTop() > 40) {
                jQuery(".top_menu_wrapper.scrolled").addClass('scrolling');
            } else {
                jQuery(".top_menu_wrapper.scrolled").removeClass('scrolling');
            }
        }
    });

    jQuery('.custom_focus').on('click',function(){
        jQuery(this).addClass('ripple');
    });

    //on click minus and plus buttons for reservation
//    jQuery('.search_field .input_wrapper .plus_btn').on('click', function () {
//        var value = parseInt(jQuery('.search_field .input_wrapper input[name="bedrooms-number"]').val());
//        var plus_value = value + 1;
//        jQuery('.search_field .input_wrapper input[name="bedrooms-number"]').val(plus_value);
//    });
//    jQuery('.search_field .input_wrapper .minus_btn').on('click', function () {
//        var value = parseInt(jQuery('.search_field .input_wrapper input[name="bedrooms-number"]').val());
//        if (value > 0) {
//            var minus_value = value - 1;
//            jQuery('.search_field .input_wrapper input[name="bedrooms-number"]').val(minus_value);
//        }
//    });

//on click a href redirect to page
    jQuery('.lofts_init,.lands_init').on('touchstart click', function () {
        var href = jQuery(this).find('a').attr('href');
        window.location.href = href;
    });

    //on click apartment do action
//    jQuery('.apartments_init').on('touchstart click', function () {
//        var element = jQuery(this);
//        jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_section').animate({opacity: 0}, 500, function () {
//            element.closest('.section_wrap').addClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_apartment_search_wrapper').fadeIn(500).css({'display': 'flex', 'opacity': 1});
//            }, 500);
//        });
//    });

//    jQuery('.homepage .top_section .search_wrapper .inner_apartment_search_wrapper .close_init,.homepage .top_section .search_wrapper .left_middle_section .close_init').on('click', function () {
//        jQuery('.homepage .top_section .search_wrapper .inner_apartment_search_wrapper').fadeOut(500, function () {
//            jQuery('.apartments_init').closest('.section_wrap').removeClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_section').animate({opacity: 1});
//            }, 500);
//        });
//    });

    //on click villas do action
//    jQuery('.villas_init').on('touchstart click', function () {
//        var element = jQuery(this);
//        jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .left_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_section').animate({opacity: 0}, 500, function () {
//            element.closest('.section_wrap').addClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_villas_search_wrapper').fadeIn(500).css({'display': 'flex', 'opacity': 1});
//            }, 500);
//        });
//    });

//    jQuery('.homepage .top_section .search_wrapper .inner_villas_search_wrapper .close_init,.homepage .top_section .search_wrapper .right_middle_section .close_init').on('click', function () {
//        jQuery('.homepage .top_section .search_wrapper .inner_villas_search_wrapper').fadeOut(500, function () {
//            jQuery('.villas_init').closest('.section_wrap').removeClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_section').animate({opacity: 1}, 500);
//            }, 500);
//        });
//    });

    //on click townhouses do action
//    jQuery('.townhouses_init').on('touchstart click', function () {
//        var element = jQuery(this);
//        jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .left_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .right_section').animate({opacity: 0}, 500, function () {
//            element.closest('.section_wrap').addClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_townhouse_search_wrapper').fadeIn(500).css({'display': 'flex', 'opacity': 1});
//            }, 500);
//        });
//    });

//    jQuery('.homepage .top_section .search_wrapper .inner_townhouse_search_wrapper .close_init,.homepage .top_section .search_wrapper .right_middle_middle_section .close_init').on('click', function () {
//        jQuery('.homepage .top_section .search_wrapper .inner_townhouse_search_wrapper').fadeOut(500, function () {
//            jQuery('.townhouses_init').closest('.section_wrap').removeClass('go_left');
//            setTimeout(function () {
//                jQuery('.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_middle_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.left_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_middle_section,.homepage .top_section .search_wrapper .inner_search_wrapper .trigger_but.right_section').animate({opacity: 1});
//            }, 500);
//        });
//    });

    //on mobile when user clicks find ur home
    if (width < 768) {
        jQuery('.homepage .top_section .search_wrapper .section_wrap.left_section').on('click', function () {
            if (jQuery(this).closest('.search_wrapper').hasClass('opened')) {
                jQuery(this).closest('.search_wrapper').removeClass('opened');
            } else {
                jQuery(this).closest('.search_wrapper').addClass('opened');
            }
            jQuery('.homepage .top_section .search_wrapper .section_wrap.closed_to_open').slideToggle(500).css('display', 'flex');
            jQuery('html,body').animate({
                scrollTop: jQuery(this).offset().top - 70},
                    'slow');
        });
    }

    //trigger open live auctions category list
    jQuery('.price_dropdown_wrapper .first_shown_wrap').on('click', function () {
        jQuery('.bedrooms_dropdown_wrapper').removeClass('menu_opened');
        jQuery('.bedrooms_list').removeClass('opened');
        jQuery('.bedrooms_list').fadeOut();
        if (jQuery(this).closest('.price_dropdown_wrapper').hasClass('menu_opened')) {
            jQuery(this).closest('.price_dropdown_wrapper').removeClass('menu_opened');
            jQuery('.price_list').removeClass('opened');
            jQuery('.price_list').fadeOut();
        } else {
            jQuery('html,body').animate({
                scrollTop: jQuery('.homepage .top_section .search_wrapper').offset().top - 170},
                    'slow');
            jQuery('.price_list').fadeIn();
            jQuery(this).closest('.price_dropdown_wrapper').addClass('menu_opened');
            jQuery('.price_list').addClass('opened');
        }
    });
//on click on category event
    jQuery('.price_dropdown_wrapper .price_list li').on('click', function () {
        jQuery(this).closest('.price_dropdown_wrapper').removeClass('menu_opened');
        jQuery('.price_list').removeClass('opened');
        jQuery('.price_list').fadeOut();
        var selected_cats = jQuery(this).attr('data-to-select');
        var selected_html = jQuery(this).html();
        jQuery(this).closest('.price_dropdown_wrapper').find('.first_shown_wrap .first_shown').attr('data-selected', selected_cats);
        jQuery(this).closest('.price_dropdown_wrapper').find('.first_shown_wrap .first_shown').html(selected_html);
        jQuery('.price_number_holder').attr('value', selected_cats);
    });

    //trigger open live auctions category list
    jQuery('.bedrooms_dropdown_wrapper .first_shown_wrap').on('click', function () {
        jQuery('.price_dropdown_wrapper').removeClass('menu_opened');
        jQuery('.price_list').removeClass('opened');
        jQuery('.price_list').fadeOut();
        if (jQuery(this).closest('.bedrooms_dropdown_wrapper').hasClass('menu_opened')) {
            jQuery(this).closest('.bedrooms_dropdown_wrapper').removeClass('menu_opened');
            jQuery('.bedrooms_list').removeClass('opened');
            jQuery('.bedrooms_list').fadeOut();
        } else {
            jQuery('html,body').animate({
                scrollTop: jQuery('.homepage .top_section .search_wrapper').offset().top - 170},
                    'slow');
            jQuery('.bedrooms_list').fadeIn();
            jQuery(this).closest('.bedrooms_dropdown_wrapper').addClass('menu_opened');
            jQuery('.bedrooms_list').addClass('opened');
        }
    });
//on click on category event
    jQuery('.bedrooms_dropdown_wrapper .bedrooms_list li').on('click', function () {
        jQuery(this).closest('.section_wrap').find('.bedrooms_dropdown_wrapper').removeClass('menu_opened');
        jQuery(this).closest('.section_wrap').find('.bedrooms_list').removeClass('opened');
        jQuery(this).closest('.section_wrap').find('.bedrooms_list').fadeOut();
        var selected_cats = jQuery(this).attr('data-to-select');
        var selected_html = jQuery(this).html();
        jQuery(this).closest('.section_wrap').find('.bedrooms_dropdown_wrapper .first_shown_wrap .first_shown').attr('data-selected', selected_cats);
        jQuery(this).closest('.section_wrap').find('.bedrooms_dropdown_wrapper .first_shown_wrap .first_shown').html(selected_html);
        jQuery(this).closest('.section_wrap').find('.bedrooms_number').attr('value', selected_cats);

        jQuery(this).closest('.section_wrap').find('.price_dropdown_wrapper ul li').removeClass('dont_show_me');
        jQuery(this).closest('.section_wrap').find('.price_dropdown_wrapper ul li').each(function () {
            var data_bedrooms = jQuery(this).attr('data-bedrooms');
            if (!data_bedrooms.includes(selected_cats)) {
                jQuery(this).addClass('dont_show_me');
            }
        });
    });

    //on dropdown has hover
    jQuery('.top_menu_wrapper .menu-item-has-children').on('mouseenter', function () {
        jQuery(this).find('.top-dropdown-menu').fadeIn(50);
        jQuery(this).addClass('showing_submenu');
    });
    jQuery('.top_menu_wrapper .menu-item-has-children').on('mouseleave', function () {
        jQuery(this).find('.top-dropdown-menu').fadeOut(50);
        jQuery(this).removeClass('showing_submenu');
    });


    //on click of mobile burger menu
    jQuery('.menu_bars').on('click', function () {
        jQuery('.mobile_menu_wrapper').fadeIn(10).animate({right: '0'}, 550);
        jQuery('.page_overlay').fadeIn(500);
        jQuery('html, body').css('overflow-y', 'hidden');
    });
    jQuery('.mobile_menu_wrapper .exit_logo').on('click', function () {
        jQuery('.mobile_menu_wrapper').animate({right: '-1000'}, 550).fadeOut(10);
        jQuery('.page_overlay').fadeOut(500);
        jQuery('html, body').css('overflow-y', 'auto');
    });

    //on mobile when user clicks on li haveing submenu
    jQuery('.mobile_menu_wrapper ul li.menu-item-has-children a').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('li').find('ul').slideToggle(500);
    });

    //on click notify me button
    jQuery('.notify_me_but').on('click', function (e) {
        e.preventDefault();
        jQuery('.get_notified_popup_parent').fadeIn('slow').css('display', 'flex');
    });

    jQuery('.get_notified_popup_parent').on('click', function (event) {
        var target = event.target;
        var target_class = target.className;
        if ((target_class.indexOf("dont_close") <= -1) && target_class !== 'dont_close') {
            jQuery(this).fadeOut('slow');
        }
    });

    //on submit btn notify me popup form click send data
    jQuery('.get_notified_popup_parent .get_notified_popup_child .input_holder span.submit_button').on('click', function () {
        var email = jQuery('.get_notified_popup_parent .get_notified_popup_child .input_holder input[name="notifier-email"]').val();
        var event_id = jQuery(this).attr('data-event_id');
        var ajax_url = jQuery(this).attr('data-link');
        if (email) {
            var nonce = jQuery(this).attr('data-nonce');
            jQuery('.loader_overlay').fadeIn('slow');
            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: ajax_url,
                data: {action: "insert_event_notifications_subscribers", nonce: nonce, event_id: event_id, email: email},
                success: function (response) {
                    if (response.type == "success") {
                        if (response.sub_type == "success") {
                            jQuery('.get_notified_popup_parent').fadeOut('slow');
                            jQuery('.loader_overlay').fadeOut();
                            jQuery('.get_notified_popup_parent .get_notified_popup_child .input_holder input[name="notifier-email"]').val('');
                            jQuery('a.go_to_but.notify_me_but').addClass('nolink');
                            jQuery('a.go_to_but.notify_me_but span').html('SAVED!');
                        } else {
                            jQuery('.loader_overlay').fadeOut('slow');
                            jQuery('.get_notified_popup_parent .get_notified_popup_child .ajax_response').html(response.html);
                        }
                    } else {
                        jQuery('.get_notified_popup_parent .loader_overlay').html('<h5 style="color : red ">There was an error! Please try again.</h5>');
                    }
                }
            });
        } else {
            jQuery('.get_notified_popup_parent input.required').css('border-color', 'red');
        }
    });

    //footer mobile on click view sitemap button
    jQuery('.footer .view_sitemap_button').on('click', function () {
        if (jQuery(this).find('.cross').hasClass('extended')) {
            jQuery(this).find('.cross').removeClass('extended');
        } else {
            jQuery(this).find('.cross').addClass('extended');
        }
        jQuery('.footer .footer_lower_section').slideToggle(500);
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top},
                'slow');
    });

    jQuery(".units_archive_page .top_section .filtering_wrapper .selector_wrapper ul.filtering_dropdown").niceScroll({
        cursorcolor: "#9B184C",
        background: "#fff",
        autohidemode: false,
        cursorborder: "1px solid #BE3026",
        zindex: 999999999
    });
});