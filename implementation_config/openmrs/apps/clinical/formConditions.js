Bahmni.ConceptSet.FormConditions.rulesOverride  = {
     'Baseline, Treatment for drug-susceptible TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-susceptible TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB Registration ID Details")
        } else {
            conditions.disable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB Registration ID Details")
        }
        return conditions;
    },
    'Baseline, Treatment for drug-resistant TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-resistant TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB Registration ID Details")
        } else {
            conditions.disable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB Registration ID Details")
        }
        return conditions;
    },
    'Baseline, Start date of past TB treatment': function (formName, formFieldValues) {
        var conceptToEnable = ["Baseline, End date of past TB treatment", "Baseline, Type of past TB treatment", "Baseline, Past TB treatment regimen type", "Baseline, Past TB treatment drug regimen", "Baseline, Place treatment started"];
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Start date of past TB treatment'];
        if (conditionConcept) {
            conditions.enable = conceptToEnable
        } else {
            conditions.disable = conceptToEnable
        }
        return conditions;
    },
    'Treatment Facility Name': null,
    'TI, Did the patient start treatment': function (formName, formFieldValues) {
        var enStartDate = "TUBERCULOSIS DRUG TREATMENT START DATE";
        var enReason = "TI, Reason for not starting treatment";
        var txFacility = "TI, Treatment facility at start";
 
        var dateOfDeath = "TI, Date of death before treatment start";
        var conditionConcept = formFieldValues['TI, Did the patient start treatment'];
        if (conditionConcept == false) {
            return {enable: [enReason], disable: [enStartDate]}
        } else if (conditionConcept == true) {
            return {enable: [enStartDate, txFacility], disable: [enReason, dateOfDeath]}
        }
        else {
            return {disable: [enStartDate, txFacility, enReason, dateOfDeath]}
        }
    },
    'TI, Type of treatment regimen': null,
    'MTC, Principal reason for treatment incomplete': null,
    'MTC, Additional contributing reasons for less than 100% completeness': null,
    'HDS, Hospital name': null,
    'Bacteriology, Culture results': null
}
