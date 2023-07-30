import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-chart',
  templateUrl: './progress-chart.component.html',
  styleUrls: ['./progress-chart.component.css']
})
export class ProgressChartComponent implements OnInit, OnChanges {

  @Input() dataPoints: number[] = [];
  @Input() labels: string[] = [];

  circumference: number = 0;
  strokeOffset: any = 0;

  ngOnInit() {
    // Call updateCircleStyles when the component initializes
    this.updateCircleStyles();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataPoints']) {
      // Call updateCircleStyles when the data points change
      this.updateCircleStyles();
    }
  }

  private updateCircleStyles() {
    const radius = 40; // Adjust this value to control the size of the circle
    const circumference = 2 * Math.PI * radius;
    const progress = this.dataPoints.map((data) => data / 100);
    this.strokeOffset = progress.map((p) => circumference * (1 - p));
    this.circumference = circumference;
  }
}
