var Catalogue_of_risks = {};
var riskRecords = [];
var myForm=document.form1
var riskName;
var riskSource;
var riskType;
var riskImpact;
var riskProbability;
var riskDescriptionArea;
var riskPreviousExperience;


function Risk(name, source, type, impact, likelihood, assurance)
{
  this.risk_name=name;
  this.risk_source=source;
  this.risk_type=type;
  this.risk_impact=impact;
  this.risk_likelihood=likelihood;
}

function addingRisk() {

//Sprawdzanie czy nazwa ryzyka została wprowadzona
if(myForm.risk_name.value) {
  riskName=myForm.risk_name.value;
  document.getElementById('Attention').innerHTML="";
  myForm.risk_name.value="";
} else {
  document.getElementById('Attention').innerHTML="INPUT NAME OF THE RISK";
  return;
}

//Przypisanie zmiennej wartości dotyczącej źródła ryzyka
var riskSourcesCatalogue=myForm.risk_source;
for(var index=0; index<riskSourcesCatalogue.length; index++){
  if (riskSourcesCatalogue[index].checked) {
    riskSource=riskSourcesCatalogue[index].value;
    break;
  }
}

//Przypisanie zmienne wartości dotyczącej typu ryzyka
var riskTypeCatalogue=myForm.risk_type;
for(var index=0; index<riskTypeCatalogue.length; index++) {
  if (riskTypeCatalogue[index].selected) {
    riskType=riskTypeCatalogue[index].value;
    break;
}
}

//Przypisanie zmiennej wartości z pola tekstowego dotyczącego opisu ryzyka
riskDescriptionArea=myForm.risk_description.value;
myForm.risk_description.value="";

//Przypisanie zmiennej wartości z pola tekstowego dotyczącego doświadczeie z ryzyka
riskPreviousExperience=myForm.risk_experience.value;
myForm.risk_experience.value="";

var name_of_risk={
  'RiskName': riskName,
  'RiskSource': riskSource,
  'RiskType': riskType,
  'RiskDescription':riskDescriptionArea,
  'RiskExperience' :riskPreviousExperience
};

riskRecords.push(name_of_risk);
console.log(riskRecords);

/*
var dl = (Object.keys(Catalogue_of_risks).length);
Risk_number='Risk'+dl;


Catalogue_of_risks[Risk_number]={
  'RiskName': riskName,
  'RiskSource': riskSource,
  'RiskType': riskType
}

console.log(Object.keys(Catalogue_of_risks).length);
console.log(Catalogue_of_risks);
console.log(JSON.stringify(Catalogue_of_risks));

*/

localStorage.setItem(riskRecords,JSON.stringify(riskRecords));
}

function loadingRisks() {

var records = localStorage.getItem(riskRecords);
console.log(JSON.parse(records));
}

document.getElementById("Saving").addEventListener('click', addingRisk);
document.getElementById("Loading").addEventListener('click', loadingRisks);
//document.getElementById("AddRisk").addEventListener('load', loadingRisks)
