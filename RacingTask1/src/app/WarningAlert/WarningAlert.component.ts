import { Component } from "@angular/core";

@Component({
    selector:'warning-alert',
    template: `<p>This is a warning Alert !!!</p>`,
    /**templateUrl: './WarningAlert.component.html' */
    styles:[`p{
        padding : 15px;
        background-color: yellow;
        color: red;
        border: 2px solid red;
    }`]
})
export class WarningAlertComponent {


}