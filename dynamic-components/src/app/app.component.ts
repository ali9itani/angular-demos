import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnInit
} from "@angular/core";
import { FirstAdComponent } from "./first-ad/first-ad.component";
import { SecondAdComponent } from "./second-ad/second-ad.component";
import { AdHostDirective } from "./ad-host.directive";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild(AdHostDirective, { static: true }) adHost: AdHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.runDemo();

    setInterval(() => {
      this.runDemo();
    }, 4000);
  }

  private runDemo() {
    this.loadFirstAd();
    setTimeout(() => {
      this.loadSecondAd();
    }, 2000);
    setTimeout(() => {
      this.clearAdHost();
    }, 3000);
  }

  private loadFirstAd() {
    this.injectComponentInAdHost(FirstAdComponent);
  }
  private loadSecondAd() {
    this.injectComponentInAdHost(SecondAdComponent);
  }

  private clearAdHost() {
    this.adHost.viewContainerRef.clear();
  }

  private injectComponentInAdHost(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    const viewContainerRef = this.adHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);

    // pass data
    componentRef.instance.data = { additionalMsg: "text from parent" };
  }
}
