import * as fs from "fs";
import * as http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";

export default class Content {

    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        res.write("<!DOCTYPE html>");
        res.write('<html lang="hu"><head>'
            + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
            + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
            + "<title>Házi</title></head>");
        res.write("<form style='font-family: Courier; font-size:16px; background-color: LightGray;'>");
        res.write("<body>");
        const query: ParsedUrlQuery = url.parse(req.url, true).query;
        const xKezd: string = query.x === undefined ? "1" : (query.x as string);
        const a: number = query.a === undefined ? 1 : parseInt((query.a as string), 10);
        const b: number = query.b === undefined ? 5 : parseInt((query.b as string), 10);

        let x: number = parseInt(xKezd, 10);
        res.write("<h1>Szelekció (elágazás)</h1>");
        res.write("<h3>Az egyágú elágazás</h3>");
        res.write("<p>x értéke = " +
            "<input type = 'number' name='x' " +
            "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
            `value='${x}' onChange = 'this.form.submit();'><br>`);
        res.write("Szám abszolút értéke<br>"
            + `</p>`);
        if (x < 0) { x = - x; }
        res.write(`|x| = ${x}`);

        res.write("<h3>A kétágú elágazás</h3>");
        res.write("Páros-Páratlan meghatározó<br>");
        res.write("<p>a értéke = " +
            "<input type = 'number' name= 'a' " +
            "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
            `value='${a}' onChange = 'this.form.submit();'><br>` + `</p>`);
        if (a % 2 === 0) { res.write("A szám páros"); } else { res.write("A szám páratlan"); }

        res.write("<h3>A többágú elágazás</h3>");
        res.write("<p>b értéke = " +
            "<input type = 'number' name= 'b' " +
            "style= 'font-family:Courier; font-size: inherit; background-color: LightBlue;'" +
            `value='${b}' onChange = 'this.form.submit();'><br>`);
        res.write("Osztályzat<br>"
            + "</p>");
        switch (b) {
            case 1: res.write("Elégtelen<br>"); break;
            case 2: res.write("Elégséges<br>"); break;
            case 3: res.write("Közepes<br>"); break;
            case 4: res.write("Jó<br>"); break;
            case 5: res.write("Jeles<br>"); break;
            default: res.write("Nem osztályzat!<br>"); break;
        }
        res.write("</form>");
        res.end("</body></html>");
        res.end();
    }
}
