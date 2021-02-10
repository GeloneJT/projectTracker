function time() {
    var currentTime = moment().format("MMM Do, YYYY hh:mm:ss A");
    $("#time-display").text(currentTime);
}

    setInterval(time,1000);


var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInpitEl = $('#project-type-input');
var thourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');

function printProjectData(name, type, hourlyRate, dueDate) {
    var projectRowEl =$('<tr>');

    var projectNameTdEl = $('<td>').addClass('p-2').text(name);

    var projectTypeTdEl = $('<td>').addClass('p-2').text(type);
    
    var rateTdEl = $('<td>').addClass('p-2').text(hourlyRate);

    var dueDateTdEl = $('<td>').addClass('p-2').text(type);

    var daysToDate = moment(dueDate, 'MM/DD/YYY')



}