<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

$owl_settings = array(
    'items' => array(
        'name' => __('Items','wp_owl'),
        'desc' => __('The number of items you want to see on the screen.','wp_owl'),
        'default' => 3,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'itemsDesktop' => array(
        'name' => __('Items Desktop','wp_owl'),
        'desc' => __('The number of items on desktop resolutions (1199px)','wp_owl'),
        'default' => 4,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'itemsDesktopSmall' => array(
        'name' => __('Items Desktop Small','wp_owl'),
        'desc' => __('The number of items on small desktop resolutions (979px)','wp_owl'),
        'default' => 3,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'itemsTablet' => array(
        'name' => __('Items Tablet','wp_owl'),
        'desc' => __('The number of items on tablet resolutions (768px)','wp_owl'),
        'default' => 2,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'itemsMobile' => array(
        'name' => __('Items Mobile','wp_owl'),
        'desc' => __('The number of items on mobile resolutions (479px)','wp_owl'),
        'default' => 1,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'slideSpeed' => array(
        'name' => __('Slide Speed','wp_owl'),
        'desc' => __('Slide speed in milliseconds.','wp_owl'),
        'default' => 200,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'paginationSpeed' => array(
        'name' => __('Pagination Speed','wp_owl'),
        'desc' => __('Pagination speed in milliseconds.','wp_owl'),
        'default' => 800,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'rewindSpeed' => array(
        'name' => __('Rewind Speed','wp_owl'),
        'desc' => __('Rewind speed in milliseconds.','wp_owl'),
        'default' => 1000,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'rewindNav' => array(
        'name' => __('Rewind Nav','wp_owl'),
        'desc' => __('Slide to first item.','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'singleItem' => array(
        'name' => __('Single Item','wp_owl'),
        'desc' => __('Display only one item.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'autoPlay' => array(
        'name' => __('Auto Play','wp_owl'),
        'desc' => __('Change to any integrer for example autoPlay : 5000 to play every 5 seconds, or 0 to disable autoPlay.','wp_owl'),
        'default' => 0,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'stopOnHover' => array(
        'name' => __('Stop On Hover','wp_owl'),
        'desc' => __('Stop autoplay on mouse hover','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'navigation' => array(
        'name' => __('Navigation','wp_owl'),
        'desc' => __('Display "next" and "prev" buttons.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'navigationTextNext' => array(
        'name' => __('Navigation "Next"','wp_owl'),
        'desc' => __('Text on "Next" button','wp_owl'),
        'default' => 'Next ',
        'cmb_type' => 'text',
        'type' => 'string'
    ),
    'navigationTextPrev' => array(
        'name' => __('Navigation "Prev"','wp_owl'),
        'desc' => __('Text on "Prev" button','wp_owl'),
        'default' => 'Prev ',
        'cmb_type' => 'text',
        'type' => 'string'
    ),
    'pagination' => array(
        'name' => __('Pagination','wp_owl'),
        'desc' => __('Show pagination.','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'paginationNumbers' => array(
        'name' => __('Pagination Numbers','wp_owl'),
        'desc' => __('Show numbers inside pagination buttons','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'itemsScaleUp' => array(
        'name' => __('Item Scale Up','wp_owl'),
        'desc' => __('Option to not stretch items when it is less than the supplied items.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'scrollPerPage' => array(
        'name' => __('Scroll per Page','wp_owl'),
        'desc' => __('Scroll per page not per item. This affect next/prev buttons and mouse/touch dragging.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'responsive' => array(
        'name' => __('Responsive','wp_owl'),
        'desc' => __('You can use Owl Carousel on desktop-only websites too! Just change that to "false" to disable resposive capabilities','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'responsiveRefreshRate' => array(
        'name' => __('Responsive Refresh Rate','wp_owl'),
        'desc' => __('Check window width changes every X ms for responsive actions','wp_owl'),
        'default' => 200,
        'cmb_type' => 'text',
        'type' => 'number'
    ),
    'lazyLoad' => array(
        'name' => __('Lazy Load','wp_owl'),
        'desc' => __('Delays loading of images. Images outside of viewport won\'t be loaded before user scrolls to them. Great for mobile devices to speed up page loadings. ','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'lazyFollow' => array(
        'name' => __('Lazy Follow','wp_owl'),
        'desc' => __('When pagination used, it skips loading the images from pages that got skipped. It only loads the images that get displayed in viewport. If set to false, all images get loaded when pagination used. It is a sub setting of the lazy load function.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'autoHeight' => array(
        'name' => __('Auto Height','wp_owl'),
        'desc' => __('Add height to owl-wrapper-outer so you can use diffrent heights on slides. Use it only for one item per page setting.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'dragBeforeAnimFinish' => array(
        'name' => __('Drag Before Animation Finishes','wp_owl'),
        'desc' => __('Ignore whether a transition is done or not (only dragging).','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'mouseDrag' => array(
        'name' => __('Mouse Drag','wp_owl'),
        'desc' => __('Turn off/on mouse events.','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'touchDrag' => array(
        'name' => __('Touch Drag','wp_owl'),
        'desc' => __('Turn off/on touch events.','wp_owl'),
        'default' => true,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
    'addClassActive' => array(
        'name' => __('Add Class Active','wp_owl'),
        'desc' => __('Add "active" classes on visible items. Works with any numbers of items on screen.','wp_owl'),
        'default' => false,
        'cmb_type' => 'checkbox',
        'type' => 'bool'
    ),
);