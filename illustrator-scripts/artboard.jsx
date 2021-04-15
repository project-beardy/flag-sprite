/**
 * Based on the script resizeArtboards_CS4andUp.jsx by Carlos Canto 11/4/12
 */

#target Illustrator

var OPTIONS = {
    width  : 720,
    height : 480
};

if (app.documents.length == 0) {
    alert("there are no open documents");
}
else {
    var idoc  = app.activeDocument;
    var title = "Resize All Artboards";

    try {
        var width  = OPTIONS.width;
        var height = OPTIONS.height;

        for (i=0; i<idoc.artboards.length; i++) {
            var abBounds = idoc.artboards[i].artboardRect; // left, top, right, bottom

            var ableft   = abBounds[0];
            var abtop    = abBounds[1];
            var abwidth  = abBounds[2] - ableft;
            var abheight = abtop- abBounds[3];

            var abctrx   = abwidth / 2 + ableft;
            var abctry   = abtop - abheight / 2;

            var ableft   = abctrx - width  / 2;
            var abtop    = abctry + height / 2;
            var abright  = abctrx + width  / 2;
            var abbottom = abctry - height / 2;

            idoc.artboards[i].artboardRect = [ableft, abtop, abright, abbottom];
        }

      var doc = app.activeDocument;
      if (app.documents.length>0) {
        doc.selectObjectsOnActiveArtboard();
        app.executeMenuCommand("group");
      }

      var docw = idoc.width;

                    var doch = idoc.height;

                    var activeAB = idoc.artboards[idoc.artboards.getActiveArtboardIndex()]; // get active AB

                    docLeft = activeAB.artboardRect[0];

                    docTop = activeAB.artboardRect[1];

                    // get selection bounds

                    var sel = idoc.selection[0];

                    var selVB = sel.visibleBounds;

                    var selVw = selVB[2]-selVB[0];

                    var selVh = selVB[1]-selVB[3];

                    var selGB = sel.geometricBounds;

                    var selGw = selGB[2]-selGB[0];

                    var selGh = selGB[1]-selGB[3];

                    // get the difference between Visible & Geometric Bounds

                    var deltaX = selVw-selGw;

                    var deltaY = selVh-selGh;

                    sel.width = docw-deltaX; // width is Geometric width, so we need to make it smaller...to accomodate the visible portion.

                    sel.height = doch-deltaY;

                    sel.top = docTop; // Top is actually Visible top

                    sel.left = docLeft; // dito for Left

    }
    catch(e) {
        alert(e.message);
        /** Exist gracfully for now */
    }
}
