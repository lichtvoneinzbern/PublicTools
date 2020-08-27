// =====================================================================================
// create new document
// 7arg : string, float(int), float(int), float(int), float(int), int, string
// =====================================================================================
function Create_NewDoc (name, width, height, resolution, pixelScaleFactor, bit, profile){
    // init
    if ( name === undefined ) name = """new document""";
    if ( width === undefined ) width = 500.000000;
    if ( height === undefined ) height = 500.000000;
    if ( resolution === undefined ) resolution = 72.000000;
    if ( pixelScaleFactor === undefined ) pixelScaleFactor = 1.000000;
    if ( bit === undefined ) bit = 8;
    if ( profile === undefined ) profile = """sRGB IEC61966-2.1""";

    // set
    var idMk = charIDToTypeID( "Mk  " );
    var DESCall = new ActionDescriptor();
    var idNw = charIDToTypeID( "Nw  " );
    var DESCdocinfo = new ActionDescriptor();
    var idNm = charIDToTypeID( "Nm  " );
    DESCdocinfo.putString( idNm, name );
    var idartboard = stringIDToTypeID( "artboard" );
    DESCdocinfo.putBoolean( idartboard, false );
    var idMd = charIDToTypeID( "Md  " );
    var idRGBM = charIDToTypeID( "RGBM" );
    DESCdocinfo.putClass( idMd, idRGBM );
    var idWdth = charIDToTypeID( "Wdth" );
    var idRlt = charIDToTypeID( "#Rlt" );
    DESCdocinfo.putUnitDouble( idWdth, idRlt, width );
    var idHght = charIDToTypeID( "Hght" );
    var idRlt = charIDToTypeID( "#Rlt" );
    DESCdocinfo.putUnitDouble( idHght, idRlt, height );
    var idRslt = charIDToTypeID( "Rslt" );
    var idRsl = charIDToTypeID( "#Rsl" );
    DESCdocinfo.putUnitDouble( idRslt, idRsl, resolution );
    var idpixelScaleFactor = stringIDToTypeID( "pixelScaleFactor" );
    DESCdocinfo.putDouble( idpixelScaleFactor, pixelScaleFactor );
    var idFl = charIDToTypeID( "Fl  " );
    var idFl = charIDToTypeID( "Fl  " );
    var idWht = charIDToTypeID( "Wht " );
    DESCdocinfo.putEnumerated( idFl, idFl, idWht );
    var idDpth = charIDToTypeID( "Dpth" );
    DESCdocinfo.putInteger( idDpth, bit );
    var idprofile = stringIDToTypeID( "profile" );
    DESCdocinfo.putString( idprofile, profile );
    var idGdes = charIDToTypeID( "Gdes" );
    var list = new ActionList();
    DESCdocinfo.putList( idGdes, list );

    // exe
    var idDcmn = charIDToTypeID( "Dcmn" );
    DESCall.putObject( idNw, idDcmn, DESCdocinfo );
    var idDocI = charIDToTypeID( "DocI" );
    DESCall.putInteger( idDocI, 244 );
    executeAction( idMk, DESCall, DialogModes.NO );
}

// =====================================================================================
// Save active document as your specified name
// =====================================================================================
function SaveActiveDocumentAsNewName(dir, fName){
    var idsave = charIDToTypeID( "save" );
    var DESC = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
    var desc85 = new ActionDescriptor();
    var idPhtthree = charIDToTypeID( "Pht3" );
    DESC.putObject( idAs, idPhtthree, desc85 );

    var idIn = charIDToTypeID( "In  " );
    DESC.putPath( idIn, new File( dir + "/" + fName + ".psd" ) );

    var idDocI = charIDToTypeID( "DocI" );
    DESC.putInteger( idDocI, 367 );

    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveBegin = stringIDToTypeID( "saveBegin" );
    DESC.putEnumerated( idsaveStage, idsaveStageType, idsaveBegin );

    executeAction( idsave, DESC, DialogModes.NO );
}

// =====================================================================================
// select layer by layerID
// =====================================================================================
function Set_SelectLayers(id){
	//set
	var ref = new ActionReference();
    ref.putIdentifier(stringIDToTypeID("layer"), id);

	//execute
    var desc = new ActionDescriptor();
    desc.putReference(stringIDToTypeID("null"), ref);
    desc.putBoolean(stringIDToTypeID("makeVisible"), false);
    executeAction(stringIDToTypeID("select"), desc, DialogModes.NO);
}

// =====================================================================================
// deselect any layers
// =====================================================================================
function Select_NoLayer(){
    var idselectNoLayers = stringIDToTypeID( "selectNoLayers" );
    var DESC = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref.putEnumerated( idLyr, idOrdn, idTrgt );
    DESC.putReference( idnull, ref );
    executeAction( idselectNoLayers, DESC, DialogModes.NO );
}

// =====================================================================================
// Open the file by referencing the path passed as an argument
// =====================================================================================
function Open_Directory(directory){
    var idOpn = charIDToTypeID( "Opn " );
    var DESC = new ActionDescriptor();
    var iddontRecord = stringIDToTypeID( "dontRecord" );
    DESC.putBoolean( iddontRecord, false );
    var idforceNotify = stringIDToTypeID( "forceNotify" );
    DESC.putBoolean( idforceNotify, true );
    var idnull = charIDToTypeID( "null" );
    DESC.putPath( idnull, new File( directory ) );
    var idDocI = charIDToTypeID( "DocI" );
    DESC.putInteger( idDocI, 208 );
    executeAction( idOpn, DESC, DialogModes.NO );
}

// =====================================================================================
// Change active document as an argument
// =====================================================================================
function Shift_ActiveDocument(shiftNum){
    var idslct = charIDToTypeID( "slct" );
    var DESC = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref = new ActionReference();
    var idDcmn = charIDToTypeID( "Dcmn" );
    ref.putOffset( idDcmn, shiftNum );
    DESC.putReference( idnull, ref );
    var idDocI = charIDToTypeID( "DocI" );
    DESC.putInteger( idDocI, 744 );
    executeAction( idslct, DESC, DialogModes.NO );
}

