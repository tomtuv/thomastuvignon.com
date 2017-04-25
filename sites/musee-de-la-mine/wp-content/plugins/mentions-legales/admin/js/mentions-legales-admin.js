jQuery(function() {
    jQuery( '#accordion-mentions-legales-form' ).accordion({
        collapsible: true,
        heightStyle: "content"
    });
});
jQuery("select[name=mentions_legales_status]").on('change', function() {
    var value = jQuery("select[name=mentions_legales_status] option:selected").val();
    if(value.substr(0, 1) == 'E'){
        jQuery("tr[id=ml-capital-line-form]").css('display', 'none');
        jQuery("input[name=mentions_legales_capital]").val("");
    } else if(value.substr(0, 1) == 'S'){
        jQuery("tr[id=ml-capital-line-form]").removeAttr('style');
    }
});
jQuery("select[name=mentions_legales_activite]").on('change', function() {
    var value = jQuery("select[name=mentions_legales_activite] option:selected").val();
    if(value == 'act_com'){
        jQuery("tr[id=ml-rcs-line-form]").removeAttr('style');
        jQuery("tr[id=ml-tva-line-form]").removeAttr('style');
        jQuery("tr[id=ml-rm-line-form]").css('display', 'none');
        jQuery("input[name=mentions_legales_rm]").val("");
    } else if(value == 'act_art'){
        jQuery("tr[id=ml-rcs-line-form]").css('display', 'none');
        jQuery("tr[id=ml-tva-line-form]").css('display', 'none');
        jQuery("input[name=mentions_legales_rcs]").val("");
        jQuery("input[name=mentions_legales_tva]").val("");
        jQuery("tr[id=ml-rm-line-form]").removeAttr('style');
    } else {
        jQuery("tr[id=ml-rcs-line-form]").css('display', 'none');
        jQuery("tr[id=ml-tva-line-form]").css('display', 'none');
        jQuery("tr[id=ml-rm-line-form]").css('display', 'none');
        jQuery("input[name=mentions_legales_rcs]").val("");
        jQuery("input[name=mentions_legales_tva]").val("");
        jQuery("input[name=mentions_legales_rm]").val("");
    }
});
jQuery("select[name=mentions_legales_part_pro]").on('change', function() {
    if(jQuery("p[id=mentions-legales-alert-options]").length){
        var submitButton = document.getElementById('mentions-legales-options-submit').outerHTML;
        jQuery("#mentions-legales-options-form p[class=submit]").html(submitButton);
    } else {
        var submitButton = jQuery("#mentions-legales-options-form p[class=submit]").html();
        jQuery("#mentions-legales-options-form p[class=submit]").html(submitButton + '<p id="mentions-legales-alert-options" style="font-weight: bold; color: rgb(205, 0, 0);">Enregistrez les options pour afficher les informations à remplir adéquates.</p>');
    }
});