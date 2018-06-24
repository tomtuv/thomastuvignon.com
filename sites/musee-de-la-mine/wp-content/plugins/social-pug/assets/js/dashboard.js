jQuery( function($) {

	/*****************************************************/
	/* Toolkit page
	/*****************************************************/
	$(document).on( 'click', '.dpsp-tool-wrapper .dpsp-switch label', function(e) {
		
		var $actions_wrapper = $(this).closest('.dpsp-tool-actions');
		var $action_settings = $actions_wrapper.find('.dpsp-tool-settings');

		// Add Loading Overlay
		$action_settings.fadeOut(200);
		$actions_wrapper.append('<div class="dpsp-tool-actions-overlay"><div class="spinner"></div></div>');
		$actions_wrapper.find('.dpsp-tool-actions-overlay').animate({opacity: 1}, 200);

		// Get tool to activate/deactivate
		var tool 		 = $(this).siblings('input').data('tool');
		var tool_setting = $(this).siblings('input').data('tool-activation');

		if( tool != 'undefined' ) {

			if( $actions_wrapper.hasClass('dpsp-inactive') ) {

				activateTool( tool_setting ).done( function( response ) {
					if( response == 1 ) {
						$actions_wrapper.find('.dpsp-tool-actions-overlay').animate({opacity: 0}, 200, function() { $(this).remove() });
						$actions_wrapper.removeClass('dpsp-inactive').addClass('dpsp-active');
						$actions_wrapper.find('span').text('Active');
						$action_settings.fadeIn(200);
					}
				});	

			} else {

				deactivateTool( tool_setting ).done( function( response ) {
					if( response == 1 ) {
						$actions_wrapper.find('.dpsp-tool-actions-overlay').animate({opacity: 0}, 200, function() { $(this).remove() });
						$actions_wrapper.removeClass('dpsp-active').addClass('dpsp-inactive');
						$actions_wrapper.find('span').text('Inactive');

						hideMenuItem( tool );
					}
				});

			}
			
		}

	});

	
	/*
	 * Make an AJAX call to activate a tool
	 */
	function activateTool( setting ) {

		var data = {
			'action' 	: 'dpsp_activate_tool',
			'dpsptkn'	: $('#dpsptkn').val(),
			'setting'	: setting
		}

		return $.post( ajaxurl, data, function() {});

	}

	/*
	 * Make an AJAX call to deactivate a tool
	 */
	function deactivateTool( setting ) {

		var data = {
			'action' 	: 'dpsp_deactivate_tool',
			'dpsptkn'	: $('#dpsptkn').val(),
			'setting'	: setting
		}

		return $.post( ajaxurl, data, function() {});

	}


	/*
	 * Hides the menu item from the WP sidebar for a given location
	 */
	function hideMenuItem( location ) {

		location = location.replace('share_', '').replace('follow_', '').replace( '_', '-' );

		var $menuItems = $('#toplevel_page_dpsp-social-pug .wp-submenu li a');

		$menuItems.each( function() {
			if( $(this).attr('href').indexOf( location ) != -1 )
				$(this).parent().hide();
		});

	}


	/*
	 * Initialize jQuery select2
	 *
	 */
	if( $.fn.select2 ) {
		$('.dpsp-setting-field-select select').select2({
			minimumResultsForSearch : Infinity
		}).on('select2:open', function() {
	  		var container = $('.select2-container').last();
	  		container.addClass('dpsp-select2');
		});
	}


	/*
	 * Initialize jQuery sortable
	 *
	 */
	$( function() {
		$('.dpsp-social-platforms-sort-list').sortable({
			handle: '.dpsp-sort-handle',
			placeholder: 'dpsp-sort-placeholder',
			containment: '#wpwrap'
		});
	});


	/*
	 * Social newtworks checkboxes
	 *
	 */
	$(document).on( 'click', '#dpsp-networks-selector .dpsp-network-item', function() {
		$this = $(this);
		$checkbox = $this.children('.dpsp-network-item-checkbox');

		if( $this.attr('data-checked') )
			$this.removeAttr('data-checked');
		else
			$this.attr('data-checked', 'true');

	});


	$(document).on( 'click', '#dpsp-select-networks', function(e) {
		e.preventDefault();

		if( $('#dpsp-networks-selector-wrapper').hasClass('active') ) {
			$('#dpsp-networks-selector-wrapper').removeClass('active');
			$('#dpsp-networks-selector-wrapper').stop().slideUp(300);

			if( $('.dpsp-social-platforms-sort-list').find('li').length == 0 )
				showSortablePlaceholder();
		} else {
			$('#dpsp-networks-selector-wrapper').addClass('active');
			$('#dpsp-networks-selector-wrapper').stop().slideDown(300);
			hideSortablePlaceholder();
		}
			
		
	});


	$(document).on( 'click', '#dpsp-networks-selector-footer .button-primary', function(e) {
		e.preventDefault();

		// Hide selector
		$('#dpsp-networks-selector-wrapper').removeClass('active').stop().slideUp(300);

		// Parse each network from the selector panel
		$('#dpsp-networks-selector .dpsp-network-item').each( function() {
			$this = $(this);

			var dataNetwork = $this.attr('data-network');
			var dataNetworkName = $this.attr('data-network-name');

			if( !$this.attr('data-checked') ) {

				removeSortableNetworkItem( dataNetwork );

			} else {

				var alreadyInList = false;

				$('.dpsp-social-platforms-sort-list li').each( function() {
					if( $(this).attr('data-network') == dataNetwork )
						alreadyInList = true;
				});

				if( alreadyInList )
					return alreadyInList;

				addSortableNetworkItem( dataNetwork, dataNetworkName );
			}

		});

		// If there are no networks in the sortable list display the empty placeholder
		if( $('.dpsp-social-platforms-sort-list').find('li').length == 0 )
				showSortablePlaceholder();

	});


	/*
	 * Removes the social network from the sortable list when clicking
	 * on the .dpsp-list-remove class and also uncheckes the social 
	 * network from the selectable networks list
	 *
	 */
	$(document).on( 'click', '.dpsp-list-remove', function(e) {
		e.preventDefault();

		var dataNetwork = $(this).closest('li').attr('data-network');

		removeSortableNetworkItem( dataNetwork );

		$('#dpsp-networks-selector .dpsp-network-item[data-network="' + dataNetwork + '"]').removeAttr('data-checked');

		// If there are no networks in the sortable list display the empty placeholder
		if( $('.dpsp-social-platforms-sort-list').find('li').length == 0 ) {
			$('#dpsp-sortable-networks-empty').css('opacity', 0).stop().slideDown(200).animate({opacity: 1}, 300);
			$('#dpsp-sortable-networks-empty').addClass('active');
		}

	});


	/*
	 * Function that populates the sortable list with new data
	 *
	 */
	function addSortableNetworkItem( slug, name ) {
		
		if( slug == 'undefined')
			return false;

		if( name == 'undefined')
			return false;

		var html = '';

		var location = $('input[name="dpsp_buttons_location"]').val();

		html += '<li data-network="' + slug + '" style="display: none;">';
			html += '<div class="dpsp-sort-handle ui-sortable-handle"><!-- --></div>';
			html += '<div class="dpsp-list-icon dpsp-list-icon-social dpsp-icon-' + slug + '"><!-- --></div>';
			html += '<div class="dpsp-list-input-wrapper"><input class="dpsp-transition" name="' + location + '[networks][' + slug + '][label]" value="' + name + '"><span class="dpsp-icon dpsp-icon-edit dpsp-transition"></span></div>';
			html += '<a class="dpsp-list-remove dpsp-list-icon dpsp-icon-remove dpsp-transition" href="#"><!-- --></a>';
		html += '</li>';

		$('.dpsp-social-platforms-sort-list').append( html );
		$('.dpsp-social-platforms-sort-list li:not(":visible")').fadeIn();
	}


	function removeSortableNetworkItem( slug ) {

		$('.dpsp-social-platforms-sort-list li[data-network="' + slug + '"]').remove();

	}

	function showSortablePlaceholder() {

		$('#dpsp-sortable-networks-empty').stop().slideDown(200);
		$('#dpsp-sortable-networks-empty').addClass('active');

	}

	function hideSortablePlaceholder() {

		$('#dpsp-sortable-networks-empty').stop().slideUp(200);
		$('#dpsp-sortable-networks-empty').removeClass('active');
		
	}


	$(document).ready( function() {
		$('.dpsp-network-btn').attr('href', '#');
	});

	$(document).on( 'click', '.dpsp-network-btn', function(e) {
		e.preventDefault();
		$(this).closest('label').click();
	});


	/*
	 * Disable inputs for certain networks sortable panels
	 *
	 */
	$(document).on( 'focus', '.dpsp-page-sidebar .dpsp-list-input-wrapper input', function() {
		$(this).blur();
	});

	$(document).on( 'focus', '.dpsp-page-mobile .dpsp-list-input-wrapper input', function() {
		$(this).blur();
	});


	/*
	 * Set the shape of the network buttons on page load and dynamicly
	 *
	 */
	$(document).on('click', '.dpsp-setting-field-button-shape input', function() {
		$(this)
			.closest('.dpsp-page-wrapper')
			.find('.dpsp-networks-btns-wrapper')
			.parent()
			.removeClass('dpsp-shape-circle dpsp-shape-rounded dpsp-shape-rectangular')
			.addClass('dpsp-shape-' + $(this).val() );
	});


	/*
	 * Show and hide back-end settings tool-tips
	 *
	 */
	$(document).on( 'mouseenter', '.dpsp-setting-field-tooltip-icon', function() {
		$(this).siblings('div').css('opacity', 1).css('visibility', 'visible');
	});
	$(document).on( 'mouseleave', '.dpsp-setting-field-tooltip-icon', function() {
		$(this).siblings('div').css('opacity', 0).css('visibility', 'hidden');
	});

	$(document).on( 'mouseenter', '.dpsp-setting-field-tooltip-wrapper.dpsp-has-link', function() {
		$(this).find('div').css('opacity', 1).css('visibility', 'visible');
	});
	$(document).on( 'mouseleave', '.dpsp-setting-field-tooltip-wrapper.dpsp-has-link', function() {
		$(this).find('div').css('opacity', 0).css('visibility', 'hidden');
	});


	/*
	 * Disable / enable settings that depend on other settings
	 *
	 */
	$( function() {

		// Set settings options
		$checkbox_shares 	   = $('.dpsp-setting-field-show-share-count input[type=checkbox]');
		$checkbox_total_shares = $('.dpsp-setting-field-show-total-share-count input[type=checkbox]');
		$checkbox_count_round  = $('.dpsp-setting-field-share-count-round input[type=checkbox]');

		$wrapper_checkbox_count_round = $checkbox_count_round.closest('.dpsp-setting-field-wrapper');


		// Disable and enable total share count position
		if( !$checkbox_total_shares.is(':checked') ) {
			$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().addClass('disabled');
			$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().find('select').attr( 'disabled', true );
		}

		$checkbox_total_shares.change( function() {
			if( !$checkbox_total_shares.is(':checked') ) {
				$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().addClass('disabled');
				$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().find('select').attr( 'disabled', true );
			} else {
				$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().removeClass('disabled');
				$checkbox_total_shares.closest('.dpsp-setting-field-wrapper').next().find('select').attr( 'disabled', false );
			}
		});


		// Disable and enable share count round
		// Disable and enable minimum share count
		enable_disable_count_round();

		$checkbox_shares.change( function() {
			enable_disable_count_round();
		});

		$checkbox_total_shares.change( function() {
			enable_disable_count_round();
		});

		function enable_disable_count_round() {
			if( !$checkbox_total_shares.is(':checked') && !$checkbox_shares.is(':checked') ) {
				$wrapper_checkbox_count_round.addClass('disabled');
				$checkbox_count_round.attr( 'disabled', true );
			} else {
				$wrapper_checkbox_count_round.removeClass('disabled');
				$checkbox_count_round.attr( 'disabled', false );
			}
		}

	});

});