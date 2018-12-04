import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cronometro-angular-lab";

  mensaje = "";

  actualizar(t) {
    this.mensaje = t + "(se actuliza cada 10 segundos)";
  }
}
