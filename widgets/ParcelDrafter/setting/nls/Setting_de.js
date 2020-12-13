// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Festlegen",selectLabel:"Ausw\u00e4hlen",selectLayerLabel:"Flurst\u00fcck-Layer ausw\u00e4hlen",selectLayerHintText:'Hinweis: Verwenden Sie die Schaltfl\u00e4che "Festlegen", um das Flurst\u00fcckpolygon und dessen zugeh\u00f6rigen Linien-Layer auszuw\u00e4hlen.',layerSelector:{selectedLayerNotHavingRelatedLayer:"Der ausgew\u00e4hlte Polygon-Layer weist keinen g\u00fcltigen zugeh\u00f6rigen Layer auf."},parcelLineLayer:{selectLayerLabel:"Zugeh\u00f6rigen Linien-Layer ausw\u00e4hlen",
layerSettingTabLabel:"Flurst\u00fcck-Layer",attributeSettingTabLabel:"Attributeinstellungen",advancedSettingTabLabel:"Erweiterte Einstellungen",selectLayerHintText:"Hinweis: Verwenden Sie diese Einstellungen, um COGO-Werte im Flurst\u00fccklinien-Layer zu speichern.",selectFieldLegendLabel:"W\u00e4hlen Sie Felder aus, um COGO-Werte im Flurst\u00fccklinien-Layer zu speichern.",bearingFieldLabel:"Peilung",chordLengthFieldLabel:"Sehnenl\u00e4nge",distanceFieldLabel:"Abstand",sequenceIdFieldLabel:"Sequenz-ID",
radiusFieldLabel:"Radius",foreignKeyFieldLabel:"Fremdschl\u00fcssel",arcLengthFieldLabel:"Bogenl\u00e4nge",lineTypeFieldLabel:"Linientyp",parcelPointSymbolLabel:"Flurst\u00fcck-Punktsymbol",parcelPointSymbolHintText:"Hinweis: Wird verwendet, um Punktsymbole f\u00fcr den Linienursprung anzuzeigen.",startOrRotationSymbolLabel:"Punktsymbol f\u00fcr Starten und Drehen",startOrRotationSymbolHintText:"Hinweis: Wird verwendet, um das Punktsymbol f\u00fcr Starten und Drehen anzuzeigen.",symbolPickerPreviewText:"Vorschau",
selectLineLayerLabel:"Linien-Layer ausw\u00e4hlen"},parcelPolygonLayer:{selectPolygonLayerLabel:"Polygon-Layer ausw\u00e4hlen",selectPolygonLayerHintText:"Hinweis: Verwenden Sie den ausgew\u00e4hlten Flurst\u00fcckpolygon-Layer.",selectFieldLegendLabel:"Felder zum Speichern von Angaben zur Koordinatengeometrie ausw\u00e4hlen",parcelNameLabel:"Flurst\u00fccksname",rotationLabel:"Drehung",planNameLabel:"Planname",scalingLabel:"Skalierung",documentTypeLabel:"Dokumenttyp",miscloseRatioLabel:"Abschlussfehler-Verh\u00e4ltnis",
statedAreaLabel:"Angegebene Fl\u00e4che",miscloseDistanceLabel:"Abschlussfehler-Entfernung",selectPolygonLayerLabelPopUp:"Polygon-Layer ausw\u00e4hlen",honorSettingRbLabel:"Pop-up-Einstellungen der Webkarte",customSettingsRbLabel:"Benutzerdefinierte Einstellungen",display:"Anzeige",edit:"Bearbeiten",editpageName:"Name",actions:"Aktionen",editpageAlias:"Alias",titleLabel:"Abschnittstitel"},lineTypesTable:{lineTypeLabel:"Linientyp",valueLabel:"Wert",symbolLabel:"Symbol",connectionLineLabel:"Verbindungslinien",
boundaryLineLabel:"Grenzlinie"},closureSetting:{snappingLayerLabel:"Fang-Layer",snappingBtnLabel:"Festlegen",snappingLayerHintText:"Hinweis: W\u00e4hlen Sie Layer aus, an denen Flurst\u00fcckslinien gefangen werden.",miscloseDistanceLabel:"Abschlussfehler-Entfernung",miscloseDistanceHintText:"Hinweis: Legen Sie die Abschlussfehler-Entfernung und ihre Einheiten fest.",miscloseRatioLabel:"Abschlussfehler-Verh\u00e4ltnis",miscloseRatioHintText:"Hinweis: Legen Sie das Abschlussfehler-Verh\u00e4ltnis fest.",
snappingToleranceLabel:"Fangtoleranz",pixelLabel:"Pixel",snappingToleranceHintText:"Hinweis: Legen Sie die Fangtoleranz fest.",selectLayerLabel:"Layer ausw\u00e4hlen"},errorMsg:{bearingFieldErrMsg:"Ung\u00fcltiges Peilungsfeld",chordLengthErrMsg:"Ung\u00fcltige Sehnenl\u00e4nge",distanceFieldErrMsg:"Ung\u00fcltige Entfernung",sequenceIdFieldErrMsg:"Ung\u00fcltige Sequenz-ID",radiusFieldErrMsg:"Ung\u00fcltiger Radius",foreignKeyFieldErrMsg:"Ung\u00fcltiger Fremdschl\u00fcssel",arcLengthFieldErrMsg:"Ung\u00fcltige Bogenl\u00e4nge",
lineTypeFieldErrMsg:"Ung\u00fcltiger Linientyp",parcelNameFieldErrMsg:"Ung\u00fcltiges Flurst\u00fccksnamensfeld",planNameFieldErrMsg:"Ung\u00fcltiges Plannamensfeld",scaleFieldErrMsg:"Ung\u00fcltiges Ma\u00dfstabsfeld",documentTypeFieldErrMsg:"Ung\u00fcltiges Feld f\u00fcr Dokumenttyp",miscloseRatioFieldErrMsg:"Ung\u00fcltiges Feld f\u00fcr Abschlussfehler-Verh\u00e4ltnis",statedAreaFieldErrMsg:"Ung\u00fcltiges Feld f\u00fcr angegebene Fl\u00e4che",miscloseDistanceFieldErrMsg:"Ung\u00fcltiges Feld f\u00fcr Abschlussfehler-Entfernung",
globalIdFieldErrMsg:"Der ausgew\u00e4hlte Polygon-Layer weist kein g\u00fcltiges 'esriFieldTypeGlobalID\u2018-Feld auf.",invalidPolylineLayer:"W\u00e4hlen Sie einen g\u00fcltigen Flurst\u00fcckspolylinien-Layer aus.",invalidPolygonLayer:"W\u00e4hlen Sie einen g\u00fcltigen Flurst\u00fcckspolygon-Layer aus.",invalidMiscloseDistance:"Geben Sie eine g\u00fcltige Abschlussfehler-Entfernung ein.",invalidSnappingTolerance:"Geben Sie eine g\u00fcltige Fangtoleranz ein.",invalidMiscloseRatio:"Geben Sie ein g\u00fcltiges Abschlussfehler-Verh\u00e4ltnis ein.",
selectDistinctLineTypes:"W\u00e4hlen Sie bei jedem Linientyp einen individuellen Wert aus.",invalidConnectionLineType:"Ung\u00fcltiger Verbindungslinienwert",invalidBoundaryLineType:"Ung\u00fcltiger Grenzlinienwert",selectDistinctPolylineFields:"W\u00e4hlen Sie f\u00fcr jeden COGO-Wert ein individuelles Feld aus.",selectDistinctPolygonFields:"W\u00e4hlen Sie f\u00fcr jede Angabe zur Koordinatengeometrie ein eigenes Feld aus."},_localized:{}}});