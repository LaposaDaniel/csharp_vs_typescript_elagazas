"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write('<html lang="hu"><head>'
            + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
            + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
            + "<title>Házi</title></head>");
        res.write("<body>");
        const query = url.parse(req.url, true).query;
        const xKezd = query.x === undefined ? "1" : query.x;
        const a = query.a === undefined ? 1 : parseInt(query.a, 10);
        const b = query.b === undefined ? 5 : parseInt(query.b, 10);
        let x = parseInt(xKezd, 10);
        res.write("<h1>Szelekció (elágazás)</h1>");
        res.write("<h3>Az egyágú elágazás</h3>");
        // res.write("<p>x értéke = " +
        //     "<input type = 'number' name='x' " +
        //     "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
        //     `value='${x}' onChange = 'this.form.submit();'><br>`);
        res.write('<input type="text" name="x" value="1" onChange = "this.form.submit()"><br>');
        res.write("Szám abszolút értéke<br>"
            + `</p>`);
        if (x < 0) {
            x = -x;
        }
        res.write(`|x| = ${x}`);
        res.write("<h3>A kétágú elágazás</h3>");
        res.write("Páros-Páratlan meghatározó<br>");
        res.write("<p>a értéke = " +
            "<input type = 'number' name= 'a' " +
            "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
            `value='${a}' onChange = 'this.form.submit();'><br>` + `</p>`);
        if (a % 2 === 0) {
            res.write("A szám páros");
        }
        else {
            res.write("A szám páratlan");
        }
        res.write("<h3>A többágú elágazás</h3>");
        res.write("<p>b értéke = " +
            "<input type = 'number' name= 'b' " +
            "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
            `value='${b}' onChange = 'this.form.submit();'><br>`);
        res.write("Osztályzat<br>"
            + "</p>");
        switch (b) {
            case 1:
                res.write("Elégtelen<br>");
                break;
            case 2:
                res.write("Elégséges<br>");
                break;
            case 3:
                res.write("Közepes<br>");
                break;
            case 4:
                res.write("Jó<br>");
                break;
            case 5:
                res.write("Jeles<br>");
                break;
            default:
                res.write("Nem osztályzat!<br>");
                break;
        }
        res.end("</body></html>");
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map