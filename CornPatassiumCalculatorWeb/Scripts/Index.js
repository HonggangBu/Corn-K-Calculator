
$(function () {
    // Dynamically show the current year in the footer copyright
    $(".dynamic-year").text((new Date()).getFullYear());

    OnSiRatioChange();

    OnAnySelectChangeClearResult();

    OnCalculateBtnClick();

});

////////////////////////////////////////////////////
// big smectite/illite ratio and small K level
var bs = [[90, 90, 90, 90, 60, 60, 0, 0, 0, 0],
    [90, 90, 90, 90, 60, 60, 60, 60, 60, 0],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 60],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120]],

// big smectite/illite ratio and big K level
bb = [[90, 90, 60, 60, 60, 0, 0, 0, 0, 0],
[90, 90, 90, 90, 60, 60, 60, 0, 0, 0],
[90, 90, 90, 90, 90, 90, 90, 60, 60, 0],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 60],
[120, 120, 120, 120, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120]],

// small smectite/illite ratio and small K level
ss = [[90, 90, 90, 90, 60, 60, 0, 0, 0, 0],
[90, 90, 90, 90, 60, 60, 60, 60, 60, 0],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 60],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120]],

// small smectite/illite ratio and big K level
sb = [[90, 90, 60, 60, 60, 0, 0, 0, 0, 0],
[90, 90, 90, 90, 60, 60, 60, 0, 0, 0],
[90, 90, 90, 90, 90, 90, 90, 60, 60, 0],
[90, 90, 90, 90, 90, 90, 90, 90, 90, 60],
[120, 120, 120, 120, 90, 90, 90, 90, 90, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 90],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120],
[120, 120, 120, 120, 120, 120, 120, 120, 120, 120]];
////////////////////////////////////////////////////////////

// when there is any change in any selection, clear the result area
function OnAnySelectChangeClearResult() {
    $('input[type=radio]').each(function () {
        $(this).on("change", function () {
            $('#k2oResultSpan').text('');
        });
    });

    $('select').each(function () {
        $(this).on("change", function () {
            $('#k2oResultSpan').text('');
        });
    });
}

// on "calculate" button click, calculate and display the result
function OnCalculateBtnClick() {
    $("#calcBtn").click(function () {
        var cornPriceIndex = $('#cornPriceSelect').prop('selectedIndex'),
            kPriceIndex = $('#kPriceSelect').prop('selectedIndex');

        if ($("input[name='siRatio']:checked").val() === 'small') { // s/i ratio<3/5
            if ($("input[name='skLevel']:checked").val() === 'small') {
                $('#k2oResultSpan').text(ss[cornPriceIndex][kPriceIndex]);
            }
            else if ($("input[name='skLevel']:checked").val() === 'big') {
                $('#k2oResultSpan').text(sb[cornPriceIndex][kPriceIndex]);
            }
            else {
                $('#k2oResultSpan').text('0');
            }
                
        }
        else { // s/i ratio>=3/5
            if ($("input[name='bkLevel']:checked").val() === 'small') {
                $('#k2oResultSpan').text(bs[cornPriceIndex][kPriceIndex]);
            }
            else if ($("input[name='bkLevel']:checked").val() === 'big') {
                $('#k2oResultSpan').text(bb[cornPriceIndex][kPriceIndex]);
            }
            else {
                $('#k2oResultSpan').text('0');
            }
                
        }
    });
}


// 
function OnSiRatioChange() {
    SiRatioResponse();
    $("input[name='siRatio']").on("change", function () {
        SiRatioResponse();
    });
}

// 
function SiRatioResponse() {
    if ($("input[name='siRatio']:checked").val() === 'small') {
        $("#smallKDiv").show();
        $("#bigKDiv").hide();
    }
    else {
        $("#smallKDiv").hide();
        $("#bigKDiv").show();
    }
}


