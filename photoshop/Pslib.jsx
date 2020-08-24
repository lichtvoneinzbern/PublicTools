
// 7arg : string, float(int), float(int), float(int), float(int), int, string
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
