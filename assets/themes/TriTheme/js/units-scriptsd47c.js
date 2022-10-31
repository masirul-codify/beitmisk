/* 
 * This file was created to put all Units related JS functions in one file ( HERE )
 */
jQuery(document).ready(function ($) {

//    when user clicks on the Filter by neighborhood button start
    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper a.trigger_filter_by_neighborhood').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.filtering_wrapper').addClass('show_neighborhood_filtering');
        jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper ul.filtering_dropdown li').removeClass('dont_show_me show_me selected');
        jQuery('.selector_wrapper').removeClass('keep_borders');
        jQuery('.units_archive_page .additional_filters_section').slideUp();
        jQuery('#tagsinput_holder').tagsinput('removeAll');
    });
    //    when user clicks on the Filter by neighborhood button end

    //    when user clicks on the Back to advanced filter  button start
    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper a.trigger_filter_by_advanced').on('click', function (e) {
        e.preventDefault();
        jQuery(this).closest('.filtering_wrapper.show_neighborhood_filtering').removeClass('show_neighborhood_filtering');
    });
    //    when user clicks on the Back to advanced filter  button end

    //when the user clicks on the selection garage button start
    jQuery('.neighborhood_filtering_wrapper .selector_wrapper .selection_garage').on('click', function () {
        if (!jQuery(this).closest('.selector_wrapper').hasClass('not_filled')) {
            jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector').removeClass('required');
            if (jQuery(this).parent().hasClass('menu_opened')) {
                jQuery(this).parent().removeClass('menu_opened');
                jQuery(this).parent().find('ul.filtering_dropdown').removeClass('opened');
                jQuery(this).parent().find('ul.filtering_dropdown').fadeOut();
            } else {
                jQuery('.selector_wrapper').removeClass('menu_opened');
                jQuery('.selector_wrapper').find('ul.filtering_dropdown').removeClass('opened');
                jQuery('.selector_wrapper').find('ul.filtering_dropdown').fadeOut();
                jQuery(this).parent().find('ul.filtering_dropdown').fadeIn();
                jQuery(this).parent().addClass('menu_opened');
                jQuery(this).parent().find('ul.filtering_dropdown').addClass('opened');
            }
        } else {
            jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector').addClass('required');
        }
    });
    //when the user clicks on the selection garage button end

//    when user selects a neighborhood to get the buildings start
    jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector ul.filtering_dropdown li').on('click', function () {

        jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector ul.filtering_dropdown li').removeClass('selected');

        var html = jQuery(this).attr('data-html');

        jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#neighborhood_selector .selection_garage h3').html(html);

        if (jQuery(this).hasClass('selected')) {
            jQuery(this).removeClass('selected');
        } else {
            jQuery(this).addClass('selected');
        }

        var filter_id = jQuery(this).attr('data-filter_id');

        var ajax_url = jQuery(this).attr('data-link');
        var nonce = jQuery(this).attr('data-nonce');

        jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector .selection_garage h3').html('Loading buildings...');

        jQuery.ajax({
            type: "post",
            dataType: "json",
            url: ajax_url,
            data: {action: "get_buildings_of_neighborhood", nonce: nonce, filter_id: filter_id},
            success: function (response) {
                if (response.type == "success") {
                    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector ul.filtering_dropdown').html(response.html);
                    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector').removeClass('not_filled');
                    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector .selection_garage h3').html('Choose your building');
                    jQuery('#neighborhood_selector.selector_wrapper').removeClass('menu_opened');
                    jQuery('#neighborhood_selector.selector_wrapper').find('ul.filtering_dropdown').removeClass('opened');
                    jQuery('#neighborhood_selector.selector_wrapper').find('ul.filtering_dropdown').fadeOut();
                    jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper #neighborhood_search_selector a.neighborhood_search_trigger').removeClass('not_functional');
                } else {
                    jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector .selection_garage h3').html('Please try again!');
                }
            }
        });
    });
//    when user selects a neighborhood to get the buildings end

//    when user selects a building to get the units start
    jQuery(document).on('click', '.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#building_selector ul.filtering_dropdown li', function () {

        jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#building_selector ul.filtering_dropdown li').removeClass('selected');

        var html = jQuery(this).attr('data-html');

        jQuery('.units_archive_page .top_section .filtering_wrapper .selector_wrapper#building_selector .selection_garage h3').html(html);

        if (jQuery(this).hasClass('selected')) {
            jQuery(this).removeClass('selected');
        } else {
            jQuery(this).addClass('selected');
        }
    });
    //    when user selects a building to get the units end

    //    when user clicks on the search button to get the units start
    jQuery(document).on('click', '.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper #neighborhood_search_selector a.neighborhood_search_trigger', function (e) {
        e.preventDefault();
        if (!jQuery(this).hasClass('not_functional')) {
            var neighboor_filter_id = jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector ul.filtering_dropdown li.selected').attr('data-filter_id');
            var building_filter_id = jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#building_selector ul.filtering_dropdown li.selected').attr('data-filter_id');

            var ajax_url = jQuery(this).attr('data-link');
            var nonce = jQuery(this).attr('data-nonce');

            var loader = jQuery('.units_archive_page .bottom_section .loader_wrapper img');

            jQuery('.units_to_infinite_scroll').css('opacity', '0.40');
            loader.fadeIn();

            jQuery.ajax({
                type: "post",
                dataType: "json",
                url: ajax_url,
                data: {action: "get_units_of_neighborhood_search", nonce: nonce, neighboor_filter_id: neighboor_filter_id, building_filter_id: building_filter_id},
                success: function (response) {
                    if (response.type == "success") {
                        loader.fadeOut();
                        jQuery('.units_to_infinite_scroll').removeClass('first_page');
                        jQuery('.units_to_infinite_scroll').html(response.html);
                        jQuery('.units_to_infinite_scroll').css('opacity', '1');
                        jQuery("html, body").animate({scrollTop: 0}, "slow");
                    } else {
                        jQuery('.ajax_response').html('<h5 style="color : red ">There was an error! Please try again.</h5>');
                    }
                }
            });
        } else {
            jQuery('.units_archive_page .top_section .filtering_wrapper .neighborhood_filtering_wrapper .selector_wrapper#neighborhood_selector').addClass('required');
        }
    });
    //    when user clicks on the search button to get the units end
});

