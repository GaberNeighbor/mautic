/** CategoryBundle **/

Mautic.categoryOnLoad = function (container, response) {
    if (mQuery(container + ' #list-search').length) {
        Mautic.activateSearchAutocomplete('list-search', 'category');
    }

    if (response.inForm) {
        var newOption = mQuery('<option />').val(response.categoryId);
        newOption.html(response.categoryName);

        mQuery(".category-select option:last").prev().before(newOption);
        newOption.prop('selected', true);

        mQuery('.category-select').trigger("chosen:updated");
    }

    if (response && response.closeModal) {
        mQuery(container + ' .modal-form-buttons').html('');
    }
};

Mautic.onCategoryChange = function (catEl, route, header) {
    if (mQuery(catEl).val() == 'new') {
        Mautic.loadAjaxModal('#MauticCommonModal', route, 'get', header);
    }
};